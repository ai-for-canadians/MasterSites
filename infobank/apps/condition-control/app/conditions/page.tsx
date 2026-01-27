import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ConditionList } from '@/components/home/ConditionList';
import { conditions, categories } from '@/lib/data/conditions';

export default function ConditionsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Conditions Library</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Evidence-based protocols for managing common chronic conditions.
                    </p>
                </div>

                {categories.map((category) => {
                    const categoryConditions = conditions.filter(c => c.category === category.id);
                    if (categoryConditions.length === 0) return null;

                    return (
                        <div key={category.id} className="mb-16">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    {category.name}
                                </h2>
                            </div>
                            <ConditionList conditions={categoryConditions} />
                        </div>
                    );
                })}
            </main>
            <Footer />
        </div>
    );
}
