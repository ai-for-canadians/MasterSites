import Link from 'next/link';
import { Shield, Search, Database, Award, ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/data/products';
import { categories } from '@/lib/data/categories';

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-900" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Trusted Ingredient Analysis</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Know What's In Your
              <span className="text-emerald-500"> Products</span>
            </h1>

            <p className="text-xl text-slate-400 mb-8">
              Make informed decisions with transparent, science-backed ingredient safety ratings.
              Your health starts with knowing what you put on your body.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
              >
                Browse Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ingredients"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-50 font-medium rounded-lg border border-slate-700 transition-colors"
              >
                Explore Ingredients
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-lg mb-4">
                <Search className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
              <p className="text-slate-400">
                Quickly find products and ingredients with our powerful search tools.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-lg mb-4">
                <Database className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Database</h3>
              <p className="text-slate-400">
                Access detailed information on thousands of ingredients and products.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-lg mb-4">
                <Award className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Science-Backed</h3>
              <p className="text-slate-400">
                All ratings based on peer-reviewed research and expert analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-slate-400">Popular products analyzed for your safety</p>
            </div>
            <Link
              href="/products"
              className="text-emerald-500 hover:text-emerald-400 font-medium flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Browse by Category</h2>
            <p className="text-slate-400">Explore products organized by type</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map(category => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold group-hover:text-emerald-500 transition-colors">
                    {category.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-400">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-emerald-500/10 to-slate-800 border border-emerald-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Start Making Informed Choices Today
            </h2>
            <p className="text-slate-400 mb-8">
              Join thousands of people who trust ProductTruth for transparent ingredient information.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
