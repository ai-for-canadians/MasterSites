import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ventures, playbooks } from '@/lib/data/playbooks';
import { VentureProgress } from '@/components/venture/VentureProgress';
import { ArrowRight, Bot } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-950">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-white">Your Ventures</h1>
                        <Link href="/playbooks" className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors">
                            + Start New Venture
                        </Link>
                    </div>

                    <div className="space-y-6">
                        {ventures.map(venture => {
                            const playbook = playbooks.find(p => p.id === venture.playbookId);
                            if (!playbook) return null;

                            return (
                                <div key={venture.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h2 className="text-2xl font-bold text-white">{venture.name}</h2>
                                                <span className="bg-zinc-800 text-zinc-400 text-xs px-2 py-1 rounded">
                                                    {venture.location}
                                                </span>
                                            </div>
                                            <div className="text-purple-400 text-sm font-medium mb-6">
                                                Based on: {playbook.name}
                                            </div>

                                            <div className="flex gap-8 mb-6">
                                                <div>
                                                    <div className="text-zinc-500 text-xs uppercase mb-1">Funding</div>
                                                    <div className="text-white font-mono text-lg">${venture.fundingReceived}</div>
                                                </div>
                                                <div>
                                                    <div className="text-zinc-500 text-xs uppercase mb-1">Status</div>
                                                    <div className="text-green-400 font-mono text-lg uppercase">{venture.status.replace('_', ' ')}</div>
                                                </div>
                                            </div>

                                            <Link
                                                href={`/ventures/${venture.id}`}
                                                className="inline-flex items-center gap-2 text-white bg-zinc-800 hover:bg-zinc-700 font-bold py-2 px-4 rounded transition-colors"
                                            >
                                                Enter Operations Center <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>

                                        <div className="flex-1 bg-zinc-950/50 rounded-lg p-6 border border-zinc-800/50">
                                            <VentureProgress venture={venture} totalSteps={playbook.steps.length} />

                                            <div className="mt-6 pt-6 border-t border-zinc-800">
                                                <div className="text-xs text-zinc-500 mb-2">NEXT STEP</div>
                                                <div className="flex items-center justify-between">
                                                    <div className="font-bold text-white">
                                                        {playbook.steps[venture.currentStep - 1]?.name || 'Complete!'}
                                                    </div>
                                                    {playbook.steps[venture.currentStep - 1] && (
                                                        <div className="flex items-center gap-1 text-purple-400 text-xs font-mono">
                                                            <Bot className="w-3 h-3" /> Ready
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
