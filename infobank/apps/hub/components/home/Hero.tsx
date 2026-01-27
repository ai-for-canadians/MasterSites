'use client';

import { Search } from 'lucide-react';
import { Button } from '@infobank/ui';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/sites?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50 mb-6">
            Real information for real life
          </h1>
          <p className="text-xl text-slate-400 mb-12">
            Evidence-based resources for Canadians. No ads. No BS. Just
            information you can trust.
          </p>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search all sites..."
                className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-12 pr-4 py-4 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
              />
            </div>
          </form>

          <div className="flex justify-center">
            <Button
              onClick={() => router.push('/sites')}
              size="lg"
              variant="primary"
            >
              Explore Sites
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
