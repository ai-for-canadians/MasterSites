import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function EvidencePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">Evidence Standards</h1>
                    <div className="prose prose-invert">
                        <p className="text-lg text-slate-300">
                            We rate interventions based on the quality of clinical evidence supporting them.
                        </p>

                        <h3>High Evidence</h3>
                        <p>Supported by Meta-Analyses or multiple Randomized Controlled Trials (RCTs) in humans.</p>

                        <h3>Medium Evidence</h3>
                        <p>Supported by at least one RCT or strong observational data with mechanistic plausibility.</p>

                        <h3>Low/Mixed Evidence</h3>
                        <p>Animal studies, small pilot studies, or conflicting results. Proceed with caution.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
