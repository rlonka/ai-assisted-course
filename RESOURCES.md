# AI-assisted Research Software Development — Resources

## Knowledge

### Klasické zdroje (canon)

> 📖 **Kompletní anotovaná knihovnička (co číst, co koupit fyzicky na workshop): [`BOOKS.md`](BOOKS.md).**

- [The Pragmatic Programmer — Hunt & Thomas (1999 / 2019)](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)
  Kanonická „timeless craft" kniha (DRY, ortogonalita, tracer bullets). Přesně étos, který AI nezneguje, jen zostřuje. Použij pro: hlavní tezi kurzu, B4, celý blok A.

- [No Silver Bullet — Fred Brooks (1986)](https://www.cs.unc.edu/techreports/86-020.pdf)
  Esenciální vs. akcidentální komplexita. Historická kotva pro AI hype. Použij pro: lekce A3, úvod každé přednášky.

- [The Mythical Man-Month — Fred Brooks (1975)](https://en.wikipedia.org/wiki/The_Mythical_Man-Month)
  Brooksův zákon, program vs. produkt (9×). Použij pro: lekce A3, C5.

- [TDD by Example — Kent Beck (2002)](https://www.oreilly.com/library/view/test-driven-development/0321146530/)
  Red-green-refactor cyklus, kapitoly 1–3 stačí. Použij pro: lekce A1, D4.

- [Refactoring: Improving the Design of Existing Code — Martin Fowler (2018)](https://martinfowler.com/books/refactoring.html)
  Bezpečná změna kódu. Úvod + kap. 1 jsou nutné minimum. Použij pro: lekce A2, D5.

- [Working Effectively with Legacy Code — Michael Feathers (2004)](https://www.oreilly.com/library/view/working-effectively-with/0131177052/)
  Charakterizační testy jako síť kolem kódu, kterému nerozumíš — přesně situace AI-generovaného kódu. Použij pro: lekce A2, D2.

- [Domain-Driven Design — Eric Evans (2003)](https://www.domainlanguage.com/ddd/)
  Ubiquitous language, bounded context. Kap. 1–2. Použij pro: lekce A4.

- [Agile Manifesto (2001)](https://agilemanifesto.org/)
  Původní text, 1 strana. Použij pro: lekce A5 — kde agentic navazuje, kde inovuje.

- [Accelerate — Forsgren, Humble, Kim (2018)](https://itrevolution.com/product/accelerate/)
  Výzkumem podložené metriky výkonu týmů (DORA). Použij pro: lekce D5 — „metrika není kolik AI".

### Agentní paradigma

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
  Harness, guardrails, memory, hooks, MCP, subagents. Primární zdroj pro B-blok.

- [Anthropic MCP Specification](https://modelcontextprotocol.io/)
  Co je MCP, jak funguje. Použij pro: lekce B6.

### Vědecký software

- [FAIR4RS Principles — RDA Working Group](https://www.rd-alliance.org/groups/fair-research-software-fair4rs-wg)
  FAIR pro vědecký software (ne jen data). Použij pro: lekce C1.

- [arXiv: 2605.17675 — Reprodukovatelnost a AI](https://arxiv.org/abs/2605.17675)
  Mechanický test reprodukovatelnosti, /reproduce skill. Použij pro: lekce C2.

- [New Relic: State of AI Coding 2026](https://newrelic.com/resources/report/state-of-ai-coding)
  Měřený trend „AI kód nese víc issues" (~1,7× — číslo se vyvíjí, ověř aktuální vydání). Použij pro: lekce C4. Pozn.: konkrétní staty jinde v kurzu záměrně nahrazeny trendem — zastarávají.

- [BSSw.io — Better Scientific Software](https://bssw.io/)
  Vědecký software vs. produkční software. Použij pro: lekce C5.

### Hype a rizika

- [Anthropic studie o deskillingu (2025)](https://www.anthropic.com/research)
  Měřitelný dopad AI na dovednosti. Použij pro: lekce C3.

## Wisdom (Communities)

- [Nordic-RSE community](https://nordic-rse.org/)
  RSE komunita — Radek je zakladující člen. Feedback na lekce, peer review prezentací.

- [Research Software Alliance (ReSA)](https://www.researchsoft.org/)
  Globální RSE komunita. Dobré pro kontextualizaci.

- [Software Carpentry / CodeRefinery](https://coderefinery.org/)
  Komunita vědecké výuky programování. Overlaps s C5, D4.

## Gaps

- ~~Neexistuje dobrý primární zdroj pro "YOLO vs. OH NO" framing (B8)~~ — B8 vytvořena (0023-vibe-vs-ai-assisted.html) jako "Vibe coding vs. AI-assisted"; primární zdroje: Karpathy (únor 2025) a Simon Willison (2025). Matt Pocock materiály jako doplněk.
- HPC-specifické AI workflow (D1) — málo primárních zdrojů, hlavně praxe z klastru
- ~~Karpathy materiály pro agentic smyčku (B9)~~ — B9 vytvořena (0024-agentni-smycka.html) jako "Agentní smyčka"; primární zdroje: ReAct (Yao et al., 2022) a Anthropic "Building Effective Agents" (2024).
