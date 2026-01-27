import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { conditions } from '@/lib/data/conditions';
import { BookOpen } from 'lucide-react';

export default function InterventionsPage() {
    // Flatten interventions
    const allInterventions = conditions.flatMap(c =>
        c.interventions.map(i => ({ ...i, conditionName: c.name, conditionSlug: c.slug }))
    );

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Intervention Database</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        All protocols sorted by evidence level.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allInterventions.map((item, idx) => (
                            <div key={`${item.id}-${idx}`} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${item.evidenceLevel === 'High' ? 'bg-green-500/20 text-green-400' :
                                            item.evidenceLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                                'bg-slate-700 text-slate-400'
                                        }`}>
                                        {item.evidenceLevel}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-400 mb-4 h-12 line-clamp-2">{item.description}</p>

                                <div className="text-xs text-rose-400 font-medium mb-4">
                                    Used for: {item.conditionName}
                                </div>

                                <div className="mt-auto bg-slate-900/50 p-3 rounded">
                                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">Protocol Snippet</div>
                                    <div className="text-sm text-slate-300 line-clamp-2">{item.protocol}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
