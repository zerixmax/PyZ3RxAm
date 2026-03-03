# Dokumentacija - Cheat Sheet Nadogradnja (03.03.2026.)

Danas smo unaprijedili sustav uputa (Cheat Sheet) u PyZ3RxAM aplikaciji uvođenjem naprednog prikaza koda i nove sekcije temeljene na priručniku „Razvoj web-aplikacija u programskom jeziku Python”.

## Tehničke Promjene

### 1. Syntax Highlighting
- **Biblioteka**: Integrirana je `react-syntax-highlighter` biblioteka (Prism engine).
- **Stil**: Korišten je `vscDarkPlus` stil koji se savršeno uklapa u "Hacker" estetiku aplikacije.
- **Komponenta**: `Guide.js` je modificirana kako bi automatski prepoznavala i formatirala Python kod unutar uputa s pravilnim uvlačenjem i bojama.

### 2. Nova Sekcija: Razvoj Web Aplikacija
- **Izvor**: Priručnik „Razvoj web-aplikacija u programskom jeziku Python” (vidi sekciju "Zasluge").
- **Dodano**: „Računalno razmišljanje i Agile” (id: `GUIDE_AGILE`).
- **Dodano**: „Osnove: Python 101” (id: `GUIDE_PYTHON_BASICS`).
- **Dodano**: „Logika: Funkcije & Moduli” (id: `GUIDE_FUNCTIONS`).
- **Dodano**: „Arhitektura: OOP Osnove” (id: `GUIDE_OOP`).
- **Dodano**: „Podaci: SQL & Baze” (id: `GUIDE_SQL`).
- **Dodano**: „Mreža: Web & HTTP” (id: `GUIDE_HTTP`).
- **Dodano**: „Backend: Django Framework” (id: `GUIDE_DJANGO`).

## Kako dodati sadržaj
Nove upute se dodaju u `data/guidesData.js` u sljedećem formatu:
```javascript
{
    id: "ID_UPUTE",
    title: "Naslov",
    subtitle: "Podnaslov",
    sections: [
        {
            heading: "Naslov Dijela",
            description: "Opis koraka...",
            bullets: ["Bullet 1", "Bullet 2"],
            code: "print('Hello World')"
        }
    ]
}
```

## Provjera
1. Pokrenuti aplikaciju: `npm run dev`
2. Kliknuti na bilo koji "📝 Zadatak" gumb u zaglavlju.
3. Kôd bi trebao biti prikazan s punim bojama (syntax highlighting).

## Zasluge (Attribution)

Sadržaj ovih uputa temelji se na stručnoj literaturi:
- **Naslov**: Razvoj web-aplikacija u programskom jeziku Python – Priručnik
- **Autor**: Krunoslav Lujić
- **Urednica**: Lucija Bačani
- **Grad i godina**: Zagreb, 2025.
- **Izdavač**: Algebra
