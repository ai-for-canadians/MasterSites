import Link from 'next/link';
import { System } from '@/types';
import { ArrowRight, Clock, Zap } from 'lucide-react';

interface SystemListProps {
    systems: System[];
}

export function SystemList({ systems }: SystemListProps) {
    return (
        <section className="py-12 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Popular Systems</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {systems.map((item) => (
                        <Link
                            key={item.id}
                            href={`/systems/${item.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 transition-all hover:bg-slate-750 hover:ring-1 hover:ring-yellow-500"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.difficulty === 'Easy' ? 'bg-green-500/10 text-green-400' :
                                            item.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' :
                                                'bg-red-500/10 text-red-400'
                                        }`}>
                                        {item.difficulty}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                                    {item.tagline}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-700/50">
                                    <div className="flex flex-wrap gap-4 mb-3 text-xs text-slate-300">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3 text-blue-400" />
                                            {item.timeToImplement}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Zap className="w-3 h-3 text-yellow-400" />
                                            {item.impact} Impact
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm text-yellow-400 font-medium">
                                        See How It Works <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
