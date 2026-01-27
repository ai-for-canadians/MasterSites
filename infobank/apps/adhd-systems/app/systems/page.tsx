import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SystemList } from '@/components/home/SystemList';
import { systems } from '@/lib/data/systems';
import { categories } from '@/lib/data/categories';

export default function SystemsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Systems Library</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Strategies categorized by life area. Find what you need to fix right now.
                    </p>
                </div>

                {categories.map((category) => {
                    const categorySystems = systems.filter(s => s.category === category.id);
                    if (categorySystems.length === 0) return null;

                    return (
                        <div key={category.id} className="mb-16">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-6">
                                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                    {category.name}
                                </h2>
                                <p className="text-slate-400">{category.description}</p>
                            </div>
                            <SystemList systems={categorySystems} />
                        </div>
                    );
                })}
            </main>
            <Footer />
        </div>
    );
}
