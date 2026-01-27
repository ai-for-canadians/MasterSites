import Link from 'next/link';
import { Step } from '@/types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface StepListProps {
    steps: Step[];
}

export function StepList({ steps }: StepListProps) {
    return (
        <section className="py-12 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">The Roadmap</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {steps.map((item) => (
                        <Link
                            key={item.id}
                            href={`/steps/${item.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 transition-all hover:bg-slate-750 hover:ring-1 hover:ring-sky-500"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/10 text-sky-400 font-bold text-sm ring-1 ring-sky-500/20">
                                        {item.order}
                                    </span>
                                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-slate-400 line-clamp-3 mb-4">
                                    {item.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-700/50">
                                    <div className="flex flex-col gap-2 mb-4">
                                        <span className="text-xs text-slate-500 uppercase tracking-wider">Key Tasks</span>
                                        {item.checklist.slice(0, 2).map((action) => (
                                            <span key={action.id} className="inline-flex items-center gap-2 text-xs text-slate-300">
                                                <CheckCircle2 className={`w-3 h-3 flex-none ${action.isCritical ? 'text-red-400' : 'text-slate-500'}`} />
                                                {action.name}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center text-sm text-sky-400 font-medium">
                                        View Step <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
