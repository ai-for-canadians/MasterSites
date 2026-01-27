import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { scenarios } from '@/lib/data/scenarios';
import { AlertCircle, CheckSquare, Wallet, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return scenarios.map((s) => ({
        slug: s.slug,
    }));
}

export default function ScenarioDetailPage({ params }: { params: { slug: string } }) {
    const scenario = scenarios.find((s) => s.slug === params.slug);

    if (!scenario) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-4xl px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-12 border-b border-slate-800 pb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Link
                                href="/scenarios"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Scenarios
                            </Link>
                            <span className="text-slate-600">•</span>
                            <span className={`text-sm font-medium px-2 py-1 rounded-full uppercase tracking-wider ${scenario.riskLevel === 'High' ? 'bg-red-500/10 text-red-500' :
                                    scenario.riskLevel === 'Medium' ? 'bg-orange-500/10 text-orange-400' :
                                        'bg-blue-500/10 text-blue-400'
                                }`}>
                                {scenario.riskLevel} Risk
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {scenario.name}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light italic">
                            {scenario.tagline}
                        </p>

                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                            <h3 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5" /> Immediate Actions
                            </h3>
                            <ul className="list-disc list-inside text-slate-300 space-y-1">
                                {scenario.immediateActions.map(action => (
                                    <li key={action}>{action}</li>
                                ))}
                            </ul>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Checklist */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <CheckSquare className="w-6 h-6 text-green-500" />
                                Preparation Checklist
                            </h2>
                            <div className="space-y-4">
                                {scenario.checklist.map(item => (
                                    <div key={item.id} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-white font-medium">{item.name}</h3>
                                            {item.isCritical && <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded uppercase font-bold">Critical</span>}
                                        </div>
                                        <p className="text-sm text-slate-400">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Budget/Supplies */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <Wallet className="w-6 h-6 text-blue-500" />
                                Gear & Investment
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Basic (Essential)</h3>
                                    <ul className="space-y-2">
                                        {scenario.budgetOptions.basic.map(item => (
                                            <li key={item} className="flex items-center gap-2 text-slate-300 bg-slate-800/30 p-2 rounded">
                                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Advanced (Ideal)</h3>
                                    <ul className="space-y-2">
                                        {scenario.budgetOptions.advanced.map(item => (
                                            <li key={item} className="flex items-center gap-2 text-slate-300 bg-slate-800/30 p-2 rounded">
                                                <div className="w-2 h-2 rounded-full bg-purple-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
