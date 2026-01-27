import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StepList } from '@/components/home/StepList';
import { steps } from '@/lib/data/steps';

export default function StepsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">The Home Buying Roadmap</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        A chronological guide to buying your first home. Start at step 1.
                    </p>
                </div>

                <StepList steps={steps} />
            </main>
            <Footer />
        </div>
    );
}
