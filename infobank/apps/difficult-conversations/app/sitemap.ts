import { MetadataRoute } from 'next';
import { conversations } from '@/lib/data/conversations';
import { categories } from '@/lib/data/categories';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://difficultconversations.infobank.app'; // Placeholder

    const conversationUrls = conversations.map((convo) => ({
        url: `${baseUrl}/conversations/${convo.slug}`,
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
            url: `${baseUrl}/conversations`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        ...conversationUrls,
    ];
}
