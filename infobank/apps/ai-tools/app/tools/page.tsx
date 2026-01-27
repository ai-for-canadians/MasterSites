import Link from 'next/link';
import { tools } from '@/lib/data/tools';
import { categories } from '@/lib/data/categories';
import { Search, ChevronRight, PenTool, Image as ImageIcon, Code, Zap, Video, Mic, Star } from 'lucide-react';

const IconMap: Record<string, any> = {
    PenTool: PenTool,
    Image: ImageIcon,
    Code: Code,
    Zap: Zap,
    Mic: Mic,
    Video: Video
};

export default function ToolsPage({
    searchParams,
}: {
    searchParams: { category?: string };
}) {
    const selectedCategory = searchParams.category;

    const filteredTools = selectedCategory
        ? tools.filter(t => t.category === selectedCategory).sort((a, b) => b.rating - a.rating)
        : tools.sort((a, b) => b.rating - a.rating);

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-slate-50">
                        {selectedCategory
                            ? `${categories.find(c => c.slug === selectedCategory)?.name || 'Category'} Tools`
                            : 'All AI Tools'
                        }
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Curated, tested, and rated.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <Link
                        href="/tools"
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border
                ${!selectedCategory
                                ? 'bg-indigo-500 text-white border-indigo-500'
                                : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                            }`}
                    >
                        All
                    </Link>
                    {categories.map(cat => (
                        <Link
                            key={cat.id}
                            href={`/tools?category=${cat.id}`}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border
                    ${selectedCategory === cat.id
                                    ? 'bg-indigo-500 text-white border-indigo-500'
                                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                                }`}
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTools.length > 0 ? (
                        filteredTools.map((tool) => (
                            <Link
                                key={tool.id}
                                href={`/tools/${tool.slug}`}
                                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:bg-slate-750"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-900 border border-slate-700 px-2 py-1 rounded">
                                            {categories.find(c => c.id === tool.category)?.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-amber-400">
                                        <Star className="w-4 h-4 fill-amber-400" />
                                        <span className="font-bold">{tool.rating}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-slate-50 mb-2 group-hover:text-indigo-400 transition-colors">
                                    {tool.name}
                                </h3>

                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                    {tool.summary}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
                                    <span className="text-xs text-slate-500">
                                        {tool.pricingType === 'free' && 'Free'}
                                        {tool.pricingType === 'freemium' && 'Freemium'}
                                        {tool.pricingType === 'paid' && 'Paid'}
                                    </span>
                                    <span className="text-indigo-400 text-sm font-medium flex items-center gap-1">
                                        Read Review <ChevronRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center text-slate-500">
                            No tools found for this category.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
