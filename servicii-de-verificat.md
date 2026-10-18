# Servicii de reverificat — OAZĂ

**Stare:** pagina descrie 340 de servicii externe din 54 de categorii. Aceste servicii nu aparțin autorului și nu am putut verifica online niciuna dintre afirmații: tot ce urmează este **neverificat la data de 2026-10-08** (data auditului). Autorul a verificat lista la 16 iunie 2026 (data afișată în pagină); orice afirmație de tip „fără cont / gratuit / fără urmărire / open-source” poate fi depășită.

În pagină, afirmațiile sunt atenuate acolo unde cunoștințele generale arătau un risc (reclame, cont pentru organizator, licențe proprii, instanțe nesigure). Notele de mai jos din cunoștințe generale (nu din verificare online) sunt **semnale de reverificat, nu fapte stabilite**; formulează cu prudență orice corectură publică.

**Actualizare 2026-10-18 (v1.1.1):** verificată aplicația (nu serviciile): 340 de servicii în 54 de categorii, toate adresele `https://` fără parametri, 0 cereri externe la încărcare, 0 erori JS/CSP la 1280 și 390 px, fără depășire orizontală, `fff-kit check` ok, buton Buy Me a Coffee unitar. Serviciile externe NU au fost reverificate online (sandbox fără acces la rețea); data din pagină rămâne 16 iunie 2026 până la rularea `node tools/verifica-servicii.mjs > raport.tsv` local.

**Actualizare 2026-10-11:** lista nu a fost reverificată în această rundă (fără acces la rețea pentru script); data din pagină rămâne 16 iunie 2026.

## 1. Cum se reverifică (periodic, de ex. la 3 luni)

1. Rulează local `node tools/verifica-servicii.mjs > raport.tsv` (Node 18+; nu face parte din pagina publicată). Scriptul verifică starea HTTP, redirecționările spre alt domeniu, timpul de răspuns și marchează paginile care conțin text de tip „sign in / create account”. E o euristică: semnalele se confirmă manual.
2. Pentru fiecare rând marcat deschide serviciul într-o fereastră privată și verifică: (a) se poate folosi funcția descrisă fără cont? (b) apar reclame sau fereastră de înregistrare? (c) politica de confidențialitate / termenii s-au schimbat? (d) adresa e încă cea oficială (domeniu preluat, redirecționare spre alt produs)?
3. Actualizează data din antetul paginii (`dateBadge`) numai după ce ai parcurs lista.
4. Pentru servicii eliminate sau schimbate, folosește editorul din pagină și apoi „descarcă acest fișier” (quine), sau modifică direct `defaultData()` în sursă.
5. Păstrează un jurnal scurt: data, ce s-a schimbat, ce s-a eliminat.

Verificări regulate suplimentare: (i) niciun link cu parametri `?utm`, `?ref` sau de afiliere (la audit: nu există, vezi mai jos); (ii) toate adresele `https://` (la audit: toate); (iii) domeniile plauzibile, fără typosquatting (la audit: nu am găsit domenii suspecte, dar am verificat doar scrierea, nu proprietarul).

## 2. Constatări automate la audit (din cod)

- 340 de servicii, 318 gazde distincte; toate adresele sunt `https://`; niciun parametru `?`/`#`, deci nici `utm`/`ref`/afiliere.
- Toate cardurile se deschid cu `target="_blank" rel="noopener noreferrer"`; pagina trimite `Referrer-Policy: no-referrer` (meta) și nu încarcă nicio resursă externă.
- Gazde repetate (intenționat sau nu): searx.be ×2, search.brave.com ×2, www.startpage.com ×2, www.mojeek.com ×2, wiby.me ×2, musiclab.chromeexperiments.com ×2 (Chrome Music Lab), trom.tf ×5, farside.link ×6, lichess.org ×2, archive.org ×5, www.openculture.com ×2, cimec.ro ×2. Căutarea (Căutare / Căutare liberă) are intrări duplicate cu descrieri diferite — armonizate unde se contraziceau.
- Afirmația din pagina de intrare originală („341 de servicii”) nu coincide cu pagina (340).

## 3. Prioritare (reverificare manuală)

Prioritate: **A** = risc reputațional/juridic sau afirmație probabil falsă; **B** = se schimbă des / de verificat; **C** = verificare de rutină.

| Pr. | Serviciu | Ce se reverifică și de ce |
|---|---|---|
| A | Jitsi Meet (meet.jit.si) | Din cunoștințe: instanța publică a cerut autentificare (cont Google/GitHub etc.) pentru organizatorul întâlnirii. Verifică dacă „fără cont” mai e adevărat; descrierea a fost deja atenuată. |
| A | Apel TROM | Descrierea publică un utilizator și o parolă comună („tromcall”). Confirmă că e intenționat public; dacă nu, scoate-le și/sau schimbă parola. Cinci carduri TROM (Hărți, Fișiere, Notițe, Apel, Cod QR) duc la aceeași adresă trom.tf: verifică dacă fiecare instrument există acolo. |
| A | Stirling PDF (stirlingpdf.io) | Din cunoștințe: instanța demo a proiectului a avut ecran de autentificare cu cont demo. Confirmă dacă merge fără cont; altfel mută sau elimină. |
| A | Museo (museo.app) | Serviciu puțin cunoscut; nu am putut confirma ce este. Dacă nu poți confirma proprietarul și funcția, elimină-l. |
| A | Public Domain Torrents / Public Domain Movie / Classic Cinema Online / Comic Book Plus | Risc de drepturi de autor: statutul „domeniu public” diferă de la țară la țară și site-urile pot lista lucrări neeliberate. Domenii vechi (.info etc.): verifică să nu fi fost preluate de terți. Decizie editorială a autorului: păstrezi sau elimini. |
| A | Invidious / Piped / Redlib / Quetre / Scribe / Nitter (prin farside.link) | Din cunoștințe: instanțele publice cad des (blocări, limite de cereri; Quetre părea abandonat). Farside alege o instanță terță: cererea trece prin operatorul ei. Verifică dacă farside.link încă funcționează și ce instanțe sunt active. |
| A | LMArena | Promptele pot fi stocate/publicate în scopuri de cercetare (din cunoștințe). Verifică termenii curenți și numele/domeniul actual (serviciul și-a schimbat identitatea de câteva ori). |
| A | VirusTotal | Fișierele încărcate sunt vizibile partenerilor serviciului (din cunoștințe). Verifică formularea termenilor curenți. |
| B | DuckDuckGo, Duck.ai | Verifică ce modele oferă Duck.ai acum (lista se schimbă) și dacă încă nu cere cont. |
| B | Brave Search, Startpage, Qwant, Mojeek | Verifică dacă afișează reclame, cine deține serviciul și declarațiile de confidențialitate actuale (Startpage: proprietar comercial din 2019, din cunoștințe; Qwant: surse de rezultate schimbate în timp). |
| B | SearXNG (searx.be) — apare de două ori | Instanță publică; poate fi lentă, limitată sau căzută. Alege o instanță stabilă din lista oficială searx.space sau scoate-o din motoarele de căutare din antet (ENGINES). |
| B | Perplexity, Phind, Craiyon, Hugging Face, Perchance AI | Serviciile AI își schimbă des cerința de cont, limitele și existența (Phind: verifică dacă mai funcționează în forma descrisă). |
| B | SimplyTranslate, Lingva | Frontend-uri pentru Google Translate: din cunoștințe, instanțele publice au fost adesea indisponibile. |
| B | 0x0.st, tlk.io, Board.net, Dontpad, Rentry, PrivateBin (privatebin.net) | Servicii mici/comunitare: verifică dacă încă există și dacă primesc încărcări. PrivateBin.net e instanța demo a proiectului. |
| B | CryptPad (cryptpad.fr) | Verifică limitele pentru utilizarea fără cont (spațiu, ștergere pentru inactivitate). |
| B | Photopea, remove.bg, PDF24, Coolors, Wolfram Alpha, Connected Papers, MarineTraffic, Windy, Ventusky, Windfinder, Windguru | Modele „freemium”: reclame, limite sau cont pentru funcții utile. Verifică ce se poate face fără cont. |
| B | Pixabay, unDraw, Unsplash, Pexels, Incompetech, Jamendo, Openverse, Wikimedia Commons, Smithsonian, The Met, NASA | Licențe: Pixabay/unDraw/Unsplash/Pexels au licențe proprii (nu CC). Incompetech: de regulă CC BY (atribuire). Verifică termenii. |
| B | Project Gutenberg, LibriVox, Standard Ebooks, Wikisource, Prelinger, Internet Archive | Domeniu public în SUA ≠ domeniu public peste tot. Textul din UI a fost atenuat; verifică dacă vrei să păstrezi formularea. |
| B | Mozilla Observatory (observatory.mozilla.org) | Din cunoștințe: serviciul a fost mutat în MDN (developer.mozilla.org/observatory); adresa veche probabil redirecționează. |
| B | Biblioteca Digitală Națională (digitool.bibnat.ro), RFI România, Europa Liberă România | Sisteme/servicii care ar fi putut fi mutate sau închise (finanțare, migrare). Verifică adresele; RFI și Europa Liberă nu sunt „radio-TV public din România”, deși sunt în categoria respectivă. |
| B | CalyxOS | Din cunoștințe: dezvoltarea ar fi încetinit/încetat. Verifică dacă proiectul e încă întreținut; altfel elimină. |
| B | Roland50 Studio, Heavens-Above, Sky-Map, Crab Fit, JSON Crack | Site-uri de campanie/proiecte mici sau care și-au schimbat modelul (JSON Crack → produs cu plan plătit). Verifică dacă încă merg fără cont. |
| B | Presa RO (Recorder, Rise Project, PressOne, G4Media, Scena9, Agerpres) | Afirmațiile de „independență” au fost scoase. Verifică dacă ai nevoie de selecție politică echilibrată; Agerpres e agenție de stat, în categoria „presă liberă”. |
| B | Linux Mint, Ubuntu, Debian, Fedora, openSUSE, Zorin, Pop!_OS, elementary | Verifică modelul de descărcare (donații cerute, ediții Pro plătite la Zorin, telemetrie opt-out la Ubuntu). |
| B | Firefox, Thunderbird | Telemetrie tehnică activată implicit (dezactivabilă): descrierea a fost atenuată. |
| C | muntealb.org | Site personal/necunoscut: confirmă adresa și conținutul. |
| C | weboas.is (în antet: „fostul weboas.is”) | Afirmația că ar fi „fost” nu a fost verificată. |
| C | Sănătate & prim-ajutor (MedlinePlus, NHS, Mayo, Cleveland Clinic, Red Cross, Fii Pregătit) | Verifică adresele profunde (ex. redcross.org/.../learn-first-aid, my.clevelandclinic.org/health) — se schimbă frecvent. |
| C | 2048 (play2048.co) | Din cunoștințe, nu e site-ul original (acela e gabrielecirulli.github.io/2048, MIT); play2048.co e o variantă comercială/cu reclame. Decide dacă îl înlocuiești cu originalul. |

## 4. Lista completă (340)

Coloana „Afirmații” arată ce promite descrierea curentă din pagină (detectat automat din text); toate sunt **neverificate la 2026-10-08**. Eticheta: `TROM` = serviciu al mișcării autorului; `local` = prelucrare în browser; `instabil`/`temp` = marcate de autor.


### Căutare

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| DuckDuckGo | https://duckduckgo.com |  | fără cont, fără urmărire | Căutare fără urmărire, fără cont. |
| SearXNG | https://searx.be |  | open-source | Metacăutare open-source care agregă zeci de motoare. |
| Brave Search | https://search.brave.com |  | fără cont | Motor cu index propriu, folosibil fără cont; poate afișa reclame. |
| Startpage | https://www.startpage.com |  | fără cont | Rezultate Google prin intermediar, fără cont; poate afișa reclame. |
| Mojeek | https://www.mojeek.com |  | — | Motor cu index propriu, independent. |
| Marginalia | https://marginalia-search.com |  | — | Caută în web-ul mic, lent și non-comercial. |
| Wiby | https://wiby.me |  | — | Pagini simple, ca pe vremuri. |
| Wikipedia | https://www.wikipedia.org |  | open-source | Enciclopedia liberă, în zeci de limbi. |

### Inteligență artificială

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Duck.ai ★ | https://duck.ai |  | fără cont, fără urmărire | Chat cu mai multe modele AI (lista se schimbă), fără cont; serviciul declară că anonimizează cererile. |
| LMArena | https://lmarena.ai |  | — | Compari și votezi modele AI. Atenție: promptele pot fi stocate și folosite sau publicate în scop de cercetare. |
| Perplexity | https://www.perplexity.ai |  | — | Răspunsuri cu surse citate; folosirea de bază nu cere cont, dar poate propune înregistrarea. |
| Phind | https://www.phind.com |  | — | Asistent pentru cod și căutare tehnică; disponibilitatea și cerința de cont s-au schimbat în timp — verifică. |
| Hugging Face | https://huggingface.co/spaces |  | — | Mii de demo-uri (Spaces) cu modele AI; unele cer cont sau au limite de utilizare. |
| Craiyon | https://www.craiyon.com |  | gratuit | Generează imagini din text; versiunea gratuită are reclame și limite. |
| Perchance AI | https://perchance.org/ai-text-to-image-generator |  | fără cont | Generator de imagini din text, fără cont; limitele pot varia. |

### Hărți, vreme & navigare

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| OpenStreetMap | https://www.openstreetmap.org |  | fără cont, open-source | Harta liberă a lumii, fără cont. |
| OpenTopoMap | https://opentopomap.org |  | — | Hărți topografice din date OSM. |
| OpenRouteService | https://maps.openrouteservice.org |  | — | Rute și direcții pe baza OSM. |
| Overpass Turbo | https://overpass-turbo.eu |  | — | Interoghează datele brute OpenStreetMap. |
| Windy | https://www.windy.com |  | — | Vreme vizuală, vânt și radar; poate afișa reclame, există și abonament Premium. |
| wttr.in | https://wttr.in |  | — | Vremea direct în browser sau consolă. |
| Open-Meteo | https://open-meteo.com |  | — | API de prognoză deschis, fără cheie. |
| Hărți TROM | https://trom.tf | trom | fără urmărire | Hartă trade-free, fără urmărire. |

### Traducere & limbă

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| SimplyTranslate | https://simplytranslate.org |  | — | Frontend alternativ pentru traducere; poate fi indisponibil. |
| Lingva | https://lingva.ml |  | — | Frontend alternativ pentru Google Translate; instanțele publice pot fi indisponibile. |
| DeepL | https://www.deepl.com/translator |  | fără cont | Traduceri fine; text scurt fără cont, cu limite. |
| LibreTranslate | https://libretranslate.com |  | open-source | Motor de traducere open-source; instanța oficială poate avea limite sau cere cheie API. |
| Wikționar | https://www.wiktionary.org |  | open-source | Dicționar liber, multilingv. |
| Tatoeba | https://tatoeba.org |  | — | Propoziții-exemplu în zeci de limbi. |
| Forvo | https://forvo.com |  | — | Pronunții înregistrate de vorbitori nativi; unele funcții cer cont. |

### Fișiere & transfer

_Notă în pagină: Nu trimite date sensibile prin servicii publice; un link de descărcare poate fi accesibil oricui îl are._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| PairDrop ★ | https://pairdrop.net |  | local/offline | Trimite fișiere între dispozitivele tale, local. |
| ToffeeShare | https://toffeeshare.com |  | fără cont | Transfer P2P între browsere, fără cont; verifică limitele curente. |
| file.pizza | https://file.pizza |  | — | Fișiere direct browser-la-browser. |
| 0x0.st | https://0x0.st |  | — | Încarcă un fișier din linia de comandă; fișierele sunt accesibile oricui are linkul. |
| Fișiere TROM | https://trom.tf | trom | — | Hosting criptat + suită office, trade-free. |

### Documente, notițe & pastebin

_Notă în pagină: Notițele necriptate de pe servicii publice pot fi citite de oricine cunoaște adresa; nu pune aici parole sau date personale._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| CryptPad ★ | https://cryptpad.fr |  | fără cont | Documente criptate end-to-end, colaborativ; poți lucra fără cont, cu limite de spațiu. |
| PrivateBin | https://privatebin.net |  | — | Note criptate care expiră singure (instanță demonstrativă a proiectului; pentru uz serios, alege o instanță de încredere). |
| Rentry | https://rentry.co |  | — | Markdown publicat instant la un URL public; editabil cu un cod de editare. |
| Dontpad | https://dontpad.com |  | — | Bloc-notes la un simplu URL — oricine cunoaște adresa îl poate citi și modifica. |
| Board.net | https://board.net |  | fără cont | Etherpad colaborativ, fără cont (conținutul e accesibil prin adresă). |
| Notițe TROM | https://trom.tf | trom | — | Notițe trade-free. |

### Cod & dezvoltare

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| CyberChef ★ | https://gchq.github.io/CyberChef/ | local | local/offline | „Briceagul” datelor — rulează complet local. |
| IT-Tools | https://it-tools.tech |  | — | Zeci de unelte mici pentru dezvoltatori, într-un loc. |
| regex101 | https://regex101.com |  | — | Testează și explică expresii regulate. |
| Compiler Explorer | https://godbolt.org |  | — | Vezi ce produce compilatorul, în timp real. |
| DevDocs | https://devdocs.io | local | local/offline | Documentație pentru sute de API-uri, offline. |
| Crontab Guru | https://crontab.guru |  | — | Înțelege și scrie expresii cron. |
| Can I use | https://caniuse.com |  | — | Ce funcție merge în ce browser. |
| Carbon | https://carbon.now.sh |  | — | Imagini frumoase cu fragmente de cod. |

### Date & diagrame

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| RAWGraphs | https://www.rawgraphs.io | local | — | Vizualizări din date direct în browser. |
| Datasette Lite | https://lite.datasette.io | local | local/offline | Explorează baze de date SQLite local. |
| Excalidraw | https://excalidraw.com |  | fără cont | Schițe și diagrame de mână, fără cont. |
| draw.io | https://app.diagrams.net |  | — | Diagrame tehnice (flux, rețea, UML). |
| Mermaid Live | https://mermaid.live |  | — | Diagrame din text, instant. |
| JSON Crack | https://jsoncrack.com/editor |  | — | Transformă JSON-ul în hartă vizuală. |

### Imagine, PDF & design

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Photopea ★ | https://www.photopea.com |  | fără cont, gratuit | Editor de imagini în browser, fără cont; versiunea gratuită afișează reclame. |
| Squoosh | https://squoosh.app | local | local/offline | Comprimă și convertește imagini, offline. |
| remove.bg | https://www.remove.bg |  | — | Scoate fundalul unei imagini; imaginea se încarcă pe serverele serviciului, iar rezoluția completă poate fi cu plată. |
| SVGOMG | https://jakearchibald.github.io/svgomg/ | local | — | Optimizează fișiere SVG. |
| VERT | https://vert.sh |  | open-source, local/offline | Convertor de fișiere open-source; verifică ce conversii rulează local și ce se trimite pe server. |
| PDF24 Tools | https://tools.pdf24.org |  | fără cont | Unelte PDF (unire, conversie), fără cont; fișierele se încarcă pe serverul serviciului. |
| Stirling PDF | https://stirlingpdf.io |  | open-source | Suită PDF open-source; instanță publică, poate cere autentificare sau poate fi indisponibilă. |
| Coolors | https://coolors.co |  | — | Generează palete de culori rapid. |

### Imagini libere & media CC

_Notă în pagină: Licențele diferă de la serviciu la serviciu și de la fișier la fișier; verifică licența și atribuirea cerută înainte de reutilizare._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Openverse ★ | https://openverse.org |  | — | Motor de căutare pentru imagini și sunete sub licențe deschise; verifică licența fiecărui fișier. |
| Unsplash | https://unsplash.com |  | fără cont, gratuit | Fotografii gratuite sub licența Unsplash (nu e CC0); descărcare fără cont. |
| Pexels | https://www.pexels.com |  | gratuit | Foto și video gratuite sub licența Pexels; atribuirea nu e obligatorie, dar citește restricțiile. |
| Pixabay | https://pixabay.com |  | — | Imagini, vectori și sunete sub licența proprie Pixabay (nu e Creative Commons; citește termenii). |
| Wikimedia Commons | https://commons.wikimedia.org |  | — | Milioane de fișiere media; licențele diferă de la fișier la fișier. |
| unDraw | https://undraw.co/illustrations |  | gratuit | Ilustrații gratuite, sub licența proprie unDraw (citește termenii). |

### Comunicare

_Notă în pagină: Apelurile, mesajele și e-mailurile trec prin serverele serviciilor; nu le folosi pentru informații sensibile._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Jitsi Meet ★ | https://meet.jit.si |  | fără cont | Apel video în grup; participanții intră fără cont, dar organizatorul poate fi nevoit să se autentifice. |
| Apel TROM | https://trom.tf | trom | — | Jitsi trade-free (user și parolă: tromcall). |
| Guerrilla Mail | https://www.guerrillamail.com | temp | — | E-mail temporar; mesajele pot fi citite de oricine cunoaște adresa — nu-l folosi pentru conturi importante. |
| tlk.io | https://tlk.io |  | fără cont | Cameră de chat la un simplu URL, fără cont; verifică dacă serviciul mai funcționează. |

### Video liber

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| SepiaSearch | https://sepiasearch.org |  | open-source | Caută în PeerTube — video liber, federat. |
| Invidious | https://farside.link/invidious | instabil | — | Frontend alternativ pentru YouTube (prin Farside). |
| Piped | https://farside.link/piped | instabil | — | Alt frontend pentru YouTube (prin Farside). |

### Audio & unelte

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Chrome Music Lab | https://musiclab.chromeexperiments.com |  | fără cont | Experimente muzicale, fără cont. |
| BeepBox | https://www.beepbox.co |  | — | Schițezi melodii în browser și le partajezi. |
| TwistedWave | https://twistedwave.com/online |  | — | Editor audio în browser. |
| mp3cut (123apps) | https://mp3cut.net |  | fără cont | Taie și convertește audio, fără cont. |
| Online Tone Generator | https://www.szynalski.com/tone-generator/ | local | — | Generează tonuri și frecvențe. |

### Muzică & radio liber

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Radio Garden ★ | https://radio.garden |  | — | Rotești globul și asculți radiouri din toată lumea. |
| SomaFM | https://somafm.com |  | fără cont | 30+ canale fără reclame, fără înregistrare. |
| myNoise | https://mynoise.net |  | — | Generatoare de zgomot și ambianțe sonore. |
| A Soft Murmur | https://asoftmurmur.com |  | — | Sunete de fond (ploaie, foc) de amestecat. |
| Free Music Archive | https://freemusicarchive.org |  | — | Muzică sub licențe Creative Commons. |
| Jamendo | https://www.jamendo.com |  | fără cont | Ascultă muzică independentă fără cont; descărcarea și licențierea pot cere cont. |
| Incompetech | https://incompetech.com |  | — | Muzică de descărcat, de regulă sub CC BY (cere atribuire); verifică licența piesei. |

### Jocuri libere

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Lichess ★ | https://lichess.org |  | fără cont | Șah online, fără cont, fără reclame. |
| Skribbl.io | https://skribbl.io |  | — | Desenezi și ghicești cu prietenii, instant. |
| PlayingCards.io | https://playingcards.io |  | — | Jocuri de cărți și de masă, cameră privată. |
| Gartic Phone | https://garticphone.com |  | — | „Telefonul fără fir” cu desene — petrecere. |
| 2048 | https://play2048.co |  | — | Puzzle clasic cu numere. |
| Internet Archive Arcade | https://archive.org/details/internetarcade |  | — | Mii de jocuri retro, jucabile în browser. |

### Știință, matematică & cer

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| PhET ★ | https://phet.colorado.edu |  | — | Simulări interactive de fizică, chimie, matematică. |
| Stellarium Web | https://stellarium-web.org |  | — | Planetariu în browser — cerul nopții. |
| Desmos | https://www.desmos.com/calculator |  | fără cont | Calculator grafic puternic, fără cont. |
| GeoGebra | https://www.geogebra.org |  | — | Geometrie, algebră și grafice interactive. |
| Wolfram Alpha | https://www.wolframalpha.com |  | — | Motor de calcul și cunoaștere; funcții avansate cu abonament. |
| Solar System Scope | https://www.solarsystemscope.com |  | — | Sistemul solar în 3D, în browser. |

### Cărți & lectură liberă

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Project Gutenberg ★ | https://www.gutenberg.org |  | — | Zeci de mii de cărți; domeniu public în SUA (în alte țări statutul poate diferi). |
| Standard Ebooks | https://standardebooks.org |  | gratuit | Ediții îngrijite ale unor clasice din domeniul public, gratuite. |
| LibriVox | https://librivox.org |  | — | Audiobooks din domeniul public, citite de voluntari. |
| Wikisource | https://wikisource.org |  | open-source | Biblioteca de texte-sursă libere. |
| DOAB | https://www.doabooks.org |  | — | Director de cărți academice cu acces deschis. |
| Internet Archive | https://archive.org |  | — | Cărți, audio, video și web istoric. |

### Știință & academic deschis

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| arXiv | https://arxiv.org |  | open-source | Articole științifice, acces liber. |
| DOAJ | https://doaj.org |  | — | Director de reviste cu acces deschis. |
| OpenAlex | https://openalex.org |  | — | Catalog deschis al lucrărilor științifice. |
| Semantic Scholar | https://www.semanticscholar.org |  | — | Căutare academică cu rezumate. |
| PubMed | https://pubmed.ncbi.nlm.nih.gov |  | gratuit | Literatura biomedicală, gratuit. |
| Connected Papers | https://www.connectedpapers.com |  | gratuit | Hărți de lucrări înrudite (număr limitat de grafuri gratuite; poate cere cont). |

### Învățare & referință

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Khan Academy | https://www.khanacademy.org |  | — | Lecții video la mai toate materiile. |
| MDN Web Docs | https://developer.mozilla.org |  | — | Referința standard pentru web și JS. |
| Stanford Encyclopedia | https://plato.stanford.edu |  | — | Enciclopedie de filosofie, riguroasă. |
| Wikibooks | https://www.wikibooks.org |  | open-source | Manuale libere, scrise colaborativ. |
| Wikiversity | https://www.wikiversity.org |  | open-source | Materiale și cursuri de învățare libere. |

### Confidențialitate & securitate

_Notă în pagină: Fișierele, adresele și e-mailurile trimise acestor servicii ajung la terți; citește politica fiecăruia._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Have I Been Pwned ★ | https://haveibeenpwned.com |  | — | Verifică dacă adresa ta de e-mail apare în scurgeri de date (introduci adresa pe site-ul serviciului). |
| VirusTotal | https://www.virustotal.com |  | — | Scanează un fișier sau link cu zeci de motoare; ce încarci poate fi văzut de parteneri ai serviciului — nu încărca fișiere private. |
| SSL Labs | https://www.ssllabs.com/ssltest/ |  | — | Testează configurația TLS a unui site (poți ascunde rezultatul din lista publică). |
| Mozilla Observatory | https://observatory.mozilla.org |  | — | Notează securitatea unui site. |
| Cover Your Tracks | https://coveryourtracks.eff.org |  | — | Cât de urmăribil e browserul tău (EFF). |
| Awesome Privacy | https://awesome-privacy.xyz |  | — | Director mare de unelte care-ți respectă datele. |

### Frontend-uri private

_Notă în pagină: Farside redirecționează către instanțe publice ale unor terți; cererile tale trec prin operatorul instanței, care nu poate fi verificat. Instanțele cad des._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Redlib | https://farside.link/redlib | instabil | — | Frontend alternativ pentru Reddit (prin Farside). |
| Quetre | https://farside.link/quetre | instabil | — | Frontend alternativ pentru Quora (prin Farside). |
| Scribe | https://farside.link/scribe | instabil | — | Frontend alternativ pentru Medium (prin Farside). |
| Nitter | https://farside.link/nitter | instabil | — | Frontend alternativ pentru X/Twitter (instanțe puține). |

### Scriere & cuvinte

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Hemingway Editor ★ | https://hemingwayapp.com |  | fără cont | Verifică lizibilitatea și stilul, fără cont. |
| LanguageTool | https://languagetool.org |  | fără cont, gratuit | Corector gramatical în 30+ limbi, fără login; limită de caractere în versiunea gratuită. |
| Slick Write | https://www.slickwrite.com |  | fără cont | Verificare de stil și gramatică, fără înregistrare. |
| OneLook | https://onelook.com |  | — | Dicționar invers: găsești cuvântul după sens. |
| RhymeZone | https://www.rhymezone.com |  | fără cont | Rime, sinonime și definiții, fără cont. |
| WordCounter | https://wordcounter.net |  | — | Numără cuvinte și caractere instant. |
| oTranscribe | https://otranscribe.com | local | fără cont, local/offline | Transcrii audio fără cont, totul local. |

### Cultură, artă & domeniu public

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Europeana ★ | https://www.europeana.eu |  | — | Milioane de obiecte culturale europene. |
| Smithsonian Open Access | https://www.si.edu/openaccess |  | — | Milioane de imagini și date, în mare parte sub CC0; verifică marcajul fiecărui obiect. |
| The Met Open Access | https://www.metmuseum.org/about-the-met/policies-and-documents/open-access |  | — | Sute de mii de opere cu acces deschis (CC0); verifică marcajul fiecărei opere. |
| Museo | https://www.museo.app |  | — | Caută în colecțiile deschise (Met, Smithsonian). |
| Public Domain Review | https://publicdomainreview.org |  | — | Comori din domeniul public, curate. |
| NASA Images | https://images.nasa.gov |  | — | Imagini și video din spațiu; în general fără drepturi de autor, vezi regulile NASA. |

### Date deschise & statistici

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Our World in Data ★ | https://ourworldindata.org |  | — | Date și grafice despre lume; de regulă sub CC BY, cu atribuire (datele terților pot avea alte condiții). |
| Gapminder | https://www.gapminder.org/tools/ |  | — | Bule animate despre sănătate și venit. |
| World Bank Open Data | https://data.worldbank.org |  | gratuit | Mii de indicatori globali, gratuit. |
| OECD Data | https://data.oecd.org |  | — | Statistici comparate între țări. |
| Eurostat | https://ec.europa.eu/eurostat |  | — | Statistici oficiale ale Uniunii Europene. |
| Wikidata | https://www.wikidata.org |  | open-source | Bază de cunoștințe liberă, structurată. |

### Playground-uri de cod

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Python Tutor ★ | https://pythontutor.com |  | — | Vezi execuția codului pas cu pas. |
| OneCompiler | https://onecompiler.com |  | fără cont | Rulează cod în multe limbaje, fără cont. |
| Programiz | https://www.programiz.com/python-programming/online-compiler/ |  | — | Compilator online prietenos pentru începători. |
| JSFiddle | https://jsfiddle.net |  | — | Laborator pentru HTML, CSS și JS. |
| SageMathCell | https://sagecell.sagemath.org |  | — | Matematică SageMath direct în browser. |
| W3Schools Try It | https://www.w3schools.com/tryit/ |  | — | Editor „încearcă singur” pentru web (site cu reclame). |

### Focus & timp

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Pomofocus ★ | https://pomofocus.io |  | fără cont | Cronometru Pomodoro, fără cont, fără install. |
| Marinara Timer | https://www.marinaratimer.com |  | — | Pomodoro clasic, partajabil prin link. |
| When2meet | https://www.when2meet.com |  | fără cont, open-source | Găsiți împreună un interval liber, fără cont. |
| Crab Fit | https://crab.fit |  | open-source | Alternativă open-source la When2meet. |
| time.is | https://time.is |  | — | Ora exactă oriunde în lume. |
| Online Stopwatch | https://www.online-stopwatch.com |  | — | Cronometre și temporizatoare în browser. |

### Educație deschisă (OER)

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| MIT OpenCourseWare ★ | https://ocw.mit.edu |  | fără cont, gratuit | 2.500+ cursuri MIT, gratuit, fără cont. |
| OpenStax | https://openstax.org |  | gratuit | Manuale universitare gratuite, recenzate. |
| LibreTexts | https://libretexts.org |  | — | Bibliotecă mare de manuale deschise. |
| Open Textbook Library | https://open.umn.edu/opentextbooks |  | — | Manuale deschise, recenzate de cadre didactice. |
| OER Commons | https://www.oercommons.org |  | — | Index de resurse educaționale deschise. |
| Open Culture | https://www.openculture.com |  | open-source | Cursuri, cărți și filme libere. |

### România: instituții & date publice

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| data.gov.ro ★ | https://data.gov.ro |  | — | Portal central de date publice deschise. |
| Monitorul Oficial | https://monitoruloficial.ro/e-monitor/ |  | gratuit | Partea I în format electronic, consultare gratuită (verifică condițiile pe site). |
| INS Tempo Online | https://statistici.insse.ro/tempo-online/ |  | fără cont | Statistici oficiale ale României, fără cont. |
| Legislația României | https://legislatie.just.ro |  | — | Acte normative la zi (legislatie.just.ro). |
| Portalul instanțelor | https://portal.just.ro |  | fără cont | Dosare și ședințe de judecată, fără cont. |
| Geoportal ANCPI | https://geoportal.ancpi.ro |  | — | Hărți cadastrale și ortofotoplanuri. |

### România: biblioteci digitale

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Dacoromanica ★ | https://www.digibuc.ro |  | — | Biblioteca Digitală a Bucureștilor: cărți și periodice vechi. |
| Biblioteca Digitală Națională | https://digitool.bibnat.ro |  | — | Patrimoniu scris digitizat (Biblioteca Națională a României). |
| BCU Cluj — digital | https://dspace.bcucluj.ro |  | — | Biblioteca digitală a Universității din Cluj. |
| Wikisource (RO) | https://ro.wikisource.org |  | open-source | Texte-sursă în română, libere. |
| LiterNet | https://editura.liternet.ro |  | gratuit | Cărți și reviste românești, gratuite. |
| BCU „Carol I” | https://www.bcub.ro |  | — | Colecțiile digitale ale bibliotecii din București. |

### România: presă liberă

_Notă în pagină: Selecție editorială a autorului, nu listă exhaustivă și nu o evaluare a independenței editoriale. Multe publicații folosesc reclame, cookie-uri sau abonamente._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Recorder ★ | https://recorder.ro |  | — | Platformă de investigații video. |
| Rise Project | https://www.riseproject.ro |  | — | Investigații jurnalistice. |
| PressOne | https://pressone.ro |  | — | Reportaje și analize. |
| G4Media | https://www.g4media.ro |  | — | Publicație online de știri și investigații. |
| Scena9 | https://www.scena9.ro |  | — | Jurnalism cultural. |
| Agerpres | https://www.agerpres.ro |  | — | Agenția națională de presă (instituție publică). |

### Cer, sateliți & UAP

_Notă în pagină: Raportările UAP sunt observații nevalidate științific; consultă și concluziile oficiale ale instituțiilor listate._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Heavens-Above ★ | https://heavens-above.com |  | — | Când vezi ISS și sateliți; hărți de cer. |
| N2YO | https://www.n2yo.com |  | — | Urmărești sateliți în timp real (ISS, Starlink). |
| NASA Worldview | https://worldview.earthdata.nasa.gov |  | — | Imagini satelitare aproape în timp real. |
| NASA Eyes | https://eyes.nasa.gov |  | — | Explorezi sistemul solar și misiunile în 3D. |
| Prognoză auroră (NOAA) | https://www.swpc.noaa.gov/products/aurora-30-minute-forecast |  | — | Unde se vede aurora, în 30 de minute. |
| AARO UAP Records | https://www.aaro.mil/UAP-Records/ |  | — | Arhiva AARO (Departamentul Apărării al SUA) despre fenomene aeriene neidentificate. |
| NUFORC | https://nuforc.org |  | — | Baza publică de raportări de fenomene aeriene. |
| NASA UAP | https://science.nasa.gov/uap/ |  | — | Studiul NASA despre fenomene neidentificate. |

### Software liber & Linux

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| TROM-Jaro ★ | https://tromjaro.com | trom | fără urmărire | Sistem de operare Linux trade-free, fără urmărire. |
| F-Droid | https://f-droid.org |  | fără cont, open-source | Magazin de aplicații Android libere, fără cont. |
| Free Software Directory | https://directory.fsf.org |  | open-source | Catalogul FSF de software liber. |
| AlternativeTo | https://alternativeto.net |  | open-source | Găsești alternative libere la orice program. |
| DistroWatch | https://distrowatch.com |  | — | Toate distribuțiile Linux, într-un loc. |
| PRISM Break | https://prism-break.org |  | — | Software care-ți respectă viața privată. |
| muntealb.org | https://muntealb.org |  | open-source | Pledoarie pentru software liber și limba română corectă. |

### Scriitori RO: limbă & dicționare

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| dexonline ★ | https://dexonline.ro |  | gratuit | Dicționarul explicativ al limbii române, gratuit. |
| ro-en.ro | https://ro-en.ro |  | fără cont | Dicționar englez-român / român-englez, fără cont. |
| Wikționar (RO) | https://ro.wiktionary.org |  | open-source | Dicționar liber, în limba română. |
| conjugare.ro | https://www.conjugare.ro |  | — | Conjugarea verbelor românești. |
| Wikicitat | https://ro.wikiquote.org |  | — | Citate celebre, în română. |

### Hărți meteo & seismologie RO

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| ANM ★ | https://www.meteoromania.ro |  | — | Vremea oficială în România (meteoromania.ro). |
| INFP | https://www.infp.ro |  | — | Institutul de Fizica Pământului: cutremure. |
| EMSC | https://www.emsc-csem.org |  | — | Cutremure recente în Europa, în timp real. |
| INHGA | https://www.inhga.ro |  | — | Hidrologie și avertizări de inundații. |
| Calitatea aerului | https://www.calitateaer.ro |  | — | Rețeaua națională, în timp real. |
| USGS Earthquakes | https://earthquake.usgs.gov |  | — | Cutremure în toată lumea, live. |

### Radio & TV publice RO

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Radio România ★ | https://www.radioromania.ro |  | — | Posturile publice, ascultare online. |
| Radio România Cultural | https://www.radioromaniacultural.ro |  | — | Cultură, literatură, idei. |
| Radio România Muzical | https://www.romania-muzical.ro |  | fără cont | Muzică clasică, fără cont. |
| TVR | https://www.tvr.ro |  | — | Televiziunea publică, transmisii online. |
| Europa Liberă România | https://romania.europalibera.org |  | gratuit | Știri și analize, gratuit. |
| RFI România | https://www.rfi.ro |  | — | Radio France Internationale, în română. |

### Muzee & patrimoniu RO

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Ghidul Muzeelor ★ | https://ghidulmuzeelor.cimec.ro |  | — | Peste 1000 de muzee și colecții din România. |
| cIMeC | https://cimec.ro |  | — | Bazele de date de patrimoniu cultural (INP). |
| RAN | https://ran.cimec.ro |  | — | Repertoriul Arheologic Național. |
| Clasate (patrimoniu) | https://clasate.cimec.ro |  | — | Inventarul bunurilor culturale clasate. |
| Tururi virtuale muzee | https://cimec.ro/patrimoniu-mobil/muzee-cu-tururi-virtuale-si-colectii-digitale-3d/ |  | — | Muzee din România de vizitat 3D, din browser. |
| Google Arts & Culture | https://artsandculture.google.com |  | — | Colecții de muzee din lume (și din România). |

### Hărți istorice

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| David Rumsey ★ | https://www.davidrumsey.com |  | — | Peste 100.000 de hărți istorice, de răsfoit și descărcat. |
| OldMapsOnline | https://www.oldmapsonline.org |  | — | Sute de mii de hărți vechi din marile arhive. |
| Mapire | https://mapire.eu |  | — | Hărți istorice ale Imperiului Habsburgic (Transilvania). |
| NYPL Map Warper | https://maps.nypl.org |  | — | Hărți istorice georeferențiate. |
| Euratlas | https://www.euratlas.net |  | — | Harta Europei, secol cu secol. |
| Library of Congress — Hărți | https://www.loc.gov/maps/ |  | — | Colecția de hărți a bibliotecii SUA. |

### Benzi desenate & SF

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Piskel ★ | https://www.piskelapp.com |  | fără cont, gratuit | Editor de pixel art, gratuit, fără cont. |
| Pixilart | https://www.pixilart.com |  | — | Desen, pixel art și benzi în browser. |
| MakeBeliefsComix | https://makebeliefscomix.com |  | fără cont | Creezi benzi desenate simple, fără cont. |
| Fantasy Name Generators | https://www.fantasynamegenerators.com |  | — | Nume SF și fantasy pentru personaje și lumi. |
| Donjon | https://donjon.bin.sh |  | — | Generatoare SF și fantasy: lumi, hărți, nume. |
| Comic Book Plus | https://comicbookplus.com |  | — | Benzi desenate care se declară din domeniul public (verifică statutul fiecărei lucrări). |

### Radiouri tematice

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Radio Paradise ★ | https://radioparadise.com |  | fără cont | Mix eclectic, fără reclame, fără cont. |
| FIP | https://www.fip.fr |  | — | Radio public francez: jazz, rock, muzica lumii. |
| NTS Radio | https://www.nts.live |  | — | Două canale live și mixuri din 80+ țări. |
| Nightride FM | https://nightride.fm |  | — | Synthwave și cyberpunk, 24/7. |
| Nightwave Plaza | https://plaza.one |  | — | Vaporwave 24/7, fără reclame. |
| Rainwave | https://rainwave.cc |  | — | Muzică din jocuri video; votezi piesele. |
| KEXP | https://www.kexp.org |  | — | Indie rock din Seattle, sesiuni live. |

### Muzică clasică liberă

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| IMSLP ★ | https://imslp.org |  | — | Partituri și înregistrări în domeniul public. |
| Musopen | https://musopen.org |  | gratuit | Înregistrări și partituri clasice gratuite. |
| Mutopia Project | https://www.mutopiaproject.org |  | open-source | Partituri libere, retipărite cu LilyPond. |
| CPDL (ChoralWiki) | https://www.cpdl.org |  | open-source | Mii de partituri corale libere. |
| Venice Classic Radio | https://www.veniceclassicradio.eu |  | fără cont | Radio de muzică clasică, fără cont. |
| Internet Archive — 78 RPM | https://archive.org/details/78rpm |  | — | Înregistrări vechi, în domeniu public. |

### Film în domeniu public

_Notă în pagină: Statutul de domeniu public diferă de la o țară la alta și unele site-uri pot lista lucrări care nu sunt libere; verifică drepturile înainte de redistribuire._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Internet Archive — Filme ★ | https://archive.org/details/feature_films |  | gratuit | Filme, scurtmetraje și film mut, gratuit. |
| Prelinger Archives | https://archive.org/details/prelinger |  | — | Mii de filme efemere (publicitare, educaționale, industriale), multe fără restricții de copyright. |
| Public Domain Movie | https://publicdomainmovie.org |  | fără cont | Filme clasice, pe genuri, fără cont (verifică statutul de domeniu public). |
| Open Culture — Filme | https://www.openculture.com/freemoviesonline |  | gratuit | Listă de filme gratuite, selectată de redacția Open Culture; verifică drepturile. |
| Classic Cinema Online | https://www.classiccinemaonline.com |  | — | Clasice de vizionat în browser (verifică statutul de domeniu public). |
| Public Domain Torrents | https://www.publicdomaintorrents.info |  | — | Filme care se declară din domeniul public, prin torrent (verifică statutul și sursa). |

### Hărți meteo marine

_Notă în pagină: Nu folosi aceste hărți ca unică sursă pentru navigație sau siguranță; consultă avertizările oficiale._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| earth.nullschool ★ | https://earth.nullschool.net |  | — | Vânt, valuri și curenți oceanici, animat. |
| Ventusky | https://www.ventusky.com |  | — | Vânt, valuri și radar; zeci de straturi. |
| Windfinder | https://www.windfinder.com |  | — | Vânt și valuri pentru navigație și surfing. |
| Windguru | https://www.windguru.cz |  | — | Prognoze de vânt și valuri pentru multe locuri. |
| OpenSeaMap | https://map.openseamap.org |  | open-source | Harta nautică liberă (geamanduri, faruri). |
| MarineTraffic | https://www.marinetraffic.com |  | — | Poziția navelor în timp real; multe funcții cer cont sau abonament. |

### Jocuri de logică

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Simon Tatham's Puzzles ★ | https://www.chiark.greenend.org.uk/~sgtatham/puzzles/ |  | — | 40 de jocuri de logică clasice, în browser. |
| Puzzle Baron — Logică | https://logic.puzzlebaron.com |  | — | Nonograme, sudoku și grile logice. |
| Web Sudoku | https://www.websudoku.com |  | fără cont | Sudoku nesfârșit, fără cont. |
| Nonograms.org | https://www.nonograms.org |  | gratuit | Picross / griddlers gratuite. |
| solitaire.org — Logică | https://www.solitaire.org/logic-puzzle-games/ |  | — | Puzzle-uri zilnice variate. |
| Lichess — Puzzle | https://lichess.org/training |  | fără cont | Probleme de șah, fără cont. |

### Fonturi libere

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Google Fonts ★ | https://fonts.google.com |  | open-source | Bibliotecă uriașă de fonturi open-source. |
| Fontshare | https://www.fontshare.com |  | gratuit | Fonturi calitative gratuite, editoriale. |
| Velvetyne | https://velvetyne.fr |  | open-source | Turnătorie libre, fonturi cu personalitate. |
| The League of Moveable Type | https://www.theleagueofmoveabletype.com |  | open-source | Fonturi open-source îngrijite. |
| Font Squirrel | https://www.fontsquirrel.com |  | gratuit | Fonturi selectate ca gratuite pentru uz comercial (verifică licența fiecăruia). |
| Bunny Fonts | https://fonts.bunny.net |  | fără urmărire | Alternativă la Google Fonts, cu promisiune de confidențialitate (bunny.net). |

### Programe libere esențiale

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| LibreOffice ★ | https://www.libreoffice.org |  | open-source | Suită office liberă (înlocuiește MS Office). |
| Firefox | https://www.mozilla.org/firefox/ |  | open-source | Navigator liber, cu protecție integrată împotriva urmăririi (colectează și telemetrie tehnică, dezactivabilă). |
| Thunderbird | https://www.thunderbird.net |  | open-source | Client de email liber. |
| GIMP | https://www.gimp.org |  | — | Editare foto (alternativă la Photoshop). |
| Inkscape | https://inkscape.org |  | — | Grafică vectorială (alternativă la Illustrator). |
| Krita | https://krita.org |  | — | Pictură digitală și ilustrație. |
| Blender | https://www.blender.org |  | — | Modelare 3D și animație. |
| Audacity | https://www.audacityteam.org |  | — | Editare și înregistrare audio. |
| Kdenlive | https://kdenlive.org |  | open-source | Montaj video liber. |
| VLC | https://www.videolan.org/vlc/ |  | — | Player media care redă aproape orice. |

### Distribuții Linux

_Notă în pagină: Alege după nevoi; verifică de pe site-ul oficial cum se descarcă și se verifică imaginea de instalare._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Linux Mint ★ | https://linuxmint.com |  | — | Prietenoasă, ideală pentru începători. |
| Ubuntu | https://ubuntu.com |  | — | Distribuție foarte răspândită, comunitate mare. |
| Debian | https://www.debian.org |  | open-source | Stabilă; depozitul principal conține doar software liber. |
| Fedora | https://fedoraproject.org |  | — | Software la zi, aproape de Red Hat. |
| openSUSE | https://www.opensuse.org |  | — | Variantă stabilă (Leap) și rolling (Tumbleweed). |
| Zorin OS | https://zorin.com/os/ |  | — | Aspect ca Windows/macOS, pentru tranziție. |
| Pop!_OS | https://pop.system76.com |  | — | Bună pentru NVIDIA și jocuri. |
| elementary OS | https://elementary.io |  | — | Desktop îngrijit, cu aspect apropiat de macOS. |

### Libertate digitală & licențe

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| GNU Project ★ | https://www.gnu.org |  | open-source | Filosofia software-ului liber și lista de licențe. |
| Free Software Foundation | https://www.fsf.org |  | open-source | Apără libertatea utilizatorilor de software. |
| FSFE | https://fsfe.org |  | — | Free Software Foundation Europe. |
| Open Source Initiative | https://opensource.org |  | — | Definiția open source și licențele aprobate. |
| Creative Commons | https://creativecommons.org |  | open-source | Licențe pentru a partaja și reutiliza liber opere. |
| Choose a License | https://choosealicense.com |  | — | Alegi licența potrivită pentru proiectul tău. |
| TLDRLegal | https://www.tldrlegal.com |  | — | Licențe explicate pe înțelesul tuturor. |
| SPDX License List | https://spdx.org/licenses/ |  | — | Lista standard de licențe software. |

### Cloud personal & self-hosting

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Nextcloud ★ | https://nextcloud.com |  | — | Cloud personal: fișiere, calendar, contacte, birotică. |
| Syncthing | https://syncthing.net |  | — | Sincronizare de fișiere, fără server central. |
| Jellyfin | https://jellyfin.org |  | open-source, local/offline | Server media liber, fără telemetrie (rulează pe serverul tău; conturile sunt locale). |
| Immich | https://immich.app |  | — | Backup de poze și video auto-găzduit, alternativă la Google Photos; proiect în dezvoltare activă — nu-l folosi ca unică copie de siguranță. |
| Navidrome | https://www.navidrome.org |  | — | Server personal de muzică (Subsonic). |
| Pi-hole | https://pi-hole.net |  | — | Blochezi reclame și urmărire în toată rețeaua. |
| Forgejo | https://forgejo.org |  | — | Găzduiești cod Git pe serverul tău. |
| YunoHost | https://yunohost.org |  | — | Server personal ușor, cu multe aplicații. |

### Căutare liberă & metacăutare

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| SearXNG ★ | https://searx.be | instabil | open-source | Metacăutare open-source; instanță publică, poate fi lentă sau indisponibilă. |
| Mojeek | https://www.mojeek.com |  | — | Index propriu, complet independent. |
| Brave Search | https://search.brave.com |  | fără urmărire | Motor cu index propriu; promite confidențialitate (declarația serviciului). |
| Startpage | https://www.startpage.com |  | fără urmărire | Rezultate Google prin intermediar; promite confidențialitate (declarația serviciului). |
| Qwant | https://www.qwant.com |  | fără urmărire | Motor european, axat pe confidențialitate. |
| Marginalia | https://search.marginalia.nu |  | — | Caută web-ul mic, non-comercial. |
| Wiby | https://wiby.me |  | — | Pagini simple, în stil web vechi. |

### Android liber & degooglizat

_Notă în pagină: Instalarea unui sistem alternativ poate șterge datele și poate afecta garanția sau aplicațiile bancare; urmează ghidurile oficiale și fă copii de siguranță._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| LineageOS ★ | https://lineageos.org |  | open-source | Android liber pentru sute de telefoane. |
| GrapheneOS | https://grapheneos.org |  | fără urmărire | Android orientat spre securitate și confidențialitate, pentru telefoane Pixel. |
| CalyxOS | https://calyxos.org |  | — | Android privat cu microG (verifică dacă proiectul este încă întreținut). |
| /e/OS — Murena | https://murena.io |  | — | Android degooglizat, gata de folosit. |
| Aurora Store | https://auroraoss.com |  | fără urmărire | Client alternativ pentru Google Play, cu conturi anonime. |
| NewPipe | https://newpipe.net |  | fără cont | Client Android neoficial pentru YouTube, fără reclame și fără cont. |

### Unelte pentru muzicieni

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Chrome Music Lab ★ | https://musiclab.chromeexperiments.com |  | fără cont | Experimente muzicale, fără cont. |
| Ableton Learning Music | https://learningmusic.ableton.com |  | — | Înveți ritm, melodie și armonie în browser. |
| The Online Metronome | https://theonlinemetronome.com |  | gratuit | Metronom, acordor și dronă, gratuit. |
| OnlineSequencer | https://onlinesequencer.net |  | — | Secvențiator muzical în browser. |
| Drumbit | https://drumbit.app |  | — | Automat de tobe; exporți WAV. |
| Roland50 Studio | https://roland50.studio |  | — | Instrumente Roland clasice, virtuale. |

### Hărți stelare & atlas ceresc

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Aladin Lite ★ | https://aladin.cds.unistra.fr/AladinLite/ |  | — | Atlas ceresc în browser, multe surse. |
| ESASky | https://sky.esa.int |  | fără cont | Cerul observat de misiunile spațiale, fără cont. |
| WorldWide Telescope | https://www.worldwidetelescope.org |  | — | Explorezi cerul în multe lungimi de undă. |
| Sky-Map | https://www.sky-map.org |  | — | Hartă interactivă a cerului. |
| In-The-Sky.org | https://in-the-sky.org |  | — | Ghidul cerului de la tine, în fiecare seară. |
| Legacy Survey Viewer | https://www.legacysurvey.org/viewer/ |  | — | Imagini detaliate ale cerului profund. |

### Sănătate & prim-ajutor

_Notă în pagină: Informații generale, nu înlocuiesc consultul medical. În caz de urgență sună la 112._

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| MedlinePlus ★ | https://medlineplus.gov |  | fără cont | Enciclopedie medicală de la NIH, fără cont. |
| NHS | https://www.nhs.uk |  | — | Ghid de sănătate de la sistemul public britanic. |
| Mayo Clinic | https://www.mayoclinic.org |  | — | Informații despre boli și prim-ajutor. |
| Cleveland Clinic | https://my.clevelandclinic.org/health |  | — | Sute de subiecte de sănătate, verificate. |
| Crucea Roșie — prim-ajutor | https://www.redcross.org/take-a-class/resources/learn-first-aid |  | — | Sfaturi pentru urgențe comune. |
| Fii Pregătit (DSU) | https://fiipregatit.ro |  | — | Prim-ajutor și pregătire pentru urgențe. |

### Utilitare & viteză

| Serviciu | Adresă | Etichetă | Afirmații de reverificat | Descriere în pagină |
|---|---|---|---|---|
| Cloudflare Speed | https://speed.cloudflare.com |  | fără cont | Testează viteza conexiunii, fără cont. |
| LibreSpeed | https://librespeed.org |  | fără cont, open-source | Speedtest open-source, fără cont. |
| Framadate | https://framadate.org |  | fără cont | Sondaje și programări, fără cont. |
| Cod QR TROM | https://trom.tf | trom | — | Generează coduri QR personalizate. |
| nologin.tools | https://nologin.tools |  | fără cont | Director de unelte fără cont (verificarea aparține autorilor directorului). |
| Director Trade-Free | https://directory.trade-free.org |  | — | Bunuri și servicii dăruite, din toată lumea. |
