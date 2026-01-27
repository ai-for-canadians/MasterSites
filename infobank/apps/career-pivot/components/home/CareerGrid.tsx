import Link from 'next/link';
import { CareerPath } from '@/types';
import { ArrowRight, Clock, DollarSign, TrendingUp } from 'lucide-react';

interface CareerGridProps {
    title: string;
    careers: CareerPath[];
}

export function CareerGrid({ title, careers }: CareerGridProps) {
    return (
        <section className="py-12 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">{title}</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {careers.map((item) => (
                        <Link
                            key={item.id}
                            href={`/careers/${item.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 transition-all hover:bg-slate-750 hover:ring-1 hover:ring-emerald-500"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                        {item.category.replace('-', ' ')}
                                    </span>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.outlook === 'Exploding' ? 'bg-purple-500/10 text-purple-400' :
                                            item.outlook === 'Growing' ? 'bg-green-500/10 text-green-400' :
                                                'bg-slate-500/10 text-slate-400'
                                        }`}>
                                        {item.outlook}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                                    {item.tagline}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-700/50">
                                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-slate-300">
                                        <div className="flex items-center gap-1">
                                            <DollarSign className="w-3 h-3 text-emerald-500" />
                                            {item.salaryRange.entry}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3 text-blue-500" />
                                            {item.timeToPivot}
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm text-emerald-400 font-medium">
                                        View Roadmap <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
