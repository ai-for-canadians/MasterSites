import { ideas, getIdea } from '@/lib/data/ideas';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Vote, DollarSign, Users, Calendar, CheckCircle2, Target } from 'lucide-react';

export function generateStaticParams() {
    return ideas.map((idea) => ({ slug: idea.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const idea = getIdea(params.slug);
    return {
        title: idea ? `${idea.title} | LaunchPad` : 'Idea',
        description: idea?.description,
    };
}

const statusColors = {
    voting: 'purple',
    funding: 'amber',
    building: 'blue',
    live: 'emerald',
    submitted: 'slate',
};

export default function IdeaDetailPage({ params }: { params: { slug: string } }) {
    const idea = getIdea(params.slug);

    if (!idea) {
        notFound();
    }

    const fundingPercent = idea.fundingGoal > 0 ? (idea.fundingRaised / idea.fundingGoal) * 100 : 0;
    const color = statusColors[idea.status];

    return (
        <div className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/ideas"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-50 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Ideas
                </Link>

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                    <div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-${color}-500/20 text-${color}-400 mb-3`}>
                            {idea.status.charAt(0).toUpperCase() + idea.status.slice(1)}
                        </span>
                        <h1 className="text-3xl font-bold text-slate-50">{idea.title}</h1>
                        <p className="text-lg text-purple-400 mt-2">{idea.tagline}</p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            Submitted {idea.createdAt}
                        </div>
                        <div className="text-slate-500 text-sm mt-1">by {idea.submittedBy}</div>
                    </div>
                </div>

                {/* Voting or Funding CTA */}
                {idea.status === 'voting' && (
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 mb-8">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 text-purple-400 mb-1">
                                    <Vote className="w-5 h-5" />
                                    <span className="text-2xl font-bold">{idea.votes}</span>
                                    <span>votes</span>
                                </div>
                                <p className="text-slate-400 text-sm">Help this idea reach the funding stage</p>
                            </div>
                            <button className="bg-purple-500 hover:bg-purple-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition-colors">
                                Vote for This Idea
                            </button>
                        </div>
                    </div>
                )}

                {idea.status === 'funding' && (
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-8">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div>
                                <div className="text-2xl font-bold text-slate-50">
                                    ${idea.fundingRaised.toLocaleString()}
                                    <span className="text-slate-400 text-lg font-normal"> / ${idea.fundingGoal.toLocaleString()}</span>
                                </div>
                                <p className="text-slate-400 text-sm">{idea.contributors.length} contributors</p>
                            </div>
                            <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition-colors">
                                Contribute & Own
                            </button>
                        </div>
                        <div className="h-3 bg-slate-700 rounded-full">
                            <div className="h-3 bg-amber-500 rounded-full" style={{ width: `${fundingPercent}%` }} />
                        </div>
                    </div>
                )}

                {idea.status === 'building' && (
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
                        <div className="flex items-center gap-2 text-blue-400 text-lg font-medium">
                            <CheckCircle2 className="w-5 h-5" />
                            Fully Funded — Now Building!
                        </div>
                        <p className="text-slate-400 mt-2">This site is currently in development. Contributors will be notified when it launches.</p>
                    </div>
                )}

                {/* Description */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-slate-50 mb-3">About This Idea</h2>
                    <p className="text-slate-300">{idea.description}</p>
                </div>

                {/* Problem & Audience */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-800/50 rounded-xl p-5">
                        <h3 className="font-semibold text-slate-50 mb-2 flex items-center gap-2">
                            <Target className="w-5 h-5 text-rose-400" />
                            Problem Solved
                        </h3>
                        <p className="text-slate-400 text-sm">{idea.problemSolved}</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-5">
                        <h3 className="font-semibold text-slate-50 mb-2 flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-400" />
                            Target Audience
                        </h3>
                        <p className="text-slate-400 text-sm">{idea.targetAudience}</p>
                    </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-slate-50 mb-4">Proposed Features</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {idea.proposedFeatures.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contributors */}
                {idea.contributors.length > 0 && (
                    <div>
                        <h2 className="text-xl font-semibold text-slate-50 mb-4">Contributors</h2>
                        <div className="bg-slate-800/50 rounded-xl overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-700">
                                        <th className="px-4 py-3 text-left text-sm text-slate-400">Contributor</th>
                                        <th className="px-4 py-3 text-right text-sm text-slate-400">Amount</th>
                                        <th className="px-4 py-3 text-right text-sm text-slate-400">Ownership</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {idea.contributors.map((c) => (
                                        <tr key={c.id} className="border-b border-slate-700/50">
                                            <td className="px-4 py-3 text-slate-300">{c.name}</td>
                                            <td className="px-4 py-3 text-right text-slate-400">${c.amount}</td>
                                            <td className="px-4 py-3 text-right text-purple-400 font-medium">{c.ownershipPercentage}%</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
