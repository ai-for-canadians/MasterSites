import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'writing',
    name: 'Writing & Copy',
    slug: 'writing',
    description: 'Tools for blog posts, emails, essays, and creative writing.',
    icon: 'PenTool',
  },
  {
    id: 'image',
    name: 'Image Generation',
    slug: 'image',
    description: 'Create art, photos, and assets from text prompts.',
    icon: 'Image',
  },
  {
    id: 'code',
    name: 'Coding & Dev',
    slug: 'code',
    description: 'Code assistants, debuggers, and documentation generators.',
    icon: 'Code',
  },
  {
    id: 'productivity',
    name: 'Productivity',
    slug: 'productivity',
    description: 'Meeting notetakers, task managers, and email assistants.',
    icon: 'Zap',
  },
  {
    id: 'video',
    name: 'Video & Animation',
    slug: 'video',
    description: 'Text-to-video, editing assistants, and avatars.',
    icon: 'Video',
  },
  {
    id: 'audio',
    name: 'Audio & Speech',
    slug: 'audio',
    description: 'Voice cloning, text-to-speech, and music generation.',
    icon: 'Mic',
  },
];
