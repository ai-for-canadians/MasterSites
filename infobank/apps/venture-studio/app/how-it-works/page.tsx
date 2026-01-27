import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Heart, Users, Vote, ShieldCheck } from 'lucide-react';

export default function HowItWorksPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tight text-center">Community Ownership Model</h1>
                    <p className="text-xl text-slate-600 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
                        We believe the most important ventures shouldn't be about profit. They should be about impact.
                    </p>

                    <div className="space-y-16">

                        <section className="flex gap-8 items-start">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Support Social Ventures</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                    Choose ventures that solve real problems in your community—food security, affordable tools, clean energy.
                                </p>
                            </div>
                        </section>

                        <section className="flex gap-8 items-start">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Earn Impact Shares</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                    Instead of financial equity, your contribution earns you <strong>Impact Shares</strong>. These are legally recognized units of governance rights within our co-operative structure.
                                </p>
                                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-sm">
                                    <strong>Note:</strong> Impact Shares do not pay financial dividends. All surplus revenue is reinvested into the mission.
                                </div>
                            </div>
                        </section>

                        <section className="flex gap-8 items-start">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Vote on Decisions</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                    Use your voting power (1 Share = 1 Vote) to guide the venture's future. Vote on project priorities, leadership, and budget allocation.
                                </p>
                            </div>
                        </section>

                    </div>

                    <div className="mt-24 bg-slate-100 p-12 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-slate-900" />
                            Legal Structure
                        </h3>
                        <p className="text-slate-600 mb-4">
                            All ventures are incorporated as <strong>Multi-Stakeholder Co-operatives</strong> under Canadian law. This ensures:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li>Asset Lock: The venture cannot be sold for private profit.</li>
                            <li>Democratic Control: One member, one vote principles (weighted by engagement).</li>
                            <li>Community Benefit: The primary purpose is service, not return on capital.</li>
                        </ul>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
