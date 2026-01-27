import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getCategoryBySlug, categories } from '@/lib/data/categories';
import { getProductsByCategory } from '@/lib/data/products';
import { ProductCard } from '@/components/ProductCard';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return categories.map(category => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(params.slug);

  const avgSafetyScore = categoryProducts.length > 0
    ? Math.round(
        categoryProducts.reduce((sum, product) => {
          return sum + (product.overallSafetyScore * 10);
        }, 0) / categoryProducts.length
      )
    : 0;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-500 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>

          <div className="flex items-start gap-6">
            <span className="text-6xl">{category.icon}</span>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
              <p className="text-xl text-slate-400 mb-4">{category.description}</p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-slate-400">Total Products: </span>
                  <span className="text-slate-50 font-semibold">
                    {categoryProducts.length}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">Avg Safety Score: </span>
                  <span className="text-slate-50 font-semibold">
                    {avgSafetyScore}/100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {categoryProducts.length > 0 ? (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                All {category.name} Products
              </h2>
              <p className="text-slate-400">
                Browse our analyzed {category.name.toLowerCase()} products
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block opacity-50">{category.icon}</span>
            <h3 className="text-xl font-semibold text-slate-400 mb-2">
              No products yet
            </h3>
            <p className="text-slate-500">
              We're working on adding {category.name.toLowerCase()} products to our database
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
