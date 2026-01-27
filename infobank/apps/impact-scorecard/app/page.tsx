import Link from 'next/link';
import { TrendingUp, Award, Building2, Heart, ArrowRight } from 'lucide-react';
import { getTopOrganizations, getNonprofits, getCompanies } from '@/lib/data/organizations';

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

export default function HomePage() {
    const topOrgs = getTopOrganizations(6);
    const nonprofitCount = getNonprofits().length;
    const companyCount = getCompanies().length;

    return (
        <div className="bg-slate-900">
            {/* Hero */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10" />
                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
                        <TrendingUp className="w-4 h-4" />
                        Transparency Leaderboard
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-6">
                        Which organizations <span className="text-emerald-400">actually deliver</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                        Cut through the marketing. We rate nonprofits and companies on what matters:
                        real impact, transparency, and accountability.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/nonprofits"
                            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition-colors"
                        >
                            <Heart className="w-5 h-5" />
                            View Nonprofits
                        </Link>
                        <Link
                            href="/companies"
                            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-50 px-6 py-3 rounded-xl font-semibold transition-colors"
                        >
                            <Building2 className="w-5 h-5" />
                            View Companies
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800 bg-slate-800/30">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-slate-50">{nonprofitCount}</div>
                            <div className="text-slate-400 mt-1">Nonprofits Rated</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-50">{companyCount}</div>
                            <div className="text-slate-400 mt-1">Companies Rated</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-50">A-F</div>
                            <div className="text-slate-400 mt-1">Clear Grading</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-emerald-400">🇨🇦</div>
                            <div className="text-slate-400 mt-1">Canada Focus</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Rated */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <Award className="w-6 h-6 text-emerald-400" />
                            <h2 className="text-2xl font-bold text-slate-50">Top Rated Organizations</h2>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topOrgs.map((org, i) => (
                            <Link
                                key={org.id}
                                href={`/org/${org.slug}`}
                                className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-all"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl font-bold text-slate-600">#{i + 1}</span>
                                        <span className={`px-2.5 py-1 rounded-lg text-sm font-bold ${gradeColors[org.overallGrade]}`}>
                                            {org.overallGrade}
                                        </span>
                                    </div>
                                    <span className="text-xs text-slate-500 uppercase tracking-wide">
                                        {org.type === 'nonprofit' ? 'Nonprofit' : org.type === 'bcorp' ? 'B Corp' : 'Company'}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-50 group-hover:text-emerald-400 transition-colors mb-2">
                                    {org.name}
                                </h3>
                                <p className="text-sm text-slate-400 mb-4">{org.tagline}</p>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-500">{org.location}</span>
                                    <span className="text-emerald-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        View <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-50 text-center mb-12">Browse by Category</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <Link
                            href="/nonprofits"
                            className="group bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/30 rounded-2xl p-8 hover:border-rose-500/50 transition-all"
                        >
                            <Heart className="w-10 h-10 text-rose-400 mb-4" />
                            <h3 className="text-xl font-semibold text-slate-50 mb-2">Nonprofits</h3>
                            <p className="text-slate-400 mb-4">
                                Charities and foundations rated on program spending, transparency, and measurable impact.
                            </p>
                            <span className="text-rose-400 flex items-center gap-1 text-sm">
                                View nonprofits <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            href="/companies"
                            className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
                        >
                            <Building2 className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold text-slate-50 mb-2">Companies</h3>
                            <p className="text-slate-400 mb-4">
                                B Corps and public companies rated on ESG, employee satisfaction, and stakeholder value.
                            </p>
                            <span className="text-blue-400 flex items-center gap-1 text-sm">
                                View companies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Methodology Preview */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-slate-50 mb-6">How We Rate</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        We combine third-party ratings (Charity Navigator, GiveWell, B Corp) with our own analysis
                        of financial transparency, outcome reporting, and leadership accountability.
                    </p>
                    <Link
                        href="/methodology"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
                    >
                        Read our full methodology <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
