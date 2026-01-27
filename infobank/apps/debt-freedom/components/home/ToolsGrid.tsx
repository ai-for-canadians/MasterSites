import { Tool } from '@/types';
import { Calculator, Smartphone, Zap, ExternalLink } from 'lucide-react';

interface ToolsGridProps {
    tools: Tool[];
}

const icons = {
    Calculator: Calculator,
    Smartphone: Smartphone,
    Zap: Zap,
};

export function ToolsGrid({ tools }: ToolsGridProps) {
    return (
        <section className="py-12 bg-slate-800/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Recommended Tools</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {tools.map((tool) => {
                        const Icon = icons[tool.icon as keyof typeof icons] || Calculator;
                        return (
                            <a
                                key={tool.id}
                                href={tool.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-rose-500 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 mb-4">
                                    <Icon className="w-5 h-5" />
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
