import { Hero } from '@/components/home/Hero';
import { StepList } from '@/components/home/StepList';
import { steps } from '@/lib/data/steps';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                <Hero />
                <StepList steps={steps} />

                {/* Info Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why do I need a guide?</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                The average first-time buyer makes mistakes that cost thousands of dollars or delay closing.
                                We provide a neutral, step-by-step roadmap so you know exactly what to expect.
                            </p>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div>
                                <dt className="font-semibold text-white">Unbiased</dt>
                                <dd className="mt-1 text-slate-400">We aren't a bank or a brokerage. No sales pressure.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Detailed</dt>
                                <dd className="mt-1 text-slate-400">Specific checklists for every stage of the process.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-white">Realistic</dt>
                                <dd className="mt-1 text-slate-400">We tell you the hard truths about costs and red flags.</dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
