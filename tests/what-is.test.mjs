// 2.0.1: blocul „Ce este OAZĂ și ce conține?”; cifrele din text trebuie să coincidă cu datele.
import {launch, check, summary, hOverflow} from "./_lib.mjs";
const {browser, page, st} = await launch({w: 375, h: 800});
await page.waitForTimeout(600);
check("blocul există", await page.locator("#whatIs").count() === 1);
await page.click("#whatIs summary");
const txt = await page.locator("#whatIs").innerText();
const cards = await page.locator("#cats a[href^='http']").count();
const cats = await page.locator("#cats > *").count();
check("text în română cu 340 și 54", /340 de servicii în 54 de categorii/.test(txt), txt.slice(0, 200));
check("cifrele coincid cu cardurile afișate (340)", cards === 340, cards);
check("categorii afișate (54)", cats === 54, cats);
for (const l of ["en", "fr", "it", "es", "pt", "de", "hu"]) {
  await page.selectOption("#langSel", l); await page.waitForTimeout(150);
  const s = await page.locator("#whatIs summary").innerText();
  check("rezumat tradus: " + l, s.length > 8 && !/Ce este OAZĂ/.test(s), s);
}
check("fără defilare orizontală (375px)", (await hOverflow(page)) <= 0);
check("nicio cerere de rețea", st.net.length === 0, st.net);
check("fără erori", st.errs.length === 0, st.errs);
await browser.close(); summary();
