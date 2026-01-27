import { Hero } from '@/components/home/Hero';
import { TechniqueGrid } from '@/components/home/TechniqueGrid';
import { PantryList } from '@/components/home/PantryList';
import { techniques, pantryEssentials } from '@/lib/data/techniques';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
    const featuredTechniques = techniques.filter(t => t.difficulty === 'Beginner').slice(0, 3);
    const featuredPantry = pantryEssentials.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                <Hero />
                <TechniqueGrid title="Start with these" techniques={featuredTechniques} />

                {/* Philosophy Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why recipes fail you</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                Recipes are instructions for one specific outcome. Techniques are tools for any outcome.
                                When you understand *why* you are browning the meat or adding the acid, you stop needing the instruction manual.
                            </p>
                        </div>
                    </div>
                </section>

                <PantryList items={featuredPantry} />
            </main>
            <Footer />
        </div>
    );
}
