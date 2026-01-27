import Link from 'next/link';
import { Scenario } from '@/types';
import { ArrowRight, AlertTriangle } from 'lucide-react';

interface ScenarioGridProps {
    scenarios: Scenario[];
}

export function ScenarioGrid({ scenarios }: ScenarioGridProps) {
    return (
        <section className="py-12 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Common Scenarios</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {scenarios.map((item) => (
                        <Link
                            key={item.id}
                            href={`/scenarios/${item.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 transition-all hover:bg-slate-750 hover:ring-1 hover:ring-red-500"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.riskLevel === 'High' ? 'bg-red-500/10 text-red-500' :
                                            item.riskLevel === 'Medium' ? 'bg-orange-500/10 text-orange-400' :
                                                'bg-blue-500/10 text-blue-400'
                                        }`}>
                                        {item.riskLevel} Risk
                                    </span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">
                                        {item.probability}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-slate-400 mb-4">
                                    {item.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-700/50">
                                    <div className="flex flex-col gap-2 mb-4">
                                        <span className="text-xs text-slate-500 uppercase tracking-wider">Immediate Actions</span>
                                        {item.immediateActions.slice(0, 2).map((action) => (
                                            <span key={action} className="inline-flex items-center gap-2 text-xs text-slate-300">
                                                <AlertTriangle className="w-3 h-3 text-yellow-500 flex-none" />
                                                {action}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center text-sm text-red-400 font-medium">
                                        View Plan <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
