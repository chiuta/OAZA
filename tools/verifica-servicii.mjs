#!/usr/bin/env node
// Verificare periodică (manuală) a serviciilor listate în OAZĂ.
// Rulează DOAR pe calculatorul tău (nu face parte din pagina publicată):
//   node tools/verifica-servicii.mjs --list                 # doar listează serviciile extrase din index.html
//   node tools/verifica-servicii.mjs > raport.tsv           # verifică fiecare adresă (HTTP) și scrie un raport TSV
//   node tools/verifica-servicii.mjs --only=Jitsi           # doar serviciile al căror nume conține textul
// Ce verifică automat: starea HTTP, redirecționări către alt domeniu, timp de răspuns și prezența unor cuvinte
// care sugerează cont obligatoriu (sign in / log in / create account / autentificare). Euristică, NU dovadă:
// fiecare semnal trebuie confirmat manual în browser. Nu trimite date personale; face cereri GET către serviciile listate.
// Cerințe: Node 18+.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(join(here, '..', 'index.html'), 'utf8');
const a = html.indexOf('function defaultData()');
const b = html.indexOf('\n/* Sanitizare');
if (a < 0 || b < 0) { console.error('Nu am găsit defaultData() în index.html'); process.exit(2); }
const data = new Function('return (' + html.slice(a, b).replace(/^function defaultData\(\)\{return /, '(function(){return ').replace(/;\}\s*$/, ';})') + ')()')();
const items = data.categories.flatMap(c => c.items.map(i => ({ cat: c.name, ...i })));

const args = process.argv.slice(2);
const only = (args.find(x => x.startsWith('--only=')) || '').slice(7).toLowerCase();
const list = items.filter(i => !only || i.n.toLowerCase().includes(only));
if (args.includes('--list')) { for (const i of list) console.log([i.cat, i.n, i.u].join('\t')); console.error(list.length + ' servicii'); process.exit(0); }

const SIGNALS = /(sign[ -]?in|log[ -]?in|create (an )?account|register|autentific|conectează-te|înregistr)/i;
const TIMEOUT = 15000;
async function check(i) {
  const t0 = Date.now(); const ac = new AbortController(); const tm = setTimeout(() => ac.abort(), TIMEOUT);
  try {
    const r = await fetch(i.u, { redirect: 'follow', signal: ac.signal, headers: { 'user-agent': 'OAZA-link-check/1.0 (verificare manuala)' } });
    const body = (await r.text()).slice(0, 200000);
    const from = new URL(i.u).hostname.replace(/^www\./, ''), to = new URL(r.url).hostname.replace(/^www\./, '');
    const flags = [];
    if (!r.ok) flags.push('HTTP ' + r.status);
    if (from !== to) flags.push('domeniu schimbat -> ' + to);
    if (SIGNALS.test(body)) flags.push('text de tip cont/login (verifică manual)');
    return [i.cat, i.n, i.u, r.status, r.url === i.u ? '' : r.url, Date.now() - t0, flags.join('; ')];
  } catch (e) { return [i.cat, i.n, i.u, 'ERR', '', Date.now() - t0, String(e.name === 'AbortError' ? 'timeout' : e.message)]; }
  finally { clearTimeout(tm); }
}
console.log(['categorie', 'nume', 'url', 'status', 'url_final', 'ms', 'semnale'].join('\t'));
const queue = [...list]; const workers = Array.from({ length: 6 }, async () => {
  while (queue.length) { const i = queue.shift(); console.log((await check(i)).join('\t')); }
});
await Promise.all(workers);
