import Link from 'next/link';
import { guides } from '@/lib/data/playbook';
import { ArrowRight, Search } from 'lucide-react';

export default function GuidesPage() {
    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-slate-50">Hardening Guides</h1>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Choose a guide to start securing your digital footprint.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides.map((guide) => (
                        <Link
                            key={guide.id}
                            href={`/guides/${guide.slug}`}
                            className="group p-8 bg-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all hover:bg-slate-800"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
                                    {guide.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-cyan-400 transition-colors">
                                {guide.title}
                            </h3>
                            <p className="text-slate-400 mb-6 text-sm">
                                {guide.summary}
                            </p>
                            <div className="flex items-center text-cyan-500 font-bold gap-2 text-sm">
                                Launch Playbook
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
