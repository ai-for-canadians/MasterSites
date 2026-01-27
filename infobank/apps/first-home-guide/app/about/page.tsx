import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">About First Home Guide</h1>
                    <div className="prose prose-invert">
                        <p className="text-lg text-slate-300">
                            We believe that buying a home shouldn't be a mystery. The real estate industry benefits from confusion, often leading first-time buyers to overpay or skip important due diligence.
                        </p>
                        <p className="text-lg text-slate-300">
                            Our mission is to provide a clean, unbiased roadmap. We don't sell leads to realtors. We don't originate loans. We just explain how the process works.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
