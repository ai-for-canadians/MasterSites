import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { steps } from '@/lib/data/steps';
import Link from 'next/link';
import { ArrowLeft, CheckSquare, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
    return steps.map((s) => ({
        slug: s.slug,
    }));
}

export default function ProcessDetailPage({ params }: { params: { slug: string } }) {
    const step = steps.find((s) => s.slug === params.slug);

    if (!step) {
        notFound();
    }

    // Find next step
    const nextStep = steps.find(s => s.order === step.order + 1);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-3xl px-6 lg:px-8">

                    <Link href="/process" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-8 font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back to Process
                    </Link>

                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                                {step.order}
                            </span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                {step.category}
                            </span>
                        </div>
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">{step.title}</h1>
                        <p className="text-xl text-slate-600 leading-relaxed font-serif">{step.fullDescription}</p>
                    </header>

                    <div className="space-y-12">

                        {/* Checklist */}
                        <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <CheckSquare className="w-6 h-6 text-slate-400" />
                                Action Checklist
                            </h2>
                            <ul className="space-y-4">
                                {step.checklist.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <input type="checkbox" className="mt-1.5 w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500" />
                                        <span className="text-slate-700 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Resources */}
                        {step.resources.length > 0 && (
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <BookOpen className="w-6 h-6 text-slate-400" />
                                    Official Resources
                                </h2>
                                <div className="space-y-3">
                                    {step.resources.map((res, i) => (
                                        <a
                                            key={i}
                                            href={res.url}
                                            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-400 hover:shadow-sm transition-all group"
                                        >
                                            <div className="font-bold text-slate-700 group-hover:text-slate-900">{res.title}</div>
                                            <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-slate-500" />
                                        </a>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Next Step */}
                        {nextStep && (
                            <div className="border-t border-slate-100 pt-12 mt-12">
                                <div className="text-sm text-slate-400 uppercase tracking-widest mb-4 font-bold text-center">Next Step</div>
                                <Link
                                    href={`/process/${nextStep.slug}`}
                                    className="block bg-slate-900 text-white p-8 rounded-2xl shadow-lg hover:bg-slate-800 transition-colors text-center group"
                                >
                                    <div className="text-lg font-bold mb-2 flex items-center justify-center gap-2">
                                        {nextStep.title} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            </div>
                        )}

                    </div>

                </article>
            </main>
            <Footer />
        </div>
    );
}
