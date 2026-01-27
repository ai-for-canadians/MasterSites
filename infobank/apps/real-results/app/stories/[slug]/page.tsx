import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { stories } from '@/lib/data/stories';
import { BadgeCheck, Calendar, FileCheck, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return stories.map((s) => ({
        slug: s.slug,
    }));
}

export default function StoryDetailPage({ params }: { params: { slug: string } }) {
    const story = stories.find((s) => s.slug === params.slug);

    if (!story) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-4xl px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-12 border-b border-slate-800 pb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <Link
                                href="/stories"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Stories
                            </Link>
                            <span className="text-blue-500">•</span>
                            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                                {story.category}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {story.title}
                        </h1>

                        <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                            <span>{story.author}</span>
                            <span>{story.location}</span>
                            {story.verified && (
                                <span className="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-400/10 px-2 rounded">
                                    <BadgeCheck className="w-4 h-4" /> Verified
                                </span>
                            )}
                        </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Before/After */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
                                    <h3 className="text-red-400 font-bold uppercase text-xs mb-2">Before</h3>
                                    <p className="text-slate-200">{story.before}</p>
                                </div>
                                <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/20">
                                    <h3 className="text-green-400 font-bold uppercase text-xs mb-2">After</h3>
                                    <p className="text-slate-200">{story.after}</p>
                                </div>
                            </section>

                            {/* Journey */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">The Journey</h2>
                                <div className="prose prose-invert text-slate-300">
                                    {story.journey}
                                </div>
                            </section>

                            {/* Timeline */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">Timeline</h2>
                                <div className="space-y-0 border-l-2 border-slate-700 pl-6 relative">
                                    {story.timeline.map((event, idx) => (
                                        <div key={idx} className="mb-8 relative">
                                            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500" />
                                            <div className="text-sm font-bold text-blue-400 mb-1">{event.date}</div>
                                            <div className="text-slate-300">{event.description}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-4">What Worked</h3>
                                <ul className="space-y-3">
                                    {story.whatWorked.map(item => (
                                        <li key={item} className="flex gap-3 text-slate-300 text-sm">
                                            <span className="text-blue-500">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/20">
                                <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                                    <FileCheck className="w-5 h-5" />
                                    Verified Proof
                                </h3>
                                <ul className="space-y-2">
                                    {story.proof.map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                                            <BadgeCheck className="w-4 h-4 text-emerald-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 pt-4 border-t border-emerald-500/20 text-xs text-slate-400 italic">
                                    Documents reviewed by RealResults staff on {story.date}.
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
