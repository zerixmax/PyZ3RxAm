```text
██████╗ ██╗   ██╗███████╗██████╗ ██████╗      ██╗  ██╗ █████╗ ███╗   ███╗
██╔══██╗╚██╗ ██╔╝╚══███╔╝╚════██╗██╔══██╗     ╚██╗██╔╝██╔══██╗████╗ ████║
██████╔╝ ╚████╔╝   ███╔╝  █████╔╝██████╔╝      ╚███╔╝ ███████║██╔████╔██║
██╔═══╝   ╚██╔╝   ███╔╝   ╚═══██╗██╔══██╗      ██╔██╗ ██╔══██║██║╚██╔╝██║
██║        ██║   ███████╗██████╔╝██║  ██║     ██╔╝ ██╗██║  ██║██║ ╚═╝ ██║
╚═╝        ╚═╝   ╚══════╝╚══════╝ ╚═╝  ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝
```

# PyZ3RxAM - Hacker Engine v2

PyZ3RxAM je moderna web aplikacija u **Matrix/Hacker** stilu za simulaciju ispita iz **Teorije Procesa**. Ovaj sustav je dizajniran za maksimalnu efikasnost učenja kroz interaktivno sučelje i dubinsku analizu pogrešaka.

## O čemu se radi?
Aplikacija nudi rekalibrirani sustav vježbanja s 4 specijalizirana seta po 21 pitanje. Svaki set pokriva ključna područja: Osnove algoritama, Django MTV, IoT i SQL.

### Ključne Značajke:
-   **Hakerska Estetika**: Retro vizualni stil s jarko zelenim tekstom i ASCII potpisom.
-   **Hakerski Savjet (Explanations)**: Svako pitanje dolazi s pedagoškim objašnjenjem koje se prikazuje kod netočnih odgovora.
-   **Dinamička Navigacija**: Grid koji se skalira prema broju pitanja (21 po setu) i brzi gumbi za prebacivanje setova.

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
