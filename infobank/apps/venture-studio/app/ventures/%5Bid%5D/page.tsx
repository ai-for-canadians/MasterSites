import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ventures } from '@/lib/data/ventures';
import { ImpactMetricsCard } from '@/components/shared/ImpactMetricsCard';
import { GovernanceCard } from '@/components/shared/GovernanceCard';
import { StepProgress } from '@/components/ventures/StepProgress';
import Link from 'next/link';
import { ArrowLeft, MapPin, Heart } from 'lucide-react';

export function generateStaticParams() {
    return ventures.map((v) => ({
        id: v.id,
    }));
}

export default function VentureDashboardPage({ params }: { params: { id: string } }) {
    const venture = ventures.find((v) => v.id === params.id);

    if (!venture) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-7xl mx-auto px-6">

                    <Link href="/ventures" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-8 font-bold transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Ventures
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    <MapPin className="w-4 h-4" /> {venture.location}
                                </div>
                                <h1 className="text-4xl font-black text-slate-900 mb-4">{venture.name}</h1>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">{venture.description}</p>

                                <div className="flex flex-wrap gap-4">
                                    <span className="bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded text-sm capitalize">
                                        Status: {venture.status.replace('_', ' ')}
                                    </span>
                                </div>
                            </div>

                            <ImpactMetricsCard metrics={venture.impactMetrics} />

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    Execution Roadmap
                                </h2>
                                {/* Reusing shared StepProgress from existing components, assuming steps logic similar or mocked */}
                                <div className="p-4 bg-slate-50 text-slate-500 text-center rounded-xl">
                                    Execution details available in full dashboard.
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">

                            {/* Support Card */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 ring-4 ring-blue-50/50">
                                <div className="mb-6">
                                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Community Support</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-slate-900">${venture.totalRaised.toLocaleString()}</span>
                                        <span className="text-sm font-bold text-slate-400">/ ${venture.targetRaise.toLocaleString()}</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-100 rounded-full mt-4 overflow-hidden">
                                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(venture.totalRaised / venture.targetRaise) * 100}%` }} />
                                    </div>
                                </div>

                                <Link
                                    href={`/ventures/${venture.id}/invest`}
                                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md transition-all mb-4"
                                >
                                    Support This Venture
                                </Link>
                                <p className="text-xs text-center text-slate-400">
                                    Receive Impact Shares & Governance Rights
                                </p>
                            </div>

                            {/* Governance */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Active Governance</h3>
                                {venture.governance && <GovernanceCard activeVotes={venture.governance.votes || []} />}
                            </div>

                        </div>

                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
