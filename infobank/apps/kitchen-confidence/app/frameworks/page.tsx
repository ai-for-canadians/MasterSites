import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TechniqueGrid } from '@/components/home/TechniqueGrid';
import { mealFrameworks } from '@/lib/data/techniques';

export default function FrameworksPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Meal Frameworks</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Not recipes, but patterns. Fill in the blanks with whatever you have.
                    </p>
                </div>
                <TechniqueGrid title="Patterns" techniques={mealFrameworks} />
            </main>
            <Footer />
        </div>
    );
}
