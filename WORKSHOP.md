# Kostra workshopu — 90 minut, tři páky

> **Facilitátorská kostra · v1 · živý dokument**
> Interaktivní verze (časová osa + tmavý režim): publikovaný artifact
> `https://claude.ai/code/artifact/7a6ac507-cd19-4754-8649-86a3c06feae6`

**Formát:** 90 minut · přednáška + demo + diskuze · publikum vědci-kodéři & RSE
**Cíl:** zasadit háčky → [Anki](anki/) je udrží. Neděláme „coverage" všech 24 lekcí.

---

## Teze

> **„AI zlevnila psaní kódu, ne jeho ověření. Tvoje nová práce není psát řádky —
> je postavit kontext a ověřit výstup."**

**Proč zrovna tohle?** Je to **A3** v akci: psaní kódu je *akcidentální* komplexita,
kterou AI seká — porozumění a ověření je *esenciální* komplexita, kterou neseká
vůbec. Ta jedna věta drží všechny tři pilíře pohromadě.

---

## Tři pilíře

Ne 24 lekcí za sebou — jedna páteř a tři pilíře, z nichž každý má vlastní živé
demo a diskuzní moment.

| # | Pilíř | Lekce | Emoční háček |
|---|-------|-------|--------------|
| **1** | Kontext řídí kvalitu | D1 · B1 | „Model není věštec — vidí jen to, co mu dáš." |
| **2** | Důvěra ≠ spolehlivost **(vrchol)** | C4 · D2 | „Uhlazená odpověď tě zradí nejvíc." |
| **3** | Reprodukovatelnost = tvůj podpis | C2 · D4 | „Co nezregeneruješ od nuly, není zjištění — je historka." |

---

## Průběh (run-of-show)

Mikro-interakce (hlasování, predikce, dvojice) drží pozornost, která u pasivního
poslechu spadne po ~12 minutách. Časy jsou vodítko, ne dogma.

### `00:00` · 8 min · Studený start — *demo*

- Pustíš Claude naživo: „napiš funkci na tuhle analýzu" → věrohodný kód
  s **tichou chybou** (prohozené osy / špatná jednotka).
- Spustíš to na datech, kde **znáš odpověď** → vyjde blbost.
- Pointa: *„Tohle je celých dalších 82 minut."*
- 📦 **Hotový balíček:** [`workshop/demo/stupne-radiany/`](workshop/demo/stupne-radiany/README.md) — data, přesný prompt, referenční kontrola, fallback a postup naživo (recept stupně vs. radiány).

> **Interakce:** hlasování rukou před spuštěním — „Kdo by tomuhle výsledku věřil?"
> **Proč:** informační mezera (Loewenstein) · emoční aktivace · efekt primárnosti — zakládáš vrchol už tady.

### `00:08` · 8 min · Mapa: teze + tři páky — *rámec*

- Jeden slide: ta věta + tři pilíře. „Dnes ne 24 lekcí — tři páky."
- Posun (A5): dřív bylo vzácné *napsat* kód, dnes je vzácné **vědět, že je správný**.
- A3: AI seká akcidentální (plumbing), esenciální (je ten model správně?) nechává na tobě.

> **Proč:** advance organizer (Ausubel) · chunking — dáš mapu dřív, než nasypeš detail.

### `00:16` · 22 min · Pilíř 1 — Kontext — *demo + diskuze*

- **Demo:** stejný úkol — vágní prompt vs. kurátorovaný (soubor + formát +
  příklad + doménový termín). Ukážeš skok v kvalitě.
- **Dvojice (2 min):** „Kdy vám naposled model dal blbost — a co v okně chybělo?" → 3 sklidíš nahlas.
- **Kotva:** model nevezme v úvahu, co nemá v okně. Trvalé → CLAUDE.md, jednorázové → zadání.
- **A3 se rozsvítí:** ty dodáváš esenciální (doména, cíl), AI dělá akcidentální.

> **Interakce:** think-pair-share na jejich vlastní zkušenosti.
> **Proč:** worked example → jejich materiál (andragogika, relevance) · sdílení posiluje zapamatování.

### `00:38` · 24 min · Pilíř 2 — Trust gap & ověřování — *VRCHOL*

- Callback na studený start. Proč je AI review jiný: **sebejistota je konstantní, ne signál**.
- Rámec: 6 otázek na každý diff + **„zelená ≠ důkaz"** (model, co napsal chybu,
  umí napsat i test, který ji posvětí).
- **Demo:** necháš AI napsat kód *i testy* — obojí zelené — a pak odhalíš chybu.
  „Jak byste ji chytili?"
- Řešení: adversariální čtení, spusť na známé odpovědi, ownership
  („napsala to AI" není obhajoba).
- *Spicy teze:* „Review, který přeskočíš, protože kód vypadá dobře, je přesně ten,
  který jsi nejvíc potřeboval."

> **Interakce:** predikce sálu — „Je v tomhle diffu chyba? Ano/ne." — pak reveal.
> **Proč:** peak-end (Kahneman) · překvapení (Von Restorff) · vybavení studeného startu · sázka/stakes.

### `01:02` · 18 min · Pilíř 3 — Reprodukovatelnost — *demo*

- **Demo:** žebřík rung 0→4 + `/reproduce`. „Běželo to jednou na mém laptopu" ≠ reprodukovatelné.
- Propojení: ownership + provenance (D4) — zapiš, jak výsledek vznikl (model, prompt).
  Bez rodokmenu není zjištění.
- **Sebereflexe:** „Na jakém stupni žebříku je váš poslední projekt?" (ruce, 0–4)

> **Interakce:** hlasování rukou po stupních žebříku — každý se zařadí.
> **Proč:** dual coding (žebřík jako vizuál) · retrieval přes sebehodnocení.

### `01:20` · 10 min · Zavření — *peak-end + závazek*

- **Vybavení, ne opakování:** zeptáš se sálu na ty tři kotvy — ať je řeknou oni.
- Retenční systém: Anki decky + rituál `„vygriluj mě z X"`.
  **Workshop zasadí háčky, Anki je udrží.**
- **Závazek:** každý napíše jednu věc, co v pondělí změní, ve tvaru „až příště…, tak…".
- Konec na zapamatovatelné větě (esenciální vs. akcidentální — tvoje hodnota se přesunula).

> **Interakce:** napsaný mikro-závazek (implementační intence).
> **Proč:** peak-end · retrieval practice · implementation intentions (Gollwitzer) · Zeigarnik (otevřenou smyčku uzavře Anki).

---

## Kam se podělo 24 lekcí

Neděláme „coverage". Každá lekce má jednu ze tří rolí — a nosná teorie (A3, A5, A1)
zůstává, jen slouží demu, ne naopak.

| Role | Lekce | Jak se objeví |
|------|-------|---------------|
| 🏛 **Rám (páteř)** | A3 · A5 · A1 | Nosné „proč". Vetkané do úvodu a přechodů — zazní jako pointa, nemají vlastní blok. |
| 🎬 **Pilíře (demo)** | D1+B1 · C4+D2 · C2+D4 | Jádro workshopu. Každý pilíř = živé demo + diskuzní moment. |
| 📇 **Samostudium + Anki** | A2 · B2–B9 · C1 · C3 · C5 · D3 · D5 | Zmíníš jednou větou nebo „na parkoviště" → dořeší kartičky a delší formát. |

---

## Facilitátorské zásady

Věci, které rozhodují, jestli to bude živé, nebo uspávající.

- **Mikro-interakce á 10–15 min** — hlasování, predikce, dvojice. Pozornost jinak spadne — ať sál pořád něco dělá.
- **Dema = tvůj vrchol → nacvič je** — a měj nahranou zálohu (video/screenshoty), kdyby selhala síť nebo model.
- **Předpřiprav „známou odpověď"** — dataset pro studený start i pro Pilíř 2 nachystej tak, aby chyba naživo spolehlivě vyskočila.
- **Dvě publika i bez manažerů** — u každého pilíře jedna věta „pro vědce znamená… / pro RSE znamená…".
- **Parkoviště** — hluboké odbočky → „to je v Anki / v materiálech". Chrání časový rozpočet.
- **Most na delší formát** — až přijde hands-on, každé demo se stane cvičením. Kostra zůstává, jen se prohloubí.

### Knihy jako rekvizita (koření, ne pilíř)

Fyzická kniha je omezená, ale u naší teze dobře motivovaná rekvizita: 20–40 let starý
titul, který pořád platí, *prodává* „AI řemeslo nezneguje, jen zostřuje" líp než URL na slajdu.
Pravidlo: **1–3 kusy, ne knihovna.** Výběr viz [`BOOKS.md`](BOOKS.md).

- **U hlavní teze zvedni JEDNU** (Pragmatic Programmer / Fowler Refactoring): „Tahle je z roku 1999. Každé slovo pořád platí — a AI to udělala povinným." Řekni, ukaž, polož.
- **Na konci malý štůsek (max 3) na stole** jako „kam dál" — jedna věta ke každé, „fotky vítány". Naváže na Anki + samostudium.
- **Nikdy z nich nečti naživo** a **nekolej je během přednášky** (lidi listují místo poslouchání — nabídni je až na konci).
- **Kniha si zaslouží moment jen tehdy, když u ní umíš říct něco konkrétního.** Prázdná rekvizita = vanity; u chytrého publika hrozí „flex" — rám sebevědomě-skromně, ne „koukněte, co jsem přečetl".
- **Online/hybrid:** fyzické knihy na webkameře nefungují → dej obálky na slajd.

---

## Roadmapa (v1 → dál)

Začínáme s v1 a vylepšujeme. Kandidáti na příští verze:

- [x] **Scénář studeného startu** — hotový: [`workshop/demo/stupne-radiany/`](workshop/demo/stupne-radiany/README.md) (recept stupně vs. radiány).
- [ ] **Další scénáře dem** — Pilíř 1 (vágní vs. kurátorovaný prompt) a Pilíř 2
  (AI napíše kód i zelené testy s chybou), plus náhradní recept „české CSV".
- [ ] **Skript řečníka** — co u každého segmentu říct slovo od slova (věty, přechody, pointy).
- [ ] **Hands-on lab** — jak z těch tří dem udělat cvičení pro delší formát.
- [ ] **Manažerská / PI větev** — governance a zavádění (D5) pro smíšené publikum.
- [ ] **Časové varianty** — 60 vs. 90 vs. 120 minut.
