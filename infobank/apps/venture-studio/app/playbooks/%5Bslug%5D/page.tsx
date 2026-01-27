import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { playbooks } from '@/lib/data/playbooks';
import { Bot, CheckCircle2, Rocket, Clock, DollarSign, Users } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return playbooks.map((p) => ({
        slug: p.slug,
    }));
}

export default function PlaybookDetailPage({ params }: { params: { slug: string } }) {
    const playbook = playbooks.find((p) => p.slug === params.slug);

    if (!playbook) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-zinc-950">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    {/* Header */}
                    <div className="border-b border-zinc-800 pb-8 mb-12">
                        <Link href="/playbooks" className="text-zinc-500 hover:text-white text-sm mb-4 block">← Back to Playbooks</Link>
                        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-purple-500/10 text-purple-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                                        {playbook.category.replace('_', ' ')}
                                    </span>
                                    <span className="text-zinc-500 text-sm">•</span>
                                    <span className="text-zinc-400 text-sm">Provable Model</span>
                                </div>
                                <h1 className="text-4xl font-bold text-white mb-4">{playbook.name}</h1>
                                <p className="text-xl text-zinc-400 max-w-2xl">{playbook.description}</p>
                            </div>
                            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 min-w-[300px]">
                                <div className="flex justify-between mb-2">
                                    <span className="text-zinc-500 text-sm">Timeline</span>
                                    <span className="text-white font-medium">{playbook.timelineMonths} Months</span>
                                </div>
                                <div className="flex justify-between mb-6">
                                    <span className="text-zinc-500 text-sm">Est. Cost</span>
                                    <span className="text-white font-medium">{playbook.startupCostRange}</span>
                                </div>
                                <Link href="/dashboard" className="block w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-center py-3 rounded-lg transition-colors">
                                    Launch this Venture
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">

                            {/* Problem/Solution */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                                    <h3 className="text-zinc-400 font-bold uppercase text-xs mb-2">Problem</h3>
                                    <p className="text-zinc-200">{playbook.problemAddressed}</p>
                                </div>
                                <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20">
                                    <h3 className="text-purple-400 font-bold uppercase text-xs mb-2">Impact</h3>
                                    <p className="text-zinc-200">{playbook.expectedImpact}</p>
                                </div>
                            </section>

                            {/* AI Roadmap */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Bot className="w-6 h-6 text-purple-500" />
                                    AI Execution Plan
                                </h2>
                                <div className="space-y-4">
                                    {playbook.steps.map((step) => (
                                        <div key={step.id} className="flex gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                                            <div className="flex-shrink-0 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-500">
                                                {step.order}
                                            </div>
                                            <div>
                                                <h3 className="text-white font-medium">{step.name}</h3>
                                                <p className="text-zinc-400 text-sm mb-2">{step.description}</p>
                                                <div className="flex gap-4 text-xs text-zinc-500">
                                                    <span>Est: {step.estimatedMinutes}m</span>
                                                    <span>Cost: ${step.cost}</span>
                                                    <span className="text-purple-400">Generates: {step.outputType}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-4">Success Stories</h3>
                                <div className="space-y-4">
                                    {playbook.successStories.map((story, i) => (
                                        <div key={i} className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                                            <div className="font-bold text-white">{story.title}</div>
                                            <div className="text-xs text-zinc-500 mb-2">{story.location}</div>
                                            <p className="text-sm text-zinc-400">{story.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-4">Required Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {playbook.requiredExpertise.map(skill => (
                                        <span key={skill} className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
