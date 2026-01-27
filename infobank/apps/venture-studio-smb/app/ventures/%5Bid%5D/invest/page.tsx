import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ventures } from '@/lib/data/ventures';
import { ArrowLeft, Check, ShieldCheck } from 'lucide-react';

export function generateStaticParams() {
    return ventures.map((v) => ({
        id: v.id,
    }));
}

export default function InvestPage({ params }: { params: { id: string } }) {
    const venture = ventures.find((v) => v.id === params.id);
    // Simple mock handling for missing venture in static gen
    if (!venture) return null;

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-2xl mx-auto px-6">

                    <Link href={`/ventures/${venture.id}`} className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-8 font-bold transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Cancel & Go Back
                    </Link>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 mb-8">
                        <h1 className="text-2xl font-black text-slate-900 mb-2">Invest in {venture.name}</h1>
                        <p className="text-slate-500 mb-8">You are purchasing fractional ownership units.</p>

                        <div className="p-6 bg-slate-50 rounded-xl mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold text-slate-900">Contribution Amount</span>
                                <span className="text-emerald-600 text-sm font-bold">Min: ${venture.minContribution}</span>
                            </div>
                            <div className="flex gap-4 mb-4">
                                {[100, 500, 1000, 2500].map(amt => (
                                    <button key={amt} className="flex-1 py-2 bg-white border border-slate-200 rounded-lg hover:border-emerald-500 hover:text-emerald-600 font-bold text-sm transition-all focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                                        ${amt}
                                    </button>
                                ))}
                            </div>
                            <input
                                type="number"
                                placeholder="Enter custom amount"
                                className="w-full p-4 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500 font-bold text-lg"
                            />
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Est. Ownership stake</span>
                                <span className="font-bold text-slate-900">0.0%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Proj. Annual Dividend</span>
                                <span className="font-bold text-emerald-600">$0.00 / yr</span>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start mb-8 text-xs text-slate-500 bg-blue-50 p-4 rounded-lg">
                            <ShieldCheck className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <p>
                                This is a simulated transaction. In a production environment, funds would be held in escrow until the funding goal is met. Refunds are automatic if goal is not reached.
                            </p>
                        </div>

                        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                            <Check className="w-5 h-5" /> Confirm Investment (Demo)
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
