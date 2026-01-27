import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StepCard } from '@/components/home/StepCard';
import { steps } from '@/lib/data/steps';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1">

                {/* Hero */}
                <section className="py-20 text-center px-6 bg-white border-b border-slate-100">
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-6xl mb-6 tracking-tight">
                        Navigate separation with <span className="text-slate-500">clarity</span>.
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Practical, judgment-free guidance for separation and divorce in Canada.
                        Understand the legal, financial, and emotional steps before you hire a lawyer.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/process" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                            Start the Guide
                        </Link>
                    </div>
                </section>

                {/* Process Steps */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Road Map</h2>
                            <p className="text-slate-500">A typical path through separation in Canada.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {steps.map(step => (
                                <StepCard key={step.id} step={step} />
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
