import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { pairings } from '@/lib/data/pairings';
import { supplements } from '@/lib/data/supplements';
import { AlertTriangle, Check, XCircle, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Supplement Pairings | SupplementsGuide',
    description: 'Learn which supplements work synergistically, which need careful timing, and which to avoid combining.',
};

const typeColors = {
    synergistic: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    neutral: 'bg-slate-500/10 border-slate-500/30 text-slate-400',
    caution: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    avoid: 'bg-red-500/10 border-red-500/30 text-red-400',
};

const typeIcons = {
    synergistic: Check,
    neutral: ArrowRight,
    caution: AlertTriangle,
    avoid: XCircle,
};

const typeTitles = {
    synergistic: 'Synergistic Pairings',
    neutral: 'Neutral Pairings',
    caution: 'Use Caution',
    avoid: 'Avoid Combining',
};

const typeDescriptions = {
    synergistic: 'These supplements enhance each other\'s effects or absorption.',
    neutral: 'These can be taken together without significant interaction.',
    caution: 'These require careful timing, dosing, or monitoring.',
    avoid: 'These combinations can be harmful or dangerous.',
};

function getSupplementName(slug: string): string {
    const supp = supplements.find(s => s.slug === slug);
    return supp?.name || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function PairingsPage() {
    const synergistic = pairings.filter(p => p.type === 'synergistic');
    const caution = pairings.filter(p => p.type === 'caution');
    const avoid = pairings.filter(p => p.type === 'avoid');

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Zap className="w-4 h-4" />
                            Interaction Checker
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-6">
                            Supplement Pairings
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Not all supplements play nice together. Some amplify each other,
                            some compete, and some are dangerous combinations.
                        </p>
                    </div>
                </section>

                {/* Quick Analyze CTA */}
                <section className="pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/analyze"
                            className="block bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-2xl p-6 hover:border-orange-500/50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-50 mb-2">
                                        Analyze Your Stack
                                    </h3>
                                    <p className="text-slate-400">
                                        Enter the supplements you take and get personalized pairing analysis.
                                    </p>
                                </div>
                                <ArrowRight className="w-6 h-6 text-orange-400" />
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Synergistic */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-emerald-500/20 rounded-lg">
                                <Check className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50">{typeTitles.synergistic}</h2>
                                <p className="text-slate-400">{typeDescriptions.synergistic}</p>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            {synergistic.map((pairing, i) => (
                                <div
                                    key={i}
                                    className={`p-5 rounded-xl border ${typeColors.synergistic}`}
                                >
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        <span className="font-semibold text-slate-50">
                                            {getSupplementName(pairing.supplement1)}
                                        </span>
                                        <span className="text-slate-500">+</span>
                                        <span className="font-semibold text-slate-50">
                                            {getSupplementName(pairing.supplement2)}
                                        </span>
                                        <span className="ml-auto text-xs px-2 py-1 bg-slate-800 rounded text-slate-400">
                                            Grade {pairing.evidenceRating}
                                        </span>
                                    </div>
                                    <p className="text-slate-300 text-sm mb-2">{pairing.reason}</p>
                                    {pairing.timing && (
                                        <p className="text-xs text-emerald-400/80">
                                            ⏰ {pairing.timing}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Caution */}
                <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-500/20 rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-amber-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50">{typeTitles.caution}</h2>
                                <p className="text-slate-400">{typeDescriptions.caution}</p>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            {caution.map((pairing, i) => (
                                <div
                                    key={i}
                                    className={`p-5 rounded-xl border ${typeColors.caution}`}
                                >
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        <span className="font-semibold text-slate-50">
                                            {getSupplementName(pairing.supplement1)}
                                        </span>
                                        <span className="text-slate-500">+</span>
                                        <span className="font-semibold text-slate-50">
                                            {getSupplementName(pairing.supplement2)}
                                        </span>
                                        <span className="ml-auto text-xs px-2 py-1 bg-slate-800 rounded text-slate-400">
                                            Grade {pairing.evidenceRating}
                                        </span>
                                    </div>
                                    <p className="text-slate-300 text-sm mb-2">{pairing.reason}</p>
                                    {pairing.timing && (
                                        <p className="text-xs text-amber-400/80">
                                            ⏰ {pairing.timing}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Avoid */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-red-500/20 rounded-lg">
                                <XCircle className="w-6 h-6 text-red-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50">{typeTitles.avoid}</h2>
                                <p className="text-slate-400">{typeDescriptions.avoid}</p>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            {avoid.map((pairing, i) => (
                                <div
                                    key={i}
                                    className={`p-5 rounded-xl border ${typeColors.avoid}`}
                                >
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        <span className="font-semibold text-slate-50">
                                            {getSupplementName(pairing.supplement1)}
                                        </span>
                                        <span className="text-slate-500">+</span>
                                        <span className="font-semibold text-slate-50">
                                            {getSupplementName(pairing.supplement2)}
                                        </span>
                                        <span className="ml-auto text-xs px-2 py-1 bg-slate-800 rounded text-slate-400">
                                            Grade {pairing.evidenceRating}
                                        </span>
                                    </div>
                                    <p className="text-slate-300 text-sm mb-2">{pairing.reason}</p>
                                    {pairing.timing && (
                                        <p className="text-xs text-red-400/80">
                                            ⚠️ {pairing.timing}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
