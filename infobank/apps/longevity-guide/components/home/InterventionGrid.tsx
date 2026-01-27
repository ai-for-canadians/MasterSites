import Link from 'next/link';
import { Intervention } from '@/types';
import { BadgeCheck, Brain, Battery, Activity } from 'lucide-react';

interface InterventionGridProps {
    title: string;
    interventions: Intervention[];
}

function EvidenceBadge({ rating }: { rating: string }) {
    const colors = {
        A: 'bg-green-500/10 text-green-400 ring-green-500/20',
        B: 'bg-blue-500/10 text-blue-400 ring-blue-500/20',
        C: 'bg-yellow-500/10 text-yellow-400 ring-yellow-500/20',
        D: 'bg-orange-500/10 text-orange-400 ring-orange-500/20',
        F: 'bg-red-500/10 text-red-400 ring-red-500/20',
    };

    return (
        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${colors[rating as keyof typeof colors]}`}>
            Grade {rating}
        </span>
    );
}

export function InterventionGrid({ title, interventions }: InterventionGridProps) {
    return (
        <section className="py-12 sm:py-24 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">{title}</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {interventions.map((item) => (
                        <Link
                            key={item.id}
                            href={`/interventions/${item.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 transition-all hover:bg-slate-750 hover:ring-1 hover:ring-emerald-500"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                    <EvidenceBadge rating={item.evidenceRating} />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                                    {item.tagline}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-700/50">
                                    <div className="flex flex-wrap gap-2">
                                        {item.benefits.slice(0, 2).map((benefit) => (
                                            <span key={benefit.name} className="inline-flex items-center gap-1 text-xs text-slate-300">
                                                <BadgeCheck className="w-3 h-3 text-emerald-500" />
                                                {benefit.name}
                                            </span>
                                        ))}
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
