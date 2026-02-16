# Faza 3 — VSC Guide stranice + SET_5 update (16.02.2026.)

Ovaj dokument opisuje promjene napravljene u trećoj fazi razvoja projekta.

## 1. Zamjena SET_5_ALGEBRA_DEMO pitanja

Stari set od 21 pitanja o Bulovoj algebri zamijenjen je novim setom od 10 pitanja koji pokriva:

- Računalno razmišljanje (definicija, procesi)
- NumPy biblioteka
- Python sintaksne greške
- Usporedni operatori (`>`, `==`, `!=`, `<=`, `<`)
- Rječnici (dodavanje ključeva)
- Varijable u Pythonu (dinamičko tipiziranje)
- `json.dump()` vs `json.dumps()`
- SenseHAT senzori
- Immutable tipovi podataka

### Novi tipovi pitanja

Uvedeni su **CHECKBOX** (uppercase) i **DANE** tip. Logika u `Quiz.js` je ažurirana s `normalizeType()` funkcijom koja:
- `CHECKBOX` → `checkbox`
- `DANE` → `boolean`

**Datoteka**: `data/examData.js`

---

## 2. VSC Guide stranice (Upute za zadatke)

Dodane su dvije stranice s uputama za rješavanje Python zadataka u Visual Studio Code-u.

### Nova datoteka: `data/guidesData.js`

Sadrži podatke za dva vodiča:

| ID | Naslov | Zadatak |
|----|--------|---------|
| `GUIDE_CSV` | 📝 Zadatak: CSV datoteke | `z2_q.py` — `write_books_to_csv()` + `average_pages_from_csv()` |
| `GUIDE_2` | 📝 Zadatak: Liste i uvjeti | `z5_q.py` — `split_books_by_length(pages, threshold=300)` |

### Nova komponenta: `components/Guide.js`

- Renderira vodič sa sekcijama, naslovima i bullet pointovima
- Inline formatiranje **bold** teksta i `code` blokova
- Gumb "← Natrag" za povratak na quiz
- Amber/narančasta tema za razlikovanje od quiz setova

### Izmjene u `components/Quiz.js`

- Dodana stanja: `viewMode` (`'quiz'` / `'guide'`) i `activeGuide`
- Dva nova amber gumba pored set selektora
- Kada je `viewMode === 'guide'`, prikazuje se `<Guide>` umjesto kviza
- `normalizeType()` — normalizira uppercase tipove pitanja

---

## 3. Trenutno stanje projekta

- **Ukupno quiz pitanja**: 88 (4 seta × 21 + 1 set × 10 - SET_5 smanjen)
- **VSC vodiča**: 2
- **Tipovi pitanja**: `boolean`, `checkbox`, `DANE`, `CHECKBOX`
- **Nove datoteke**: `data/guidesData.js`, `components/Guide.js`
- **Izmijenjene datoteke**: `data/examData.js`, `components/Quiz.js`
