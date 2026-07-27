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
- Pilotně nasazeno v 0001 (A3). TODO: doplnit do ostatních 21 lekcí (obsah přizpůsobit tématu).

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
