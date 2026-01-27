import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InterventionGrid } from '@/components/home/InterventionGrid';
import { interventions } from '@/lib/data/interventions';
import { categories } from '@/lib/data/categories';

export default function InterventionsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Interventions</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Browse our comprehensive database of longevity interventions, supplements, and lifestyle factors.
                    </p>
                </div>

                {categories.map((category) => {
                    const categoryInterventions = interventions.filter(i => i.category === category.id);
                    if (categoryInterventions.length === 0) return null;

                    return (
                        <InterventionGrid
                            key={category.id}
                            title={category.name}
                            interventions={categoryInterventions}
                        />
                    );
                })}
            </main>
            <Footer />
        </div>
    );
}
