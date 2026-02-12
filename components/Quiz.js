'use client';

import { useState, useMemo } from 'react';
import { examData } from '@/data/examData';
import NavigationGrid from './NavigationGrid';
import Results from './Results';

const HackerSignature = () => {
    return (
        <div className="hacker-container" style={{
            backgroundColor: '#000',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #00ff41',
            boxShadow: '0 0 15px #00ff41',
            marginBottom: '30px',
            overflowX: 'auto'
        }}>
            <pre style={{
                color: '#00ff41', // Matrix zelena
                fontFamily: '"Courier New", Courier, monospace',
                fontSize: '12px',
                fontWeight: 'bold',
                lineHeight: '1.2',
                textShadow: '0 0 8px #00ff41',
                margin: '0'
            }}>
                {`
██████╗ ██╗   ██╗███████╗██████╗ ██████╗      ██╗  ██╗ █████╗ ███╗   ███╗
██╔══██╗╚██╗ ██╔╝╚══███╔╝╚════██╗██╔══██╗     ╚██╗██╔╝██╔══██╗████╗ ████║
██████╔╝ ╚████╔╝   ███╔╝  █████╔╝██████╔╝      ╚███╔╝ ███████║██╔████╔██║
██╔═══╝   ╚██╔╝   ███╔╝   ╚═══██╗██╔══██╗      ██╔██╗ ██╔══██║██║╚██╔╝██║
██║        ██║   ███████╗██████╔╝██║  ██║     ██╔╝ ██╗██║  ██║██║ ╚═╝ ██║
╚═╝        ╚═╝   ╚══════╝╚══════╝ ╚═╝  ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝
`}
            </pre>
            <div style={{
                color: '#00ff41',
                textAlign: 'right',
                fontSize: '0.8rem',
                marginTop: '5px',
                fontStyle: 'italic',
                opacity: '0.8'
            }}>
                [ SYSTEM READY: VJEŽBA_04_03_2026 ]
            </div>
        </div>
    );
};

export default function Quiz() {
    const [currentSetKey, setCurrentSetKey] = useState('SET_1');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    // Combine all questions for the grid (1-48) or handle per set?
    // The user said "Tablica s brojevima od 1 do 48", but also "biras koji set ucitas".
    // If we want 1-48 in the grid, we should probably flatten all sets.
    const allQuestions = useMemo(() => {
        return [...examData.SET_1, ...examData.SET_2, ...examData.SET_3];
    }, []);

    const currentQuestion = allQuestions[currentQuestionIndex];

    /* PyZ3R_waz_here - Podrška za Checkbox bez Timera */
    const handleAnswer = (answer) => {
        if (currentQuestion.type === "checkbox") {
            // Ako je checkbox, dodajemo/mičemo iz liste
            const oldAnswers = answers[currentQuestionIndex] || [];
            const newAnswers = oldAnswers.includes(answer)
                ? oldAnswers.filter(a => a !== answer)
                : [...oldAnswers, answer];

            setAnswers({ ...answers, [currentQuestionIndex]: newAnswers });
        } else {
            // Ako je DA/NE, spremamo samo taj string
            setAnswers({ ...answers, [currentQuestionIndex]: answer });
        }
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < allQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleFinish = () => {
        setIsFinished(true);
    };

    const jumpToSet = (setKey) => {
        setCurrentSetKey(setKey);
        const setFirstQuestionIndex = {
            'SET_1': 0,
            'SET_2': 16,
            'SET_3': 32
        };
        setCurrentQuestionIndex(setFirstQuestionIndex[setKey]);
    };

    if (isFinished) {
        return <Results allQuestions={allQuestions} answers={answers} onRestart={() => window.location.reload()} />;
    }

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8 flex flex-col items-center">
            <HackerSignature />
            {/* Header section with Timer and Set Selection */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center mb-8 gap-6 backdrop-blur-sm bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Ispit - Teorija Procesa
                    </h1>
                    <div className="flex gap-2">
                        {['SET_1', 'SET_2', 'SET_3'].map((setKey, idx) => (
                            <button
                                key={setKey}
                                onClick={() => jumpToSet(setKey)}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${(currentQuestionIndex >= idx * 16 && currentQuestionIndex < (idx + 1) * 16)
                                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                                    }`}
                            >
                                SET {idx + 1}
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
                                    Pitanje {currentQuestionIndex + 1} od {allQuestions.length}
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
                                                    ? 'bg-emerald-500 text-white'
                                                    : 'bg-rose-500 text-white'
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
                                                ? 'bg-blue-500 text-white'
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

                            {currentQuestionIndex === allQuestions.length - 1 ? (
                                <button
                                    onClick={handleFinish}
                                    className="px-8 py-3 rounded-xl font-bold bg-blue-500 text-white shadow-lg"
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
                        totalQuestions={allQuestions.length}
                        currentQuestionIndex={currentQuestionIndex}
                        onNavigate={setCurrentQuestionIndex}
                        answers={answers}
                    />
                </div>
            </div>
        </div>
    );
}
