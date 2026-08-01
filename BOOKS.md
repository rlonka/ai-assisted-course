# Knihovnička — co číst a co mít na workshopu

> **Hlavní teze:** AI nepřináší do softwarového řemesla nic nového — **zvyšuje sázku
> na všechno, co jsme už uměli.** Dřív tě k porozumění nutila dřina (musel jsi kód
> napsat, tak jsi mu rozuměl). AI ji odstranila → dnes můžeš poslat kód, kterému
> nerozumíš. A jediné, co pak drží správnost, jsou disciplíny, které ji ukotvují
> **mimo tvou hlavu**: testy, refactoring, doménový jazyk, malé iterace, review.
> Tyhle knihy nezastaraly. AI je udělala **povinnými**.

Legenda: **📚 mít fyzicky na workshop** (dají se ukázat, zalistovat, položit na stůl —
fyzická kniha je silný vizuální argument „tohle je 20–40 let staré a pořád platí").
🔗 = odkaz na zdroj/vydavatele.

---

## Páteř — proč na řemesle záleží víc než jindy

- **📚 The Pragmatic Programmer** — Andrew Hunt & David Thomas (1999; 20th Anniversary Edition 2019). 🔗 [pragprog.com](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)
  Kanonická „timeless craft" kniha. DRY, ortogonalita, tracer bullets, „kamenná polévka",
  „nebroušený kód". Přesně ten étos, který AI nezneguje, jen zostřuje. **Nejtrefnější titul
  pro celou tezi kurzu.** → váže na B4 (DRY), celý blok A.

- **📚 The Mythical Man-Month** — Fred Brooks (1975). 🔗 [Wikipedia](https://en.wikipedia.org/wiki/The_Mythical_Man-Month)
  Brooksův zákon („přidání lidí do zpožděného projektu ho zpozdí"), esence vs. akcident
  v zárodku, program vs. produkt (9×). → váže na A3, C5.

- **No Silver Bullet** — Fred Brooks (1986, esej ~10 stran). 🔗 [PDF, UNC](https://www.cs.unc.edu/techreports/86-020.pdf)
  Esenciální vs. akcidentální komplexita — historická kotva pro AI hype. Zdarma, přečteš
  za 30 minut. **Povinné čtení před přednáškou.** → jádro A3.

---

## Disciplíny (blok A) — každou AI zlevnila v mechanice a zdražila v úsudku

- **📚 Test-Driven Development by Example** — Kent Beck (2002). 🔗 [O'Reilly](https://www.oreilly.com/library/view/test-driven-development/0321146530/)
  Red-green-refactor naživo. Kapitoly 1–3 (~40 stran) stačí. → A1.

- **📚 Refactoring: Improving the Design of Existing Code** — Martin Fowler (2. vyd. 2018). 🔗 [martinfowler.com](https://martinfowler.com/books/refactoring.html)
  Bezpečná změna struktury beze změny chování, katalog, „dva klobouky". → A2.

- **📚 Working Effectively with Legacy Code** — Michael Feathers (2004). 🔗 [O'Reilly](https://www.oreilly.com/library/view/working-effectively-with/0131177052/)
  Charakterizační testy = síť kolem kódu, kterému (zatím) nerozumíš. Přesně situace,
  do které tě staví AI-generovaný kód. → A2, D2.

- **📚 Domain-Driven Design** — Eric Evans (2003, „modrá kniha"). 🔗 [domainlanguage.com](https://www.domainlanguage.com/ddd/)
  Ubiquitous language, bounded context. Těžká, ale definiční. Nejkratší start: **DDD
  Reference (2015, zdarma, ~50 stran).** → A4, B3.
  - Doplněk: **Implementing DDD** — Vaughn Vernon (2013, „červená kniha") — praktické *jak*.

- **Agile Manifesto** (2001, 1 strana). 🔗 [agilemanifesto.org](https://agilemanifesto.org/)
  Ne kniha, ale originál. Signatáři = who's who oboru (Beck, Fowler, Cunningham, Martin). → A5.
  - Rozšíření: **📚 Extreme Programming Explained** — Kent Beck (2000) — odkud agilní smyčka pochází.

---

## Tým a doručování — pro manažerskou/PI větev (D5)

- **📚 Accelerate** — Nicole Forsgren, Jez Humble, Gene Kim (2018). 🔗 [IT Revolution](https://itrevolution.com/product/accelerate/)
  Výzkumem podložené metriky výkonu týmů (DORA). Podklad pro „metrika není "kolik AI",
  ale drží kvalita a učí se lidé". → D5.

---

## Moderní doplněk (volitelné)

- **📚 A Philosophy of Software Design** — John Ousterhout (2018). 🔗 [Amazon](https://web.stanford.edu/~ouster/cgi-bin/book.php)
  Současný, čtivý pohled na složitost a design — dobrý most mezi Brooksem a dnešní praxí.

---

## Doporučení k nákupu na workshop

Kdyby ses rozhodl pořídit **fyzicky pár kusů na ukázání**, prioritně tyhle tři —
pokrývají celou tezi a vizuálně „prodají" stáří + trvalou platnost řemesla:

1. **The Pragmatic Programmer** (celá teze v jedné knize)
2. **Refactoring** — Fowler (tlustá, viditelně „řemeslná")
3. **Domain-Driven Design** — Evans (modrá kniha, ikonická)

Brooksovy texty stačí vytištěné (esej je zdarma). Zbytek podle rozpočtu a publika.
