/* PyZ3R xam - Upute za VSC zadatke */
export const guidesData = [
    {
        id: "GUIDE_CSV",
        title: "📝 Zadatak: CSV datoteke",
        subtitle: "z2_q.py — Rad s CSV datotekama u VSC-u",
        sections: [
            {
                heading: "Uvod",
                description: "Odličan plan! Idemo polako, liniju po liniju, da ti sve sjedne na mjesto. Prvo rješavamo funkciju `write_books_to_csv`.",
                bullets: []
            },
            {
                heading: "1. Korak: Otvaranje datoteke",
                description: "Prvo moramo otvoriti datoteku za pisanje (`\"w\"`). Koristit ćemo `with open` jer on automatski zatvara datoteku.",
                bullets: [
                    "Upiši ovo unutar prvog `# START SOLUTION` bloka:"
                ],
                code: "with open(filename, \"w\", encoding=\"utf-8\") as file:"
            },
            {
                heading: "2. Korak: Pisanje zaglavlja (Header)",
                description: "CSV datoteka mora imati prvi red koji kaže što je u kojem stupcu. Prema uputama, to su: `title,author,pages`.",
                bullets: [
                    "Dodaj ovu liniju (pazi na uvlačenje unutar `with` bloka):"
                ],
                code: "    file.write(\"title,author,pages\\n\")"
            },
            {
                heading: "3. Korak: Prolazak kroz listu knjiga",
                description: "Sada moramo proći kroz svaku knjigu u listi `books` pomoću `for` petlje.",
                bullets: [
                    "Dodaj:"
                ],
                code: "    for book in books:"
            },
            {
                heading: "4. Korak: Pisanje podataka",
                description: "Za svaku knjigu (koja je rječnik), moramo izvući vrijednosti i spojiti ih zarezima. Na kraju reda obavezno ide `\\n` za prelazak u novi red.",
                bullets: [
                    "Dodaj unutar `for` petlje:"
                ],
                code: "        line = f\"{book['title']},{book['author']},{book['pages']}\\n\"\n        file.write(line)"
            },
            {
                heading: "Konačni izgled koda",
                description: "Kako tvoj kôd sada treba izgledati u VSC-u:",
                bullets: [],
                code: "def write_books_to_csv(filename, books):\n    # START SOLUTION\n    with open(filename, \"w\", encoding=\"utf-8\") as file:\n        file.write(\"title,author,pages\\n\")\n        for book in books:\n            line = f\"{book['title']},{book['author']},{book['pages']}\\n\"\n            file.write(line)\n    # END SOLUTION"
            },
            {
                heading: "Funkcija average_pages_from_csv(filename)",
                description: "Upiši ovo unutar drugog `# START SOLUTION` bloka (linija 35):",
                bullets: []
            },
            {
                heading: "Priprema varijabli",
                description: "Moramo zbrojiti stranice i prebrojati koliko knjiga imamo.",
                bullets: [],
                code: "total_pages = 0\ncount = 0"
            },
            {
                heading: "Otvaranje datoteke za čitanje",
                description: "Otvaramo je s `\"r\"` (read).",
                bullets: [],
                code: "with open(filename, \"r\", encoding=\"utf-8\") as file:\n    lines = file.readlines()"
            },
            {
                heading: "Preskakanje prvog reda i zbrajanje",
                description: "Tvoja šifra kaže skip `[0]` – to radimo pomoću `lines[1:]`.",
                bullets: [],
                code: "for line in lines[1:]: \n    data = line.strip().split(\",\")\n    if len(data) == 3:  # Provjera imamo li sva 3 stupca\n        total_pages += int(data[2])  # Stranice su na indexu 2\n        count += 1"
            },
            {
                heading: "Povrat prosjeka",
                description: "Ako nema podataka, vrati 0 da ne bi bilo greške pri dijeljenju.",
                bullets: [],
                code: "if count == 0:\n    return 0\nreturn total_pages / count"
            },
            {
                heading: "Kako to izgleda u VSC-u (kompletno)",
                description: "Zalijepi ovo u onaj prazan prostor (linija 35):",
                bullets: [],
                code: "# START SOLUTION\ntotal_pages = 0\ncount = 0\n\nwith open(filename, \"r\", encoding=\"utf-8\") as file:\n    lines = file.readlines()\n\nfor line in lines[1:]:\n    data = line.strip().split(\",\")\n    if len(data) == 3:\n        total_pages += int(data[2])\n        count += 1\n\nreturn total_pages / count if count > 0 else 0\n# END SOLUTION"
            },
            {
                heading: "Savjeti za VSC",
                description: null,
                bullets: [
                    "Pazi na **uvlačenje (indentaciju)** unutar `# START SOLUTION` blokova jer izmjena koda izvan tih oznaka nije dopuštena.",
                    "Za rad s CSV-om u ovom zadatku **nemoj koristiti `import csv`** (osim ako ti nije izričito dopušteno), već vježbaj rad s osnovnim metodama za stringove (`split`, `strip`, `join`) jer to često traže na ispitima."
                ]
            }
        ]
    },
    {
        id: "GUIDE_2",
        title: "📝 Zadatak: Liste i uvjeti",
        subtitle: "z5_q.py — Logika listi i uvjetno grananje u VSC-u",
        sections: [
            {
                heading: "Objašnjenje zadatka (Logika razvrstavanja)",
                description: "Zadatak se temelji na iteraciji i kondicionalnom grananju. Cilj je jednom proći kroz ulaznu listu i svaki element, ovisno o njegovoj vrijednosti u odnosu na prag (threshold), 'pospremiti' u odgovarajuću novu listu.",
                bullets: []
            },
            {
                heading: "Kod za implementaciju",
                description: "Ovaj kôd ide unutar funkcije `split_books_by_length`. Pazi na indentaciju!",
                bullets: [],
                code: "# 1. Inicijalizacija: Stvori prazne liste za razvrstavanje\nshort_books = []\nlong_books = []\n\n# 2. Iteracija: Prođi kroz svaku stavku u izvornoj listi\nfor page in pages:\n    # 3. Validacija: Provjeri uvjet praga\n    if page < threshold:\n        short_books.append(page) # Dodaj u listu ispod praga\n    else:\n        long_books.append(page)  # Dodaj u listu iznad/na pragu\n\n# 4. Return: Vrati obje liste kao rezultat\nreturn short_books, long_books"
            },
            {
                heading: "Ključne točke za zapamtiti",
                description: null,
                bullets: [
                    "`threshold=300`: To je zadani (default) parametar; ako ga pozivatelj ne pošalje, Python koristi 300.",
                    "**`append()`**: Metoda koja dodaje element na kraj postojeće liste; liste su **mutable** (promjenjive).",
                    "**Redoslijed**: Zadatak zahtijeva zadržavanje izvornog redoslijeda, što `for` petlja i `append` prirodno rade."
                ]
            }
        ]
    },
    {
        id: "GUIDE_FIBONACCI",
        title: "📝 Zadatak: Fibonaccijev niz",
        subtitle: "z3_q.py — Logika generiranja Fibonaccijevog niza",
        sections: [
            {
                heading: "1. Korak: Provjera ulaza",
                description: "Prvo moramo provjeriti je li broj `n` manji ili jednak nuli. Ako jest, vraćamo praznu listu.",
                bullets: [],
                code: "if n <= 0:\n    return []"
            },
            {
                heading: "2. Korak: Specijalni slučaj (n=1)",
                description: "Ako se traži samo jedan element, Fibonaccijev niz počinje s 0.",
                bullets: [],
                code: "if n == 1:\n    return [0]"
            },
            {
                heading: "3. Korak: Inicijalizacija i petlja",
                description: "Napravi početnu listu i dodaj brojeve dok ih ne bude `n`. Svaki novi broj je zbroj zadnja dva.",
                bullets: [
                    "Hint: novi = logos_niz[-1] + logos_niz[-2]"
                ],
                code: "logos_niz = [0, 1]\nfor i in range(2, n):\n    novi = logos_niz[-1] + logos_niz[-2]\n    logos_niz.append(novi)"
            },
            {
                heading: "4. Korak: Vraćanje rezultata",
                description: "Vrati točno `n` elemenata koristeći slicing `[:n]` za svaki slučaj.",
                bullets: [],
                code: "return logos_niz[:n]"
            },
            {
                heading: "Konačni izgled koda",
                description: "Ovako bi trebala izgledati tvoja funkcija:",
                bullets: [],
                code: "def fibernaci_niz(n):\n    if n <= 0 :\n        return []\n    if n == 1:\n        return [0]\n    \n    logos_niz = [0, 1]\n    for i in range(2, n):\n        novi = logos_niz[-1] + logos_niz[-2]\n        logos_niz.append(novi)\n        \n    return logos_niz[:n]"
            }
        ]
    },
    {
        id: "GUIDE_AGILE",
        title: "🚀 Razvoj: Agile & CT",
        subtitle: "Metodologija i Računalno razmišljanje",
        sections: [
            {
                heading: "4 Stupa Računalnog razmišljanja (CT)",
                description: "Prije pisanja koda, problem analiziramo kroz 4 ključna koraka:",
                bullets: [
                    "**Dekompozicija**: Rastavljanje složenog problema na manje dijelove (npr. UI, Baza, API).",
                    "**Prepoznavanje uzoraka**: Traženje sličnosti (npr. proces izrade forme je uvijek sličan).",
                    "**Apstrakcija**: Fokus na bitno, ignoriranje nevažnih detalja.",
                    "**Algoritamsko razmišljanje**: Stvaranje preciznih koraka za rješenje."
                ]
            },
            {
                heading: "Dijagram toka (Flowchart)",
                description: "Vizualni prikaz algoritma pomoću standardnih simbola:",
                bullets: [
                    "**Oval/Elipsa**: Početak ili Kraj.",
                    "**Pravokutnik**: Proces ili akcija (npr. x = x + 1).",
                    "**Romb**: Odluka ili uvjet (IF/ELSE).",
                    "**Paralelogram**: Ulaz ili izlaz podataka (INPUT/PRINT)."
                ]
            },
            {
                heading: "Agile & Scrum",
                description: "Moderni razvoj se odvija u Sprintovima (1-4 tjedna).",
                bullets: [
                    "**Product Owner**: Definira viziju i prioritete.",
                    "**Scrum Master**: Uklanja prepreke i pomaže timu.",
                    "**Product Backlog**: Lista svih želja i funkcionalnosti.",
                    "**Increment**: Funkcionalni dio aplikacije gotov na kraju Sprinta."
                ]
            }
        ]
    },
    {
        id: "GUIDE_PYTHON_BASICS",
        title: "🐍 Osnove: Python 101",
        subtitle: "Sintaksa, varijable i osnovni tipovi",
        sections: [
            {
                heading: "Karakteristike jezika",
                description: "Python je interpretiran, dinamički tipiziran i case-sensitive jezik.",
                bullets: [
                    "**Interpretiran**: Čita se liniju po liniju.",
                    "**Dinamički tipiziran**: Tip varijable se određuje automatski.",
                    "**Case-sensitive**: `x` i `X` su različite varijable."
                ]
            },
            {
                heading: "Varijable i Tipovi",
                description: "Koristimo snake_case za imenovanje varijabli.",
                bullets: [
                    "**int**: Cijeli brojevi (5, -10).",
                    "**float**: Decimalni (3.14).",
                    "**str**: Tekst unutar navodnika (`\"abc\"`).",
                    "**bool**: Logičke vrijednosti (`True`, `False`)."
                ]
            },
            {
                heading: "Aritmetički Operatori",
                description: "Specifični operatori koje treba znati:",
                bullets: [
                    "`**`: Potenciranje (2 ** 3 = 8).",
                    "`//`: Cjelobrojno dijeljenje (7 // 2 = 3).",
                    "`%`: Modulo - ostatak dijeljenja (7 % 2 = 1)."
                ]
            },
            {
                heading: "Rad sa Stringovima",
                description: "Moderni f-stringovi i korisne metode:",
                bullets: [
                    "**f-string**: `f\"Pozdrav, {ime}!\"`",
                    "**Metode**: `.upper()`, `.lower()`, `.strip()` (miče razmake), `.replace()`."
                ],
                code: "ime = \"Luka\"\n# f-string formatiranje\nprint(f\"Pozdrav, {ime}!\")\n\n# Metode\nprint(\" python \".strip().upper()) # ISPISUJE: PYTHON"
            },
            {
                heading: "Pretvorba tipova (Casting)",
                description: "Često moramo pretvoriti string iz inputa u broj:",
                bullets: [
                    "`int(\"10\")` -> Broj 10",
                    "`str(10)` -> Tekst \"10\"",
                    "`float(5)` -> Decimalni 5.0"
                ]
            }
        ]
    },
    {
        id: "GUIDE_FUNCTIONS",
        title: "⚙️ Logika: Funkcije & Moduli",
        subtitle: "DRY princip i modularnost koda",
        sections: [
            {
                heading: "Anatomija funkcije (def)",
                description: "Funkcije koristimo kako ne bismo ponavljali isti kôd (DRY princip).",
                bullets: [
                    "**Ključna riječ**: `def` započinje definiciju.",
                    "**Return**: Vraća rezultat pozivatelju.",
                    "**Docstring**: Kratak opis unutar trostrukih navodnika."
                ],
                code: "def izracunaj_popust(cijena, postotak):\n    \"\"\"Vraća cijenu nakon popusta.\"\"\"\n    iznos = cijena * (postotak / 100)\n    return cijena - iznos\n\n# Poziv funkcije\nprint(izracunaj_popust(100, 20)) # 80.0"
            },
            {
                heading: "Parametri i Argumenti",
                description: "Funkcije mogu imati obavezne i zadane (default) parametre.",
                bullets: [
                    "**Zadani parametri**: `def pozdrav(ime, poruka=\"Bok\")`",
                    "**Imenovani argumenti**: Pomažu kod čitljivosti (`postotak=20, cijena=100`)."
                ],
                code: "def pozdrav(ime, poruka=\"Dobrodošli!\"):\n    print(f\"{poruka}, {ime}\")\n\npozdrav(\"Ivan\") # Ivan, Dobrodošli!\npozdrav(\"Ana\", \"Lijep pozdrav\") # Ana, Lijep pozdrav"
            },
            {
                heading: "Doseg varijabli (Scope)",
                description: "Varijable mogu biti lokalne (unutar funkcije) ili globalne.",
                bullets: [
                    "**Lokalne**: Postoje samo dok funkcija traje.",
                    "**Globalne**: Vidljive svuda, ali ih mijenjamo pomoću `global` ključne riječi."
                ]
            },
            {
                heading: "Lambda i Moduli",
                description: "Kratke funkcije (jednolinijske) i uvoz koda.",
                bullets: [
                    "**Lambda**: `kvadrat = lambda x: x * x`",
                    "**Import**: `import math` ili `from random import randint`.",
                    "**Pip**: Alat za instalaciju vanjskih paketa."
                ],
                code: "# Lambda primjer\nkvadrat = lambda x: x * x\nprint(kvadrat(5)) # 25\n\n# Moduli\nfrom math import sqrt\nprint(sqrt(16)) # 4.0"
            }
        ]
    },
    {
        id: "GUIDE_OOP",
        title: "💎 Arhitektura: OOP Osnove",
        subtitle: "Klase, objekti i 4 stupa OOP-a",
        sections: [
            {
                heading: "Klase i Objekti",
                description: "Klasa je nacrt (kalup), a objekt je konkretna instanca napravljena po tom nacrtu.",
                bullets: [
                    "**__init__**: Konstruktor koji postavlja početno stanje.",
                    "**self**: Poveznica na trenutni objekt.",
                    "**Atributi**: Podaci (varijable) unutar objekta.",
                    "**Metode**: Radnje (funkcije) koje objekt može izvesti."
                ],
                code: "class Vozilo:\n    def __init__(self, marka):\n        self.marka = marka\n        self.brzina = 0\n\n    def ubrzaj(self, iznos):\n        self.brzina += iznos\n        print(f\"{self.marka} vozi {self.brzina} km/h\")\n\nauto = Vozilo(\"Toyota\")\nauto.ubrzaj(30)"
            },
            {
                heading: "4 Stupa OOP-a",
                description: "Temeljni principi na kojima počiva objektno programiranje:",
                bullets: [
                    "**Enkapsulacija**: Skrivanje internih podataka (sigurnost).",
                    "**Nasljeđivanje**: Preuzimanje svojstava druge klase.",
                    "**Polimorfizam**: Ista metoda radi različito za različite objekte.",
                    "**Apstrakcija**: Prikaz samo bitnog, skrivanje kompleksnosti."
                ]
            },
            {
                heading: "Specijalne (Magic) Metode",
                description: "Metode s dvostrukom podvlakom koje Python koristi interno.",
                bullets: [
                    "**__str__**: Definira što se ispisuje kod `print(objekt)`.",
                    "**__init__**: Inicijalizacija objekta."
                ],
                code: "class Auto:\n    def __str__(self):\n        return \"Ja sam tvoj digitalni auto!\"\n\nauto = Auto()\nprint(auto) # Ja sam tvoj digitalni auto!"
            },
            {
                heading: "Poveznica s Django Modelima",
                description: "U Djangu je svaka tablica klasa, a svaki red objekt.",
                bullets: [
                    "**Model**: Definira tablicu kao klasu.",
                    "**QuerySet**: Objekt koji sadrži rezultate iz baze."
                ]
            }
        ]
    },
    {
        id: "GUIDE_SQL",
        title: "🗄️ Podaci: SQL & Baze",
        subtitle: "Trajnost podataka i CRUD operacije",
        sections: [
            {
                heading: "CRUD Operacije (SQL)",
                description: "Standardne operacije za rad s podacima u bazi:",
                bullets: [
                    "**Create (INSERT)**: Unos novih redova.",
                    "**Read (SELECT)**: Dohvat podataka.",
                    "**Update (UPDATE)**: Izmjena podataka.",
                    "**Delete (DELETE)**: Brisanje podataka."
                ],
                language: "sql",
                code: "-- Selektiranje s uvjetom\nSELECT ime, prezime FROM polaznici WHERE grad = 'Zagreb';\n\n-- Unos novih podataka\nINSERT INTO polaznici (ime, prezime, grad)\nVALUES ('Marko', 'Marković', 'Split');"
            },
            {
                heading: "Rad s SQLiteom u Pythonu",
                description: "SQLite je ugrađen u Python i ne zahtijeva vanjski server.",
                bullets: [
                    "**Connect**: Otvara vezu s datotekom.",
                    "**Cursor**: Objekt za izvršavanje upita.",
                    "**Commit**: Potvrđuje promjene u bazi."
                ],
                code: "import sqlite3\n\nconn = sqlite3.connect('baza.db')\ncursor = conn.cursor()\n\n# Izvršavanje upita (Placeholderi sprječavaju SQL Injection!)\ncursor.execute(\"SELECT * FROM users WHERE id = ?\", (user_id,))\n\nconn.commit()\nconn.close()"
            },
            {
                heading: "Relacije (Poveznice)",
                description: "Povezujemo tablice preko ključeva (Keys):",
                bullets: [
                    "**Primary Key (PK)**: Jedinstveni identifikator reda.",
                    "**Foreign Key (FK)**: Poveznica na PK druge tablice.",
                    "**1:N**: Jedan prema više (npr. Autor -> Knjige).",
                    "**M:N**: Više prema više (npr. Studenti -> Predmeti)."
                ]
            },
            {
                heading: "ORM (Django/SQLAlchemy)",
                description: "Tehnika koja omogućuje rad s bazom kao da su u pitanju Python objekti.",
                bullets: [
                    "**Prednost**: Veća sigurnost i čišći kôd.",
                    "**Efikasnost**: Lakša migracija između različitih baza (DBMS)."
                ]
            }
        ]
    },
    {
        id: "GUIDE_HTTP",
        title: "🌐 Mreža: Web & HTTP",
        subtitle: "Klijent-poslužitelj i JSON razmjena",
        sections: [
            {
                heading: "HTTP Protokol",
                description: "Svaka komunikacija na webu sastoji se od Zahtjeva (Request) i Odgovora (Response).",
                bullets: [
                    "**Request**: Metoda (GET, POST...), URL i zaglavlja.",
                    "**Response**: Statusni kod (200, 404...) i podaci."
                ]
            },
            {
                heading: "Statusni kodovi",
                description: "Brojevi koji govore što se dogodilo sa zahtjevom:",
                bullets: [
                    "**200 OK**: Uspjeh.",
                    "**404 Not Found**: Stranica ne postoji.",
                    "**500 Global Error**: Bug na serveru.",
                    "**403 Forbidden**: Nemaš pravo pristupa."
                ]
            },
            {
                heading: "HTTP Metode (Glagoli)",
                description: "Akcije koje klijent traži od servera:",
                bullets: [
                    "**GET**: Čitanje podataka.",
                    "**POST**: Slanje novih podataka.",
                    "**PUT/PATCH**: Ažuriranje.",
                    "**DELETE**: Brisanje."
                ]
            },
            {
                heading: "JSON Format",
                description: "Glavni format za razmjenu podataka između frontenda i backenda.",
                bullets: [
                    "**Serijalizacija**: Python rječnik -> JSON string.",
                    "**Deserijalizacija**: JSON string -> Python rječnik."
                ],
                language: "json",
                code: "{\n  \"tečaj\": \"Python\",\n  \"predavač\": \"Algebra\",\n  \"status\": 200\n}"
            },
            {
                heading: "REST API",
                description: "Stil arhitekture koji koristi URL rute i HTTP metode za rad s resursima.",
                bullets: [
                    "**Prednost**: Standardizacija i lakša integracija s Next.js-om."
                ]
            }
        ]
    },
    {
        id: "GUIDE_DJANGO",
        title: "🎸 Backend: Django Framework",
        subtitle: "The framework for perfectionists with deadlines",
        sections: [
            {
                heading: "MVT Arhitektura",
                description: "Django koristi Model-View-Template uzorak za organizaciju aplikacije.",
                bullets: [
                    "**Model**: Definira bazu podataka pomoću Python klasa.",
                    "**View**: Obrađuje logiku i HTTP zahtjeve.",
                    "**Template**: Generira HTML koji korisnik vidi."
                ]
            },
            {
                heading: "Django Admin & URL Dispatcher",
                description: "Automatsko sučelje i čisti URL-ovi su srce Djanga.",
                bullets: [
                    "**Admin**: Profesionalno sučelje bez pisanja koda.",
                    "**URLs**: Mapiranje web adresa na View funkcije u `urls.py`."
                ],
                code: "# urls.py primjer\nfrom django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path('kontakt/', views.kontakt_page),\n]"
            },
            {
                heading: "ORM i Migracije",
                description: "Upravljanje bazom bez pisanja sirovog SQL-a.",
                bullets: [
                    "**makemigrations**: Bilježi promjene u modelima.",
                    "**migrate**: Primjenjuje promjene na stvarnu bazu."
                ]
            },
            {
                heading: "Forms & Sigurnost",
                description: "Django ima ugrađenu zaštitu od najčešćih napada.",
                bullets: [
                    "**Validacija**: Automatska provjera korisničkog unosa.",
                    "**Sigurnost**: CSRF, SQL Injection i XSS zaštita 'out-of-the-box'."
                ],
                code: "{% csrf_token %} <!-- Štiti forme od zlonamjernih zahtjeva -->"
            }
        ]
    }
];
