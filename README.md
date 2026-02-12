# PyZ3RxAM - Sustav za Provjeru Znanja

PyZ3RxAM je moderna web aplikacija za simulaciju ispita iz **Teorije Procesa**. Cilj projekta je omogućiti korisnicima interaktivno vježbanje ispitnih pitanja uz trenutne rezultate i detaljne analize pogrešaka.

## O čemu se radi?
Aplikacija simulira stvarni ispitni okoliš s 48 pitanja. Podržava različite tipove pitanja (DA/NE i višestruki odabir) kroz tri različita seta varijacija. Korisnici mogu pratiti preostalo vrijeme, navigirati kroz pitanja i na kraju dobiti postotak točnosti s popisom svih pogrešno odgovorenih pitanja.

## Korištene Tehnologije
-   **Next.js (React Framework)**: Za brzinu, App Router arhitekturu i odličan UX.
-   **Tailwind CSS**: Za premium vizualni dizajn, tamni način rada (Dark Mode) i responzivnost.
-   **JavaScript (ES6+)**: Cijela logika aplikacije i podaci su pisani u čistom JavaScriptu.
-   **JSON/Static Objects**: Umjesto SQLite ili drugih baza, koristimo statičke objekte u `data/` mapi kako bi aplikacija bila ultra-brza i laka za postavljanje bez dodatnih ovisnosti.

## Zašto radimo ovaj projekt?
Ovaj projekt je nastao iz potrebe za jednostavnim, ali moćnim alatom za učenje koji:
1.  **Eliminira potrebu za instalacijom baza podataka**: Sve radi "iz kutije".
2.  **Pruža vizualnu povratnu informaciju**: Baš kao na pravom digitalnom ispitu.
3.  **Mobilnost**: Zahvaljujući Next.js-u i responzivnom dizajnu, ispit se može rješavati na računalu ili mobitelu.
4.  **Efikasnost**: Omogućuje brzo učenje kroz ponavljanje različitih setova varijacija (Set 1, 2, 3).

## Kako početi?
1.  Instalirajte ovisnosti: `npm install`
2.  Pokrenite razvojni server: `npm run dev`
3.  Otvorite: `http://localhost:3000`
