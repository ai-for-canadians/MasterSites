import { notFound } from 'next/navigation';
import { tools } from '@/lib/data/tools';
import { categories } from '@/lib/data/categories';
import { Star, ExternalLink, ThumbsUp, ThumbsDown, Zap, CheckCircle2, XCircle } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return tools.map((tool) => ({
        slug: tool.slug,
    }));
}

export default function ToolPage({ params }: { params: { slug: string } }) {
    const tool = tools.find((t) => t.slug === params.slug);

    if (!tool) {
        notFound();
    }

    const category = categories.find((c) => c.id === tool.category);

    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <div className="bg-slate-900 border-b border-slate-800 py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                        <Link href="/tools" className="hover:text-indigo-400 transition-colors">Tools</Link>
                        <span>/</span>
                        <span className="text-slate-400">{category?.name}</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">{tool.name}</h1>
                            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-6">
                                {tool.summary}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded text-sm text-slate-300">
                                    {category?.name}
                                </span>
                                <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded text-sm text-slate-300 capitalize">
                                    {tool.pricingType}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center bg-slate-800 border border-slate-700 rounded-xl p-6 min-w-[200px]">
                            <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-2">Rating</div>
                            <div className="flex items-end gap-2 mb-4">
                                <span className="text-5xl font-bold text-slate-50">{tool.rating}</span>
                                <span className="text-xl text-slate-500 mb-1">/10</span>
                            </div>
                            <div className="flex gap-1 text-amber-500 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < Math.round(tool.rating / 2) ? 'fill-amber-500' : 'text-slate-600 fill-slate-600'}`} />
                                ))}
                            </div>
                            <a
                                href={tool.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-center px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                Visit Site
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-50 mb-4">The Verdict</h2>
                            <div className="prose prose-invert max-w-none text-slate-300 text-lg leading-relaxed">
                                {tool.description}
                            </div>
                        </section>

                        {/* Pros & Cons */}
                        <section className="grid md:grid-cols-2 gap-6">
                            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                                    <ThumbsUp className="w-5 h-5" />
                                    The Good
                                </h3>
                                <ul className="space-y-3">
                                    {tool.pros.map((pro, i) => (
                                        <li key={i} className="flex gap-3 text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                            {pro}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                                    <ThumbsDown className="w-5 h-5" />
                                    The Bad
                                </h3>
                                <ul className="space-y-3">
                                    {tool.cons.map((con, i) => (
                                        <li key={i} className="flex gap-3 text-slate-300">
                                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Use Cases */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-50 mb-4 flex items-center gap-2">
                                <Target className="w-6 h-6 text-indigo-500" />
                                Best For
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {tool.useCases.map((useCase, i) => (
                                    <span key={i} className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-slate-300">
                                        {useCase}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar - Pricing */}
                    <div className="space-y-8">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-50 mb-4 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-amber-500" />
                                Pricing
                            </h3>
                            <div className="space-y-4">
                                {tool.pricingPlans.map((plan, i) => (
                                    <div key={i} className="border-b border-slate-700 last:border-0 pb-4 last:pb-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-semibold text-slate-200">{plan.name}</span>
                                            <span className="font-mono text-indigo-400">{plan.price}</span>
                                        </div>
                                        <ul className="text-xs text-slate-400 space-y-1">
                                            {plan.features.map((feat, j) => (
                                                <li key={j}>• {feat}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-700 text-xs text-slate-500 text-center">
                                Prices checked last month.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Target } from 'lucide-react';
