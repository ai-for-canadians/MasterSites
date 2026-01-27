import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function ComparePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-8">Comparison Tool</h1>
                    <p className="text-lg text-slate-400">
                        (Coming Soon) Side-by-side comparison of any two nations across all 6 metrics.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
