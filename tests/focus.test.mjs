// Teste v2.0.0: mod Focus (respirație + pauză + ambient + jurnal local + programe personalizate). Rulează: node tests/focus.test.mjs
import {launch, check, summary, hOverflow, AXE} from "./_lib.mjs";
const AC_SPY = () => { const O = window.AudioContext; window.__ac = []; window.AudioContext = function () { const c = new O(); window.__ac.push(c); return c; }; };
const {browser, page, st} = await launch({init: AC_SPY, reducedMotion: "no-preference"});
await page.addInitScript({content: AXE});
await page.evaluate(() => localStorage.setItem("oaza-lang", "en")); await page.reload(); await page.waitForTimeout(500);
await page.clock.install({time: new Date("2026-10-26T10:00:00")});
await page.reload(); await page.waitForTimeout(300);
const run = async ms => { await page.clock.runFor(ms); };
const J = () => page.evaluate(() => JSON.parse(localStorage.getItem("oaza-focus-journal") || "[]"));

await page.click("#focusBtn");
check("panoul Focus se deschide (dialog modal)", await page.locator("#focusPanel.on").count() === 1 && (await page.getAttribute("#focusPanel", "aria-modal")) === "true");
const opts = await page.locator("#fProg option").allTextContents();
check("3 programe predefinite cu durată", opts.length === 3 && /3:00/.test(opts[0]) && /4:00/.test(opts[1]) && /5:00/.test(opts[2]), opts);
check("niciun sunet pornit înainte de Start", (await page.evaluate(() => window.__ac.length)) === 0);

// sesiune completă (mini, 180 s) cu ploaie
await page.selectOption("#fProg", "p-mini"); await page.selectOption("#fSound", "rain");
await page.click("#fStart"); await run(600);
check("Start: butoane Pauză/Oprește vizibile, programul blocat", await page.locator("#fPause").isVisible() && await page.locator("#fStop").isVisible() && await page.locator("#fStart").isHidden() && await page.locator("#fProg").isDisabled());
check("prima fază: Inspiră", (await page.textContent("#fCue")) === "Breathe in", await page.textContent("#fCue"));
check("sunet ambient pornit (AudioContext creat)", (await page.evaluate(() => window.__ac.length)) === 1);
await run(4000); check("după 4 s: Expiră", (await page.textContent("#fCue")) === "Breathe out", await page.textContent("#fCue"));
const rem1 = await page.textContent("#fTime");
check("timp rămas afișat", /Remaining: 2:5\d/.test(rem1), rem1);
await page.click("#fPause"); const remP = await page.textContent("#fTime"); await run(30000);
check("pauză: cronometrul stă pe loc", (await page.textContent("#fTime")) === remP);
check("buton devine Continuă", (await page.textContent("#fPause")) === "Resume");
await page.click("#fPause"); await run(5000);
check("după reluare timpul curge", (await page.textContent("#fTime")) !== remP);
await run(200000);
check("sesiune terminată: mesaj + formular jurnal", (await page.textContent("#fCue")) === "Session complete. Well done!" && await page.locator("#fEnd").isVisible());
check("după final controalele revin la Start", await page.locator("#fStart").isVisible() && await page.locator("#fStop").isHidden());
await page.selectOption("#fMoodSel", "4"); await page.fill("#fNote", "calm");
await page.click("#fSaveJ");
let j = await J();
check("intrare în jurnal: program, ~180 s, terminat, stare 4, notă", j.length === 1 && j[0].done === true && Math.abs(j[0].sec - 180) <= 1 && j[0].mood === 4 && j[0].note === "calm" && /Mini/.test(j[0].prog), j);
check("statistici jurnal afișate", /1 sessions · 3 min in total/.test(await page.textContent("#fJStats")), await page.textContent("#fJStats"));

// oprire timpurie (<15 s): nu se înregistrează
await page.selectOption("#fSound", "none");
await page.click("#fStart"); await run(5000); await page.click("#fStop");
check("oprire <15 s: fără formular și fără intrare", await page.locator("#fEnd").isHidden() && (await J()).length === 1);
// oprire după >15 s: parțial
await page.click("#fStart"); await run(20000); await page.click("#fStop");
check("oprire >15 s: formular, intrare parțială după „Sari peste”", await page.locator("#fEnd").isVisible());
await page.click("#fSkipJ"); j = await J();
check("intrare parțială salvată fără notă", j.length === 2 && j[1].done === false && !j[1].note && j[1].sec >= 19, j[1]);
check("sunet 'none': niciun AudioContext nou", (await page.evaluate(() => window.__ac.length)) === 1);

// program personalizat
await page.click("#fNewProg");
check("editor program deschis", await page.locator("#fEditor").isVisible());
await page.click("#fSaveProg");
check("nume gol refuzat", /Give the program a name/.test(await page.textContent("#toast")));
await page.fill("#fPName", "Scurt");
await page.fill("#fs0i", "2"); await page.fill("#fs0o", "2"); await page.fill("#fs0n", "3");
await page.click("#fAddPause"); await page.fill("#fs1s", "5"); await page.fill("#fs1x", "Întinde-te");
await page.click('[aria-label="Move step 2 up"]');
check("mutare pas: pauza urcă pe poziția 1", (await page.locator("#fSteps li strong").first().textContent()).includes("Pause"));
await page.click('[aria-label="Move step 2 up"]'); // breathing înapoi sus? (pasul 2 e acum respirația) 
await page.click("#fSaveProg");
const names = await page.locator("#fProg option").allTextContents();
check("programul personalizat apare în listă (durată 0:17)", names.length === 4 && /Scurt · 0:17/.test(names[3]), names);
check("salvat în localStorage", (await page.evaluate(() => JSON.parse(localStorage.getItem("oaza-focus-programs")))).length === 1);
await page.selectOption("#fProg", {index: 3}); await page.click("#fStart"); await run(500);
check("rulează programul propriu (Inspiră)", (await page.textContent("#fCue")) === "Breathe in" || /Stretch|Întinde/.test(await page.textContent("#fCue")), await page.textContent("#fCue"));
await run(20000);
check("program propriu terminat", (await page.textContent("#fCue")) === "Session complete. Well done!");
await page.click("#fSkipJ");
// durata maximă
await page.click("#fNewProg"); await page.fill("#fPName", "Lung"); await page.fill("#fs0i", "15"); await page.fill("#fs0o", "15"); await page.fill("#fs0n", "60");
await page.click("#fAddBreath"); await page.fill("#fs1i", "15"); await page.fill("#fs1o", "15"); await page.fill("#fs1n", "60");
await page.click("#fAddBreath"); await page.fill("#fs2i", "15"); await page.fill("#fs2o", "15"); await page.fill("#fs2n", "60");
await page.click("#fSaveProg");
check("program >60 min refuzat", /longer than 60/.test(await page.textContent("#toast")) && await page.locator("#fProg option").count() === 4);
await page.click("#fCancelProg");
// ștergere program
await page.selectOption("#fProg", {index: 3}); check("buton ștergere vizibil doar pentru programe proprii", await page.locator("#fDelProg").isVisible());
await page.click("#fDelProg"); check("program șters", await page.locator("#fProg option").count() === 3 && (await page.evaluate(() => JSON.parse(localStorage.getItem("oaza-focus-programs")).length)) === 0);

// editare preset → copie
await page.selectOption("#fProg", "p-box"); await page.click("#fEditProg");
check("editarea unui preset creează copie (nume cu *)", (await page.inputValue("#fPName")).endsWith("*"));
await page.click("#fCancelProg");

// jurnal: ștergere intrare și golire
await page.locator("#fJournalList button").first().click();
check("ștergere intrare din jurnal", (await J()).length === (j.length + 1) - 1 || (await J()).length < j.length + 1);
await page.click("#fJClear"); await page.locator("dialog.fff-dlg button").last().click(); await page.waitForTimeout(150);
check("golire jurnal cu confirmare", (await J()).length === 0 && /No sessions yet/.test(await page.textContent("#fJStats")));

// Escape oprește sesiunea
await page.click("#fStart"); await run(16000); await page.keyboard.press("Escape");
check("Escape închide panoul și oprește sesiunea", await page.locator("#focusPanel.on").count() === 0 && (await J()).length === 1 && (await J())[0].done === false);

// toate limbile: toate cheile prezente
const miss = await page.evaluate(() => { const ks = Object.keys(FOCUS_I18N.ro); const out = []; LANGS.forEach(l => ks.forEach(k => { if (!I18N[l][k]) out.push(l + ":" + k); })); return out; });
check("toate cheile Focus există în cele 8 limbi", miss.length === 0, miss);
await page.click("#focusBtn");
await page.selectOption("#langSel", "ro"); await page.waitForTimeout(200);
check("schimbarea limbii actualizează panoul deschis", (await page.textContent("#fStart")) === "Pornește" && /Mini-pauză/.test(await page.locator("#fProg option").first().textContent()));
await page.selectOption("#langSel", "en");
// a11y + mobil
const ax = await page.evaluate(async () => (await axe.run(document, {resultTypes: ["violations"]})).violations.map(v => v.id + ":" + v.nodes.map(n => n.target).join("|").slice(0, 100)));
check("axe fără încălcări cu panoul deschis", ax.length === 0, ax);
await page.setViewportSize({width: 375, height: 700}); await page.waitForTimeout(100);
check("fără depășire orizontală pe mobil", (await hOverflow(page)) <= 0);
const small = await page.evaluate(() => [...document.querySelectorAll("#focusPanel button,#focusPanel select,#focusPanel input")].filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height < 43.5; }).map(e => e.id || e.className));
check("controale Focus ≥44 px", small.length === 0, small);
check("fără erori JS/CSP", st.errs.length === 0 && (await page.evaluate(() => window.__csp.length)) === 0, [st.errs, await page.evaluate(() => window.__csp)]);
check("0 cereri de rețea", st.net.length === 0, st.net);
await browser.close(); summary();
