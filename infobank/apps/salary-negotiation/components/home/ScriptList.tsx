import Link from 'next/link';
import { Script } from '@/types';
import { ArrowRight, Copy, MessageSquare } from 'lucide-react';

interface ScriptListProps {
    scripts: Script[];
}

export function ScriptList({ scripts }: ScriptListProps) {
    return (
        <section className="py-12 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Copy/Paste Scripts</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {scripts.map((item) => (
                        <Link
                            key={item.id}
                            href={`/scripts/${item.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 transition-all hover:bg-slate-750 hover:ring-1 hover:ring-emerald-500"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                        {item.scenario}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                    {item.name}
                                </h3>

                                <div className="bg-slate-900/50 p-3 rounded mb-4 text-sm text-slate-400 italic font-serif border-l-2 border-emerald-500/30">
                                    "{item.wordForWord.slice(0, 80)}..."
                                </div>

                                <div className="mt-auto pt-4 border-t border-slate-700/50">
                                    <div className="flex items-center text-sm text-emerald-400 font-medium">
                                        View Full Script <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
