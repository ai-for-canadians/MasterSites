import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { strategies } from '@/lib/data/strategies';
import { CheckCircle2, XCircle, Calculator, Target, StepForward } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return strategies.map((s) => ({
        slug: s.slug,
    }));
}

export default function StrategyDetailPage({ params }: { params: { slug: string } }) {
    const strategy = strategies.find((s) => s.slug === params.slug);

    if (!strategy) {
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
                                href="/strategies"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Strategies
                            </Link>
                            <span className="text-slate-600">•</span>
                            <span className="text-sm font-medium text-rose-400 bg-rose-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                {strategy.type}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {strategy.name}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light italic">
                            {strategy.tagline}
                        </p>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            {strategy.description}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Steps */}
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <StepForward className="w-6 h-6 text-emerald-500" />
                                    How to Do It
                                </h2>
                                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                    <ul className="space-y-6">
                                        {strategy.steps.map((step, idx) => (
                                            <li key={step} className="flex gap-4">
                                                <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-rose-500 text-white font-bold text-lg shadow-lg">
                                                    {idx + 1}
                                                </span>
                                                <span className="text-slate-300 text-lg pt-1">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Calculator className="w-6 h-6 text-blue-500" />
                                    Math Check
                                </h2>
                                <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20">
                                    <p className="text-blue-300 italic text-lg text-center">"{strategy.mathCheck}"</p>
                                </div>
                            </section>
                        </div>

                        {/* Pros/Cons */}
                        <div className="space-y-8">
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                    Pros
                                </h3>
                                <ul className="space-y-2">
                                    {strategy.pros.map(pro => (
                                        <li key={pro} className="text-slate-300 text-sm flex gap-2">
                                            <span className="text-emerald-400">•</span> {pro}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <XCircle className="w-5 h-5 text-red-400" />
                                    Cons
                                </h3>
                                <ul className="space-y-2">
                                    {strategy.cons.map(con => (
                                        <li key={con} className="text-slate-300 text-sm flex gap-2">
                                            <span className="text-red-400">•</span> {con}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-purple-400" />
                                    Best For
                                </h3>
                                <ul className="space-y-2">
                                    {strategy.bestFor.map(bf => (
                                        <li key={bf} className="text-slate-300 text-sm flex gap-2">
                                            <span className="text-purple-400">•</span> {bf}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
