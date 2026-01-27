import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Site } from '@/types';
import { getCategoryById } from '@/lib/data/categories';
import { Card, Badge } from '@infobank/ui';
import { getCategoryColorClass, getStatusBadgeClass, getStatusLabel } from '@/lib/utils';

interface SiteCardProps {
  site: Site;
}

export function SiteCard({ site }: SiteCardProps) {
  const category = getCategoryById(site.categoryId);

  return (
    <Card className="flex flex-col h-full">
      <div className="flex items-start justify-between gap-2 mb-4">
        {category && (
          <Badge className={getCategoryColorClass(category.color)}>
            {category.name}
          </Badge>
        )}
        <Badge className={getStatusBadgeClass(site.status)}>
          {getStatusLabel(site.status)}
        </Badge>
      </div>

      <h3 className="text-xl font-semibold text-slate-50 mb-2">
        {site.name}
      </h3>

      <p className="text-amber-500 font-medium mb-3 text-sm">
        {site.tagline}
      </p>

      <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
        {site.description}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
        <Link
          href={`/sites/${site.slug}`}
          className="text-slate-400 hover:text-white font-medium transition-colors text-sm"
        >
          More Details
        </Link>

        {site.url ? (
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors text-sm"
          >
            Visit Site
            <ArrowRight className="w-4 h-4" />
          </a>
        ) : (
          <Link
            href={`/sites/${site.slug}`}
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors text-sm"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </Card>
  );
}
