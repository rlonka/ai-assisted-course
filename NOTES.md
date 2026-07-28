# Notes

## User preferences
- Jazyk lekcí: česky (technické termíny anglicky, kde je to standard)
- Styl: přímý, bez omáčky, krátké věty — "příprava na živou přednášku", ne akademický výklad
- Každá lekce musí mít variantu pro 3 publika: vědec-kodér / RSE vývojář / manažer/PI
- Feynmanovo cvičení je klíčová součást každé lekce — konkrétní, ne abstraktní

## Retenční vrstva (vzor pro všechny lekce — přidáno 2026-07-27)
Cíl: aby Radek uměl ustát živé Q&A, ne jen text přečíst. Tři nové sekce před Feynmanovým cvičením:
- **🎯 Páteř** — 1 věta-oblouk (regeneruje odpovědi) + 3 číselné kotvy (co nesmí splést) + přenosný test. CSS: `.spine` / `.spine-anchors` / `.num`.
- **🎤 Až se tě zeptají** — banka ostrých námitek z publika + krátká odpověď s „úderem" (tučná pointa). Trénink nahlas, ne test. CSS: `.qa-item` / `.qa-q` / `.qa-a`.
- **🔁 Do kartiček** — 10–12 faktů ve formátu `otázka ; odpověď`, copy-paste do Anki (středník jako oddělovač). CSS: `pre.flashcards`. Uzavřít callout.green s rituálem (denně kartičky + týdně „odříkej naostro"; grilování na vyžádání).
- Zdroj CSS: assets/style.css, sekce „Retenční vrstva". Číslování sekcí posunout, Feynman + Co dál na konec.
- Nasazeno v 0001 (A3) a 0002 (B1). TODO: doplnit do ostatních 20 lekcí (obsah přizpůsobit tématu).
- B1 (0002): slovníček harness=postroj/guardrails=svodidla (green/red two-col) + retenční vrstva (sekce 9 Páteř, 10 Q&A, 11 kartičky), Feynman→12, Co dál→13. Anki: 27 kartiček. Páteř používá textové kotvy místo čísel (umí/nesmí, exit 2, palec) — .num zvládá i text.

## Nová lekce B8 (0023) — Vibe vs. AI-assisted (přidáno 2026-07-28)
- Zacelena reálná mezera: B8 byla plánovaná ("YOLO vs. OH NO") ale nikdy nevznikla; mrtvý odkaz href="#" v B1 opraven na 0023.
- Soubor: lessons/0023-vibe-vs-ai-assisted.html, kód B8, plná struktura (13 sekcí) + retenční vrstva + slovníček + Anki (26 kartiček).
- Zapojení: course.js COURSE array (B8 po B7 Subagenti, před C1), index.html (karta v bloku B + počet 22→23), README (řádek + počty), RESOURCES.md (gap note přeškrtnuta).
- Klíčový model: rozdíl vibe/AI-assisted = porozumění (Willisonova čára); správná zóna se posouvá podle sázky; dva ciferníky (vibe=porozumění vs. YOLO=autonomie). Zdroje: Karpathy únor 2025, Simon Willison 2025.
- POZOR: kurz má teď 23 lekcí (bylo 22). Progress bar má 23 teček (JS generuje z COURSE).
- Slovníček pojmů: v A3 přidán do sekce 1 (Aristoteles, citace Brookse, synonyma esenciální=podstatná/akcidentální=vedlejší, chyták "akcidentální != nehoda") + kompaktní připomínka v Páteři.
- Anki exporty: `anki/<lekce>.txt`, TSV formát `otázka<TAB>odpověď<TAB>tagy` s hlavičkou (`#separator:tab`, `#deck:`, `#notetype:Basic`, `#tags column:3`) pro import na jeden klik. Viz `anki/README.md`. A3 hotová (**37 kartiček**, rozšířeno 2026-07-27 na Radkovu žádost — víc a informativnější; tagy: jadro/vlastnosti/cisla/generace/historie/ai-dnes/namitky/intuice/anekdoty). On-page blok v sekci 12 je jen startovní verze + odkaz na plný soubor. TODO: export i pro ostatní lekce. Generátor: scratchpad/gen_anki.py.

## Nová lekce B9 (0024) — Agentní smyčka (přidáno 2026-07-28)
- Zacelena druhá mezera (RESOURCES gap "agentic smyčka B9"): jak agent běží v čase.
- Soubor: lessons/0024-agentni-smycka.html, kód B9, plná struktura + retenční vrstva + slovníček + Anki (25 kartiček). Vlastní CSS diagram smyčky (.loop / .loop-step / .loop-back / .loop-exit), 6 kroků + loop-back + exit.
- Zapojení: course.js (B9 po B8, před C1), index.html (karta + počet 23→24), README (řádek + počty), RESOURCES.md (gap přeškrtnuta).
- Klíčový model: agent = model v cyklu; sekvence zadání→kontext(harness)→inference→guardrails→nástroj→výsledek zpět→znovu; řídící tok rozhoduje model za běhu; ReAct (Yao 2022). Kurz má teď **24 lekcí**.
- POZOR NA EFEMÉRNÍ KONTEJNER: 2026-07-28 se pracovní adresář jednou vrátil na 1f18fce (B8 práce byla jen na originu). Řešení: git fetch + ff-merge origin. Vždy po pushnutí ověř, že origin i lokál sedí.

## A1 (0003) — TDD: retenční balík (přidáno 2026-07-28)
- Slovníček: test-first (specifikace, green) vs. test-after (potvrzení, red) + glosy (regrese/coverage/edge case). Retenční vrstva: 9 Páteř (kotvy R→G→R, test-first, kdo píše RED), 10 Q&A (6 námitek), 11 kartičky; Feynman→12, Co dál→13. Anki: 24 kartiček.
- Opraven mrtvý odkaz href="#" na C3 v sekci 1 → 0010-deskilling.html.
- FLAG k ověření: sekce 6 tvrdí „AI-generated testy mají 1,7× vyšší false-positive rate (New Relic 2026)" — vypadá jako přenesení New Relic „1,7× víc issues" na testy. Možná overclaim; do Anki kartiček jsem to NEDÁVAL. Zvážit doložení/změkčení.

## Retenční balík — stav pokrytí (lekce s Páteř+Q&A+kartičky+Anki)
- Hotovo: A3 (37), B1 (27), B8 (26), B9 (25), A1 (24). Zbývá ~19 lekcí.

## Curriculum state
- Start: 2026-06-24
- Doporučené pořadí pro 6 týdnů: viz MISSION args (curriculum dokument)
- Týden 1: A3 (No Silver Bullet) + B1 (Harness vs. guardrails)
- First lesson created: 0001-no-silver-bullet.html (A3)
- Hotové lekce: 0001 A3, 0002 B1, 0003 A1, 0004 B2, 0005 B3, 0006 B4, 0007 B5, 0008 B6, 0009 Subagents
- Blok A KOMPLETNÍ (5/5): 0001 A3, 0003 A1, 0015 A2, 0016 A4 DDD, 0017 A5 Agile (hotovo 2026-07-24).
- Stav: KURZ KOMPLETNÍ — 22 lekcí hotovo (2026-07-24). Všechny bloky A/B/C/D hotové.
- Blok D hotov (5/5): 0018 D1 Context engineering, 0019 D2 Verifikace a code review, 0020 D3 Bezpečnost a citlivá data, 0021 D4 Licence/provenance/autorství, 0022 D5 Zavádění v týmu.
- Všechny lekce provázané (nav odkazy 0001→0022). D5 obsahuje závěrečný "konec kurzu" blok.
- Možné další kroky (nezadané): index/rozcestník všech 22 lekcí; revize/feedback jednotlivých lekcí; příprava vlastní hodinové přednášky výběrem 4–6 konceptů.
- Blok B HOTOV: rámec pěti otázek kompletní = Memory(B3)/Skills(B4)/Hooks(B5)/MCP(B6)/Subagents(0009)
- Blok C HOTOV (5/5): 0010 C3 Deskilling, 0011 C4 Trust gap, 0012 C2 Reprodukovatelnost, 0013 C1 FAIR4RS, 0014 C5 Vědecký vs. produkční SW
- Blok A: 0001 A3, 0003 A1, 0015 A2 Refactoring
- Další na řadě: A4 DDD (0016), A5 Agile (0017) → dokončí blok A, pak blok D
- Pozn.: hotové lekce 0001–0015 (15 lekcí); blok A 3/5 (chybí A4, A5), blok B kompletní, blok C kompletní, blok D nezačat

## Blok D — "Praxe a zavádění" (nadefinováno 2026-07-24, schváleno Radkem)
Poslední blok: jak dostat AI-assisted vývoj do reálné práce výzkumné organizace (těžiště pro RSE vývojáře a manažery/PI).
- D1 — Context engineering (prompting jako inženýrská dovednost; váže na blok B)
- D2 — Verifikace a code review AI výstupů (review jako povinná vrstva; váže na C4 Trust gap)
- D3 — Bezpečnost a citlivá data (výzkumná data, HPC, on-prem vs. cloud, GDPR; co smí do modelu)
- D4 — Licence, provenance a autorství AI-generovaného kódu (váže na C1 FAIR4RS)
- D5 — Zavádění v týmu (change management, policy, školení; pohled manažera/PI)
Cílový počet celého kurzu: 22 lekcí (A=5, B=7, C=5, D=5).

## Context
- Radek = RSE at IT4Innovations, founding member of Nordic-RSE
- Přednáší AI-assisted research software development pro vědeckou komunitu
- Kickoff je zhruba za 4–6 týdnů od 2026-06-24
