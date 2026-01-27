import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TechniqueGrid } from '@/components/home/TechniqueGrid';
import { techniques } from '@/lib/data/techniques';
import { categories } from '@/lib/data/categories';

export default function TechniquesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Technique Library</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Master these fundamental skills and you can cook almost anything.
                    </p>
                </div>

                {categories.filter(c => c.id !== 'pantry').map((category) => {
                    const catTechniques = techniques.filter(t => t.category === category.id);
                    if (catTechniques.length === 0) return null;

                    return (
                        <div key={category.id} className="mb-16">
                            <TechniqueGrid title={category.name} techniques={catTechniques} />
                        </div>
                    );
                })}
            </main>
            <Footer />
        </div>
    );
}
