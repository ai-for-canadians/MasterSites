import Link from 'next/link';
import { Technique } from '@/types';
import { ArrowRight, Flame } from 'lucide-react';

interface TechniqueGridProps {
    title: string;
    techniques: Technique[];
}

export function TechniqueGrid({ title, techniques }: TechniqueGridProps) {
    return (
        <section className="py-12 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">{title}</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {techniques.map((item) => (
                        <Link
                            key={item.id}
                            href={`/techniques/${item.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 transition-all hover:bg-slate-750 hover:ring-1 hover:ring-orange-500"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-400' :
                                            item.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400' :
                                                'bg-red-500/10 text-red-400'
                                        }`}>
                                        {item.difficulty}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                                    {item.tagline}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-700/50">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {item.bestFor.slice(0, 2).map((bf) => (
                                            <span key={bf} className="inline-flex items-center gap-1 text-xs text-slate-300 bg-slate-700/50 px-2 py-1 rounded">
                                                {bf}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center text-sm text-orange-400 font-medium">
                                        Master This <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
