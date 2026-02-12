'use client';

import { useState } from 'react';
import { examData } from '@/data/examData';
import Timer from './Timer';
import NavigationGrid from './NavigationGrid';
import Results from './Results';

export default function Quiz() {
    const [currentSet, setCurrentSet] = useState(1);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    const currentQuestion = examData.questions[currentQuestionIndex];

    const handleSetChange = (set) => {
        setCurrentSet(set);
        // Reset answers when set changes? Or just keep them? 
        // Usually, changing a set in an exam context might change the correct answers, 
        // but the user might want to keep their current progress.
        // Given the prompt mention: "Gumbima biraš koji set varijacija učitavaš", 
        // I'll keep the answers but they will be compared against the new set.
    };

    /* PyZ3R_waz_here - Logika za više točnih odgovora */
    const handleAnswer = (option) => {
        if (currentQuestion.type === 'DANE') {
            setAnswers({ ...answers, [currentQuestionIndex]: option });
        } else {
            const currentSelection = answers[currentQuestionIndex] || [];
            const newSelection = currentSelection.includes(option)
                ? currentSelection.filter((item) => item !== option)
                : [...currentSelection, option];
            setAnswers({ ...answers, [currentQuestionIndex]: newSelection });
        }
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < examData.questions.length - 1) {
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

    if (isFinished) {
        return <Results answers={answers} setIndex={currentSet} onRestart={() => window.location.reload()} />;
    }

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8 flex flex-col items-center">
            {/* Header section with Timer and Set Selection */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center mb-8 gap-6 backdrop-blur-sm bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Ispit - Teorija Procesa
                    </h1>
                    <div className="flex gap-2">
                        {[1, 2, 3].map((set) => (
                            <button
                                key={set}
                                onClick={() => handleSetChange(set)}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${currentSet === set
                                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                                    }`}
                            >
                                SET {set}
                            </button>
                        ))}
                    </div>
                </div>
                <Timer durationSeconds={5400} onTimeUp={handleFinish} />
            </div>

            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Main Question Area */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl min-h-[400px] flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">
                                    Pitanje {currentQuestionIndex + 1} od {examData.questions.length}
                                </span>
                                <span className="bg-slate-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                                    {currentQuestion.type}
                                </span>
                            </div>

                            <h2 className="text-2xl font-semibold mb-8 leading-relaxed">
                                {currentQuestion.text}
                            </h2>

                            {currentQuestion.type === 'DANE' ? (
                                <div className="flex gap-4">
                                    {['DA', 'NE'].map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleAnswer(option)}
                                            className={`flex-1 py-6 rounded-2xl text-xl font-black transition-all transform active:scale-95 ${answers[currentQuestionIndex] === option
                                                ? option === 'DA'
                                                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 ring-4 ring-emerald-500/20'
                                                    : 'bg-rose-500 text-white shadow-lg shadow-rose-500/40 ring-4 ring-rose-500/20'
                                                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-3">
                                    {currentQuestion.sets[currentSet].options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleAnswer(option)}
                                            className={`w-full p-4 rounded-xl text-left font-medium transition-all flex items-center gap-4 ${(answers[currentQuestionIndex] || []).includes(option)
                                                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20 ring-2 ring-blue-400'
                                                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                                }`}
                                        >
                                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${(answers[currentQuestionIndex] || []).includes(option) ? 'bg-white border-white' : 'border-slate-500'
                                                }`}>
                                                {(answers[currentQuestionIndex] || []).includes(option) && (
                                                    <span className="text-blue-500 font-bold">✓</span>
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
                                className="px-6 py-3 rounded-xl font-bold bg-slate-700 text-slate-300 disabled:opacity-30 hover:bg-slate-600 transition-all"
                            >
                                ← Prethodno
                            </button>

                            {currentQuestionIndex === examData.questions.length - 1 ? (
                                <button
                                    onClick={handleFinish}
                                    className="px-8 py-3 rounded-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                                >
                                    Završi Ispit
                                </button>
                            ) : (
                                <button
                                    onClick={nextQuestion}
                                    className="px-8 py-3 rounded-xl font-bold bg-slate-100 text-slate-900 transition-all hover:bg-white"
                                >
                                    Sljedeće →
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    <NavigationGrid
                        totalQuestions={examData.questions.length}
                        currentQuestionIndex={currentQuestionIndex}
                        onNavigate={setCurrentQuestionIndex}
                        answers={answers}
                    />

                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl space-y-4">
                        <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Statistika</h4>
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="text-3xl font-black text-white">{Object.keys(answers).length}</span>
                                <span className="text-slate-500 text-sm ml-1">/ 48</span>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-slate-500 uppercase font-bold">Riješeno</p>
                                <div className="w-32 h-2 bg-slate-700 rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-blue-500 transition-all duration-500"
                                        style={{ width: `${(Object.keys(answers).length / 48) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
