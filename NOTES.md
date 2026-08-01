# Notes

## User preferences
- Jazyk lekcí: česky (technické termíny anglicky, kde je to standard)
- Styl: přímý, bez omáčky, krátké věty — "příprava na živou přednášku", ne akademický výklad
- Každá lekce musí mít variantu pro 3 publika: vědec-kodér / RSE vývojář / manažer/PI
- Feynmanovo cvičení je klíčová součást každé lekce — konkrétní, ne abstraktní
- Zpětná vazba: **buď kritický a přímý, netlač pozitivitu.** Když je nápad slabý, priorita špatná nebo tvrzení nadsazené, řekni to rovnou — i proti vlastnímu (AI) výstupu. Radek to explicitně chce (2026-07-31).

## Volatilní AI staty — čištění (2026-08-01)
Radek: volatilní čísla o AI produktivitě/kvalitě rychle zastarávají, riziko v přednášce.
- **A3 (0001) HOTOVO:** odstraněny New Relic „1,7×" a METR „−19 %" z HTML i Anki. Nahrazeno:
  Moorův zákon jako fólie (HW vs. SW), Brooksův zákon (přidání lidí do zpožděného projektu),
  a kvalitativní „trend, ne procento". Deck 43 karet (beze změny počtu). Brooksův „faktor pět" (5×)
  ponechán — historicky ukotvený, neměnný.
- **HOTOVO napříč celým kurzem (2026-08-01):** volatilní staty vyňaty i z A1 (0003), B5 (0007),
  C3 (0010), B8 (0023) — HTML i Anki; nahrazeno kvalitativním trendem („AI kód nese víc chyb").
  C3 stat blok: velké „1,7×" → šipka „↑" + trend. New Relic resource odkazy odebrány z A3/C3/B8.
- **C4 (0011) ZÁMĚRNĚ ZMĚKČENO, ne smazáno:** 1,7× je nosné číslo lekce trust gap → ponecháno
  jako „~1,7× (měřený trend, ověř aktuální — číslo se vyvíjí)" v HTML, Páteři, flashcards, Anki
  i zdroji (New Relic link ponechán jako zdroj). Jediné místo v kurzu, kde „1,7×" zůstává.

## Strategie prezentace kurzu (rozhodnuto 2026-07-31)
Kritický verdikt, se kterým Radek souhlasí: **artefakt předběhl autora.** Kurz existuje,
expertíza v něm zatím ne. Proto pořadí:
1. **Naučit se kurz sám** — Anki + „griluj mě", až umět ustát každou lekci naostro.
2. **Mezitím sbírat reálné poznatky/historky** z praxe (IT4I) — konkrétní průšvihy, čísla, co nefungovalo.
3. **Odučit interní workshop** pro kolegy na IT4I (reálné publikum, reálná hodnota).
4. **LinkedIn až POTOM** — zakotvené v tom, co reálně odučil a ověřil, ne v syntéze cizích myšlenek.

Checklist před čímkoli veřejným:
- Ověřit tvrzení a citace v lekcích (doložit nebo změkčit; viz flag u New Relic statu v A1).
- Poctivá provenance: kurz vznikl s AI asistencí — přiznat, neprezentovat jako sólo ruční práci (ironicky = lekce D4).
- Odlišit se reálnou zkušeností — bez ní jsou posty „chytré shrnutí diskurzu", ne hlas praktika.

LinkedIn kampaň: **deprioritizováno, nejslabší a nejrizikovější část.** Byl to brainstorming.
Drafty (6 postů, EN, position-building) jen lokálně v `linkedin-posts/`
(gitignored přes `.git/info/exclude`, nepushuje se na remote). Časem fajn, teď ne priorita.

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

## A2 (0015) — Refactoring: retenční balík (přidáno 2026-07-28)
- A2 je zralejší lekce (už má "Refactoring vs. přepis" + "dva klobouky"), takže vlastní slovníček NEPŘIDÁN (byl by nadbytečný) — jen retenční vrstva. Sekce 12 Páteř / 13 Q&A / 14 kartičky, Feynman→15, Co dál→16. Anki: 26 kartiček.
- A1 New Relic oprava: sekce 6 už netvrdí "1,7× false-positive rate testů"; přeformulováno na "AI kód obecně nese víc issues (1,7×)" s odkazem na A3.

## A4 (0016) — DDD: retenční balík (přidáno 2026-07-28)
- Slovníček: anglické DDD pojmy česky (ubiquitous language = sdílený jazyk, bounded context = ohraničený kontext, entity/value object) + chyták „doména ≠ byznys". Retenční vrstva: 12 Páteř (překlad / model = API pro agenta / hranice je návrh), 13 Q&A (6 námitek), 14 kartičky; Feynman→15, Co dál→16. Anki: 26 kartiček.
- Blok A KOMPLETNÍ v retenčním balíku: A1, A2, A3, A4 hotové; zbývá A5 Agile.

## A5 (0017) — Agile Manifesto: retenční balík (přidáno 2026-07-28)
- Jako A2 bez slovníčku (4 hodnoty už vizualizované, terminologie česká). Retenční vrstva: 12 Páteř (hodnoty>ceremonie / fungující=ověřené / hrdlo psaní→ověřování), 13 Q&A (6 námitek), 14 kartičky; Feynman→15, Co dál→16. Anki: 26 kartiček.
- BLOK A KOMPLETNÍ V RETENČNÍM BALÍKU: A1, A2, A3, A4, A5 hotové (všech 5/5).
- Anki generátor tip: české uvozovky rozbíjejí Python string literály. Řešení: data v triple-quoted bloku s oddělovačem ' ||| ' (viz scratchpad/gen_anki_a5c.py) — ASCII " pak nevadí.

## Blok C doplnění (probíhá 2026-07-28) — pořadí podle pódia
- C4 (0011) Trust gap: retenční vrstva (12 Páteř/13 Q&A/14 kartičky, Feynman→15, Co dál→16), Anki 23 kartiček (fakta: automation bias Parasuraman&Riley 1997, Lee&See 2004, 1,7×). Bez slovníčku.
- C3 (0010) Deskilling: retenční vrstva (13 Páteř/14 Q&A/15 kartičky, Feynman→16, Co dál→17), Anki 21 kartiček (Bainbridge 1983, AF447, Braverman 1974, kolo vs. vozík). Bez slovníčku.
- C2 (0012) Reprodukovatelnost: retenční vrstva (12 Páteř/13 Q&A/14 kartičky, Feynman→15, Co dál→16), Anki 25 kartiček (žebřík rung 0–4, skok 2→3, /reproduce = rung 4 skill B4 + Stop hook B5, Claerbout&Donoho 90. léta). Páteř: „proces, ne výsledek" / „binární test" / „/reproduce". Bez slovníčku.
- C1 (0013) FAIR4RS: retenční vrstva (13 Páteř/14 Q&A/15 kartičky, Feynman→16, Co dál→17), Anki 23 kartiček (F→A→I→R pořadí, FAIR≠Open, LICENSE=minimum, machine-actionable/B6, CITATION.cff, Wilkinson 2016/Chue Hong 2022). Páteř: „F→A→I→R" / „FAIR ≠ Open" / „strojová potrava". Bez slovníčku (lekce má vlastní myth/callout výklad FAIR≠Open).
- C5 (0014) Vědecký vs. produkční SW: retenční vrstva (12 Páteř/13 Q&A/14 kartičky, Feynman→15, Co dál→16), Anki 23 kartiček (dvě řemesla, nebezpečná zóna, 4 otázky prototyp/produkt, Brooks 9×, AI podlaha/objem/úsudek, návaznost na A3 akcidentální/esenciální). Páteř: „dvě řemesla" / „nebezpečná zóna" / „Brooks 9×". Bez slovníčku.
- Pořadí: C4 → C3 → C2 → C1 → C5. **BLOK C KOMPLETNÍ** (2026-07-30): všech 5 lekcí (C1–C5) má Páteř/Q&A/kartičky/Anki. Bez slovníčku (blok C má vlastní výkladové callouty/tabulky). Struktura: C4/C2/C5 mají 13 sekcí (Feynman 12); C1/C3 mají 14 (Feynman 13 → retenční 13/14/15, Feynman→16, Co dál→17).

## Blok D doplnění (probíhá 2026-07-31) — pořadí podle pódia
- Pořadí (schváleno Radkem): D2 → D3 → D5 → D1 → D4. D2/D3 vyvolají nejvíc dotazů z publika. Všechny D lekce mají 13 sekcí (Feynman 12) → retenční 12/13/14, Feynman→15, Co dál→16. Hotovo D2/D3/D5/D1, zbývá už jen D4.
- D1 (0018) Context engineering: retenční vrstva (12 Páteř/13 Q&A/14 kartičky, Feynman→15, Co dál→16), Anki 22 kartiček (obsah okna ne slova, okno vzácný zdroj/context rot, vrstvy CLAUDE.md vs. zadání, techniky, páka z psaní na kontext, prevence trust gapu, RAG/harness). Páteř: „obsah okna, ne slova" / „signál, ne objem" / „vrstvy". Bez slovníčku.
- D4 (0021) Licence, provenance a autorství: retenční vrstva (12 Páteř/13 Q&A/14 kartičky, Feynman→15, Co dál→16), Anki 22 kartiček (AI není autor, přiznání≠přenos odpovědnosti, provenance=záznam původu/pilíř FAIR, licence vstupní contaminace vs. výstupní, politiky časopisů 2023). Páteř: „AI není autor" / „provenance" / „licence = 2 problémy". Bez slovníčku.
- **BLOK D KOMPLETNÍ** (2026-07-31): všech 5 lekcí (D1–D5) má Páteř/Q&A/kartičky/Anki. Bez slovníčku (blok D má vlastní výkladové tabulky/callouty).
- **🎓 CELÝ KURZ KOMPLETNÍ V RETENČNÍM BALÍKU** (2026-07-31): všech 24 lekcí (A1–A5, B1–B9, C1–C5, D1–D5) má retenční vrstvu (Páteř/Q&A/kartičky) + vlastní Anki deck. Slovníček jen tam, kde byly cizí/abstraktní pojmy (A3, A4, B1). Anki celkem 24 decků.
- D2 (0019) Verifikace a code review: retenční vrstva (12 Páteř/13 Q&A/14 kartičky, Feynman→15, Co dál→16), Anki 23 kartiček (review = povinná vrstva, AI review ≠ lidský, 6 otázek na diff, zelená≠důkaz, ownership, Fagan 1976). Páteř: „sebejistota není signál" / „ownership" / „zelená ≠ důkaz". Bez slovníčku.
- D3 (0020) Bezpečnost a citlivá data: retenční vrstva (12 Páteř/13 Q&A/14 kartičky, Feynman→15, Co dál→16), Anki 23 kartiček (3 koše volné/podmíněné/nikdy, klasifikace i úryvků, HPC data residency/air-gap → self-hosted model, prompt injection, hooks B5 do nástroje, GDPR/OWASP). Páteř: „3 koše" / „která data kam" / „do nástroje". Bez slovníčku.
- D5 (0022) Zavádění v týmu: retenční vrstva (12 Páteř/13 Q&A/14 kartičky, Feynman→15, Co dál→16), Anki 22 kartiček (sociální ne technický problém, zákaz=příkaz, rámec s hranicemi, 3 páky politika/vzdělávání/kultura, uč verifikaci ne tlačítka, junioři+deskilling C3, kultura drží trust gap C4, shadow IT, Rogers/Westrum). Páteř: „zákaz = příkaz" / „3 páky" / „metrika". Bez slovníčku. Pozn.: „🎓 Konec kurzu" callout v Co dál zachován.

## Blok B doplnění (probíhá 2026-07-28)
- B2 (0004): retenční vrstva bez slovníčku (5 vrstev už vizualizované). Sekce 10 Páteř / 11 Q&A / 12 kartičky, Feynman→13, Co dál→14. Anki: 20 kartiček.
- BLOK B KOMPLETNÍ v retenčním balíku (2026-07-28): B1(27), B2(20), B3(20), B4(20), B5(20), B6(20), B7(22). Všechny mají Páteř/Q&A/kartičky/Anki. Slovníček jen B1 (harness/guardrails); ostatní B už měly dost terminologie.

## Retenční balík — stav pokrytí (lekce s Páteř+Q&A+kartičky+Anki)
- **HOTOVO — všech 24 lekcí:** blok A A1 (24), A2 (26), A3 (37), A4 (26), A5 (26); blok B B1 (27), B2 (20), B3 (20), B4 (20), B5 (20), B6 (20), B7 (22), B8 (26), B9 (25); blok C C1 (23), C2 (25), C3 (21), C4 (23), C5 (23); blok D D1 (22), D2 (23), D3 (23), D4 (22), D5 (22). Retenční balík je kompletní pro celý kurz.
- Pozn.: slovníček přidávat jen tam, kde jsou cizí/abstraktní pojmy (A2/A5 ne, A4 ano). U zralejších lekcí retenční vrstvu vkládat před Feynmana a přečíslovat.

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
