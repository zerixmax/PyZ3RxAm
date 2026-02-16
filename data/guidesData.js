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
                heading: "Analiza zadatka: split_books_by_length(pages, threshold=300)",
                description: "Cilj funkcije je razvrstati brojeve stranica iz jedne liste u dvije zasebne liste na temelju zadanog praga (threshold).",
                bullets: []
            },
            {
                heading: "1. Priprema praznih listi",
                description: null,
                bullets: [
                    "Unutar funkcije prvo definiraj dvije prazne liste. Na primjer: `below_threshold = []` i `above_threshold = []`."
                ]
            },
            {
                heading: "2. Prolazak kroz podatke (Iteracija)",
                description: null,
                bullets: [
                    "Koristi `for` petlju kako bi prošao kroz svaki element (svaki broj stranica) u ulaznoj listi `pages`."
                ]
            },
            {
                heading: "3. Logička provjera (Uvjet if)",
                description: null,
                bullets: [
                    "Unutar petlje provjeri je li trenutni broj stranica **manji** od zadanog praga `threshold`.",
                    "**Ako je manji**: Dodaj ga u prvu listu (koristi metodu `.append()`).",
                    "**Ako je jednak ili veći**: Dodaj ga u drugu listu (također pomoću `.append()`)."
                ]
            },
            {
                heading: "4. Povrat vrijednosti (Return)",
                description: null,
                bullets: [
                    "Na samom kraju funkcije, izvan petlje, moraš vratiti obje liste istovremeno.",
                    "U Pythonu to radiš tako da ih odvojiš zarezom: `return below_threshold, above_threshold`.",
                    "**Redoslijed je bitan** jer testovi očekuju prvo listu s manjim brojevima."
                ]
            },
            {
                heading: "Brzi šalabahteri za teorijska pitanja",
                description: null,
                bullets: [
                    "**Sintaksna greška (`a;=3`)**: Ako slučajno napišeš krivu interpunkciju izvan `# START SOLUTION`, Python će javiti **Syntax Error** jer ne prepoznaje pravila pisanja.",
                    "**Mutable vs Immutable**: Liste koje kreiraš u ovom zadatku su **mutable** (promjenjive) jer na njih primjenjuješ `.append()`. Da si koristio torku (tuple), to ne bi mogao raditi.",
                    "**Dekompozicija**: Ovaj zadatak je savršen primjer dekompozicije – veliki problem (razvrstavanje knjiga) rastavio si na manje korake: inicijalizacija listi → petlja → provjera → povrat."
                ]
            }
        ]
    }
];
