import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EvidenceBadge } from '@/components/home/EvidenceBadge';
import { topics } from '@/lib/data/topics';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TopicsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-indigo-50/30">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-8">All Research Topics</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topics.map(topic => (
                            <Link key={topic.id} href={`/topics/${topic.slug}`} className="group bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-100 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                        {topic.stage}
                                    </span>
                                    <EvidenceBadge rating={topic.evidenceRating} />
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                                    {topic.title}
                                </h3>
                                <p className="text-slate-600 mb-6 line-clamp-2">
                                    {topic.shortDescription}
                                </p>
                                <div className="text-indigo-600 font-bold text-sm flex items-center">
                                    Read Summary <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
