export const examData = {
    questions: Array.from({ length: 48 }, (_, i) => ({
        id: i + 1,
        text: `Pitanje broj ${i + 1} - Teorija Procesa`,
        type: i % 7 === 0 ? 'CHECKBOX' : 'DANE', // Mix of types
        sets: {
            1: {
                correct: i % 7 === 0 ? ["Opcija A", "Opcija B"] : (i % 2 === 0 ? "DA" : "NE"),
                options: i % 7 === 0 ? ["Opcija A", "Opcija B", "Opcija C", "Opcija D"] : null
            },
            2: {
                correct: i % 7 === 0 ? ["Opcija C", "Opcija D"] : (i % 2 !== 0 ? "DA" : "NE"),
                options: i % 7 === 0 ? ["Opcija A", "Opcija B", "Opcija C", "Opcija D"] : null
            },
            3: {
                correct: i % 7 === 0 ? ["Opcija A", "Opcija D"] : "DA",
                options: i % 7 === 0 ? ["Opcija A", "Opcija B", "Opcija C", "Opcija D"] : null
            }
        }
    }))
};
