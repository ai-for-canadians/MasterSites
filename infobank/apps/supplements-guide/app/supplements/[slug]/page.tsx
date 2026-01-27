import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { supplements } from '@/lib/data/supplements';
import { getCategoryById } from '@/lib/data/categories';
import { BadgeCheck, Activity, AlertTriangle, Pill, FlaskConical } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return supplements.map((s) => ({
        slug: s.slug,
    }));
}

export default function SupplementDetailPage({ params }: { params: { slug: string } }) {
    const supplement = supplements.find((s) => s.slug === params.slug);

    if (!supplement) {
        notFound();
    }

    const category = getCategoryById(supplement.category);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-4xl px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-12 border-b border-slate-800 pb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Link
                                href="/supplements"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Database
                            </Link>
                            <span className="text-slate-600">•</span>
                            <span className="text-sm font-medium text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                {category?.name}
                            </span>
                            <span className={`text-sm font-medium text-slate-400 px-2 py-1 rounded-full uppercase tracking-wider border border-slate-700`}>
                                Grade {supplement.evidenceRating}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {supplement.name}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light italic">
                            {supplement.tagline}
                        </p>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            {supplement.description}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Benefits */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <BadgeCheck className="w-6 h-6 text-orange-500" />
                                    Proven Benefits
                                </h2>
                                <div className="space-y-4">
                                    {supplement.benefits.map((benefit) => (
                                        <div key={benefit.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.name}</h3>
                                                    <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                                                </div>
                                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${benefit.evidenceRating === 'A' ? 'bg-green-500/10 text-green-400' :
                                                        benefit.evidenceRating === 'B' ? 'bg-blue-500/10 text-blue-400' :
                                                            'bg-yellow-500/10 text-yellow-400'
                                                    }`}>
                                                    Grade {benefit.evidenceRating}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Research */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Activity className="w-6 h-6 text-purple-400" />
                                    Research Summary
                                </h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                        {supplement.researchSummary}
                                    </p>

                                    <div className="mt-8">
                                        <h3 className="text-lg font-semibold text-white mb-4">Mechanism of Action</h3>
                                        <p className="text-slate-400">{supplement.howItWorks}</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Dosage */}
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Pill className="w-5 h-5 text-blue-400" />
                                    Dosage
                                </h3>

                                <div className="mb-4">
                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Standard Dose</div>
                                    <div className="text-white font-medium text-lg">{supplement.dosage.amount}</div>
                                </div>

                                {supplement.dosage.timing && (
                                    <div className="mb-4">
                                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Timing</div>
                                        <div className="text-slate-300">{supplement.dosage.timing}</div>
                                    </div>
                                )}

                                {supplement.dosage.notes && (
                                    <div className="bg-blue-500/10 p-3 rounded-lg mt-2">
                                        <p className="text-sm text-blue-300">{supplement.dosage.notes}</p>
                                    </div>
                                )}
                            </div>

                            {/* Interactions */}
                            {supplement.interactions.length > 0 && (
                                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <FlaskConical className="w-5 h-5 text-yellow-400" />
                                        Interactions
                                    </h3>
                                    <ul className="space-y-3">
                                        {supplement.interactions.map(int => (
                                            <li key={int.name}>
                                                <div className="text-white font-medium text-sm">{int.name}</div>
                                                <div className="text-xs text-slate-400">{int.description}</div>
                                                <div className={`text-[10px] uppercase font-bold mt-1 ${int.severity === 'high' ? 'text-red-400' : 'text-yellow-400'
                                                    }`}>{int.severity} Risk</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Safety */}
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-orange-400" />
                                    Safety Profile
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Risk Level</div>
                                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${supplement.safetyProfile.riskLevel === 'very low' ? 'bg-green-400/10 text-green-400 ring-green-400/20' :
                                                supplement.safetyProfile.riskLevel === 'low' ? 'bg-green-400/10 text-green-400 ring-green-400/20' :
                                                    supplement.safetyProfile.riskLevel === 'moderate' ? 'bg-yellow-400/10 text-yellow-400 ring-yellow-400/20' :
                                                        'bg-red-400/10 text-red-400 ring-red-400/20'
                                            }`}>
                                            {supplement.safetyProfile.riskLevel}
                                        </span>
                                    </div>

                                    {supplement.safetyProfile.contraindications.length > 0 && (
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Contraindications</div>
                                            <ul className="space-y-1">
                                                {supplement.safetyProfile.contraindications.map((ui: string) => (
                                                    <li key={ui} className="text-sm text-slate-300 flex items-start gap-2">
                                                        <span className="text-red-400 mt-1">•</span>
                                                        {ui}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {supplement.safetyProfile.sideEffects.length > 0 && (
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Side Effects</div>
                                            <ul className="space-y-1">
                                                {supplement.safetyProfile.sideEffects.map((se: string) => (
                                                    <li key={se} className="text-sm text-slate-300">
                                                        {se}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
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
