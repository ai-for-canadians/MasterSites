import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { interventions } from '@/lib/data/interventions';
import { getCategoryById } from '@/lib/data/categories';
import { BadgeCheck, Activity, AlertTriangle, ClipboardList, Pill } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return interventions.map((intervention) => ({
        slug: intervention.slug,
    }));
}

export default function InterventionDetailPage({ params }: { params: { slug: string } }) {
    const intervention = interventions.find((i) => i.slug === params.slug);

    if (!intervention) {
        notFound();
    }

    const category = getCategoryById(intervention.category);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-4xl px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-12 border-b border-slate-800 pb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Link
                                href="/interventions"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Interventions
                            </Link>
                            <span className="text-slate-600">•</span>
                            <span className="text-sm font-medium text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                {category?.name}
                            </span>
                            <span className={`text-sm font-medium text-slate-400 px-2 py-1 rounded-full uppercase tracking-wider border border-slate-700`}>
                                Grade {intervention.evidenceRating}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {intervention.name}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light italic">
                            {intervention.tagline}
                        </p>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            {intervention.description}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Benefits */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <BadgeCheck className="w-6 h-6 text-indigo-500" />
                                    Benefits
                                </h2>
                                <div className="space-y-4">
                                    {intervention.benefits.map((benefit) => (
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
                                        {intervention.researchSummary}
                                    </p>

                                    <div className="mt-8">
                                        <h3 className="text-lg font-semibold text-white mb-4">How It Works</h3>
                                        <p className="text-slate-400">{intervention.howItWorks}</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Protocol/Dosage */}
                            {(intervention.dosage || intervention.protocol) && (
                                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        {intervention.category === 'supplements' ? <Pill className="w-5 h-5 text-blue-400" /> : <ClipboardList className="w-5 h-5 text-emerald-400" />}
                                        Recommendation
                                    </h3>

                                    {intervention.dosage && (
                                        <div className="mb-6">
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Dosage</div>
                                            <div className="text-white font-medium text-lg">{intervention.dosage}</div>
                                        </div>
                                    )}

                                    {intervention.protocol && (
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Protocol</div>
                                            <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
                                                {intervention.protocol.map((step: string) => (
                                                    <li key={step}>{step}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
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
                                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${intervention.safetyProfile.riskLevel === 'very low' ? 'bg-green-400/10 text-green-400 ring-green-400/20' :
                                                intervention.safetyProfile.riskLevel === 'low' ? 'bg-green-400/10 text-green-400 ring-green-400/20' :
                                                    intervention.safetyProfile.riskLevel === 'moderate' ? 'bg-yellow-400/10 text-yellow-400 ring-yellow-400/20' :
                                                        'bg-red-400/10 text-red-400 ring-red-400/20'
                                            }`}>
                                            {intervention.safetyProfile.riskLevel}
                                        </span>
                                    </div>

                                    {intervention.safetyProfile.contraindications.length > 0 && (
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Contraindications</div>
                                            <ul className="space-y-1">
                                                {intervention.safetyProfile.contraindications.map((ui: string) => (
                                                    <li key={ui} className="text-sm text-slate-300 flex items-start gap-2">
                                                        <span className="text-red-400 mt-1">•</span>
                                                        {ui}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {intervention.safetyProfile.sideEffects.length > 0 && (
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Side Effects</div>
                                            <ul className="space-y-1">
                                                {intervention.safetyProfile.sideEffects.map((se: any) => (
                                                    <li key={se.name} className="text-sm text-slate-300">
                                                        {se.name}
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
