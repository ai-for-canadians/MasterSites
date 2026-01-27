import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, Heart, Users } from 'lucide-react';

export default function PortfolioPage() {
    const holdings = [
        { name: 'East End Urban Farm', contributed: 250, shares: 250, impact: '45 meals provided' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-3xl font-black text-slate-900 mb-8">My Impact Portfolio</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg">
                            <div className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-1">Total Contributed</div>
                            <div className="text-3xl font-black">$250.00</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Voting Power</div>
                            <div className="text-3xl font-black text-slate-900">250 Votes</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Communities Served</div>
                            <div className="text-3xl font-black text-emerald-600">1</div>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-6">Your Impact Shares</h2>
                    <div className="space-y-4">
                        {holdings.map((h, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 flex items-center justify-between">
                                <div>
                                    <div className="font-bold text-slate-900 text-lg">{h.name}</div>
                                    <div className="text-sm text-slate-500 font-medium">Contributed: ${h.contributed} • {h.shares} Shares</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-emerald-600 text-lg flex items-center gap-2 justify-end">
                                        <Heart className="w-4 h-4" /> {h.impact}
                                    </div>
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
