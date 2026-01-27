import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ventures } from '@/lib/data/ventures';
import { ArrowRight, Heart, Users, TrendingUp } from 'lucide-react';

export default function HomePage() {
    const featuredVentures = ventures.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="py-24 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                            Social Ventures • Community Powered
                        </div>
                        <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight sm:text-7xl">
                            Build the community <br /><span className="text-blue-600">you want to live in</span>.
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Fund social ventures that solve real local problems. Earn governance rights, not profits. Create lasting impact.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/ventures" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                Support Ventures
                            </Link>
                            <Link href="/how-it-works" className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold py-4 px-10 rounded-xl transition-colors">
                                How It Works
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Featured Ventures */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">Needs Support</h2>
                                <p className="text-slate-500">Social initiatives seeking community funding.</p>
                            </div>
                            <Link href="/ventures" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                View All <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {featuredVentures.map(v => (
                                <Link key={v.id} href={`/ventures/${v.id}`} className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-6 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                            {v.location.split(',')[0]}
                                        </span>
                                        <span className="text-blue-600 font-bold text-sm bg-blue-50 px-2 py-1 rounded">
                                            {Math.round((v.totalRaised / v.targetRaise) * 100)}% Funded
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {v.name}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-2">
                                        {v.description}
                                    </p>

                                    <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-[10px] uppercase text-slate-400 font-bold">Goal</div>
                                            <div className="font-bold text-slate-900">${v.targetRaise.toLocaleString()}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] uppercase text-slate-400 font-bold">Impact</div>
                                            <div className="font-bold text-emerald-600 flex justify-end items-center gap-1">
                                                <Heart className="w-4 h-4" /> High
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Stats */}
                <section className="bg-slate-900 py-16 text-white">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="text-4xl font-black text-blue-400 mb-2">$85K</div>
                            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Community Invested</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-white mb-2">12</div>
                            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Ventures Launched</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-white mb-2">2,400+</div>
                            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">People Served</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-white mb-2">45</div>
                            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Jobs Created</div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
