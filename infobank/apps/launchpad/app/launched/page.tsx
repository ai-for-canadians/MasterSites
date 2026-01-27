import { CheckCircle2, ExternalLink, Users, DollarSign } from 'lucide-react';
import { launchedSites } from '@/lib/data/ideas';

export const metadata = {
    title: 'Launched Sites | LaunchPad',
    description: 'Community-owned InfoBank sites that are live and generating revenue.',
};

export default function LaunchedPage() {
    const totalRevenue = launchedSites.reduce((sum, s) => sum + (s.monthlyRevenue || 0), 0);
    const totalContributors = launchedSites.reduce((sum, s) => sum + s.totalContributors, 0);

    return (
        <div className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    <h1 className="text-3xl font-bold text-slate-50">Launched Sites</h1>
                </div>
                <p className="text-slate-400 mb-8">Community-owned sites that are live and generating revenue.</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-12">
                    <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-slate-50">{launchedSites.length}</div>
                        <div className="text-sm text-slate-400">Sites Live</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-emerald-400">${totalRevenue}</div>
                        <div className="text-sm text-slate-400">Monthly Revenue</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-slate-50">{totalContributors}</div>
                        <div className="text-sm text-slate-400">Total Owners</div>
                    </div>
                </div>

                {/* Sites Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {launchedSites.map((site) => (
                        <div
                            key={site.id}
                            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-all"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <span className="text-emerald-400 text-sm font-medium">Live</span>
                                <span className="text-slate-600 text-sm">•</span>
                                <span className="text-slate-500 text-sm">{site.category}</span>
                            </div>

                            <h2 className="text-lg font-semibold text-slate-50 mb-1">{site.name}</h2>
                            <p className="text-slate-400 text-sm mb-4">{site.tagline}</p>

                            <div className="flex items-center justify-between text-sm mb-4">
                                <div className="flex items-center gap-1 text-slate-500">
                                    <Users className="w-4 h-4" />
                                    {site.totalContributors} owners
                                </div>
                                {site.monthlyRevenue && site.monthlyRevenue > 0 && (
                                    <div className="flex items-center gap-1 text-emerald-400">
                                        <DollarSign className="w-4 h-4" />
                                        ${site.monthlyRevenue}/mo
                                    </div>
                                )}
                            </div>

                            <div className="text-xs text-slate-500 mb-4">
                                Launched {site.launchedAt}
                            </div>

                            <a
                                href={site.url}
                                className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
                            >
                                Visit Site <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
