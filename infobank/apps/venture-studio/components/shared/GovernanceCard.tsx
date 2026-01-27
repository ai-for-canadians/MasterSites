'use client';

import { GovernanceVote } from '@/types';
import { Vote } from 'lucide-react';

interface GovernanceCardProps {
    activeVotes: GovernanceVote[];
}

export function GovernanceCard({ activeVotes }: GovernanceCardProps) {
    if (activeVotes.length === 0) {
        return (
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                    <Vote className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">No Active Votes</h3>
                <p className="text-sm text-slate-500">Governance proposals will appear here when open for voting.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {activeVotes.map(vote => (
                <div key={vote.id} className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm ring-4 ring-blue-50/30">
                    <div className="flex justify-between items-start mb-4">
                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider animate-pulse">
                            Active Vote
                        </span>
                        <span className="text-xs font-bold text-slate-400">Ends {new Date(vote.endDate).toLocaleDateString()}</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{vote.title}</h3>
                    <p className="text-sm text-slate-600 mb-6">{vote.description}</p>

                    <div className="space-y-2">
                        {vote.options.map(opt => (
                            <div key={opt.id} className="flex justify-between bg-slate-50 p-3 rounded-lg text-sm group cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-colors border border-transparent hover:border-blue-200">
                                <span className="font-medium">{opt.label}</span>
                                <span className="font-bold">{opt.votes} votes</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-6 bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors text-sm">
                        Cast Your Vote (1 Share = 1 Vote)
                    </button>
                </div>
            ))}
        </div>
    );
}
