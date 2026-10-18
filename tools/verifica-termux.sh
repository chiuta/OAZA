#!/data/data/com.termux/files/usr/bin/bash
# Verifică toate cele 340 de servicii din OAZĂ, direct din Termux.
# Rulare (o singură linie):
#   curl -sL https://raw.githubusercontent.com/chiuta/OAZA/main/tools/verifica-termux.sh | bash
# Opțional: doar anumite servicii →  ... | bash -s -- --only=Jitsi
set -u
echo "▶ OAZĂ — verificare servicii ($(date '+%Y-%m-%d %H:%M'))"
for p in nodejs git; do
  command -v "${p/nodejs/node}" >/dev/null 2>&1 || { echo "… instalez $p"; pkg install -y "$p" >/dev/null 2>&1 || { echo "✗ nu pot instala $p (rulează: pkg update)"; exit 1; }; }
done
D="$HOME/OAZA"
if [ -d "$D/.git" ]; then git -C "$D" pull -q origin main || { echo "✗ git pull a eșuat"; exit 1; }
else git clone -q https://github.com/chiuta/OAZA.git "$D" || { echo "✗ git clone a eșuat"; exit 1; }; fi
cd "$D" || exit 1
OUT="$D/raport-$(date +%Y%m%d).tsv"
echo "… verific serviciile (durează ~3–6 minute, 6 cereri în paralel)"
node tools/verifica-servicii.mjs "$@" > "$OUT" 2> "$D/raport.err" || { echo "✗ scriptul Node a eșuat:"; cat "$D/raport.err"; exit 1; }
TOTAL=$(($(wc -l < "$OUT") - 1))
# probleme reale: HTTP != 2xx, ERR/timeout, domeniu schimbat
awk -F'\t' 'NR>1 && ($4=="ERR" || $4 !~ /^2/ || $7 ~ /domeniu schimbat/) {print}' "$OUT" > "$D/probleme.tsv"
# doar semnal de login (de văzut manual)
awk -F'\t' 'NR>1 && $4 ~ /^2/ && $7 !~ /domeniu schimbat/ && $7 ~ /cont\/login/ {print}' "$OUT" > "$D/de-vazut.tsv"
NP=$(wc -l < "$D/probleme.tsv"); NL=$(wc -l < "$D/de-vazut.tsv")
echo
echo "════ REZULTAT: $TOTAL servicii · $NP cu probleme · $NL cu semnal de cont/login (de văzut manual)"
echo
if [ "$NP" -gt 0 ]; then
  echo "── PROBLEME (categorie | nume | status | detaliu) ──"
  awk -F'\t' '{printf "• [%s] %s — %s %s%s\n", $1, $2, $4, ($5!=""?"→ "$5" ":""), ($7!=""?"("$7")":"")}' "$D/probleme.tsv"
fi
# copiază raportul în Descărcări, dacă există accesul la stocare
if [ -d "$HOME/storage/downloads" ]; then cp "$OUT" "$D/probleme.tsv" "$D/de-vazut.tsv" "$HOME/storage/downloads/" 2>/dev/null && echo && echo "✔ Copiat în Descărcări: $(basename "$OUT"), probleme.tsv, de-vazut.tsv"; fi
echo
echo "Fișiere: $OUT"
echo "         $D/probleme.tsv   $D/de-vazut.tsv"
echo "Trimite-mi probleme.tsv (sau textul de mai sus) și actualizez lista + data din pagină."
