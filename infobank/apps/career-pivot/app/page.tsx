import { Hero } from '@/components/home/Hero';
import { CareerGrid } from '@/components/home/CareerGrid';
import { careers } from '@/lib/data/careers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
    // Get growing careers
    const featured = careers.filter(i => i.outlook === 'Exploding' || i.outlook === 'Growing').slice(0, 6);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                <Hero />
                <CareerGrid title="High Growth Opportunities" careers={featured} />

                {/* Methodology Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The Pivot Strategy</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                Changing careers is risky. Minimize risk by targeting industries with structural talent shortages.
                                We analyze job market data to find paths with high ROI for your time.
                            </p>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div>
                                <dt className="font-semibold text-white">Outlook</dt>
                                <dd className="mt-1 text-slate-400">Based on BLS projections and industry trend analysis.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Difficulty</dt>
                                <dd className="mt-1 text-slate-400">Estimated cognitive load and time investment to reach employability.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Time to Pivot</dt>
                                <dd className="mt-1 text-slate-400">Realistic timeline for a focused individual starting from zero.</dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
