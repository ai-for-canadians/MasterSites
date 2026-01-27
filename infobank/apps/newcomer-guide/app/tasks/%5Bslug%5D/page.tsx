import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { tasks } from '@/lib/data/tasks';
import Link from 'next/link';
import { ArrowLeft, Clock, FileText, AlertTriangle, ExternalLink } from 'lucide-react';

export function generateStaticParams() {
    return tasks.map((t) => ({
        slug: t.slug,
    }));
}

export default function TaskDetailPage({ params }: { params: { slug: string } }) {
    const task = tasks.find((t) => t.slug === params.slug);

    if (!task) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-3xl px-6 lg:px-8">

                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-red-600 mb-8 font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back to Timeline
                    </Link>

                    <header className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm mb-8">
                        <div className="flex gap-4 mb-4">
                            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">
                                {task.stage.replace('-', ' ')}
                            </span>
                            {task.importance === 'critical' && (
                                <span className="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                    Critical
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">{task.title}</h1>
                        <p className="text-lg text-slate-600">{task.description}</p>

                        <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-6 text-sm font-medium text-slate-500">
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" /> Est. Time: {task.estimatedTime}
                            </span>
                        </div>
                    </header>

                    <div className="space-y-8">

                        {/* Documents */}
                        <section className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-slate-400" />
                                Required Documents
                            </h2>
                            <ul className="space-y-3">
                                {task.requiredDocuments.map(doc => (
                                    <li key={doc} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                                        <span className="text-slate-700">{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Provincial Variations */}
                        {task.provincialVariations && (
                            <section className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-slate-400" />
                                    Provincial Variations
                                </h2>
                                <div className="grid gap-4">
                                    {task.provincialVariations.map(pv => (
                                        <div key={pv.code} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-slate-900">
                                                    {pv.code}: {pv.name}
                                                </h3>
                                                {pv.url && (
                                                    <a href={pv.url} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                            <p className="text-sm text-slate-600">{pv.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                    </div>

                </article>
            </main>
            <Footer />
        </div>
    );
}
