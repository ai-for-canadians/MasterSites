import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { strategies } from '@/lib/data/strategies';
import { Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return strategies.map((s) => ({
        slug: s.slug,
    }));
}

export default function StrategyDetailPage({ params }: { params: { slug: string } }) {
    const strategy = strategies.find((s) => s.slug === params.slug);

    if (!strategy) {
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
                                href="/strategies"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Strategies
                            </Link>
                            <span className="text-emerald-500">•</span>
                            <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
                                {strategy.category}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {strategy.name}
                        </h1>
                        <p className="text-xl text-slate-300 italic">
                            {strategy.tagline}
                        </p>
                    </header>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-slate-300 mb-8">{strategy.description}</p>

                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Trophy className="w-6 h-6 text-yellow-500" /> How to execute
                        </h3>
                        <ol className="space-y-4">
                            {strategy.steps.map((step, idx) => (
                                <li key={idx} className="flex gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                                        {idx + 1}
                                    </span>
                                    <p className="text-slate-200 mt-1">{step}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
