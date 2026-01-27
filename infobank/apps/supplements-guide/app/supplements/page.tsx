import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SupplementList } from '@/components/home/SupplementList';
import { supplements } from '@/lib/data/supplements';
import { categories } from '@/lib/data/categories';

export default function SupplementsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Supplements Database</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Explore our comprehensive database of supplements rated by scientific evidence.
                    </p>
                </div>

                {categories.map((category) => {
                    const categorySupplements = supplements.filter(s => s.category === category.id);
                    if (categorySupplements.length === 0) return null;

                    return (
                        <SupplementList
                            key={category.id}
                            title={category.name}
                            supplements={categorySupplements}
                        />
                    );
                })}
            </main>
            <Footer />
        </div>
    );
}
