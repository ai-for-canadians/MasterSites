import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ventures } from '@/lib/data/ventures';
import { GovernanceCard } from '@/components/shared/GovernanceCard';

export default function GovernancePage() {
    const allVotes = ventures.flatMap(v => v.governance?.votes || []);
    const activeVotes = allVotes.filter(v => v.status === 'active');

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Governance & Voting</h1>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl">
                        Your Impact Shares give you a voice. Shape the future of the ventures you support.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Active Proposals</h2>
                    <GovernanceCard activeVotes={activeVotes} />

                    <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
                        <h3 className="font-bold text-blue-900 mb-2">How Voting Works</h3>
                        <ul className="list-disc pl-5 space-y-2 text-blue-800 text-sm">
                            <li>Every $1 contributed = 1 Impact Share = 1 Vote.</li>
                            <li>Votes are binding for operational decisions (e.g., crop selection, opening hours).</li>
                            <li>Strategic decisions (e.g., hiring ED) require 60% supermajority.</li>
                        </ul>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
