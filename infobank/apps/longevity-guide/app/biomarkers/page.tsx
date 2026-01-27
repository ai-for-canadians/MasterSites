import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { biomarkers } from '@/lib/data/biomarkers';
import { FlaskConical, Target, Clock, MapPin, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Biomarkers Guide | LongevityGuide',
    description: 'Essential biomarkers for healthspan tracking with optimal ranges, testing frequency, and Canadian context.',
};

const categoryInfo: Record<string, { name: string; color: string }> = {
    metabolic: { name: 'Metabolic', color: 'emerald' },
    inflammatory: { name: 'Inflammatory', color: 'rose' },
    hormonal: { name: 'Hormonal', color: 'purple' },
    cardiovascular: { name: 'Cardiovascular', color: 'red' },
    nutritional: { name: 'Nutritional', color: 'amber' },
    organ: { name: 'Organ Function', color: 'blue' },
};

export default function BiomarkersPage() {
    const categories = Object.keys(categoryInfo);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <FlaskConical className="w-4 h-4" />
                            Tracking Your Health
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-6">
                            Biomarkers Guide
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            What to test, optimal ranges, and how often. Includes Canadian healthcare context.
                        </p>
                    </div>
                </section>

                {/* Quick Nav */}
                <section className="pb-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map(cat => (
                                <a
                                    key={cat}
                                    href={`#${cat}`}
                                    className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:border-emerald-500/50 transition-colors"
                                >
                                    {categoryInfo[cat].name}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Biomarkers by Category */}
                {categories.map(category => {
                    const catBiomarkers = biomarkers.filter(b => b.category === category);
                    if (catBiomarkers.length === 0) return null;

                    return (
                        <section key={category} id={category} className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center gap-3">
                                    <span className={`w-3 h-3 rounded-full bg-${categoryInfo[category].color}-500`}></span>
                                    {categoryInfo[category].name} Biomarkers
                                </h2>
                                <div className="grid gap-6">
                                    {catBiomarkers.map(marker => (
                                        <div
                                            key={marker.id}
                                            id={marker.slug}
                                            className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 scroll-mt-24"
                                        >
                                            <h3 className="text-xl font-semibold text-slate-50 mb-2">
                                                {marker.name}
                                            </h3>
                                            <p className="text-slate-400 mb-4">{marker.description}</p>

                                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                                {/* Optimal Range */}
                                                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                                                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-1">
                                                        <Target className="w-4 h-4" />
                                                        Optimal Range
                                                    </div>
                                                    <div className="text-slate-50 font-semibold">{marker.optimalRange}</div>
                                                    {marker.conventionalRange && (
                                                        <div className="text-slate-500 text-sm mt-1">
                                                            Conventional: {marker.conventionalRange}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Frequency */}
                                                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-4">
                                                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-1">
                                                        <Clock className="w-4 h-4" />
                                                        Testing Frequency
                                                    </div>
                                                    <div className="text-slate-300">{marker.frequency}</div>
                                                </div>
                                            </div>

                                            {/* Why It Matters */}
                                            <div className="mb-4">
                                                <h4 className="text-sm font-medium text-slate-400 mb-1">Why It Matters</h4>
                                                <p className="text-slate-300 text-sm">{marker.whyItMatters}</p>
                                            </div>

                                            {/* How to Test */}
                                            <div className="mb-4">
                                                <h4 className="text-sm font-medium text-slate-400 mb-1">How to Test</h4>
                                                <p className="text-slate-300 text-sm">{marker.howToTest}</p>
                                            </div>

                                            {/* Canadian Context */}
                                            {marker.canadianContext && (
                                                <div className="mb-4 bg-blue-500/10 border border-blue-500/20 rounded-xl p-3">
                                                    <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-1">
                                                        <MapPin className="w-4 h-4" />
                                                        Canadian Context
                                                    </div>
                                                    <p className="text-slate-300 text-sm">{marker.canadianContext}</p>
                                                </div>
                                            )}

                                            {/* Interventions */}
                                            {marker.interventionsToImprove.length > 0 && (
                                                <div>
                                                    <h4 className="text-sm font-medium text-slate-400 mb-2 flex items-center gap-2">
                                                        <TrendingUp className="w-4 h-4" />
                                                        Interventions to Improve
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {marker.interventionsToImprove.map(int => (
                                                            <Link
                                                                key={int}
                                                                href={`/interventions/${int}`}
                                                                className="px-3 py-1 bg-slate-700 text-slate-300 rounded-lg text-sm hover:bg-slate-600 transition-colors"
                                                            >
                                                                {int.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    );
                })}
            </main>
            <Footer />
        </div>
    );
}
