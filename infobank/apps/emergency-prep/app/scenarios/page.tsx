import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScenarioGrid } from '@/components/home/ScenarioGrid';
import { scenarios } from '@/lib/data/scenarios';

export default function ScenariosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Emergency Scenarios</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Detailed plans for the most likely emergencies you will face.
                    </p>
                </div>

                <ScenarioGrid scenarios={scenarios} />
            </main>
            <Footer />
        </div>
    );
}
