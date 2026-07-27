# Anki kartičky

Exporty kartiček k jednotlivým lekcím pro rozložené opakování ([Anki](https://apps.ankiweb.net/)).

## Import (jeden klik)

1. Anki → **File → Import…** → vyber `.txt` soubor lekce.
2. Soubory mají hlavičku, která nastaví vše automaticky:
   - oddělovač = středník (`#separator:semicolon`)
   - cílový balíček (`#deck:` — např. „AI-assisted RSE::A3 — No Silver Bullet")
   - typ poznámky Basic (přední = otázka, zadní = odpověď)
3. Klikni **Import**. Hotovo — pak stačí denně pár minut opakovat.

## Formát souboru

Prostý text, jedna kartička na řádek: `otázka;odpověď`. Řádky začínající `#`
jsou konfigurační hlavička, ne kartičky.

## Soubory

- `0001-no-silver-bullet.txt` — A3 (Brooks: esenciální/akcidentální komplexita, čísla, generace jazyků)
