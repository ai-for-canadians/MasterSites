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
                <InterventionGrid title="Proven Sleep Interventions" interventions={featured} />

                {/* Methodology Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Methodology</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                Sleep science is often misunderstood. We analyze interventions based on clinical trials
                                and mechanistic evidence, prioritizing safety and efficacy.
                            </p>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div>
                                <dt className="font-semibold text-white">Grade A: Strong Evidence</dt>
                                <dd className="mt-1 text-slate-400">Supported by robust clinical trials (e.g., CBT-I, Light Timing).</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Grade B: Good Evidence</dt>
                                <dd className="mt-1 text-slate-400">Consistent positive results but fewer large-scale studies.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Grade C: Mixed/Weak</dt>
                                <dd className="mt-1 text-slate-400">Inconsistent results or small effect sizes (e.g., Valerian).</dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
