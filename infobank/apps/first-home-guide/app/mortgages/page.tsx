import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { mortgages } from '@/lib/data/mortgages';
import { CheckCircle2, XCircle, Landmark } from 'lucide-react';

export default function MortgagesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Loan Types</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Compare the most common mortgage products. Find the one that fits your finances.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {mortgages.map(m => (
                        <div key={m.id} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <Landmark className="w-6 h-6 text-sky-400" />
                                    {m.name}
                                </h2>
                                <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs font-bold uppercase">
                                    {m.minDownPayment} Down
                                </span>
                            </div>
                            <p className="text-slate-300 mb-6">{m.description}</p>

                            <div className="mb-6">
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Best For</div>
                                <p className="text-sky-300 font-medium">{m.bestFor}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-auto">
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Pros
                                    </div>
                                    <ul className="space-y-1">
                                        {m.pros.map(pro => (
                                            <li key={pro} className="text-sm text-slate-400">• {pro}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <XCircle className="w-3 h-3 text-red-500" /> Cons
                                    </div>
                                    <ul className="space-y-1">
                                        {m.cons.map(con => (
                                            <li key={con} className="text-sm text-slate-400">• {con}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
