import Link from 'next/link';
import { conversations } from '@/lib/data/conversations';
import { categories } from '@/lib/data/categories';
import { Search, ChevronRight, Briefcase, Heart, Home, DollarSign, Users, Info } from 'lucide-react';

const IconMap: Record<string, any> = {
    Briefcase: Briefcase,
    Heart: Heart,
    Home: Home,
    DollarSign: DollarSign,
    Users: Users
};

export default function ConversationsPage({
    searchParams,
}: {
    searchParams: { category?: string };
}) {
    const selectedCategory = searchParams.category;

    const filteredConversations = selectedCategory
        ? conversations.filter(c => c.categoryId === selectedCategory)
        : conversations;

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-slate-50">
                        {selectedCategory
                            ? `${categories.find(c => c.slug === selectedCategory)?.name || 'Category'} Scripts`
                            : 'All Scripts'
                        }
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Browse our library of conversation templates, scripts, and negotiation strategies.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <Link
                        href="/conversations"
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border
                ${!selectedCategory
                                ? 'bg-amber-500 text-slate-900 border-amber-500'
                                : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                            }`}
                    >
                        All
                    </Link>
                    {categories.map(cat => (
                        <Link
                            key={cat.id}
                            href={`/conversations?category=${cat.id}`}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border
                    ${selectedCategory === cat.id
                                    ? 'bg-amber-500 text-slate-900 border-amber-500'
                                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                                }`}
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredConversations.length > 0 ? (
                        filteredConversations.map((convo) => (
                            <Link
                                key={convo.id}
                                href={`/conversations/${convo.slug}`}
                                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/10"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-700 px-2 py-1 rounded">
                                        {categories.find(c => c.id === convo.categoryId)?.name}
                                    </div>
                                    <div className={`text-xs px-2 py-1 rounded font-medium border
                    ${convo.difficulty === 'High' ? 'border-red-500/30 text-red-400' : ''}
                    ${convo.difficulty === 'Medium' ? 'border-amber-500/30 text-amber-400' : ''}
                    ${convo.difficulty === 'Low' ? 'border-green-500/30 text-green-400' : ''}
                  `}>
                                        {convo.difficulty} Difficulty
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-slate-50 mb-2 group-hover:text-amber-400 transition-colors">
                                    {convo.title}
                                </h3>

                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                    {convo.summary}
                                </p>

                                <div className="flex items-center text-amber-500 text-sm font-medium">
                                    Get the script
                                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center text-slate-500">
                            No scripts found for this category.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
