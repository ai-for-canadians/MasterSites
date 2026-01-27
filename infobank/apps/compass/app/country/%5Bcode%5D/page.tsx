import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ComparisonChart } from '@/components/country/ComparisonChart';
import { countries } from '@/lib/data/countries';
import Link from 'next/link';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

export function generateStaticParams() {
    return countries.map((c) => ({
        code: c.code,
    }));
}

export default function CountryDetailPage({ params }: { params: { code: string } }) {
    const country = countries.find((c) => c.code === params.code);

    if (!country) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-7xl px-6 lg:px-8">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                        <div>
                            <Link href="/leaderboard" className="text-xs text-sky-500 hover:text-sky-400 mb-2 block">← Back to Leaderboard</Link>
                            <div className="flex items-center gap-4">
                                <span className="text-6xl">{country.flag}</span>
                                <div>
                                    <h1 className="text-4xl font-bold text-white">{country.name}</h1>
                                    <div className="text-slate-400 text-sm">{country.region} • Pop: {(country.population / 1000000).toFixed(1)}M</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 text-center min-w-[200px]">
                            <div className="text-sm text-slate-500 uppercase tracking-widest mb-1">Composite Score</div>
                            <div className="text-5xl font-bold text-white mb-2">{country.scores.composite}</div>
                            <div className="flex items-center justify-center gap-2 text-sm">
                                <span className={`px-2 py-0.5 rounded text-xs font-bold ${country.scores.tier === 1 ? 'bg-emerald-500/10 text-emerald-400' :
                                        country.scores.tier === 2 ? 'bg-blue-500/10 text-blue-400' :
                                            country.scores.tier === 3 ? 'bg-orange-500/10 text-orange-400' :
                                                'bg-red-500/10 text-red-400'
                                    }`}>Tier {country.scores.tier}</span>
                                <span className="text-slate-400 flex items-center gap-1">
                                    {country.scores.trend === 'up' && <ArrowUp className="w-3 h-3 text-emerald-500" />}
                                    {country.scores.trend === 'down' && <ArrowDown className="w-3 h-3 text-red-500" />}
                                    {country.scores.trend === 'stable' && <Minus className="w-3 h-3 text-slate-500" />}
                                    {country.scores.trend}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Radar Chart */}
                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-6">Performance Profile</h3>
                            <ComparisonChart country={country} />
                        </div>

                        {/* Data Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { label: 'Democracy', val: country.scores.democracy, desc: 'V-Dem Index' },
                                { label: 'Corruption', val: country.scores.corruption, desc: 'Transparency Int.' },
                                { label: 'Equality', val: country.scores.equality, desc: 'Gini Inverted' },
                                { label: 'Development', val: country.scores.development, desc: 'UNDP HDI' },
                                { label: 'Press Freedom', val: country.scores.pressFreedom, desc: 'RSF Index' },
                                { label: 'Governance', val: country.scores.governance, desc: 'World Bank' },
                            ].map((metric) => (
                                <div key={metric.label} className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                                    <div className="text-slate-400 text-xs uppercase mb-1">{metric.label}</div>
                                    <div className="flex items-end gap-2">
                                        <span className="text-2xl font-bold text-white">{metric.val}</span>
                                        <span className="text-xs text-slate-500 mb-1">/ 100</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-white mb-6">Leadership</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {country.leaders.map((leader, i) => (
                                <div key={i} className="flex items-center gap-4 bg-slate-900 p-4 rounded-lg border border-slate-800">
                                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-xl">
                                        🏛️
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">{leader.name}</div>
                                        <div className="text-sm text-slate-400">{leader.title} • {leader.party}</div>
                                        <div className="text-xs text-slate-500 mt-1">Since {leader.tenureStart}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </article>
            </main>
            <Footer />
        </div>
    );
}
