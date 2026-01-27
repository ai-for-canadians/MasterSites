import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { careers } from '@/lib/data/careers';
import { getCategoryById } from '@/lib/data/categories';
import { BadgeCheck, Brain, TrendingUp, Clock, DollarSign, ListChecks } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return careers.map((c) => ({
        slug: c.slug,
    }));
}

export default function CareerDetailPage({ params }: { params: { slug: string } }) {
    const career = careers.find((c) => c.slug === params.slug);

    if (!career) {
        notFound();
    }

    const category = getCategoryById(career.category);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-4xl px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-12 border-b border-slate-800 pb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Link
                                href="/careers"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Careers
                            </Link>
                            <span className="text-slate-600">•</span>
                            <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                {category?.name}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {career.name}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light italic">
                            {career.tagline}
                        </p>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            {career.description}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                    <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm">
                                        <DollarSign className="w-4 h-4" /> Salary Range
                                    </div>
                                    <div className="text-white font-semibold">
                                        {career.salaryRange.entry} - {career.salaryRange.senior}
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                    <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm">
                                        <TrendingUp className="w-4 h-4" /> Outlook
                                    </div>
                                    <div className={`font-semibold ${career.outlook === 'Exploding' ? 'text-purple-400' : 'text-green-400'
                                        }`}>
                                        {career.outlook}
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                    <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm">
                                        <Clock className="w-4 h-4" /> Time to Pivot
                                    </div>
                                    <div className="text-white font-semibold">
                                        {career.timeToPivot}
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                    <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm">
                                        <Brain className="w-4 h-4" /> Difficulty
                                    </div>
                                    <div className="text-white font-semibold">
                                        {career.difficulty}
                                    </div>
                                </div>
                            </div>

                            {/* Skills */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <BadgeCheck className="w-6 h-6 text-emerald-500" />
                                    Technical Skills
                                </h2>
                                <div className="space-y-4">
                                    {career.technicalSkills.map((skill) => (
                                        <div key={skill.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
                                                    <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
                                                </div>
                                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${skill.importance === 'Critical' ? 'bg-red-500/10 text-red-400' :
                                                        'bg-blue-500/10 text-blue-400'
                                                    }`}>
                                                    {skill.importance}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Soft Skills */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Brain className="w-6 h-6 text-blue-500" />
                                    Soft Skills
                                </h2>
                                <div className="space-y-4">
                                    {career.softSkills.map((skill) => (
                                        <div key={skill.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
                                                    <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
                                                </div>
                                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${skill.importance === 'Critical' ? 'bg-red-500/10 text-red-400' :
                                                        'bg-blue-500/10 text-blue-400'
                                                    }`}>
                                                    {skill.importance}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Roadmap */}
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <ListChecks className="w-5 h-5 text-emerald-400" />
                                    Roadmap
                                </h3>

                                <div className="space-y-6">
                                    <ul className="space-y-4">
                                        {career.roadmap.map((step, idx) => (
                                            <li key={step} className="flex gap-3">
                                                <span className="flex-none flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold ring-1 ring-emerald-500/20">
                                                    {idx + 1}
                                                </span>
                                                <span className="text-slate-300 text-sm">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
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
