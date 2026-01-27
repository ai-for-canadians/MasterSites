export type SiteStatus = 'live' | 'coming_soon' | 'beta';

export type CategoryColor = 'emerald' | 'blue' | 'purple' | 'red' | 'amber';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: CategoryColor;
  sortOrder: number;
}

export interface Site {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  categoryId: string;
  url?: string;
  status: SiteStatus;
  isFeatured: boolean;
  icon?: string;
  features: string[];
  whoItsFor: string;
  sortOrder: number;
}
