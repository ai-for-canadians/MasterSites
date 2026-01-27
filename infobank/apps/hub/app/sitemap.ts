import { MetadataRoute } from 'next';
import { sites } from '@/lib/data/sites';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://infobank.ca';

  const siteUrls = sites.map((site) => ({
    url: `${baseUrl}/sites/${site.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/sites`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...siteUrls,
  ];
}
