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

- `0003-tdd.txt` — A1 (24 kartiček): TDD (test-first = specifikace vs. test-after = potvrzení),
  cyklus Red-Green-Refactor, rozdělení práce s AI (člověk RED / AI GREEN), Beck/XP/design by contract,
  námitky, propojení na A2/C3/B1.
- `0015-refactoring.txt` — A2 (26 kartiček): refactoring (změna struktury beze změny chování),
  refactoring vs. přepis, dva klobouky (Beck), odkud pochází bezpečnost, Extract Method / pravidlo tří,
  AI akcelerátor i past (nejdřív síť, pak skok), charakterizační testy, Fowler/Opdyke/tech dluh, námitky.
- `0016-domain-driven-design.txt` — A4 (26 kartiček): DDD (kód mluví jazykem domény), ubiquitous
  language a bounded context, doména != byznys, entity vs. value object (jednotky), model = API pro
  agenta (CLAUDE.md), Evans/modrá kniha, námitky, propojení na B3/A2/C4.
- `0017-agile-manifesto.txt` — A5 (26 kartiček): agile = hodnoty ne ceremonie, 4 hodnoty, cargo cult,
  smyčka zpětné vazby (fungující = ověřené), AI přesouvá hrdlo na ověřování, Snowbird 2001/XP/Scrum,
  námitky (velocity, Scrum na vědu), propojení na A1/C4.
- `0001-no-silver-bullet.txt` — A3 (37 kartiček): esenciální/akcidentální komplexita,
  Aristoteles, čtyři vlastnosti SW, tvrdá čísla (5×, 1,7×, −19 %), generace jazyků,
  historické vlny, AI dnes + námitky, analogie (guláš, 128 řidičů), anekdoty (bug, Backus).
- `0004-ramec-peti-otazek.txt` — B2 (20 kartiček): rámec pěti otázek (Memory/Skills/Hooks/MCP/Subagents),
  co každá vrstva řeší, závislé pořadí, mapování na klasické disciplíny, námitky, propojení na B1/A1/A4.
- `0005-memory-a-claude-md.txt` — B3 (20 kartiček): CLAUDE.md (konfigurace projektu pro agenta), tři typy paměti (CLAUDE.md/memory/settings.json), hierarchie global/projekt/lokal, co patří dovnitř, technika psaní, námitky.
- `0006-skills-a-slash-commands.txt` — B4 (20 kartiček): skill (opakovaný postup = /příkaz), skill vs. prompt/CLAUDE.md/hook, anatomie SKILL.md, description = rozhraní, progressive disclosure, pravidlo tří, DRY/Extract Method, námitky.
- `0007-hooks.txt` — B5 (20 kartiček): hook (deterministický guardrail, shell skript mimo model), exit 2 = blokuj, hook vs. skill (kdo drží spoušť), eventy (PreToolUse...), determinismus vs. pravděpodobnost, CI/CD původ, auditovatelnost.
- `0008-mcp.txt` — B6 (20 kartiček): MCP (protokol pro dosah k externím nástrojům/datům), M×N → M+N, tools/resources/prompts, klient-server (stdio/HTTP), dosah ne guardrail (páruj s hooky), LSP/USB analogie, námitky.
- `0009-subagents.txt` — B7 (22 kartiček): subagent (oddělený agent, vlastní kontext/role/nástroje), tři důvody (izolace/paralelismus/specializace), subagent vs. skill/prompt, anatomie .claude/agents/, orchestrační vzory (fan-out), map-reduce/delegace, námitky.
- `0011-trust-gap.txt` — C4 (23 kartiček): trust gap (důvěra vs. spolehlivost), 1,7× víc issues, fluency heuristic (plynulost≠správnost), kalibrovaná důvěra (kvadrant), kde věřit/ne, automation bias (Parasuraman&Riley 1997, Lee&See 2004), námitky.
- `0010-deskilling.txt` — C3 (21 kartiček): deskilling (eroze dovednosti), automatizuj mechaniku ne úsudek, spirála, nosné dovednosti (čtení kódu/ladění/revize/doménový úsudek), kolo vs. vozík, Bainbridge 1983/AF447/Braverman, námitky.
- `0012-reprodukovatelnost.txt` — C2 (25 kartiček): reprodukovatelnost (vlastnost procesu ne výsledku), repro vs. replikace, mechanický test PASS/FAIL, žebřík rung 0–4 a skok 2→3, /reproduce (rung 4, skill B4 + Stop hook B5), Claerbout&Donoho, AI pomáhá i škodí, námitky, propojení na C4/C3/C1/A1.
- `0013-fair4rs.txt` — C1 (23 kartiček): FAIR4RS (Findable/Accessible/Interoperable/Reusable pro software), pořadí F→A→I→R, FAIR≠Open (Accessible = protokol i s autentizací), LICENSE = minimum, machine-actionable metadata pro agenty (B6/MCP), CITATION.cff, Wilkinson 2016/Chue Hong 2022, AI pomáhá i škodí, námitky, propojení na C2/B6/A4/C3.
- `0002-harness-vs-guardrails.txt` — B1 (27 kartiček): harness vs. guardrails (co umí / co nesmí),
  metafory (postroj, svodidla), architektura requestu, exit code 2, determinismus,
  komponenty (memory/skills/MCP/hooks/subagents), námitky, propojení na A3.
- `0023-vibe-vs-ai-assisted.txt` — B8 (26 kartiček): vibe vs. AI-assisted (rozdíl = porozumění),
  Karpathy/Willison, zóny a rozhodovací pravidlo (sázka), dva ciferníky (vibe vs. YOLO),
  past „tiše špatně" u výzkumu, námitky, propojení na A3/B1/C3/C4/D2.
- `0024-agentni-smycka.txt` — B9 (25 kartiček): agentní smyčka (model→nástroj→výsledek→model),
  agent vs. chatbot, řídící tok rozhoduje model za běhu, sekvence kroků 1–6, ReAct (Yao 2022),
  kdy smyčka končí, guardrails v kroku 4, námitky, propojení na B1/B7/B8.
