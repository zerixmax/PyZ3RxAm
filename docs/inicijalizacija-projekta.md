# Inicijalizacija Projekta - PyZ3RxAM

Ovaj dokument opisuje korake poduzete za inicijalizaciju projekta i osnovne tehničke odluke.

## Koraci Inicijalizacije
1.  **Next.js Setup**: Projekt je inicijaliziran pomoću `npx create-next-app@latest` s podrškom za JavaScript, Tailwind CSS i ESLint.
2.  **Struktura Mapa**:
    -   `app/`: Glavne rute i stranice aplikacije.
    -   `components/`: Modularne UI komponente (Quiz, Timer, NavigationGrid, Results).
    -   `data/`: Statički podaci za ispit (`examData.js`).
    -   `docs/`: Tehnička dokumentacija.
3.  **Tehnički Stack**:
    -   **Frontend**: Next.js (App Router).
    -   **Styling**: Tailwind CSS za moderan i responzivan dizajn.
    -   **State Management**: React Hooks (`useState`, `useEffect`) za upravljanje stanjem ispita.

## Konfiguracija
Projekt koristi standardni `postcss` i `tailwind` setup za CSS. Svi podaci se učitavaju iz statičkih JavaScript datoteka kako bi se izbjegla potreba za kompleksnom bazom podataka i olakšao deployment na bilo koji server.
