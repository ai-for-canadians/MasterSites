import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ageGuides } from '@/lib/data/age-guides';
import { interventions } from '@/lib/data/interventions';
import { notFound } from 'next/navigation';
import { Calendar, Target, AlertTriangle, Activity } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return ageGuides.map((guide) => ({
        decade: guide.decade,
    }));
}

export function generateMetadata({ params }: { params: { decade: string } }) {
    const guide = ageGuides.find(g => g.decade === params.decade);
    return {
        title: guide ? `${guide.title} | LongevityGuide` : 'Age Guide',
        description: guide?.description,
    };
}

export default function AgeGuidePage({ params }: { params: { decade: string } }) {
    const guide = ageGuides.find(g => g.decade === params.decade);

    if (!guide) {
        notFound();
    }

    const linkedInterventions = guide.keyInterventions
        .map(slug => interventions.find(i => i.slug === slug))
        .filter(Boolean);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-lg font-bold">
                                {guide.decade}
                            </div>
                            <Calendar className="w-5 h-5 text-slate-500" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-4">
                            {guide.title}
                        </h1>
                        <p className="text-xl text-emerald-400 mb-6">{guide.tagline}</p>
                        <p className="text-lg text-slate-400">{guide.description}</p>
                    </div>
                </section>

                {/* Age Navigation */}
                <section className="py-6 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {ageGuides.map(g => (
                                <Link
                                    key={g.decade}
                                    href={`/age/${g.decade}`}
                                    className={`px-4 py-2 rounded-full font-medium transition-colors ${g.decade === guide.decade
                                            ? 'bg-emerald-500 text-slate-900'
                                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                        }`}
                                >
                                    {g.decade}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Priorities */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <Target className="w-6 h-6 text-emerald-400" />
                            <h2 className="text-2xl font-bold text-slate-50">Priorities for Your {guide.decade}</h2>
                        </div>
                        <div className="grid gap-4">
                            {guide.priorities.map((priority, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center font-bold">
                                        {i + 1}
                                    </div>
                                    <p className="text-slate-300">{priority}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Interventions */}
                <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <Activity className="w-6 h-6 text-blue-400" />
                            <h2 className="text-2xl font-bold text-slate-50">Key Interventions</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {linkedInterventions.map((intervention) => (
                                <Link
                                    key={intervention!.id}
                                    href={`/interventions/${intervention!.slug}`}
                                    className="p-5 bg-slate-800 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-slate-50">{intervention!.name}</h3>
                                        <span className={`text-xs px-2 py-1 rounded font-medium ${intervention!.evidenceRating === 'A' ? 'bg-emerald-500/20 text-emerald-400' :
                                                intervention!.evidenceRating === 'B' ? 'bg-blue-500/20 text-blue-400' :
                                                    'bg-amber-500/20 text-amber-400'
                                            }`}>
                                            Grade {intervention!.evidenceRating}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-400">{intervention!.tagline}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Biomarkers to Track */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-50 mb-6">Biomarkers to Track</h2>
                        <div className="flex flex-wrap gap-3">
                            {guide.biomarkersToTrack.map((marker) => (
                                <Link
                                    key={marker}
                                    href={`/biomarkers#${marker}`}
                                    className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:border-emerald-500/50 transition-colors"
                                >
                                    {marker.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Warnings */}
                {guide.warnings.length > 0 && (
                    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-amber-500/5">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-3 mb-6">
                                <AlertTriangle className="w-6 h-6 text-amber-400" />
                                <h2 className="text-2xl font-bold text-slate-50">Watch Out For</h2>
                            </div>
                            <ul className="space-y-3">
                                {guide.warnings.map((warning, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-400">
                                        <span className="text-amber-400">⚠️</span>
                                        {warning}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}
