import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { topics } from '@/lib/data/topics';
import { EvidenceBadge } from '@/components/home/EvidenceBadge';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertOctagon, ExternalLink } from 'lucide-react';

export function generateStaticParams() {
    return topics.map((t) => ({
        slug: t.slug,
    }));
}

export default function TopicDetailPage({ params }: { params: { slug: string } }) {
    const topic = topics.find((t) => t.slug === params.slug);

    if (!topic) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-3xl px-6 lg:px-8">

                    <Link href="/topics" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 mb-8 font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back to Topics
                    </Link>

                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wider">
                                {topic.stage}
                            </span>
                            <EvidenceBadge rating={topic.evidenceRating} />
                        </div>
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">{topic.title}</h1>
                        <p className="text-xl text-slate-600 leading-relaxed">{topic.fullDescription}</p>
                    </header>

                    <div className="space-y-12">

                        {/* Key Takeaways */}
                        <section className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
                            <h2 className="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
                                <CheckCircle className="w-6 h-6 text-indigo-600" />
                                Key Takeaways
                            </h2>
                            <ul className="space-y-4">
                                {topic.keyTakeaways.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-800">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Myth Buster */}
                        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <AlertOctagon className="w-32 h-32 text-slate-900" />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Myth Buster</h2>
                            <p className="text-lg text-slate-700 leading-relaxed font-medium relative z-10 italic border-l-4 border-slate-300 pl-4">
                                {topic.mythBuster}
                            </p>
                        </section>

                        {/* Resources */}
                        {topic.resources.length > 0 && (
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6">Sources & Further Reading</h2>
                                <div className="space-y-3">
                                    {topic.resources.map((res, i) => (
                                        <a
                                            key={i}
                                            href={res.url}
                                            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition-all group"
                                        >
                                            <div>
                                                <div className="font-bold text-slate-900 group-hover:text-indigo-700">{res.title}</div>
                                                <div className="text-xs text-slate-400 uppercase tracking-wider">{res.type}</div>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-indigo-400" />
                                        </a>
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
