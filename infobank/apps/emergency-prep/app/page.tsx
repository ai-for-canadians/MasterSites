import { Hero } from '@/components/home/Hero';
import { ScenarioGrid } from '@/components/home/ScenarioGrid';
import { SupplyList } from '@/components/home/SupplyList';
import { scenarios, supplies } from '@/lib/data/scenarios';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
    const highRiskScenarios = scenarios.filter(s => s.riskLevel === 'High' || s.riskLevel === 'Medium').slice(0, 4);
    const basicSupplies = supplies.filter(s => s.category === 'Basic').slice(0, 4);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                <Hero />
                <ScenarioGrid scenarios={highRiskScenarios} />

                {/* Philosophy Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Don't be a prepper. Be prepared.</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                You don't need a bunker or 5 years of food. You need a plan for when the power goes out for 3 days.
                                Focus on realistic risks and practical solutions.
                            </p>
                        </div>
                    </div>
                </section>

                <SupplyList items={basicSupplies} />
            </main>
            <Footer />
        </div>
    );
}
