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
                    userAnswer: userAnswer || (q.type === 'boolean' ? 'Nije odgovoreno' : []),
                    correctAnswer: correctAnswer
                });
            }
        });

        const percentage = ((correctCount / allQuestions.length) * 100).toFixed(2);
        const passed = percentage >= 90;

        return { correctCount, percentage, passed, errors };
    };

    const { correctCount, percentage, passed, errors } = calculateResults();

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Rezultati Ispita</h2>
                    <div className={`text-6xl font-black ${passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {percentage}%
                    </div>
                    <p className="text-slate-400 font-medium">
                        Točno ste odgovorili na <span className="text-white font-bold">{correctCount}</span> od <span className="text-white font-bold">{allQuestions.length}</span> pitanja.
                    </p>
                    <div className={`inline-block px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm ${passed ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        }`}>
                        {passed ? 'PROLAZ' : 'PAD'}
                    </div>
                </div>

                <div className="space-y-4 pt-8 border-t border-slate-700">
                    <h3 className="text-xl font-bold text-slate-300">Netočni odgovori ({errors.length}):</h3>
                    <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                        {errors.map((error) => (
                            <div key={error.id} className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                                <p className="font-semibold text-slate-200 mb-2">
                                    <span className="text-slate-500 mr-2">#{error.id}</span>
                                    {error.text}
                                </p>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-slate-500 uppercase font-bold text-[10px] mb-1">Tvoj odgovor</p>
                                        <p className="text-rose-400 font-medium">
                                            {Array.isArray(error.userAnswer) ? error.userAnswer.join(', ') || 'Prazno' : error.userAnswer}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 uppercase font-bold text-[10px] mb-1">Točan odgovor</p>
                                        <p className="text-emerald-400 font-medium">
                                            {Array.isArray(error.correctAnswer) ? error.correctAnswer.join(', ') : error.correctAnswer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={onRestart}
                    className="w-full py-4 rounded-2xl font-black bg-white text-slate-900 hover:bg-slate-100 transition-all transform active:scale-[0.98]"
                >
                    POKUŠAJ PONOVNO
                </button>
            </div>
        </div>
    );
}
