import { Hero } from '@/components/home/Hero';
import { ScriptList } from '@/components/home/ScriptList';
import { StrategyGrid } from '@/components/home/StrategyGrid';
import { scripts, strategies } from '@/lib/data/strategies';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                <Hero />

                <ScriptList scripts={scripts.slice(0, 3)} />

                {/* Metric Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The Cost of Silence</h2>
                                <p className="mt-4 text-lg leading-8 text-slate-300">
                                    A $5,000 raise invested over 30 years is worth over $500,000.
                                    A single conversation can change your financial future.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <StrategyGrid strategies={strategies.slice(0, 3)} />
            </main>
            <Footer />
        </div>
    );
}
