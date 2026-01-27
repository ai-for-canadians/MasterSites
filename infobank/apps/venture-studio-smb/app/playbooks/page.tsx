import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { playbooks } from '@/lib/data/playbooks';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function PlaybooksPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Business Playbooks</h1>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl">
                        Proven business models ready for AI execution. Select a playbook to see the roadmap, costs, and projected returns.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {playbooks.map(p => (
                            <Link key={p.id} href={`/playbooks/${p.slug}`} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700">{p.name}</h3>
                                <p className="text-sm text-slate-500 mb-6 line-clamp-2">{p.description}</p>

                                <div className="space-y-2 mb-6 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-400 font-bold uppercase text-xs">Startup Cost</span>
                                        <span className="font-bold text-slate-900">{p.startupCostRange}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400 font-bold uppercase text-xs">Time to Profit</span>
                                        <span className="font-bold text-slate-900">{p.timeToProfit}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400 font-bold uppercase text-xs">Margin</span>
                                        <span className="font-bold text-emerald-600">{p.profitMargin}</span>
                                    </div>
                                </div>

                                <div className="text-emerald-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    View Details <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
