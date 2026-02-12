'use client';

import { useState } from 'react';
import { examData } from '@/data/examData';
import NavigationGrid from './NavigationGrid';
import Results from './Results';

const HackerSignature = () => {
    return (
        <div className="bg-black border border-[#00ff41] p-4 mb-6 shadow-[0_0_15px_#00ff41] text-[#00ff41] font-mono text-[8px] md:text-[10px] w-full max-w-5xl">
            <pre className="leading-tight overflow-x-auto">
                {`
██████╗ ██╗   ██╗███████╗██████╗ ██████╗ 
██╔══██╗╚██╗ ██╔╝╚══███╔╝╚════██╗██╔══██╗
██████╔╝ ╚████╔╝   ███╔╝  █████╔╝██████╔╝
██╔═══╝   ╚██╔╝   ███╔╝   ╚═══██╗██╔══██╗
██║        ██║   ███████╗██████╔╝██║  ██║
╚═╝        ╚═╝   ╚══════╝╚═════╝ ╚═╝  ╚═╝
`}
            </pre>
            <div className="text-right mt-2 text-[10px] opacity-80 uppercase tracking-widest">[ SYSTEM READY: VJEŽBA_04_03_2026 ]</div>
        </div>
    );
};

export default function Quiz() {
    const [currentSet, setCurrentSet] = useState('SET_1_OSNOVE');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    const setKeys = Object.keys(examData);
    const questionsInSet = examData[currentSet];
    const currentQuestion = questionsInSet[currentQuestionIndex];

    /* PyZ3R_waz_here - Podrška za Checkbox bez Timera */
    const handleAnswer = (answer) => {
        if (currentQuestion.type === "checkbox") {
            const oldAnswers = answers[currentQuestionIndex] || [];
            const newAnswers = oldAnswers.includes(answer)
                ? oldAnswers.filter(a => a !== answer)
                : [...oldAnswers, answer];

            setAnswers({ ...answers, [currentQuestionIndex]: newAnswers });
        } else {
            setAnswers({ ...answers, [currentQuestionIndex]: answer });
        }
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questionsInSet.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    if (isFinished) {
        return (
            <Results
                questions={questionsInSet}
                userAnswers={answers}
                onRestart={() => {
                    setAnswers({});
                    setCurrentQuestionIndex(0);
                    setIsFinished(false);
                }}
                setIndex={currentSet}
            />
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8 flex flex-col items-center">
            <HackerSignature />

            <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center mb-8 gap-6 backdrop-blur-sm bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Python osnove
                    </h1>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {setKeys.map((setName) => (
                            <button
                                key={setName}
                                onClick={() => {
                                    setCurrentSet(setName);
                                    setCurrentQuestionIndex(0);
                                    setAnswers({});
                                }}
                                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${currentSet === setName
                                    ? 'bg-[#00ff41] text-black shadow-[0_0_10px_#00ff41]'
                                    : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                                    }`}
                            >
                                {setName.replace(/_/g, ' ')}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-6">
                    <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl min-h-[450px] flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">
                                    Pitanje {currentQuestionIndex + 1} od {questionsInSet.length}
                                </span>
                                <span className="bg-slate-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                                    {currentQuestion.type === 'boolean' ? 'DA/NE' : 'VIŠE TOČNIH'}
                                </span>
                            </div>

                            <h2 className="text-2xl font-semibold mb-8 leading-relaxed">
                                {currentQuestion.text}
                            </h2>

                            {currentQuestion.type === 'boolean' ? (
                                <div className="flex gap-4">
                                    {['DA', 'NE'].map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleAnswer(option)}
                                            className={`flex-1 py-6 rounded-2xl text-xl font-black transition-all transform active:scale-95 ${answers[currentQuestionIndex] === option
                                                ? option === 'DA'
                                                    ? 'bg-emerald-500 text-white shadow-lg'
                                                    : 'bg-rose-500 text-white shadow-lg'
                                                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-3">
                                    {currentQuestion.options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleAnswer(option)}
                                            className={`w-full p-4 rounded-xl text-left font-medium transition-all flex items-center gap-4 ${(answers[currentQuestionIndex] || []).includes(option)
                                                ? 'bg-blue-500 text-white shadow-lg'
                                                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                                }`}
                                        >
                                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${(answers[currentQuestionIndex] || []).includes(option) ? 'bg-white border-white' : 'border-slate-500'
                                                }`}>
                                                {(answers[currentQuestionIndex] || []).includes(option) && (
                                                    <span className="text-blue-500 font-bold text-xs">✓</span>
                                                )}
                                            </div>
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-700">
                            <button
                                onClick={prevQuestion}
                                disabled={currentQuestionIndex === 0}
                                className="px-6 py-3 rounded-xl font-bold bg-slate-700 text-slate-300 disabled:opacity-30 hover:bg-slate-600"
                            >
                                ← Prethodno
                            </button>

                            {currentQuestionIndex === questionsInSet.length - 1 ? (
                                <button
                                    onClick={() => setIsFinished(true)}
                                    className="px-8 py-3 rounded-xl font-bold bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                                >
                                    Završi Ispit
                                </button>
                            ) : (
                                <button
                                    onClick={nextQuestion}
                                    className="px-8 py-3 rounded-xl font-bold bg-slate-100 text-slate-900 hover:bg-white"
                                >
                                    Sljedeće →
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 space-y-6">
                    <NavigationGrid
                        totalQuestions={questionsInSet.length}
                        currentQuestionIndex={currentQuestionIndex}
                        onNavigate={setCurrentQuestionIndex}
                        answers={answers}
                    />
                </div>
            </div>
        </div>
    );
}
