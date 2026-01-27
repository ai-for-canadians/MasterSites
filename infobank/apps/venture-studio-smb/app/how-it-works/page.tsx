import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Rocket, PieChart, Users, Coins } from 'lucide-react';

export default function HowItWorksPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tight text-center">How It Works</h1>
                    <p className="text-xl text-slate-600 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
                        We combine community micro-funding with AI agent execution to build real businesses with real returns.
                    </p>

                    <div className="space-y-16">

                        <section className="flex gap-8 items-start">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-2xl">1</div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Choose a Local Opportunity</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                    Browse ventures started by local founders in your city. Each follows a proven "Playbook" (Bakery, Cleaning Service, etc.) to minimize risk.
                                </p>
                            </div>
                        </section>

                        <section className="flex gap-8 items-start">
                            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-2xl">2</div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Fund Specific Steps</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                    Instead of giving money blankly, you fund specific execution steps handled by AI Agents, like "Market Research" ($35) or "Landing Page" ($75). This keeps costs 10x lower than traditional consulting.
                                </p>
                            </div>
                        </section>

                        <section className="flex gap-8 items-start">
                            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-2xl">3</div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Own Real Equity</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                    Your contribution buys you fractional ownership (Impact Shares for social, Profit Shares for SMB). You legally own a piece of the business, proportionally to what you put in.
                                </p>
                                <div className="bg-slate-100 p-4 rounded-xl text-sm font-bold text-slate-500">
                                    Max ownership per person is capped at 10% to ensure true community control.
                                </div>
                            </div>
                        </section>

                        <section className="flex gap-8 items-start">
                            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-2xl">4</div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Earn Returns</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                    When the business operates and turns a profit, dividends are distributed quarterly to all owners directly into your portfolio wallet.
                                </p>
                            </div>
                        </section>

                    </div>

                    <div className="mt-24 bg-slate-900 text-white p-12 rounded-3xl text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to seek profit?</h2>
                        <Link href="/ventures" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/50">
                            Browse Ventures
                        </Link>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
