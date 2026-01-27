import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AccountCard } from '@/components/home/AccountCard';
import { accounts, concepts } from '@/lib/data/accounts';
import Link from 'next/link';
import { ArrowRight, Info } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1">

                {/* Hero */}
                <section className="py-24 border-b border-zinc-100">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl mb-8 leading-[1.1]">
                            Investing <span className="text-zinc-400">without the jargon</span>.
                        </h1>
                        <p className="text-xl text-zinc-500 max-w-3xl mx-auto mb-12 leading-relaxed">
                            The financial industry tries to make investing sounding complicated so they can charge you high fees.
                            We strip away the noise to show you what actually matters for long-term wealth in Canada.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/start" className="bg-zinc-900 hover:bg-indigo-600 text-white font-bold py-4 px-10 rounded shadow-xl transition-all">
                                Start Learning
                            </Link>
                            <Link href="/accounts" className="bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 font-bold py-4 px-10 rounded transition-colors">
                                Compare Accounts
                            </Link>
                        </div>
                    </div>
                </section>

                {/* The Accounts */}
                <section className="py-24 bg-zinc-50/50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-zinc-900 mb-4">The Canadian Containers</h2>
                            <p className="text-zinc-500 max-w-2xl">
                                Before you choose what to buy, you need to choose where to put it.
                                These accounts give you massive tax advantages.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {accounts.map(acc => (
                                <AccountCard key={acc.id} account={acc} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Concepts */}
                <section className="py-24 bg-white border-y border-zinc-100">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="flex justify-between items-center mb-16">
                            <h2 className="text-3xl font-bold text-zinc-900">Core Concepts</h2>
                            <Link href="/start" className="text-zinc-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                All Concepts <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {concepts.map(concept => (
                                <div key={concept.id} className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center">
                                        <Info className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-zinc-900 mb-2">{concept.title}</h3>
                                        <p className="text-zinc-600 leading-relaxed">
                                            {concept.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
