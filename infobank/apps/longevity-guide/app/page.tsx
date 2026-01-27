import { Hero } from '@/components/home/Hero';
import { InterventionGrid } from '@/components/home/InterventionGrid';
import { interventions } from '@/lib/data/interventions';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
    // Get top interventions
    const featured = interventions.filter(i => i.evidenceRating === 'A').slice(0, 6);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                <Hero />
                <InterventionGrid title="Proven Interventions" interventions={featured} />

                {/* Methodology Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Methodology</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                We analyze interventions based on human clinical data, not animal studies or mechanistic speculation.
                                Our evidence grading system is rigorous and conservative.
                            </p>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div>
                                <dt className="font-semibold text-white">Grade A: Strong Evidence</dt>
                                <dd className="mt-1 text-slate-400">Multiple high-quality human RCTs consistently showing benefit.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Grade B: Moderate Evidence</dt>
                                <dd className="mt-1 text-slate-400">Some human evidence, or very strong animal data with mechanistic plausibility.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Grade C: Emerging/Mixed</dt>
                                <dd className="mt-1 text-slate-400">Preliminary data, mixed results, or only mechanistic evidence.</dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
