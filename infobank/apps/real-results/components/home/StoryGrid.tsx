import Link from 'next/link';
import { Story } from '@/types';
import { ArrowRight, BadgeCheck } from 'lucide-react';

interface StoryGridProps {
    stories: Story[];
}

export function StoryGrid({ stories }: StoryGridProps) {
    return (
        <section className="py-12 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Verified Transformations</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {stories.map((item) => (
                        <Link
                            key={item.id}
                            href={`/stories/${item.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 transition-all hover:bg-slate-750 hover:ring-1 hover:ring-blue-500"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                    {item.verified && (
                                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                                            <BadgeCheck className="w-3 h-3" /> Verified
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>

                                <div className="flex items-center gap-2 mb-4 text-xs text-slate-500">
                                    <span>{item.author}</span>
                                    <span>•</span>
                                    <span>{item.location}</span>
                                </div>

                                <p className="text-sm text-slate-400 mb-6 line-clamp-3 italic">
                                    "{item.before.substring(0, 100)}..."
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-700/50">
                                    <div className="flex items-center text-sm text-blue-400 font-medium">
                                        See the Receipts <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
