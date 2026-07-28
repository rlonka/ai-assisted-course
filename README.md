# AI-assisted Research Software Development

Samostudijní kurz o vývoji výzkumného softwaru s pomocí AI, připravovaný pro vědeckou komunitu na [IT4Innovations](https://www.it4i.cz/). Každá lekce je psaná pro **tři publika** — vědec-kodér, RSE vývojář, manažer/PI — a obsahuje Feynmanovo cvičení k ověření porozumění.

> 📖 **Kurz jako web:** [rlonka.github.io/ai-assisted-course](https://rlonka.github.io/ai-assisted-course/)

**23 lekcí ve 4 blocích.** Cíl není naučit AI nástroje pro sebe, ale umět je vysvětlit, obhájit a předat dál.

---

## Blok A — Klasické disciplíny
*Co je na vývoji softwaru staré a osvědčené — a co z toho AI mění.*

| # | Lekce | Jádro |
|---|-------|-------|
| A3 | [No Silver Bullet](lessons/0001-no-silver-bullet.html) | Esenciální vs. akcidentální komplexita |
| A1 | [TDD](lessons/0003-tdd.html) | Test-first jako specifikace a záchranná síť |
| A2 | [Refactoring](lessons/0015-refactoring.html) | Změna struktury beze změny chování |
| A4 | [Domain-Driven Design](lessons/0016-domain-driven-design.html) | Kód mluví jazykem domény = jazyk pro AI |
| A5 | [Agile Manifesto](lessons/0017-agile-manifesto.html) | Hodnoty a krátká zpětná vazba, ne ceremonie |

## Blok B — Rámec a vrstvy nástrojů
*Jak agentní nástroje fungují — rámec pěti otázek.*

| # | Lekce | Jádro |
|---|-------|-------|
| B1 | [Harness vs. Guardrails](lessons/0002-harness-vs-guardrails.html) | Dva architekturální meta-koncepty |
| B2 | [Rámec pěti otázek](lessons/0004-ramec-peti-otazek.html) | Inventář komponent agentního nástroje |
| B3 | [Memory a CLAUDE.md](lessons/0005-memory-a-claude-md.html) | Trvalá vrstva kontextu |
| B4 | [Skills a slash commands](lessons/0006-skills-a-slash-commands.html) | Zabalené postupy |
| B5 | [Hooks](lessons/0007-hooks.html) | Mechanické guardraily |
| B6 | [MCP](lessons/0008-mcp.html) | Napojení na vnější systémy |
| — | [Subagenti](lessons/0009-subagents.html) | Pátá vrstva: delegace |
| B8 | [Vibe vs. AI-assisted](lessons/0023-vibe-vs-ai-assisted.html) | Kolik kontroly předat — a kde je čára |

## Blok C — Věda, reprodukovatelnost a důvěra
*Kde leží hranice jistoty ve vědeckém kontextu.*

| # | Lekce | Jádro |
|---|-------|-------|
| C1 | [FAIR4RS](lessons/0013-fair4rs.html) | Principy pro výzkumný software |
| C2 | [Reprodukovatelnost](lessons/0012-reprodukovatelnost.html) | Aby šlo výsledek zopakovat |
| C3 | [Deskilling](lessons/0010-deskilling.html) | Ztráta dovednosti a jak jí předejít |
| C4 | [Trust gap](lessons/0011-trust-gap.html) | Plynulost ≠ správnost |
| C5 | [Vědecký vs. produkční software](lessons/0014-vedecky-vs-produkcni-sw.html) | Prototyp vs. páteř |

## Blok D — Praxe a zavádění
*Jak to dostat do reálné práce výzkumné organizace.*

| # | Lekce | Jádro |
|---|-------|-------|
| D1 | [Context engineering](lessons/0018-context-engineering.html) | Kurátorství obsahu kontextového okna |
| D2 | [Verifikace a code review](lessons/0019-verifikace-code-review.html) | Review jako povinná vrstva |
| D3 | [Bezpečnost a citlivá data](lessons/0020-bezpecnost-citliva-data.html) | Co smí do modelu; HPC a lokální modely |
| D4 | [Licence, provenance a autorství](lessons/0021-licence-provenance-autorstvi.html) | Komu kód patří a kdo ručí |
| D5 | [Zavádění v týmu](lessons/0022-zavadeni-v-tymu.html) | Governance jako sociální problém |

---

## Struktura repozitáře

```
lessons/            23 lekcí (HTML, samostatné stránky)
assets/style.css    sdílený stylesheet (Tufte-inspired, print-friendly)
learning-records/   záznamy o vzniku a rozhodnutích
MISSION.md          proč kurz existuje a jak vypadá úspěch
NOTES.md            stav kurikula a preference
RESOURCES.md        zdroje
```

## Formát lekce

Každá lekce má 13 sekcí: jádro → koncept → historický kontext → **tři příklady pro tři publika** → propojení na ostatní lekce → nejčastější nepochopení → spicy teze → primární zdroje → **Feynmanovo cvičení** (interaktivní kvíz) → co dál.

---

*Autor: Radek Lonka (RSE @ IT4Innovations, founding member Nordic-RSE). Lekce vznikaly s asistencí AI — viz [D4 — provenance](lessons/0021-licence-provenance-autorstvi.html).*
