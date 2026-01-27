import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { systems } from '@/lib/data/systems';
import { getCategoryById } from '@/lib/data/categories';
import { Brain, AlertTriangle, CheckCircle2, Clock, Zap } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return systems.map((s) => ({
        slug: s.slug,
    }));
}

export default function SystemDetailPage({ params }: { params: { slug: string } }) {
    const system = systems.find((s) => s.slug === params.slug);

    if (!system) {
        notFound();
    }

    const category = getCategoryById(system.category);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-4xl px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-12 border-b border-slate-800 pb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Link
                                href="/systems"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Library
                            </Link>
                            <span className="text-slate-600">•</span>
                            <span className="text-sm font-medium text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                {category?.name}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {system.name}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light italic">
                            {system.tagline}
                        </p>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            {system.description}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Why it works */}
                            <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Brain className="w-6 h-6 text-purple-400" />
                                    Why it works for ADHD
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    {system.whyItWorks}
                                </p>
                            </section>

                            {/* Steps */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">Implementation Steps</h2>
                                <div className="space-y-6">
                                    {system.steps.map((step) => (
                                        <div key={step.id} className="flex gap-4 p-4 rounded-lg hover:bg-slate-800/30 transition-colors">
                                            <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-slate-900 font-bold text-lg">
                                                {step.order}
                                            </span>
                                            <div>
                                                <p className="text-white text-lg font-medium mb-2">{step.text}</p>
                                                {step.tip && (
                                                    <p className="text-slate-400 text-sm bg-slate-800 p-2 rounded border-l-2 border-yellow-500">
                                                        <span className="font-bold text-yellow-500">Tip:</span> {step.tip}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 text-center">
                                    <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                                    <div className="text-xs text-slate-500 uppercase">Setup Time</div>
                                    <div className="text-white font-bold">{system.timeToImplement}</div>
                                </div>
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 text-center">
                                    <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                                    <div className="text-xs text-slate-500 uppercase">Impact</div>
                                    <div className="text-white font-bold">{system.impact}</div>
                                </div>
                            </div>

                            {/* Pitfalls */}
                            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                                <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Common Pitfalls
                                </h3>
                                <ul className="space-y-2">
                                    {system.commonPitfalls.map(pitfall => (
                                        <li key={pitfall} className="text-slate-300 text-sm flex gap-2">
                                            <span className="text-red-400 mt-1">•</span> {pitfall}
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
