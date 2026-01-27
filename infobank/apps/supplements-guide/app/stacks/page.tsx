import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { stacks } from '@/lib/data/stacks';
import { supplements } from '@/lib/data/supplements';
import { Layers, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Curated Stacks | SupplementsGuide',
    description: 'Pre-built supplement stacks for specific goals: cognitive performance, sleep, longevity, energy, and more.',
};

const goalColors: Record<string, string> = {
    'Cognitive': 'from-purple-500/20 to-indigo-500/20 border-purple-500/30',
    'Sleep': 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    'Longevity': 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
    'Energy': 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
    'Immune': 'from-rose-500/20 to-pink-500/20 border-rose-500/30',
    'Athletic': 'from-red-500/20 to-orange-500/20 border-red-500/30',
};

const gradeColors: Record<string, string> = {
    'A': 'bg-emerald-500/20 text-emerald-400',
    'B': 'bg-blue-500/20 text-blue-400',
    'C': 'bg-amber-500/20 text-amber-400',
};

function getSupplementName(slug: string): string {
    const supp = supplements.find(s => s.slug === slug);
    return supp?.name || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function StacksPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Layers className="w-4 h-4" />
                            Curated Protocols
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-6">
                            Supplement Stacks
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Evidence-based combinations optimized for specific goals.
                            Dosing, timing, and synergies already figured out.
                        </p>
                    </div>
                </section>

                {/* Stacks Grid */}
                <section className="py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto grid gap-8">
                        {stacks.map((stack) => (
                            <div
                                key={stack.id}
                                className={`bg-gradient-to-br ${goalColors[stack.goal] || 'from-slate-500/20 to-slate-600/20 border-slate-500/30'} border rounded-2xl p-6 md:p-8`}
                            >
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h2 className="text-2xl font-bold text-slate-50">{stack.name}</h2>
                                            <span className={`text-xs px-2 py-1 rounded font-medium ${gradeColors[stack.evidenceRating]}`}>
                                                Grade {stack.evidenceRating}
                                            </span>
                                        </div>
                                        <p className="text-slate-400">{stack.description}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                                        <Clock className="w-4 h-4" />
                                        {stack.timing}
                                    </div>
                                </div>

                                {/* Supplements */}
                                <div className="grid gap-3 mb-6">
                                    {stack.supplements.map((supp, i) => (
                                        <div
                                            key={i}
                                            className="bg-slate-800/50 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                                        >
                                            <div className="flex-1">
                                                <div className="font-semibold text-slate-50">
                                                    {getSupplementName(supp.supplementSlug)}
                                                </div>
                                                <div className="text-sm text-slate-400">
                                                    {supp.dose} • {supp.timing}
                                                </div>
                                            </div>
                                            {supp.notes && (
                                                <div className="text-xs text-slate-500 sm:max-w-xs">
                                                    💡 {supp.notes}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Warnings */}
                                {stack.warnings.length > 0 && (
                                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                                        <div className="flex items-center gap-2 text-amber-400 font-medium mb-2">
                                            <AlertTriangle className="w-4 h-4" />
                                            Important Notes
                                        </div>
                                        <ul className="space-y-1">
                                            {stack.warnings.map((warning, i) => (
                                                <li key={i} className="text-sm text-slate-400">
                                                    • {warning}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Custom Stack CTA */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/analyze"
                            className="block bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/50 transition-colors text-center"
                        >
                            <CheckCircle2 className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-slate-50 mb-2">
                                Build Your Own Stack
                            </h3>
                            <p className="text-slate-400 max-w-lg mx-auto">
                                Already taking supplements? Analyze your current stack to find synergies,
                                conflicts, and optimization opportunities.
                            </p>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
