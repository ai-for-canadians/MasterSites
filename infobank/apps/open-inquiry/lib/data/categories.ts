import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'psychedelics',
    name: 'Psychedelics',
    slug: 'psychedelics',
    description:
      'Classic serotonergic psychedelics that produce altered perception, cognition, and mood',
    icon: 'Sparkles',
    color: 'purple',
    substanceCount: 6,
  },
  {
    id: 'dissociatives',
    name: 'Dissociatives',
    slug: 'dissociatives',
    description:
      'Substances that produce feelings of detachment from body and environment',
    icon: 'Layers',
    color: 'blue',
    substanceCount: 3,
  },
  {
    id: 'empathogens',
    name: 'Empathogens',
    slug: 'empathogens',
    description:
      'Substances that produce feelings of emotional closeness and empathy',
    icon: 'Heart',
    color: 'pink',
    substanceCount: 2,
  },
  {
    id: 'nootropics',
    name: 'Nootropics',
    slug: 'nootropics',
    description:
      'Cognitive enhancers that may improve memory, focus, or mental clarity',
    icon: 'Brain',
    color: 'cyan',
    substanceCount: 5,
  },
  {
    id: 'stimulants',
    name: 'Stimulants',
    slug: 'stimulants',
    description: 'Substances that increase alertness, attention, and energy',
    icon: 'Zap',
    color: 'amber',
    substanceCount: 2,
  },
  {
    id: 'cannabinoids',
    name: 'Cannabinoids',
    slug: 'cannabinoids',
    description: 'Cannabis and related compounds acting on cannabinoid receptors',
    icon: 'Leaf',
    color: 'green',
    substanceCount: 2,
  },
  {
    id: 'research-chemicals',
    name: 'Research Chemicals',
    slug: 'research-chemicals',
    description: 'Novel psychoactive substances with limited research history',
    icon: 'FlaskConical',
    color: 'orange',
    substanceCount: 2,
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}
