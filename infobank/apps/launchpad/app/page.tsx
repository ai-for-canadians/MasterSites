import Link from 'next/link';
import { Rocket, Vote, DollarSign, Hammer, CheckCircle2, ArrowRight, Users, TrendingUp } from 'lucide-react';
import { getAllIdeas, launchedSites, getFundingIdeas } from '@/lib/data/ideas';

const statusConfig = {
    submitted: { icon: Vote, color: 'slate', label: 'Submitted' },
    voting: { icon: Vote, color: 'purple', label: 'Voting' },
    funding: { icon: DollarSign, color: 'amber', label: 'Funding' },
    building: { icon: Hammer, color: 'blue', label: 'Building' },
    live: { icon: CheckCircle2, color: 'emerald', label: 'Live' },
};

export default function HomePage() {
    const allIdeas = getAllIdeas().slice(0, 6);
    const fundingIdeas = getFundingIdeas();
    const totalRaised = fundingIdeas.reduce((sum, i) => sum + i.fundingRaised, 0);

    return (
        <div className="bg-slate-900">
            {/* Hero */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
                        <Rocket className="w-4 h-4" />
                        Community-Funded Ideas
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-6">
                        Your idea. Our tools.<br />
                        <span className="text-purple-400">Shared ownership.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                        Submit ideas for new InfoBank sites. Community funds development.
                        Contributors become co-owners. Revenue shared.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/submit"
                            className="flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition-colors"
                        >
                            <Rocket className="w-5 h-5" />
                            Submit Your Idea
                        </Link>
                        <Link
                            href="/ideas"
                            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-50 px-6 py-3 rounded-xl font-semibold transition-colors"
                        >
                            Browse Ideas
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800 bg-slate-800/30">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-slate-50">{launchedSites.length}</div>
                            <div className="text-slate-400 mt-1">Sites Launched</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-50">{allIdeas.length + 4}</div>
                            <div className="text-slate-400 mt-1">Ideas Submitted</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-purple-400">${(totalRaised / 1000).toFixed(1)}k</div>
                            <div className="text-slate-400 mt-1">Raised</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-50">100+</div>
                            <div className="text-slate-400 mt-1">Contributors</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Preview */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-50 text-center mb-12">How It Works</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: 1, title: 'Submit', desc: 'Share your idea for a new InfoBank site', icon: Rocket },
                            { step: 2, title: 'Vote', desc: 'Community votes on best ideas', icon: Vote },
                            { step: 3, title: 'Fund', desc: 'Top ideas open for contributions', icon: DollarSign },
                            { step: 4, title: 'Own', desc: 'Contributors get ownership shares', icon: Users },
                        ].map(({ step, title, desc, icon: Icon }) => (
                            <div key={step} className="text-center">
                                <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-7 h-7 text-purple-400" />
                                </div>
                                <div className="text-sm text-purple-400 mb-1">Step {step}</div>
                                <h3 className="font-semibold text-slate-50 mb-1">{title}</h3>
                                <p className="text-sm text-slate-400">{desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/how-it-works" className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Ideas */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-slate-50">Featured Ideas</h2>
                        <Link href="/ideas" className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1">
                            View all <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allIdeas.map((idea) => {
                            const config = statusConfig[idea.status];
                            const Icon = config.icon;
                            const fundingPercent = idea.fundingGoal > 0 ? (idea.fundingRaised / idea.fundingGoal) * 100 : 0;

                            return (
                                <Link
                                    key={idea.id}
                                    href={`/ideas/${idea.slug}`}
                                    className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-${config.color}-500/20 text-${config.color}-400`}>
                                            <Icon className="w-3.5 h-3.5" />
                                            {config.label}
                                        </span>
                                        <span className="text-sm text-slate-500">{idea.category}</span>
                                    </div>
                                    <h3 className="font-semibold text-slate-50 group-hover:text-purple-400 transition-colors mb-2">
                                        {idea.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 mb-4">{idea.tagline}</p>

                                    {idea.status === 'voting' && (
                                        <div className="flex items-center gap-2 text-sm">
                                            <Vote className="w-4 h-4 text-purple-400" />
                                            <span className="text-slate-300">{idea.votes} votes</span>
                                        </div>
                                    )}

                                    {(idea.status === 'funding' || idea.status === 'building') && (
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-slate-400">${idea.fundingRaised.toLocaleString()} raised</span>
                                                <span className="text-slate-500">{Math.round(fundingPercent)}%</span>
                                            </div>
                                            <div className="h-2 bg-slate-700 rounded-full">
                                                <div
                                                    className={`h-2 bg-${config.color}-500 rounded-full`}
                                                    style={{ width: `${Math.min(fundingPercent, 100)}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Launched Sites */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-50">Launched Sites</h2>
                            <p className="text-slate-400 mt-1">Community-owned and generating revenue</p>
                        </div>
                        <Link href="/launched" className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1">
                            View all <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {launchedSites.slice(0, 4).map((site) => (
                            <div
                                key={site.id}
                                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    <span className="text-xs text-emerald-400">Live</span>
                                </div>
                                <h3 className="font-semibold text-slate-50 mb-1">{site.name}</h3>
                                <p className="text-xs text-slate-400 mb-3">{site.tagline}</p>
                                <div className="flex items-center justify-between text-xs text-slate-500">
                                    <span>{site.totalContributors} owners</span>
                                    {site.monthlyRevenue && site.monthlyRevenue > 0 && (
                                        <span className="text-emerald-400">${site.monthlyRevenue}/mo</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
