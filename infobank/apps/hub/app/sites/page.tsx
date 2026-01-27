'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SiteGrid } from '@/components/sites/SiteGrid';
import { SiteSearch } from '@/components/sites/SiteSearch';
import { CategoryFilter } from '@/components/sites/CategoryFilter';
import { sites } from '@/lib/data/sites';
import { categories } from '@/lib/data/categories';

function SitesContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const queryParam = searchParams.get('q');

    if (categoryParam) {
      const category = categories.find((c) => c.slug === categoryParam);
      if (category) {
        setSelectedCategory(category.id);
      }
    }

    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [searchParams]);

  const filteredSites = sites.filter((site) => {
    const matchesSearch =
      !searchQuery ||
      site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || site.categoryId === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            All Sites
          </h1>
          <p className="text-xl text-slate-400">
            Browse our complete collection of resources
          </p>
        </div>

        <div className="space-y-8">
          <SiteSearch value={searchQuery} onChange={setSearchQuery} />

          <CategoryFilter
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />

          <div className="flex items-center justify-between">
            <p className="text-slate-400">
              Showing {filteredSites.length}{' '}
              {filteredSites.length === 1 ? 'site' : 'sites'}
            </p>
          </div>

          {filteredSites.length > 0 ? (
            <SiteGrid sites={filteredSites} />
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">
                No sites found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 text-amber-500 hover:text-amber-400 font-medium transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SitesPage() {
  return (
    <Suspense fallback={
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              All Sites
            </h1>
            <p className="text-xl text-slate-400">
              Loading...
            </p>
          </div>
        </div>
      </div>
    }>
      <SitesContent />
    </Suspense>
  );
}
