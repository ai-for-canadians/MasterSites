import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ventures } from '@/lib/data/ventures';
import { ArrowRight, MapPin } from 'lucide-react';

export default function VenturesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Active Ventures</h1>
                            <p className="text-xl text-slate-600 max-w-2xl">
                                Local businesses currently seeking community funding.
                            </p>
                        </div>
                        <Link href="/ventures/new" className="hidden md:inline-flex bg-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-800 transition-colors">
                            Start a New Venture
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ventures.map(v => (
                            <Link key={v.id} href={`/ventures/${v.id}`} className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-6 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {v.city}
                                    </span>
                                    <span className={`font-bold text-sm px-2 py-1 rounded ${v.status === 'funding' ? 'bg-blue-50 text-blue-600' :
                                        v.status === 'profitable' ? 'bg-emerald-50 text-emerald-600' :
                                            'bg-amber-50 text-amber-600'
                                        }`}>
                                        {v.status.replace('_', ' ')}
                                    </span>
                                </div>

                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{v.playbookName}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                                    {v.name}
                                </h3>

                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <div className="mb-2">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="font-bold text-slate-500">Raised</span>
                                            <span className="font-bold text-slate-900">${v.totalRaised} / ${v.targetRaise}</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(v.totalRaised / v.targetRaise) * 100}%` }} />
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-xs mt-4">
                                        <div>
                                            <div className="font-bold text-slate-400 uppercase text-[10px]">Min Entry</div>
                                            <div className="font-bold text-slate-900">${v.minContribution}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-slate-400 uppercase text-[10px]">Proj. Return</div>
                                            <div className="font-bold text-emerald-600">12-15%</div>
                                        </div>
                                    </div>
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
