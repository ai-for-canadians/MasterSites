import Link from 'next/link';
import { categories } from '@/lib/data/categories';
import { products } from '@/lib/data/products';
import { ArrowRight } from 'lucide-react';

export default function CategoriesPage() {
  const categoriesWithCounts = categories.map(category => ({
    ...category,
    productCount: products.filter(p => p.category === category.slug).length,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Browse by Category</h1>
        <p className="text-slate-400">
          Explore products organized by type
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesWithCounts.map(category => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-5xl">{category.icon}</span>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1 group-hover:text-emerald-500 transition-colors">
                  {category.name}
                </h2>
                <p className="text-sm text-slate-400">
                  {category.productCount} {category.productCount === 1 ? 'product' : 'products'}
                </p>
              </div>
            </div>

            <p className="text-slate-300 mb-4">
              {category.description}
            </p>

            <div className="flex items-center text-emerald-500 font-medium text-sm group-hover:text-emerald-400 transition-colors">
              Browse {category.name}
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
