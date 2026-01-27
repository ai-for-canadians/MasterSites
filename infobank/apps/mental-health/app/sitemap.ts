import { MetadataRoute } from 'next';
import { conditions } from '@/lib/data/conditions';
import { providers } from '@/lib/data/resources';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mentalhealth.infobank.app'; // Placeholder

    const conditionUrls = conditions.map((c) => ({
        url: `${baseUrl}/conditions/${c.slug}`,
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
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/conditions`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/providers`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        ...conditionUrls,
    ];
}
