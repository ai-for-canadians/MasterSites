import { notFound } from 'next/navigation';
import { conditions } from '@/lib/data/conditions';
import { Activity, Brain, CheckCircle2, Stethoscope, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return conditions.map((c) => ({
        slug: c.slug,
    }));
}

export default function ConditionPage({ params }: { params: { slug: string } }) {
    const condition = conditions.find((c) => c.slug === params.slug);

    if (!condition) {
        notFound();
    }

    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <div className="bg-slate-900 border-b border-slate-800 py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                        <Link href="/conditions" className="hover:text-teal-400 transition-colors">Conditions</Link>
                        <span>/</span>
                        <span className="text-slate-400 capitalize">{condition.category}</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">{condition.name}</h1>
                            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-6">
                                {condition.summary}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-50 mb-4">What is it?</h2>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                {condition.description}
                            </p>
                        </section>

                        {/* Symptoms */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-50 mb-4 flex items-center gap-2">
                                <Activity className="w-6 h-6 text-teal-500" />
                                Common Symptoms
                            </h2>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {condition.symptoms.map((symptom, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                        <span className="text-teal-500 font-bold">•</span>
                                        {symptom}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* First Steps */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-50 mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6 text-teal-500" />
                                First Steps
                            </h2>
                            <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl p-6">
                                <ul className="space-y-3">
                                    {condition.firstSteps.map((step, i) => (
                                        <li key={i} className="flex gap-3 text-slate-300">
                                            <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-sm font-bold flex-shrink-0">
                                                {i + 1}
                                            </span>
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-50 mb-4 flex items-center gap-2">
                                <Stethoscope className="w-5 h-5 text-teal-500" />
                                Treatment Options
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Common Treatments</div>
                                    <ul className="space-y-2">
                                        {condition.commonTreatments.map((tx, i) => (
                                            <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                                                {tx}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Professional to See</div>
                                    <Link
                                        href="/providers"
                                        className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300 transition-colors"
                                    >
                                        {condition.professionalToSee}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
