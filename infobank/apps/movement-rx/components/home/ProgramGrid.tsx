import Link from 'next/link';
import { Program } from '@/types';
import { ArrowRight, Activity } from 'lucide-react';

interface ProgramGridProps {
    programs: Program[];
}

export function ProgramGrid({ programs }: ProgramGridProps) {
    return (
        <section className="py-12 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Rehab Protocols</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {programs.map((item) => (
                        <Link
                            key={item.id}
                            href={`/programs/${item.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 transition-all hover:bg-slate-750 hover:ring-1 hover:ring-indigo-500"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                        {item.bodyPart}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-slate-400 mb-6 italic">
                                    {item.tagline}
                                </p>

                                <div className="mb-6 space-y-2">
                                    {item.phases.map(phase => (
                                        <div key={phase.id} className="text-xs text-slate-500 flex justify-between border-b border-slate-700 pb-1">
                                            <span>{phase.weekRange}</span>
                                            <span className="text-slate-300">{phase.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 border-t border-slate-700/50">
                                    <div className="flex items-center text-sm text-indigo-400 font-medium">
                                        Start Protocol <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
