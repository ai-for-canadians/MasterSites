'use client';

import { useState } from 'react';
import { SiteGrid } from '../sites/SiteGrid';
import { SiteSearch } from '../sites/SiteSearch';
import { CategoryFilter } from '../sites/CategoryFilter';
import { sites } from '@/lib/data/sites';

export function AllSites() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            All Sites
          </h2>
          <p className="text-lg text-slate-400">
            Browse our complete collection of resources
          </p>
        </div>

        <div className="space-y-8">
          <SiteSearch value={searchQuery} onChange={setSearchQuery} />

          <CategoryFilter
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />

          {filteredSites.length > 0 ? (
            <SiteGrid sites={filteredSites} />
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400">
                No sites found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
