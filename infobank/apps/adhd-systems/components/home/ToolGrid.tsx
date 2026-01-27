import { Tool } from '@/types';
import { ExternalLink, ListChecks, Calendar, Wallet, Wand2, Tag, Smartphone } from 'lucide-react';

interface ToolGridProps {
    tools: Tool[];
}

const icons = {
    ListChecks,
    Calendar,
    Wallet,
    Wand2,
    Tag,
    Smartphone
};

export function ToolGrid({ tools }: ToolGridProps) {
    return (
        <section className="py-12 bg-slate-800/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">ADHD-Friendly Tools</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tools.map((tool) => {
                        const Icon = icons[tool.icon as keyof typeof icons] || ListChecks;
                        return (
                            <a
                                key={tool.id}
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-yellow-500 transition-colors"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-slate-700 text-slate-300">
                                        {tool.price}
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    {tool.name}
                                    <ExternalLink className="w-4 h-4 text-slate-500" />
                                </h3>
                                <p className="text-sm text-slate-400">
                                    {tool.description}
                                </p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
