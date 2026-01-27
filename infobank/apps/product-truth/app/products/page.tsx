'use client';

import { useState, useMemo } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/data/products';
import { categories } from '@/lib/data/categories';
import { Filter, SlidersHorizontal } from 'lucide-react';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [minSafetyScore, setMinSafetyScore] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.ingredients.some(ing =>
            ing.ingredientName.toLowerCase().includes(query)
          )
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        product => product.category === selectedCategory
      );
    }

    if (minSafetyScore > 0) {
      filtered = filtered.filter(product => {
        const avgScore = product.overallSafetyScore * 10;
        return avgScore >= minSafetyScore;
      });
    }

    return filtered;
  }, [searchQuery, selectedCategory, minSafetyScore]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">All Products</h1>
        <p className="text-slate-400">
          Browse our complete database of analyzed products
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <SearchBar
              placeholder="Search products, brands, or ingredients..."
              onSearch={setSearchQuery}
              initialValue={searchQuery}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 hover:border-emerald-500 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Category
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  All
                </button>
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.slug
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Minimum Safety Score: {minSafetyScore}
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={minSafetyScore}
                onChange={(e) => setMinSafetyScore(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>0 (Any)</span>
                <span>50</span>
                <span>100 (Safest)</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-slate-400">
          Showing {filteredProducts.length} of {products.length} products
        </p>
        {(searchQuery || selectedCategory !== 'all' || minSafetyScore > 0) && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setMinSafetyScore(0);
            }}
            className="text-emerald-500 hover:text-emerald-400 text-sm font-medium"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-400 mb-2">
            No products found
          </h3>
          <p className="text-slate-500">
            Try adjusting your filters or search query
          </p>
        </div>
      )}
    </div>
  );
}
