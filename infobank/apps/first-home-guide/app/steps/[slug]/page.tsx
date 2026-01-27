import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { steps } from '@/lib/data/steps';
import { CheckCircle2, AlertTriangle, Lightbulb, ListChecks } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return steps.map((s) => ({
        slug: s.slug,
    }));
}

export default function StepDetailPage({ params }: { params: { slug: string } }) {
    const step = steps.find((s) => s.slug === params.slug);

    if (!step) {
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
                                href="/steps"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Roadmap
                            </Link>
                            <span className="text-slate-600">•</span>
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sky-500/10 text-sky-400 font-bold text-xs ring-1 ring-sky-500/20">
                                {step.order}
                            </span>
                            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                                {step.category}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {step.name}
                        </h1>

                        <p className="text-lg text-slate-300 leading-relaxed font-light">
                            {step.description}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <div className="prose prose-invert max-w-none">
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    {step.details}
                                </p>
                            </div>

                            {/* Checklist */}
                            <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <ListChecks className="w-6 h-6 text-sky-500" />
                                    Action Checklist
                                </h2>
                                <ul className="space-y-4">
                                    {step.checklist.map(item => (
                                        <li key={item.id} className="group">
                                            <div className="flex items-start gap-4">
                                                <div className={`mt-1 w-5 h-5 rounded border flex items-center justify-center ${item.isCritical ? 'border-red-400 bg-red-400/10' : 'border-slate-600'
                                                    }`}>
                                                    {item.isCritical && <div className="w-2.5 h-2.5 rounded-sm bg-red-400" />}
                                                </div>
                                                <div>
                                                    <div className="text-white font-medium mb-1">
                                                        {item.name}
                                                        {item.isCritical && <span className="ml-2 text-[10px] text-red-400 uppercase font-bold tracking-wider">Critical</span>}
                                                    </div>
                                                    <p className="text-sm text-slate-400">{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Red Flags */}
                            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                                <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Red Flags
                                </h3>
                                <ul className="space-y-2">
                                    {step.redFlags.map(flag => (
                                        <li key={flag} className="text-slate-300 text-sm flex gap-2">
                                            <span className="text-red-400 mt-1">•</span> {flag}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tips */}
                            <div className="bg-sky-500/10 rounded-xl p-6 border border-sky-500/20">
                                <h3 className="text-lg font-bold text-sky-400 mb-4 flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5" />
                                    Pro Tips
                                </h3>
                                <ul className="space-y-2">
                                    {step.tips.map(tip => (
                                        <li key={tip} className="text-slate-300 text-sm flex gap-2">
                                            <span className="text-sky-400 mt-1">•</span> {tip}
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
