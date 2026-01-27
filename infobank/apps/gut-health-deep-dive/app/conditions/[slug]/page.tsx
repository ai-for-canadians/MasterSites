import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { conditions } from '@/lib/data/conditions';
import { getCategoryById } from '@/lib/data/categories';
import { BadgeCheck, Activity, AlertTriangle, Utensils, Stethoscope } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return conditions.map((condition) => ({
        slug: condition.slug,
    }));
}

export default function ConditionDetailPage({ params }: { params: { slug: string } }) {
    const condition = conditions.find((c) => c.slug === params.slug);

    if (!condition) {
        notFound();
    }

    const category = getCategoryById(condition.category);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-4xl px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-12 border-b border-slate-800 pb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Link
                                href="/conditions"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Conditions
                            </Link>
                            <span className="text-slate-600">•</span>
                            <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                {category?.name}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {condition.name}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light italic">
                            {condition.tagline}
                        </p>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            {condition.description}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Treatments */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <BadgeCheck className="w-6 h-6 text-blue-500" />
                                    Key Treatments
                                </h2>
                                <div className="space-y-4">
                                    {condition.treatments.map((treatment) => (
                                        <div key={treatment.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white mb-1">{treatment.name}</h3>
                                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">{treatment.type}</div>
                                                    <p className="text-slate-400 text-sm leading-relaxed">{treatment.description}</p>
                                                </div>
                                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${treatment.evidenceRating === 'A' ? 'bg-green-500/10 text-green-400' :
                                                        treatment.evidenceRating === 'B' ? 'bg-blue-500/10 text-blue-400' :
                                                            'bg-yellow-500/10 text-yellow-400'
                                                    }`}>
                                                    Grade {treatment.evidenceRating}
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
                                        {condition.researchSummary}
                                    </p>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Symptoms */}
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-orange-400" />
                                    Symptoms
                                </h3>
                                <ul className="space-y-3">
                                    {condition.symptoms.map(symptom => (
                                        <li key={symptom.name}>
                                            <div className="text-white font-medium">{symptom.name}</div>
                                            <div className="text-sm text-slate-400">{symptom.description}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Diet & Lifestyle */}
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Utensils className="w-5 h-5 text-emerald-400" />
                                    Diet & Lifestyle
                                </h3>

                                <div className="space-y-6">
                                    {condition.dietaryRecommendations.length > 0 && (
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Dietary</div>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                                                {condition.dietaryRecommendations.map(rec => (
                                                    <li key={rec}>{rec}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {condition.lifestyleRecommendations.length > 0 && (
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Lifestyle</div>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                                                {condition.lifestyleRecommendations.map(rec => (
                                                    <li key={rec}>{rec}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Testing */}
                            {condition.testingOptions.length > 0 && (
                                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <Stethoscope className="w-5 h-5 text-blue-400" />
                                        Testing
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
                                        {condition.testingOptions.map(test => (
                                            <li key={test}>{test}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
