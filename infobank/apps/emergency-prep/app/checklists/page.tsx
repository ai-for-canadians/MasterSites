import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { scenarios } from '@/lib/data/scenarios';
import { CheckSquare } from 'lucide-react';

export default function ChecklistsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Master Checklists</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Everything you need to do to be prepared.
                    </p>
                </div>

                <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-8">
                    {scenarios.map(scenario => (
                        <div key={scenario.id} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                {scenario.name}
                            </h2>
                            <ul className="space-y-3 pl-2">
                                {scenario.checklist.map(item => (
                                    <li key={item.id} className="flex items-start gap-3">
                                        <CheckSquare className="w-5 h-5 text-slate-600 mt-0.5" />
                                        <div>
                                            <div className="text-slate-300 font-medium">
                                                {item.name}
                                                {item.isCritical && <span className="ml-2 text-[10px] text-red-400 uppercase font-bold tracking-wider">Critical</span>}
                                            </div>
                                            <p className="text-sm text-slate-500">{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
