# Demo: studený start — „tichá chyba" (stupně vs. radiány)

Balíček pro **Segment 0 (Studený start)** z [`WORKSHOP.md`](../../../WORKSHOP.md).
Cíl: naživo necháš Claude napsat věrohodný kód, který **proběhne bez pádu, ale
vrátí tiše špatné číslo** — a tím na 8 minut založíš celý workshop (trust gap).

Chyba nevzniká náhodou v modelu, ale **strukturálně**: dáš podurčený úkol
a data, u kterých je „statisticky nejběžnější" řešení (`np.sin` na stupních)
špatně. Proto padá skoro pokaždé — a je **pravá**, ne nahraná.

## Soubory

| Soubor | K čemu |
|--------|--------|
| `mereni.csv` | Vstupní data — 5 kanonických úhlů ve stupních (sin zná každý zpaměti). |
| `zkontroluj.py` | **Referenční kontrola** (jen stdlib, běží všude). Pustíš po odhalení, ukáže správně vs. chybně vedle sebe. |
| `typicka_chyba.py` | Buggy kód, jaký model obvykle napíše. Pro nácvik a jako fallback. |

## Přesný prompt (NEPŘEURČUJ!)

Zkopíruj do Claude Code v adresáři s `mereni.csv`:

> **V `mereni.csv` mám úhly ve stupních (sloupec `uhel_stupne`). Napiš funkci,
> která spočítá sinus každého úhlu a vrátí jejich průměr.**

⚠️ Ani slovo o radiánech. Podurčenost JE ten mechanismus — jakmile na radiány
upozorníš, past zmizí.

## Očekávaný výsledek

Model skoro vždy napíše `np.sin(df["uhel_stupne"])` — jenže `np.sin` čeká
radiány. Proběhne bez chyby, vrátí věrohodné číslo:

| úhel° | správně sin | chybně `sin(°)` |
|------:|------------:|----------------:|
| 0 | 0.0000 | 0.0000 |
| 30 | 0.5000 | **−0.9880** |
| 45 | 0.7071 | 0.8509 |
| 60 | 0.8660 | **−0.3048** |
| 90 | 1.0000 | 0.8940 |
| **průměr** | **0.6146** | **0.0904** |

Úderné body pro sál:
- **Sinus ostrého úhlu vyšel záporný** → fyzikální nesmysl, a kód to vyplivl bez mrknutí.
- **sin(90°) má být 1**, ne 0.89 — to ví každý v sále.
- Sloupec se jmenuje `uhel_stupne`. **Informace tam byla, model ji ignoroval** → napojení na Pilíř 1 (kontext/pozornost).

## Postup naživo (~8 min)

1. **(0:00) Zadej prompt** v Claude Code, nech vygenerovat funkci. Nekomentuj kód.
2. **(1:30) Hlasování rukou:** „Kdo by tomuhle výsledku věřil a pustil to do analýzy?" (většina zvedne — vypadá to čistě.)
3. **(2:30) Spusť to.** Proběhne, vypíše ~0.09.
4. **(3:30) Odhal:** „sin(90°) je 1. Průměr má být 0.61, ne 0.09. A koukněte — sinus třicítky vyšel záporně." Pusť `python3 zkontroluj.py` → tabulka správně vs. chybně.
5. **(5:30) Pointa:** „Kód se nezhroutil. Nedal chybovou hlášku. Jen tiše vrátil špatnou vědu. Tohle je celých dalších 82 minut."
6. **(7:00) Most:** „Všimněte si dvou věcí — ten sloupec se jmenoval `uhel_stupne` (to je Pilíř 1), a odhalili jsme to jen proto, že jsme znali správnou odpověď (to je Pilíř 2)."

## Když to model naživo trefí SPRÁVNĚ (anti-fragilní pojistka)

Novější modely někdy samy přidají `np.radians`. Neztrácíš se — otočíš to:

> „Vidíte, někdy to trefí. Ale všimněte si — museli jste to ověřit proti známé
> odpovědi, abyste věděli, který případ je který. A přesně to je celý dnešek."

Obě varianty učí trust gap. Jako záloha máš navíc `typicka_chyba.py`
(„takhle to obvykle dopadne") a screencast z nácviku.

## Checklist před přednáškou

- [ ] **Nacvič 5–10×** na *přesně té verzi modelu*, kterou pustíš naživo. Ověř, že spolehlivě padá do `np.sin` bez radiánů.
- [ ] Kdyby model začal sám opravovat: zkus prompt ještě zkrátit, nebo přejdi na náhradní recept (české CSV — středník + desetinná čárka).
- [ ] **Nahraj screencast** povedeného buggy běhu jako fallback.
- [ ] Připrav terminál: velký font, adresář s `mereni.csv`, funkční `pandas`+`numpy` v prostředí modelu.
- [ ] Měj `zkontroluj.py` po ruce jako „reference se známou odpovědí" (běží i bez numpy).
- [ ] Na slidu měj velká čísla: **správně 0.6146 · model 0.0904**.

## Napojení na kurz

- **C4 — Trust gap:** plynulost ≠ správnost; sebejistota je konstantní, ne signál.
- **D2 — Verifikace:** ověřuj proti známé odpovědi, ne proti „proběhlo to".
- **D1 — Context / Pilíř 1:** informace (`uhel_stupne`) byla v okně, model ji ignoroval.
- **A3:** napsat kód (akcidentální) model zvládl; *rozumět, že je špatně* (esenciální) ne.
