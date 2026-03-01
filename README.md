<p align="center">
  <img src="public/signature.svg" alt="PyZ3RxAM Logo" width="600">
</p>

# Python osnove - Hacker Engine v2

PyZ3RxAM je moderna web aplikacija u **Matrix/Hacker** stilu za simulaciju ispita iz **Python osnova i Teorije Procesa**. Ovaj sustav je dizajniran za maksimalnu efikasnost učenja kroz interaktivno sučelje i dubinsku analizu pogrešaka.

## O čemu se radi?
Aplikacija nudi rekalibrirani sustav vježbanja s **5 specijaliziranih setova pitanja** (ukupno 94 varijacije) i **3 interaktivna vodiča** za rješavanje Python zadataka u Visual Studio Code-u. Svaki set pokriva ključna područja: Osnove algoritama, Django MTV, IoT, SQL i mješoviti demo.

### Ključne Značajke:
-   **Hakerska Estetika**: Retro vizualni stil s jarko zelenim tekstom i ASCII potpisom.
-   **Hakerski Savjet (Explanations)**: Svako pitanje dolazi s pedagoškim objašnjenjem koje se prikazuje kod netočnih odgovora.
-   **Dinamička Navigacija**: Grid koji se skalira prema broju pitanja i brzi gumbi za prebacivanje setova.
-   **📝 VSC Vodiči**: Tri stranice s korak-po-korak uputama za rješavanje Python zadataka (`z2_q.py`, `z5_q.py`, `z3_q.py`).

## Struktura projekta

```
PyZ3RxAM/
├── app/
│   ├── globals.css          # Globalni stilovi
│   ├── layout.js            # Root layout
│   └── page.js              # Glavna stranica
├── components/
│   ├── Guide.js             # Komponenta za prikaz VSC uputa
│   ├── NavigationGrid.js    # Grid navigacija po pitanjima
│   ├── Quiz.js              # Glavna quiz logika
│   └── Results.js           # Analiza rezultata
├── data/
│   ├── examData.js          # Baza pitanja (5 setova)
│   └── guidesData.js        # Sadržaj VSC vodiča (3 zadatka)
├── docs/                    # Projektna dokumentacija
├── out/                     # Statički build (npm run build)
└── public/                  # Statički resursi
```

## Setovi pitanja

| Set | Područje | Pitanja |
|-----|----------|---------|
| SET_1_OSNOVE | Osnove algoritama i CT | 21 |
| SET_2_DJANGO | Django MVT i arhitektura | 21 |
| SET_3_IOT | IoT senzori i protokoli | 21 |
| SET_4_SQL | SQL DML i SQLite | 21 |
| SET_5_ALGEBRA_DEMO | Mješoviti demo (Python, CT, senzori) | 10 |

## VSC Vodiči

| Vodič | Zadatak | Opis |
|-------|---------|------|
| 📝 CSV datoteke | `z2_q.py` | `write_books_to_csv()` + `average_pages_from_csv()` |
| 📝 Liste i uvjeti | `z5_q.py` | `split_books_by_length(pages, threshold=300)` |
| 📝 Fibonaccijev niz | `z3_q.py` | `fibernaci_niz(n)` generiranje niza |

## Tipovi pitanja
- **DA/NE** (`boolean` / `DANE`) — Klasično true/false pitanje.
- **Više točnih** (`checkbox` / `CHECKBOX`) — Označavanje više točnih odgovora.

## Zahtjevi za pokretanje

### Sistemski zahtjevi
- **Node.js**: v20.9.0 ili novija
- **npm**: Dolazi uz Node.js

### Projektne ovisnosti
- **next**: 16.1.6 (React framework)
- **react** / **react-dom**: 19.2.3
- **tailwindcss**: Hakerski zeleni dizajn

### Pokretanje lokalno

```bash
# 1. Instalacija paketa
npm install

# 2. Razvojni server
npm run dev

# 3. Produkcijski build (statički izvoz u /out)
npm run build
```

Otvori `http://localhost:3000` u pregledniku.
