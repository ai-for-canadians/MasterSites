import type { Site } from '@/types';
import { SiteCard } from './SiteCard';

interface SiteGridProps {
  sites: Site[];
}

export function SiteGrid({ sites }: SiteGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sites.map((site) => (
        <SiteCard key={site.id} site={site} />
      ))}
    </div>
  );
}
