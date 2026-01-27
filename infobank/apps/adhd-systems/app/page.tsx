import { Hero } from '@/components/home/Hero';
import { SystemList } from '@/components/home/SystemList';
import { ToolGrid } from '@/components/home/ToolGrid';
import { systems, tools } from '@/lib/data/systems';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
    // Get easiest systems (quick wins)
    const quickWins = systems.filter(s => s.difficulty === 'Easy').slice(0, 6);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                <Hero />
                <SystemList systems={quickWins} />

                {/* Why it works Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why traditional advice fails</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                Most productivity advice assumes you have a neurotypical brain. "Just buy a planner" doesn't work when you lose the planner.
                                Our systems are built on dopamine, externalization, and friction reduction.
                            </p>
                        </div>
                    </div>
                </section>

                <ToolGrid tools={tools.slice(0, 3)} />
            </main>
            <Footer />
        </div>
    );
}
