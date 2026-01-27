import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PantryList } from '@/components/home/PantryList';
import { pantryEssentials } from '@/lib/data/techniques';

export default function PantryPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Pantry Essentials</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Keep these specific items stocked and you'll always be able to make a meal.
                    </p>
                </div>
                <PantryList items={pantryEssentials} />
            </main>
            <Footer />
        </div>
    );
}
