import Link from 'next/link';
import { Vote, DollarSign, Hammer, CheckCircle2, Lightbulb } from 'lucide-react';
import { getAllIdeas } from '@/lib/data/ideas';

export const metadata = {
    title: 'Browse Ideas | LaunchPad',
    description: 'Browse and vote on ideas for new InfoBank sites.',
};

const statusConfig = {
    submitted: { icon: Lightbulb, color: 'slate', label: 'Submitted' },
    voting: { icon: Vote, color: 'purple', label: 'Voting' },
    funding: { icon: DollarSign, color: 'amber', label: 'Funding' },
    building: { icon: Hammer, color: 'blue', label: 'Building' },
    live: { icon: CheckCircle2, color: 'emerald', label: 'Live' },
};

export default function IdeasPage() {
    const ideas = getAllIdeas();

    return (
        <div className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-50">Browse Ideas</h1>
                        <p className="text-slate-400 mt-1">Vote on ideas you want to see built</p>
                    </div>
                    <Link
                        href="/submit"
                        className="bg-purple-500 hover:bg-purple-400 text-slate-900 px-4 py-2 rounded-xl font-semibold transition-colors"
                    >
                        Submit Idea
                    </Link>
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-2 mb-8 flex-wrap">
                    {['All', 'Voting', 'Funding', 'Building'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${tab === 'All'
                                    ? 'bg-purple-500 text-slate-900'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Ideas Grid */}
                <div className="grid gap-4">
                    {ideas.map((idea) => {
                        const config = statusConfig[idea.status];
                        const Icon = config.icon;
                        const fundingPercent = idea.fundingGoal > 0 ? (idea.fundingRaised / idea.fundingGoal) * 100 : 0;

                        return (
                            <Link
                                key={idea.id}
                                href={`/ideas/${idea.slug}`}
                                className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-${config.color}-500/20 text-${config.color}-400`}>
                                                <Icon className="w-3.5 h-3.5" />
                                                {config.label}
                                            </span>
                                            <span className="text-sm text-slate-500">{idea.category}</span>
                                        </div>
                                        <h2 className="text-lg font-semibold text-slate-50 group-hover:text-purple-400 transition-colors">
                                            {idea.title}
                                        </h2>
                                        <p className="text-slate-400 text-sm mt-1">{idea.tagline}</p>
                                    </div>

                                    <div className="sm:w-48 sm:text-right">
                                        {idea.status === 'voting' && (
                                            <div className="flex items-center gap-2 sm:justify-end">
                                                <Vote className="w-5 h-5 text-purple-400" />
                                                <span className="text-lg font-semibold text-slate-50">{idea.votes}</span>
                                                <span className="text-slate-400 text-sm">votes</span>
                                            </div>
                                        )}

                                        {(idea.status === 'funding' || idea.status === 'building') && (
                                            <div>
                                                <div className="text-lg font-semibold text-slate-50">
                                                    ${idea.fundingRaised.toLocaleString()}
                                                    <span className="text-slate-400 text-sm font-normal"> / ${idea.fundingGoal.toLocaleString()}</span>
                                                </div>
                                                <div className="h-2 bg-slate-700 rounded-full mt-2">
                                                    <div
                                                        className={`h-2 bg-${config.color}-500 rounded-full`}
                                                        style={{ width: `${Math.min(fundingPercent, 100)}%` }}
                                                    />
                                                </div>
                                                <div className="text-xs text-slate-500 mt-1">
                                                    {idea.contributors.length} contributors
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
