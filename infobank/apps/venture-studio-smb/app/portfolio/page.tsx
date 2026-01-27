import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, PieChart, Coins } from 'lucide-react';

export default function PortfolioPage() {
    const holdings = [
        { name: 'Kensington Community Bakery', invested: 2500, ownership: 5.5, value: 2500, dividends: 0 },
        { name: 'North End Creative Co.', invested: 1000, ownership: 2.1, value: 1250, dividends: 140 },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-3xl font-black text-slate-900 mb-8">My Portfolio</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Total Invested</div>
                            <div className="text-3xl font-black">$3,500.00</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Current Value</div>
                            <div className="text-3xl font-black text-slate-900">$3,750.00</div>
                            <div className="text-xs font-bold text-emerald-600 flex items-center gap-1 mt-1">
                                <TrendingUp className="w-3 h-3" /> +7.1% All Time
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Dividends Earned</div>
                            <div className="text-3xl font-black text-emerald-600">$140.00</div>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-6">Holdings</h2>
                    <div className="space-y-4">
                        {holdings.map((h, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 flex items-center justify-between">
                                <div>
                                    <div className="font-bold text-slate-900 text-lg">{h.name}</div>
                                    <div className="text-sm text-slate-500 font-medium">Invested: ${h.invested} • Ownership: {h.ownership}%</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-slate-900 text-lg">${h.value}</div>
                                    {h.dividends > 0 && <div className="text-xs font-bold text-emerald-600">+${h.dividends} dividends</div>}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-emerald-50 p-8 rounded-2xl border border-emerald-100 text-center">
                        <h3 className="font-bold text-slate-900 mb-2">Want to diversify?</h3>
                        <p className="text-slate-500 mb-6">Spread your risk by investing in ventures across different industries.</p>
                        <Link href="/ventures" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
                            Find New Ventures <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

function TrendingUp({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
    )
}
