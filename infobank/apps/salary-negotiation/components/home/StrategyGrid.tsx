import Link from 'next/link';
import { Strategy } from '@/types';
import { ArrowRight, Trophy } from 'lucide-react';

interface StrategyGridProps {
    strategies: Strategy[];
}

export function StrategyGrid({ strategies }: StrategyGridProps) {
    return (
        <section className="py-12 bg-slate-800/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Strategies</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {strategies.map((item) => (
                        <Link
                            key={item.id}
                            href={`/strategies/${item.slug}`}
                            className="group flex flex-col p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-colors"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                    <Trophy className="w-5 h-5" />
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-400' :
                                        item.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400' :
                                            'bg-red-500/10 text-red-400'
                                    }`}>
                                    {item.difficulty}
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">{item.name}</h3>
                            <p className="text-sm text-slate-400 mb-4">{item.tagline}</p>

                            <div className="mt-auto">
                                <div className="flex items-center text-sm text-emerald-400 font-medium">
                                    Learn Strategy <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
