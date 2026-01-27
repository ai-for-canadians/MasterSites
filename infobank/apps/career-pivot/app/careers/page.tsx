import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CareerGrid } from '@/components/home/CareerGrid';
import { careers } from '@/lib/data/careers';
import { categories } from '@/lib/data/categories';

export default function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Explore Career Paths</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Detailed roadmaps for transitioning into high-demand industries.
                    </p>
                </div>

                {categories.map((category) => {
                    const categoryCareers = careers.filter(c => c.category === category.id);
                    if (categoryCareers.length === 0) return null;

                    return (
                        <CareerGrid
                            key={category.id}
                            title={category.name}
                            careers={categoryCareers}
                        />
                    );
                })}
            </main>
            <Footer />
        </div>
    );
}
