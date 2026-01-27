import { Hero } from '@/components/home/Hero';
import { StrategyList } from '@/components/home/StrategyList';
import { ToolsGrid } from '@/components/home/ToolsGrid';
import { strategies, tools } from '@/lib/data/strategies';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
    // Get main strategies
    const payoffStrategies = strategies.filter(s => s.type === 'Payoff');

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                <Hero />
                <StrategyList strategies={payoffStrategies} />

                {/* Math Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The Math of Payoff</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                A 20% interest rate means you pay double the original amount every ~3.6 years if you don't pay it down.
                                Aggressive repayment is the best investment you can make.
                            </p>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div>
                                <dt className="font-semibold text-white">Snowball</dt>
                                <dd className="mt-1 text-slate-400">Best for behavioral modification and quick wins.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Avalanche</dt>
                                <dd className="mt-1 text-slate-400">Best for saving money (mathematically optimal).</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Consolidation</dt>
                                <dd className="mt-1 text-slate-400">Best for simplifying high-interest multiple debts.</dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <ToolsGrid tools={tools} />
            </main>
            <Footer />
        </div>
    );
}
