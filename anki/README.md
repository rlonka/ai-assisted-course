# Anki kartičky

Exporty kartiček k jednotlivým lekcím pro rozložené opakování ([Anki](https://apps.ankiweb.net/)).

## Import (jeden klik)

1. Anki → **File → Import…** → vyber `.txt` soubor lekce.
2. Soubory mají hlavičku, která nastaví vše automaticky:
   - oddělovač = tabulátor (`#separator:tab`)
   - cílový balíček (`#deck:` — např. „AI-assisted RSE::A3 — No Silver Bullet")
   - typ poznámky Basic (přední = otázka, zadní = odpověď)
   - 3. sloupec = **tagy** (téma), takže můžeš procvičovat po blocích
3. Klikni **Import**. Hotovo — pak stačí denně pár minut opakovat.

## Procvičování po tématech

Každá kartička má tag `A3` + téma. V Anki napiš do vyhledávání `tag:jadro`,
`tag:cisla`, `tag:historie`… a projeď si jen ten blok. Témata:
`jadro`, `vlastnosti`, `cisla`, `generace`, `historie`, `ai-dnes`, `namitky`,
`intuice`, `anekdoty`.

## Formát souboru

Prostý text (TSV), jedna kartička na řádek: `otázka<TAB>odpověď<TAB>tagy`.
Řádky začínající `#` jsou konfigurační hlavička, ne kartičky.

## Soubory

- `0001-no-silver-bullet.txt` — A3 (37 kartiček): esenciální/akcidentální komplexita,
  Aristoteles, čtyři vlastnosti SW, tvrdá čísla (5×, 1,7×, −19 %), generace jazyků,
  historické vlny, AI dnes + námitky, analogie (guláš, 128 řidičů), anekdoty (bug, Backus).
- `0002-harness-vs-guardrails.txt` — B1 (27 kartiček): harness vs. guardrails (co umí / co nesmí),
  metafory (postroj, svodidla), architektura requestu, exit code 2, determinismus,
  komponenty (memory/skills/MCP/hooks/subagents), námitky, propojení na A3.
- `0023-vibe-vs-ai-assisted.txt` — B8 (26 kartiček): vibe vs. AI-assisted (rozdíl = porozumění),
  Karpathy/Willison, zóny a rozhodovací pravidlo (sázka), dva ciferníky (vibe vs. YOLO),
  past „tiše špatně" u výzkumu, námitky, propojení na A3/B1/C3/C4/D2.
