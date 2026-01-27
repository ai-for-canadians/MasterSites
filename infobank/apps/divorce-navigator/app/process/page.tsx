import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StepCard } from '@/components/home/StepCard';
import { steps } from '@/lib/data/steps';

// This page currently duplicates the home process grid but serves as a dedicated /process route
export default function ProcessPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-8">The Separation Process</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {steps.map(step => (
                            <StepCard key={step.id} step={step} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
