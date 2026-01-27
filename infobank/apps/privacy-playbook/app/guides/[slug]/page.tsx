import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides } from '@/lib/data/playbook';
import { ArrowLeft, Clock, BarChart, ChevronRight } from 'lucide-react';

export function generateStaticParams() {
    return guides.map((g) => ({
        slug: g.slug,
    }));
}

export default function GuidePage({ params }: { params: { slug: string } }) {
    const guide = guides.find((g) => g.slug === params.slug);

    if (!guide) {
        notFound();
    }

    return (
        <div className="min-h-screen pb-20">
            <div className="bg-slate-900 border-b border-slate-800 py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <Link href="/guides" className="text-cyan-500 flex items-center gap-2 mb-8 hover:text-cyan-400 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Guides
                    </Link>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
                            {guide.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${guide.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                                guide.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                    'bg-red-500/10 text-red-500 border-red-500/20'
                            }`}>
                            {guide.difficulty}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">{guide.title}</h1>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">{guide.summary}</p>

                    <div className="flex gap-6 mt-10 text-sm font-mono text-slate-500">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {guide.timeToComplete}
                        </div>
                        <div className="flex items-center gap-2">
                            <BarChart className="w-4 h-4" />
                            STAGES: {guide.steps.length}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-4 gap-12">
                    <div className="md:col-span-3 space-y-12">
                        {guide.steps.map((step, idx) => (
                            <div key={idx} className="relative pl-12">
                                <div className="absolute left-0 top-0 w-8 h-8 bg-cyan-600 text-white rounded-lg flex items-center justify-center font-bold font-mono">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold text-slate-50 mb-3">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="md:col-span-1 space-y-8">
                        <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Recommendations</h4>
                            <ul className="space-y-4">
                                {guide.recommendations.map((rec) => (
                                    <li key={rec} className="flex items-center gap-2 text-slate-300 font-bold border-b border-slate-700 pb-2 last:border-0">
                                        <ChevronRight className="w-3 h-3 text-cyan-500" />
                                        {rec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
