import Link from 'next/link';
import { conditions } from '@/lib/data/conditions';
import { Search, ChevronRight, Brain } from 'lucide-react';

export default function ConditionsPage() {
    const sortedConditions = [...conditions].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-slate-50">Mental Health Conditions</h1>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        A comprehensive index of common mental health chemical and behavioral conditions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedConditions.map((condition) => (
                        <Link
                            key={condition.id}
                            href={`/conditions/${condition.slug}`}
                            className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all hover:shadow-lg hover:shadow-teal-500/10"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-900 border border-slate-700 px-2 py-1 rounded">
                                    {condition.category}
                                </span>
                                <Brain className="w-5 h-5 text-slate-600 group-hover:text-teal-500 transition-colors" />
                            </div>

                            <h3 className="text-xl font-semibold text-slate-50 mb-2 group-hover:text-teal-400 transition-colors">
                                {condition.name}
                            </h3>

                            <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                {condition.summary}
                            </p>

                            <div className="flex items-center text-teal-500 text-sm font-medium">
                                Learn more
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
