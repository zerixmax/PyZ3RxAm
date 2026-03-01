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
    }
];
