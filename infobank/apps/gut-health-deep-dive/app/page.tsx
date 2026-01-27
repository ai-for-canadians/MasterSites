import { Hero } from '@/components/home/Hero';
import { ConditionList } from '@/components/home/ConditionList';
import { conditions } from '@/lib/data/conditions';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
    // Get top conditions
    const featured = conditions.slice(0, 6);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                <Hero />
                <ConditionList title="Common Conditions" conditions={featured} />

                {/* Methodology Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Approach</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                We analyze gut health interventions based on clinical evidence, not marketing claims.
                                Our goal is to help you navigate the confusing world of microbiome science.
                            </p>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div>
                                <dt className="font-semibold text-white">Evidence-Based</dt>
                                <dd className="mt-1 text-slate-400">All recommendations citing primary research.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Root Cause Focused</dt>
                                <dd className="mt-1 text-slate-400">Looking beyond symptom management to underlying drivers.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Independent</dt>
                                <dd className="mt-1 text-slate-400">No affiliate links to supplement brands.</dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
