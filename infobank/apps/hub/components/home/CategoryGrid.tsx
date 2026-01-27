import Link from 'next/link';
import { Heart, Wallet, Briefcase, MapPin, Home } from 'lucide-react';
import { categories } from '@/lib/data/categories';
import { sites } from '@/lib/data/sites';
import { Card } from '@infobank/ui';

const iconMap = {
  Heart,
  Wallet,
  Briefcase,
  MapPin,
  Home,
};

export function CategoryGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-slate-400">
            Find the information you need, organized by topic
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            const siteCount = sites.filter(
              (site) => site.categoryId === category.id
            ).length;

            return (
              <Link key={category.id} href={`/sites?category=${category.slug}`}>
                <Card variant="interactive" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-amber-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-50 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-slate-400 text-sm mb-3">
                        {category.description}
                      </p>
                      <p className="text-xs text-slate-500">
                        {siteCount} {siteCount === 1 ? 'site' : 'sites'}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
