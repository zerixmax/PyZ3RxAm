'use client';

export default function Results({ allQuestions, answers, onRestart }) {
    const calculateResults = () => {
        let correctCount = 0;
        const errors = [];

        const checkCorrect = (userAns, correctAns, type) => {
            if (type === 'checkbox') {
                return userAns?.length === correctAns.length &&
                    userAns.every(val => correctAns.includes(val));
            }
            return userAns === correctAns;
        };

        allQuestions.forEach((q, index) => {
            const userAnswer = answers[index];
            const correctAnswer = q.correct;

            const isCorrect = checkCorrect(userAnswer, correctAnswer, q.type);

            if (isCorrect) {
                correctCount++;
            } else {
                errors.push({
                    id: q.id,
                    text: q.text,
                    topic: q.topic,
                    userAnswer: userAnswer || (q.type === 'boolean' ? 'Nije odgovoreno' : []),
                    correctAnswer: correctAnswer,
                    explanation: q.explanation
                });
            }
        });

        const percentage = ((correctCount / allQuestions.length) * 100).toFixed(2);
        const passed = percentage >= 90;

        return { correctCount, percentage, passed, errors };
    };

    const { correctCount, percentage, passed, errors } = calculateResults();

    return (
        <div className="min-h-screen bg-black text-[#00ff41] p-4 md:p-8 flex flex-col items-center font-mono">
            <div className="w-full max-w-4xl bg-black border-2 border-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.3)] rounded-xl p-8 space-y-8">
                <div className="text-center space-y-4 border-b-2 border-[#00ff41] pb-8">
                    <h2 className="text-5xl font-black uppercase tracking-tighter drop-shadow-[0_0_10px_#00ff41]">
                        IZVJEŠTAJ SUSTAVA
                    </h2>
                    <div className="text-7xl font-black animate-pulse">
                        {percentage}%
                    </div>
                    <p className="text-xl uppercase tracking-widest opacity-80">
                        TOČNOST: {correctCount} / {allQuestions.length}
                    </p>
                    <div className={`inline-block px-10 py-3 rounded-md font-black text-2xl border-4 ${passed ? 'border-[#00ff41] bg-[#00ff41]/10 text-[#00ff41]' : 'border-red-600 bg-red-600/10 text-red-600'
                        }`}>
                        {passed ? 'PROLAZ: STATUS AKTIVAN' : 'PAD: PRISTUP USKRAĆEN'}
                    </div>
                </div>

                {errors.length > 0 && (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black uppercase border-l-4 border-[#00ff41] pl-4">
                            ANALIZA POGREŠAKA ({errors.length})
                        </h3>
                        <div className="max-h-[500px] overflow-y-auto pr-4 space-y-6 custom-scrollbar scrollbar-matrix">
                            {errors.map((error, idx) => (
                                <div key={idx} className="bg-black border border-[#00ff41]/50 p-6 rounded-lg hover:border-[#00ff41] transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <p className="font-bold text-lg">
                                            <span className="opacity-50 mr-2">#{error.id}</span>
                                            {error.text}
                                        </p>
                                        <span className="text-[10px] bg-[#00ff41]/20 px-2 py-0.5 border border-[#00ff41]/30">
                                            {error.topic}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                        <div className="space-y-1">
                                            <p className="text-[10px] uppercase font-bold opacity-50">Tvoj unos</p>
                                            <p className="text-red-500 font-bold border-l-2 border-red-500 pl-2">
                                                {Array.isArray(error.userAnswer) ? error.userAnswer.join(', ') || 'PRAZNO' : error.userAnswer}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] uppercase font-bold opacity-50">Točan parametar</p>
                                            <p className="text-[#00ff41] font-bold border-l-2 border-[#00ff41] pl-2">
                                                {Array.isArray(error.correctAnswer) ? error.correctAnswer.join(', ') : error.correctAnswer}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-[#00ff41]/20">
                                        <p className="text-sm italic opacity-90 leading-relaxed">
                                            <span className="mr-2">💡</span>
                                            {error.explanation}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <button
                    onClick={onRestart}
                    className="w-full py-5 rounded-md font-black text-2xl bg-[#00ff41] text-black hover:bg-[#00cc33] hover:shadow-[0_0_30px_#00ff41] transition-all transform active:scale-95 uppercase tracking-tighter"
                >
                    PONOVNO POKRETANJE SUSTAVA
                </button>
            </div>
        </div>
    );
}
