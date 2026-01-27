import Link from 'next/link';
import { Condition } from '@/types';
import { ArrowRight, BadgeCheck } from 'lucide-react';

interface ConditionListProps {
    title: string;
    conditions: Condition[];
}

export function ConditionList({ title, conditions }: ConditionListProps) {
    return (
        <section className="py-12 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">{title}</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {conditions.map((item) => (
                        <Link
                            key={item.id}
                            href={`/conditions/${item.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 transition-all hover:bg-slate-750 hover:ring-1 hover:ring-blue-500"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                        {item.category.replace('-', ' ')}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                                    {item.tagline}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-700/50">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {item.treatments.slice(0, 2).map((treatment) => (
                                            <span key={treatment.name} className="inline-flex items-center gap-1 text-xs text-slate-300">
                                                <BadgeCheck className="w-3 h-3 text-blue-500" />
                                                {treatment.name}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center text-sm text-blue-400 font-medium">
                                        Read Guide <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
