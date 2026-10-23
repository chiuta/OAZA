// OAZA — service worker real + manifest: instalabilă și repornește offline.
// Rulare: node tests/offline.test.mjs [dir]   (pornește un server http local; localhost e context sigur)
import {createRequire} from "module"; import path from "path"; import fs from "fs"; import http from "http"; import {fileURLToPath} from "url";
const require = createRequire(process.env.PW_ROOT || "/opt/node-tools/package.json"); const {chromium} = require("playwright");
const HERE = path.dirname(fileURLToPath(import.meta.url)); const DIR = path.resolve(process.argv[2] || path.join(HERE, ".."));
let fails = 0, passes = 0; const check = (n, c, x) => { c ? (passes++, console.log("  ok  " + n)) : (fails++, console.log("FAIL  " + n + (x !== undefined ? "  -> " + JSON.stringify(x) : ""))); };
const MIME = {".html": "text/html; charset=utf-8", ".js": "text/javascript", ".webmanifest": "application/manifest+json", ".png": "image/png", ".json": "application/json"};
const srv = http.createServer((q, r) => { let u = decodeURIComponent(q.url.split("?")[0]); if (u.endsWith("/")) u += "index.html"; const f = path.join(DIR, u); if (!f.startsWith(DIR) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end("no"); } r.writeHead(200, {"content-type": MIME[path.extname(f)] || "application/octet-stream"}); fs.createReadStream(f).pipe(r); });
await new Promise(r => srv.listen(0, "127.0.0.1", r)); const base = "http://localhost:" + srv.address().port + "/";
const b = await chromium.launch({executablePath: process.env.CHROMIUM || "/opt/pw-browsers/chromium", args: ["--no-sandbox"]});
const ctx = await b.newContext({serviceWorkers: "allow"}); const p = await ctx.newPage(); const errs = []; p.on("pageerror", e => errs.push(String(e)));
await p.goto(base); await p.waitForTimeout(1500);
const reg = await p.evaluate(async () => { if (!("serviceWorker" in navigator)) return {no: true}; const r = await Promise.race([navigator.serviceWorker.ready, new Promise(r => setTimeout(() => r(null), 8000))]); return r ? {scope: r.scope, state: (r.active || {}).state} : {none: true}; });
check("1. service worker înregistrat și activ", !!reg.scope && reg.state === "activated", reg);
const man = await p.evaluate(async () => { const l = document.querySelector('link[rel=manifest]'); if (!l) return null; const j = await (await fetch(l.href)).json(); return {name: j.name, start: j.start_url, icons: (j.icons || []).length, display: j.display}; });
check("2. manifest valid cu icoane", man && man.name && man.icons >= 3 && man.display === "standalone", man);
await p.reload(); await p.waitForTimeout(1500);
check("3. pagina e controlată de SW după reload", await p.evaluate(() => !!navigator.serviceWorker.controller));
const cached = await p.evaluate(async () => { const ks = await caches.keys(); const k = ks.find(x => x.startsWith("fff-oaza-")); if (!k) return null; const c = await caches.open(k); return {key: k, idx: !!(await c.match("./index.html")), icon: !!(await c.match("./icon-192.png")), man: !!(await c.match("./manifest.webmanifest"))}; });
check("4. cache fff-oaza-<versiune> cu index + manifest + icoane", cached && cached.idx && cached.icon && cached.man, cached);
await ctx.setOffline(true); await srv.close();
const q = await ctx.newPage(); const e2 = []; q.on("pageerror", e => e2.push(String(e)));
let ok = false; try { await q.goto(base, {timeout: 15000}); await q.waitForTimeout(1500); ok = await q.evaluate(() => document.querySelectorAll("#cats .card, #cats a[href^=http]").length > 100); } catch (e) { ok = String(e).slice(0, 80); }
check("5. repornire OFFLINE (server oprit): catalogul se afișează", ok === true, ok);
check("6. 0 erori JS", errs.length === 0 && e2.length === 0, [errs, e2]);
await b.close(); console.log(`\n${passes} reușite, ${fails} eșuate`); process.exit(fails ? 1 : 0);
