/* PyZ3R xam - Upute za VSC zadatke */
export const guidesData = [
    {
        id: "GUIDE_CSV",
        title: "📝 Zadatak: CSV datoteke",
        subtitle: "z2_q.py — Rad s CSV datotekama u VSC-u",
        sections: [
            {
                heading: "1. Funkcija write_books_to_csv(filename, books)",
                description: "Cilj ove funkcije je primiti listu rječnika (dict) i spremiti ih u tekstualnu datoteku u CSV formatu.",
                bullets: [
                    "**Otvaranje datoteke**: Koristi `with open(filename, \"w\", encoding=\"utf-8\")` kako bi bio siguran da će se datoteka pravilno zatvoriti.",
                    "**Zaglavlje (Header)**: Prvo moraš ručno upisati prvi redak koji definira stupce: `title,author,pages\\n`.",
                    "**Prolazak kroz podatke**: Koristi `for` petlju za prolazak kroz listu `books`.",
                    "**Formatiranje retka**: Za svaki rječnik u listi izvadi vrijednosti pomoću ključeva (`book[\"title\"]`, itd.) i spoji ih u jedan string odvojen zarezima. Na kraju svakog retka obavezno dodaj znak za novi red `\\n`."
                ]
            },
            {
                heading: "2. Funkcija average_pages_from_csv(filename)",
                description: "Ovdje radiš obrnut proces: čitaš datoteku, filtriraš podatke i računaš prosjek.",
                bullets: [
                    "**Inicijalizacija**: Pripremi varijable za zbroj stranica (`total_pages`) i brojač valjanih knjiga (`count`).",
                    "**Čitanje i preskakanje zaglavlja**: Prilikom čitanja datoteke (npr. pomoću `file.readlines()`), preskoči prvi element liste (indeks 0) jer je to zaglavlje.",
                    "**Čišćenje i provjera**: U petlji koristi `.strip()` na svakom retku da ukloniš nevidljive znakove i `\\n`. Ako je redak prazan nakon čišćenja, koristi `continue` da ga preskočiš.",
                    "**Izdvajanje broja stranica**: Podijeli redak pomoću `.split(\",\")`. Zadnji element u tom nizu je broj stranica. Pretvori ga u cijeli broj (`int()`).",
                    "**Izračun prosjeka**: Na kraju podijeli `total_pages` s `count`. **Važno**: Dodaj provjeru – ako je `count` nula, funkcija mora vratiti `0` kako bi izbjegao grešku dijeljenja s nulom."
                ]
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
