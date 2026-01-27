import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { conditions } from '@/lib/data/conditions';
import { Activity, Apple, Moon, Wind, AlertTriangle, BookOpen } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return conditions.map((s) => ({
        slug: s.slug,
    }));
}

export default function ConditionDetailPage({ params }: { params: { slug: string } }) {
    const condition = conditions.find((s) => s.slug === params.slug);

    if (!condition) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-4xl px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-12 border-b border-slate-800 pb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <Link
                                href="/conditions"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Conditions
                            </Link>
                            <span className="text-rose-500">•</span>
                            <span className="text-sm font-medium text-rose-400 uppercase tracking-wider">
                                {condition.category}
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

                            {/* Interventions */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">Evidence-Based Interventions</h2>
                                <div className="space-y-6">
                                    {condition.interventions.map((item) => (
                                        <div key={item.id} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                                <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${item.evidenceLevel === 'High' ? 'bg-green-500/20 text-green-400' :
                                                        item.evidenceLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                                            'bg-slate-700 text-slate-400'
                                                    }`}>
                                                    {item.evidenceLevel} Evidence
                                                </span>
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-1">Mechanism</h4>
                                                    <p className="text-slate-300 text-sm">{item.mechanism}</p>
                                                </div>
                                                <div className="bg-slate-800 p-3 rounded">
                                                    <h4 className="text-xs font-bold text-rose-400 uppercase mb-1">Protocol</h4>
                                                    <p className="text-white font-medium text-sm">{item.protocol}</p>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                                    <BookOpen className="w-3 h-3" />
                                                    {item.references} Studies Referenced
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-6">Lifestyle Factors</h3>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-2 text-rose-400 font-medium mb-1">
                                            <Apple className="w-4 h-4" /> Diet
                                        </div>
                                        <p className="text-sm text-slate-300">{condition.lifestyleFactors.diet}</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-rose-400 font-medium mb-1">
                                            <Activity className="w-4 h-4" /> Exercise
                                        </div>
                                        <p className="text-sm text-slate-300">{condition.lifestyleFactors.exercise}</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-rose-400 font-medium mb-1">
                                            <Moon className="w-4 h-4" /> Sleep
                                        </div>
                                        <p className="text-sm text-slate-300">{condition.lifestyleFactors.sleep}</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-rose-400 font-medium mb-1">
                                            <Wind className="w-4 h-4" /> Stress
                                        </div>
                                        <p className="text-sm text-slate-300">{condition.lifestyleFactors.stress}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                                <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Medical Disclaimer
                                </h3>
                                <p className="text-sm text-slate-300 italic">
                                    {condition.disclaimer}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
