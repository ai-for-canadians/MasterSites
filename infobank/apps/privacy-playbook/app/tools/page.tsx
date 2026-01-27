import { tools } from '@/lib/data/playbook';
import { ExternalLink, Check } from 'lucide-react';

export default function ToolsPage() {
    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-slate-50">Recommended Tools</h1>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Software and services that put privacy first. We have no affiliate ties to these recommendations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {tools.map(tool => (
                        <div key={tool.id} className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden flex flex-col">
                            <div className="p-8 pb-4">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-slate-50">{tool.name}</h3>
                                    <span className="text-[10px] font-mono p-1 bg-slate-900 border border-slate-700 text-slate-500 rounded px-2 uppercase">
                                        {tool.category}
                                    </span>
                                </div>
                                <p className="text-slate-400 mb-6 leading-relaxed">{tool.summary}</p>
                            </div>

                            <div className="px-8 grid grid-cols-2 gap-4 mb-8">
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Pros</h4>
                                    <ul className="space-y-1">
                                        {tool.pros.map(pro => (
                                            <li key={pro} className="text-xs text-slate-400 flex items-center gap-2">
                                                <Check className="w-3 h-3 text-emerald-500" />
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Cons</h4>
                                    <ul className="space-y-1">
                                        {tool.cons.map(con => (
                                            <li key={con} className="text-xs text-slate-400 flex items-center gap-2">
                                                <span className="text-red-500">•</span>
                                                {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-auto bg-slate-900/50 p-6 flex justify-between items-center border-t border-slate-700">
                                <span className="text-sm font-mono text-cyan-500">{tool.pricing}</span>
                                <a href={tool.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-50 hover:text-cyan-500 transition-colors">
                                    Visit Site
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
