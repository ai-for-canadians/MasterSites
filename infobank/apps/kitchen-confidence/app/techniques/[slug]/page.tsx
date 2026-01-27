import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { techniques } from '@/lib/data/techniques';
import { getCategoryById } from '@/lib/data/categories';
import { Flame, AlertTriangle, Lightbulb, ChefHat } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return techniques.map((t) => ({
        slug: t.slug,
    }));
}

export default function TechniqueDetailPage({ params }: { params: { slug: string } }) {
    const technique = techniques.find((t) => t.slug === params.slug);

    if (!technique) {
        notFound();
    }

    const category = getCategoryById(technique.category);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-4xl px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-12 border-b border-slate-800 pb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Link
                                href="/techniques"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Library
                            </Link>
                            <span className="text-slate-600">•</span>
                            <span className="text-sm font-medium text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                {category?.name}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {technique.name}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light italic">
                            {technique.tagline}
                        </p>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            {technique.description}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">

                            <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Lightbulb className="w-6 h-6 text-yellow-400" />
                                    Why it works
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    {technique.whyItWorks}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <ChefHat className="w-6 h-6 text-orange-500" />
                                    The Method
                                </h2>
                                <div className="space-y-6">
                                    {technique.steps.map((step, idx) => (
                                        <div key={step.id} className="flex gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-800">
                                            <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-lg">
                                                {idx + 1}
                                            </span>
                                            <div>
                                                <p className="text-white text-lg font-medium mb-1">{step.name}</p>
                                                <p className="text-slate-400">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Flame className="w-5 h-5 text-red-500" />
                                    Best Used For
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {technique.bestFor.map(bf => (
                                        <span key={bf} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">
                                            {bf}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                                <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Common Mistakes
                                </h3>
                                <div className="space-y-4">
                                    {technique.commonMistakes.map(mistake => (
                                        <div key={mistake.id}>
                                            <p className="text-white font-medium text-sm mb-1">{mistake.name}</p>
                                            <p className="text-slate-400 text-sm">{mistake.description}</p>
                                        </div>
                                    ))}
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
