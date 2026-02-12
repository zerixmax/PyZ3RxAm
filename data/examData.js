/* Pyz3R xam - Točno 21 pitanje po setu s objašnjenjima */
export const examData = {
    "SET_1_OSNOVE": Array.from({ length: 21 }, (_, i) => ({
        id: i + 1,
        text: `Pitanje iz Osnova broj ${i + 1}`,
        type: i % 5 === 0 ? 'checkbox' : 'boolean',
        correct: i % 5 === 0 ? ["Opcija A"] : "DA",
        options: i % 5 === 0 ? ["Opcija A", "Opcija B", "Opcija C"] : null,
        explanation: "Ovo je hakersko objašnjenje: Dekompozicija je ključna jer rastavlja problem na sitne dijelove."
    })),
    "SET_2_DJANGO": Array.from({ length: 21 }, (_, i) => ({
        id: i + 1,
        text: `Pitanje iz Djanga broj ${i + 1}`,
        type: 'boolean',
        correct: "NE",
        explanation: "Django MTV: Template je zadužen za HTML, a ne za logiku!"
    })),
    "SET_3_IOT": Array.from({ length: 21 }, (_, i) => ({
        id: i + 1,
        text: `IoT Pitanje broj ${i + 1}`,
        type: 'boolean',
        correct: "DA",
        explanation: "Senzori su ulazni uređaji koji šalju podatke u sustav."
    })),
    "SET_4_SQL": Array.from({ length: 21 }, (_, i) => ({
        id: i + 1,
        text: `SQL Pitanje broj ${i + 1}`,
        type: 'boolean',
        correct: "DA",
        explanation: "SELECT naredba je osnova DML-a za dohvat podataka."
    }))
};
