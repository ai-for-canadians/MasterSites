import Link from 'next/link';
import { Intervention } from '@/types';
import { BadgeCheck, ArrowRight } from 'lucide-react';

interface InterventionGridProps {
    title: string;
    interventions: Intervention[];
}

export function InterventionGrid({ title, interventions }: InterventionGridProps) {
    return (
        <section className="py-12 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">{title}</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {interventions.map((item) => (
                        <Link
                            key={item.id}
                            href={`/interventions/${item.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 transition-all hover:bg-slate-750 hover:ring-1 hover:ring-indigo-500"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.evidenceRating === 'A' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'
                                        }`}>
                                        Grade {item.evidenceRating}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                                    {item.tagline}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-700/50">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {item.benefits.slice(0, 2).map((benefit) => (
                                            <span key={benefit.name} className="inline-flex items-center gap-1 text-xs text-slate-300">
                                                <BadgeCheck className="w-3 h-3 text-indigo-500" />
                                                {benefit.name}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center text-sm text-indigo-400 font-medium">
                                        View Recommendation <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
