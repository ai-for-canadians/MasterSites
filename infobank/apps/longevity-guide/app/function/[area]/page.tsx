import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { functionalAreas } from '@/lib/data/functional-areas';
import { interventions } from '@/lib/data/interventions';
import { notFound } from 'next/navigation';
import { Target, Clock, Activity, Brain, Heart, Flame, Bone, Eye, Dumbbell } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Dumbbell,
    Brain,
    Flame,
    Heart,
    Bone,
    Eye,
    Activity,
};

export function generateStaticParams() {
    return functionalAreas.map((area) => ({
        area: area.slug,
    }));
}

export function generateMetadata({ params }: { params: { area: string } }) {
    const area = functionalAreas.find(a => a.slug === params.area);
    return {
        title: area ? `${area.name} | LongevityGuide` : 'Functional Area',
        description: area?.description,
    };
}

export default function FunctionalAreaPage({ params }: { params: { area: string } }) {
    const area = functionalAreas.find(a => a.slug === params.area);

    if (!area) {
        notFound();
    }

    const linkedInterventions = area.keyInterventions
        .map(slug => interventions.find(i => i.slug === slug))
        .filter(Boolean);

    const IconComponent = iconMap[area.icon] || Activity;

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-emerald-500/20 rounded-xl">
                                <IconComponent className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-slate-50">
                                {area.name}
                            </h1>
                        </div>
                        <p className="text-lg text-slate-400 mb-6">{area.description}</p>
                        <div className="flex items-center gap-2 text-amber-400 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{area.declineTimeline}</span>
                        </div>
                    </div>
                </section>

                {/* Area Navigation */}
                <section className="py-6 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {functionalAreas.map(a => (
                                <Link
                                    key={a.id}
                                    href={`/function/${a.slug}`}
                                    className={`px-4 py-2 rounded-full font-medium transition-colors ${a.slug === area.slug
                                        ? 'bg-emerald-500 text-slate-900'
                                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                        }`}
                                >
                                    {a.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Metrics */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <Target className="w-6 h-6 text-emerald-400" />
                            <h2 className="text-2xl font-bold text-slate-50">Key Metrics to Track</h2>
                        </div>
                        <div className="grid gap-4">
                            {area.metrics.map((metric, i) => (
                                <div
                                    key={i}
                                    className="p-5 bg-slate-800/50 rounded-xl border border-slate-700"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                        <h3 className="font-semibold text-slate-50">{metric.name}</h3>
                                        {metric.targetRange && (
                                            <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">
                                                Target: {metric.targetRange}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-400 text-sm mb-2">{metric.description}</p>
                                    <p className="text-slate-500 text-sm">
                                        <strong>How to measure:</strong> {metric.howToMeasure}
                                    </p>
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
            </main>
            <Footer />
        </div>
    );
}
