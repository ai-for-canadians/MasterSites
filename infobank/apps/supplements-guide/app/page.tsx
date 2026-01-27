import { Hero } from '@/components/home/Hero';
import { SupplementList } from '@/components/home/SupplementList';
import { supplements } from '@/lib/data/supplements';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
    // Get top supplements
    const featured = supplements.filter(i => i.evidenceRating === 'A').slice(0, 6);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                <Hero />
                <SupplementList title="Proven Effective" supplements={featured} />

                {/* Methodology Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Evidence Grading</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                The supplement industry is unregulated and full of hype.
                                We use a strict grading system to help you save money and stay safe.
                            </p>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div>
                                <dt className="font-semibold text-white">Grade A: Strong</dt>
                                <dd className="mt-1 text-slate-400">Supported by robust RCTs with clear clinical benefit (e.g., Creatine, Vitamin D).</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Grade B: Moderate</dt>
                                <dd className="mt-1 text-slate-400">Promising evidence but may lack large trials or show smaller effects.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Grade C: Weak</dt>
                                <dd className="mt-1 text-slate-400">Mixed results, only mechanistic evidence, or no human data.</dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
