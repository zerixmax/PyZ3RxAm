'use client';

export default function Guide({ guide, onBack }) {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={onBack}
                        className="px-4 py-2 rounded-xl font-bold bg-slate-700 text-slate-300 hover:bg-slate-600 transition-all"
                    >
                        ← Natrag
                    </button>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                            {guide.title}
                        </h1>
                        <p className="text-slate-400 text-sm mt-1 font-mono">{guide.subtitle}</p>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-6">
                    {guide.sections.map((section, i) => (
                        <div
                            key={i}
                            className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl"
                        >
                            <h2 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#00ff41] inline-block shadow-[0_0_6px_#00ff41]"></span>
                                {section.heading}
                            </h2>

                            {section.description && (
                                <p className="text-slate-300 mb-4 leading-relaxed">
                                    {section.description}
                                </p>
                            )}

                            {section.bullets.length > 0 && (
                                <ul className="space-y-3">
                                    {section.bullets.map((bullet, j) => (
                                        <li
                                            key={j}
                                            className="flex gap-3 text-slate-300 leading-relaxed"
                                        >
                                            <span className="text-[#00ff41] mt-1 shrink-0">▸</span>
                                            <span dangerouslySetInnerHTML={{
                                                __html: bullet
                                                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                                                    .replace(/`(.*?)`/g, '<code class="bg-slate-700 text-amber-300 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
                                            }} />
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {section.code && (
                                <div className="mt-5 relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                    <pre className="relative bg-slate-900 border border-slate-700 rounded-xl p-4 overflow-x-auto font-mono text-sm text-amber-300 shadow-2xl">
                                        <code>{section.code}</code>
                                    </pre>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom back button */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={onBack}
                        className="px-8 py-3 rounded-xl font-bold bg-slate-700 text-slate-300 hover:bg-slate-600 transition-all"
                    >
                        ← Natrag na setove
                    </button>
                </div>
            </div>
        </div>
    );
}
