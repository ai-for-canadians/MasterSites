import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { scripts } from '@/lib/data/strategies';
import { MessageSquare, CheckCircle, Lightbulb, Copy } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return scripts.map((s) => ({
        slug: s.slug,
    }));
}

export default function ScriptDetailPage({ params }: { params: { slug: string } }) {
    const script = scripts.find((s) => s.slug === params.slug);

    if (!script) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-3xl px-6 lg:px-8">
                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <Link
                                href="/scripts"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Scripts
                            </Link>
                            <span className="text-emerald-500">•</span>
                            <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
                                {script.scenario}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {script.name}
                        </h1>
                        <p className="text-xl text-slate-300">
                            {script.description}
                        </p>
                    </header>

                    <div className="space-y-12">
                        {/* The Script */}
                        <section className="bg-slate-800 rounded-xl p-8 border-l-4 border-emerald-500 shadow-xl relative group">
                            <div className="absolute top-4 right-4 text-emerald-500/50">
                                <MessageSquare className="w-8 h-8" />
                            </div>
                            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4">Say This:</h3>
                            <p className="text-2xl text-white font-serif leading-relaxed italic">
                                {script.wordForWord}
                            </p>
                        </section>

                        {/* Why it works */}
                        <section>
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-yellow-400" /> Why this works
                                </h3>
                                <p className="text-slate-300 leading-relaxed">
                                    {script.whyItWorks}
                                </p>
                            </div>
                        </section>

                        {/* Tips */}
                        <section>
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-400" /> Pro Tips
                            </h3>
                            <ul className="space-y-3">
                                {script.tips.map(tip => (
                                    <li key={tip} className="flex gap-3 text-slate-300">
                                        <span className="text-emerald-500">•</span>
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
