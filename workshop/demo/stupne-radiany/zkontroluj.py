#!/usr/bin/env python3
"""Referenční kontrola pro demo „stupně vs. radiány".

Spusť to PO odhalení chyby, ať publiku ukážeš SPRÁVNOU (známou) odpověď vedle
té, kterou model typicky vyplivne. Používá jen standardní knihovnu — běží
i na holém Pythonu bez numpy/pandas, takže tě záloha nikdy nenechá ve štychu.

    python3 zkontroluj.py
"""
import csv
import math
import os

CESTA = os.path.join(os.path.dirname(__file__), "mereni.csv")


def nacti_uhly(cesta=CESTA):
    with open(cesta, newline="", encoding="utf-8") as f:
        return [float(r["uhel_stupne"]) for r in csv.DictReader(f)]


def prumer(xs):
    return sum(xs) / len(xs)


uhly = nacti_uhly()
spravne = [math.sin(math.radians(u)) for u in uhly]  # stupně -> radiány -> sin
chybne = [math.sin(u) for u in uhly]                 # BUG: stupně brané jako radiány

print(f"{'úhel°':>6} | {'správně sin':>12} | {'chybně sin(°)':>14}")
print("-" * 40)
for u, s, c in zip(uhly, spravne, chybne):
    vlajka = "  <- záporný?!" if c < 0 else ""
    print(f"{u:>6.0f} | {s:>12.4f} | {c:>14.4f}{vlajka}")
print("-" * 40)
print(f"{'PRŮMĚR':>6} | {prumer(spravne):>12.4f} | {prumer(chybne):>14.4f}")
print()
print("Správně: 0.6146   |   Model (np.sin na stupních): 0.0904")
print("Sinus ostrého úhlu záporný = fyzikální nesmysl. A kód to vyplivl bez mrknutí.")
