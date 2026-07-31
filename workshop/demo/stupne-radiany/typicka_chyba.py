"""Typická chyba, kterou model vygeneruje na prompt:
„spočítej sinus každého úhlu a vrať jejich průměr".

Ponecháno ZÁMĚRNĚ CHYBNÉ — np.sin() čeká radiány, ne stupně, takže sloupec
`uhel_stupne` je interpretovaný špatně. Slouží k nácviku a jako fallback,
kdyby model naživo (překvapivě) napsal správné řešení: ukážeš tenhle soubor
jako „takhle to obvykle dopadne".

Vyžaduje: pandas, numpy  (proto to během přednášky pouštíš z prostředí modelu;
pro holou referenci bez závislostí použij zkontroluj.py).
"""
import os

import numpy as np
import pandas as pd


def prumerny_sinus(cesta):
    df = pd.read_csv(cesta)
    df["sin"] = np.sin(df["uhel_stupne"])   # <-- BUG: chybí np.radians(...)
    return df["sin"].mean()


if __name__ == "__main__":
    cesta = os.path.join(os.path.dirname(__file__), "mereni.csv")
    print(prumerny_sinus(cesta))   # vytiskne ~0.0904 místo 0.6146
