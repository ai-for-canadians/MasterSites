import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-white mb-8">About COMPASS</h1>
                    <div className="prose prose-invert">
                        <p className="text-lg text-slate-300">
                            In an era of misinformation and polarization, we believe that data is the ultimate arbiter of truth.
                        </p>
                        <p className="text-lg text-slate-300">
                            Governments make promises. Data shows results. COMPASS exists to track whether the needle is moving in the right direction on the things that actually matter: freedom, fairness, and prosperity.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
