import { organizations, getOrganization } from '@/lib/data/organizations';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, MapPin, Calendar, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
    return organizations.map((org) => ({
        slug: org.slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const org = getOrganization(params.slug);
    return {
        title: org ? `${org.name} | Impact Scorecard` : 'Organization',
        description: org?.description,
    };
}

const gradeColors: Record<string, string> = {
    'A+': 'bg-emerald-500 text-white',
    'A': 'bg-emerald-500/80 text-white',
    'A-': 'bg-emerald-500/60 text-white',
    'B+': 'bg-blue-500 text-white',
    'B': 'bg-blue-500/80 text-white',
    'B-': 'bg-blue-500/60 text-white',
    'C+': 'bg-amber-500 text-white',
    'C': 'bg-amber-500/80 text-white',
    'C-': 'bg-amber-500/60 text-white',
    'D': 'bg-red-500/80 text-white',
    'F': 'bg-red-500 text-white',
    'NR': 'bg-slate-500 text-white',
};

function MetricBar({ label, value, max = 100 }: { label: string; value: number; max?: number }) {
    const percentage = (value / max) * 100;
    const color = percentage >= 80 ? 'bg-emerald-500' : percentage >= 60 ? 'bg-blue-500' : percentage >= 40 ? 'bg-amber-500' : 'bg-red-500';

    return (
        <div>
            <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">{label}</span>
                <span className="text-slate-300">{value}{max === 100 ? '%' : `/${max}`}</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
                <div className={`h-2 ${color} rounded-full`} style={{ width: `${percentage}%` }} />
            </div>
        </div>
    );
}

export default function OrganizationPage({ params }: { params: { slug: string } }) {
    const org = getOrganization(params.slug);

    if (!org) {
        notFound();
    }

    const isNonprofit = org.type === 'nonprofit';
    const backLink = isNonprofit ? '/nonprofits' : '/companies';

    return (
        <div className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href={backLink}
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-50 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to {isNonprofit ? 'Nonprofits' : 'Companies'}
                </Link>

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1.5 rounded-xl text-lg font-bold ${gradeColors[org.overallGrade]}`}>
                                {org.overallGrade}
                            </span>
                            <span className="text-sm text-slate-500 uppercase tracking-wide">
                                {org.type === 'nonprofit' ? 'Nonprofit' : org.type === 'bcorp' ? 'B Corp' : 'Public Company'}
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-50 mb-2">{org.name}</h1>
                        <p className="text-lg text-emerald-400">{org.tagline}</p>
                    </div>
                    <div className="text-right">
                        <div className="text-4xl font-bold text-slate-50">{org.overallScore}</div>
                        <div className="text-sm text-slate-500">Overall Score</div>
                    </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-6 mb-8 text-slate-400">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {org.location}
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Founded {org.founded}
                    </div>
                    <a
                        href={org.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Website
                    </a>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-8">{org.description}</p>

                {/* Metrics */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-8">
                    <h2 className="text-xl font-semibold text-slate-50 mb-6">
                        {isNonprofit ? 'Nonprofit Metrics' : 'Company Metrics'}
                    </h2>
                    <div className="grid gap-4">
                        {isNonprofit && org.nonprofitMetrics && (
                            <>
                                <MetricBar label="Program Expense Ratio" value={org.nonprofitMetrics.programExpenseRatio} />
                                <MetricBar label="Overhead Transparency" value={org.nonprofitMetrics.overheadTransparency} />
                                <MetricBar label="Impact Measurement Quality" value={org.nonprofitMetrics.impactMeasurementQuality} />
                                <MetricBar label="Financial Transparency" value={org.nonprofitMetrics.financialTransparency} />
                                <MetricBar label="Outcome Reporting" value={org.nonprofitMetrics.outcomeReporting} />
                            </>
                        )}
                        {!isNonprofit && org.companyMetrics && (
                            <>
                                {org.companyMetrics.bCorpScore && (
                                    <MetricBar label="B Corp Score" value={org.companyMetrics.bCorpScore} max={200} />
                                )}
                                <MetricBar label="Environmental Impact" value={org.companyMetrics.environmentalImpact} />
                                <MetricBar label="Employee Satisfaction" value={org.companyMetrics.employeeSatisfaction * 20} />
                                <MetricBar label="Community Investment" value={org.companyMetrics.communityInvestment} />
                                <MetricBar label="Pay Equity" value={org.companyMetrics.payEquity} />
                                <MetricBar label="Supply Chain Ethics" value={org.companyMetrics.supplyChainEthics} />
                                <MetricBar label="Governance Transparency" value={org.companyMetrics.governanceTransparency} />
                            </>
                        )}
                    </div>
                </div>

                {/* Highlights & Concerns */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {org.highlights.length > 0 && (
                        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                            <h3 className="flex items-center gap-2 text-emerald-400 font-semibold mb-4">
                                <CheckCircle2 className="w-5 h-5" />
                                Highlights
                            </h3>
                            <ul className="space-y-2">
                                {org.highlights.map((h, i) => (
                                    <li key={i} className="text-sm text-slate-300">• {h}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {org.concerns.length > 0 && (
                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                            <h3 className="flex items-center gap-2 text-amber-400 font-semibold mb-4">
                                <AlertTriangle className="w-5 h-5" />
                                Concerns
                            </h3>
                            <ul className="space-y-2">
                                {org.concerns.map((c, i) => (
                                    <li key={i} className="text-sm text-slate-300">• {c}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Sources */}
                {org.sources.length > 0 && (
                    <div className="text-sm text-slate-500">
                        <span className="font-medium">Sources: </span>
                        {org.sources.map((s, i) => (
                            <span key={i}>
                                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-300">
                                    {s.name}
                                </a>
                                {i < org.sources.length - 1 && ', '}
                            </span>
                        ))}
                        <span className="ml-4">Last updated: {org.lastUpdated}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
