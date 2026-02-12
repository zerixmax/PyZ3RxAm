export const examData = {
    questions: Array.from({ length: 48 }, (_, i) => ({
        id: i + 1,
        text: `Pitanje broj ${i + 1}`,
        type: i % 5 === 0 ? 'CHECKBOX' : 'DANE', // Every 5th question is a checkbox
        sets: {
            1: {
                correct: i % 5 === 0 ? ["Opcija A", "Opcija C"] : (i % 2 === 0 ? "DA" : "NE"),
                options: i % 5 === 0 ? ["Opcija A", "Opcija B", "Opcija C", "Opcija D"] : null
            },
            2: {
                correct: i % 5 === 0 ? ["Opcija B", "Opcija D"] : (i % 2 !== 0 ? "DA" : "NE"),
                options: i % 5 === 0 ? ["Opcija A", "Opcija B", "Opcija C", "Opcija D"] : null
            },
            3: {
                correct: i % 5 === 0 ? ["Opcija A", "Opcija B"] : "DA",
                options: i % 5 === 0 ? ["Opcija A", "Opcija B", "Opcija C", "Opcija D"] : null
            }
        }
    }))
};
