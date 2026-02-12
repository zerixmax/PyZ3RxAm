'use client';

export default function NavigationGrid({
    totalQuestions,
    currentQuestionIndex,
    onNavigate,
    answers
}) {
    return (
        <div className="bg-slate-800 p-4 rounded-xl shadow-inner max-w-sm mx-auto">
            <h3 className="text-white text-center mb-4 font-semibold uppercase tracking-wider text-sm">Navigacija</h3>
            <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: totalQuestions }, (_, i) => {
                    const isCurrent = i === currentQuestionIndex;
                    const isAnswered = answers[i] !== undefined && answers[i] !== null &&
                        (Array.isArray(answers[i]) ? answers[i].length > 0 : true);

                    return (
                        <button
                            key={i}
                            onClick={() => onNavigate(i)}
                            className={`
                w-10 h-10 flex items-center justify-center rounded-md text-sm font-bold transition-all duration-200 relative
                ${isCurrent
                                    ? 'bg-white text-slate-800 scale-110 shadow-lg ring-2 ring-blue-400 z-10'
                                    : isAnswered
                                        ? 'bg-emerald-600 text-emerald-100'
                                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }
              `}
                        >
                            <span className={isAnswered && !isCurrent ? 'opacity-30' : ''}>{i + 1}</span>
                            {isAnswered && !isCurrent && (
                                <span className="absolute inset-0 flex items-center justify-center text-rose-500 font-black text-xl pointer-events-none opacity-80">
                                    ✕
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
