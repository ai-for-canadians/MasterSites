import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { categories } from '@/lib/data/stories';
import Link from 'next/link';

export default function CategoriesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Browse by Category</h1>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href="/stories" // Ideally filter by category, but linking to all for now
                                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors"
                            >
                                <h2 className="text-2xl font-bold text-white mb-2">{cat.name}</h2>
                                <p className="text-slate-400">{cat.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
