import Link from 'next/link';
import { tools } from '@/lib/data/tools';
import { Check, X, ArrowRight } from 'lucide-react';

export default function ComparePage() {
    // Hardcoded comparison for demo: ChatGPT vs Claude vs Gemini 
    // Ideally this would be dynamic, but for a static site we can feature the "Big 3 LLMs"
    const topModels = tools.filter(t => ['chatgpt', 'claude'].includes(t.slug));
    // Add a placeholder for Gemini if not in data yet, or just use what we have.
    // We have ChatGPT and Claude. Let's add Perplexity for fun.
    const compareTools = tools.filter(t => ['chatgpt', 'claude', 'perplexity'].includes(t.slug));

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-slate-50">Model Showdown</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Direct comparison of the leading AI assistants.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px] border-collapse text-left">
                        <thead>
                            <tr>
                                <th className="p-4 border-b border-slate-700 w-1/4">Feature</th>
                                {compareTools.map(tool => (
                                    <th key={tool.id} className="p-4 border-b border-slate-700 text-slate-50 text-xl font-bold w-1/4">
                                        {tool.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            <tr>
                                <td className="p-4 font-semibold text-slate-300">Rating</td>
                                {compareTools.map(tool => (
                                    <td key={tool.id} className="p-4">
                                        <span className="text-amber-500 font-bold text-lg">{tool.rating}/10</span>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 font-semibold text-slate-300">Best For</td>
                                {compareTools.map(tool => (
                                    <td key={tool.id} className="p-4 text-slate-400 text-sm">
                                        {tool.useCases[0]}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 font-semibold text-slate-300">Pricing</td>
                                {compareTools.map(tool => (
                                    <td key={tool.id} className="p-4 text-slate-400 capitalize">
                                        {tool.pricingType}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 font-semibold text-slate-300">Context Window</td>
                                {compareTools.map(tool => (
                                    <td key={tool.id} className="p-4 text-slate-400">
                                        {tool.slug === 'claude' ? '200k+ tokens' : tool.slug === 'chatgpt' ? '128k tokens' : 'Variable'}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 font-semibold text-slate-300">Web Browsing</td>
                                {compareTools.map(tool => (
                                    <td key={tool.id} className="p-4 text-slate-400">
                                        {tool.slug === 'perplexity' ? <Check className="text-emerald-500" /> : tool.slug === 'chatgpt' ? <Check className="text-emerald-500" /> : <X className="text-slate-600" />}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 font-semibold text-slate-300">Link</td>
                                {compareTools.map(tool => (
                                    <td key={tool.id} className="p-4">
                                        <Link href={`/tools/${tool.slug}`} className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium text-sm">
                                            Full Review <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-16 bg-slate-800/50 rounded-xl p-8 text-center border border-dashed border-slate-700">
                    <p className="text-slate-400">
                        More comparisons coming soon (Image Generators, Video Models, and Coding Assistants).
                    </p>
                </div>
            </div>
        </div>
    );
}
