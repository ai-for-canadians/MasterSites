import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedSites } from '@/lib/data/sites';
import { getCategoryById } from '@/lib/data/categories';
import { Card, Badge } from '@infobank/ui';
import { getStatusBadgeClass, getStatusLabel } from '@/lib/utils';

export function FeaturedSites() {
  const featured = getFeaturedSites();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Featured Sites
          </h2>
          <p className="text-lg text-slate-400">
            Start with these highly requested resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((site) => {
            const category = getCategoryById(site.categoryId);

            return (
              <Card key={site.id} className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <Badge className={getStatusBadgeClass(site.status)}>
                    {getStatusLabel(site.status)}
                  </Badge>
                </div>

                <h3 className="text-2xl font-semibold text-slate-50 mb-2">
                  {site.name}
                </h3>

                <p className="text-amber-500 font-medium mb-3">
                  {site.tagline}
                </p>

                <p className="text-slate-400 mb-6 flex-1">
                  {site.description}
                </p>

                <div className="space-y-3">
                  {category && (
                    <p className="text-xs text-slate-500">
                      Category: {category.name}
                    </p>
                  )}

                  <Link
                    href={`/sites/${site.slug}`}
                    className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
