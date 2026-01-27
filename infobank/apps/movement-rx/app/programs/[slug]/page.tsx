import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { programs } from '@/lib/data/programs';
import { Activity, AlertOctagon, Dumbbell, Timer } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return programs.map((p) => ({
        slug: p.slug,
    }));
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
    const program = programs.find((p) => p.slug === params.slug);

    if (!program) {
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
                                href="/programs"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                ← Back to Programs
                            </Link>
                            <span className="text-indigo-500">•</span>
                            <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider">
                                {program.bodyPart}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            {program.name}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light italic">
                            {program.tagline}
                        </p>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            {program.description}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Phases */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">The Protocol</h2>
                                <div className="space-y-8">
                                    {program.phases.map((phase) => (
                                        <div key={phase.id} className="relative pl-8 border-l-2 border-slate-700">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500" />
                                            <h3 className="text-xl font-bold text-white mb-1">{phase.name}</h3>
                                            <div className="text-sm font-bold text-indigo-400 mb-4 uppercase tracking-wider">{phase.weekRange}</div>
                                            <p className="text-slate-300 mb-6">{phase.description}</p>

                                            {/* Exercises Table-ish */}
                                            <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700">
                                                {phase.exercises.map((ex, idx) => (
                                                    <div key={ex.id} className={`p-4 ${idx !== 0 ? 'border-t border-slate-700' : ''}`}>
                                                        <div className="flex justify-between items-start mb-2">
                                                            <h4 className="font-bold text-white">{ex.name}</h4>
                                                            <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                                                                {ex.frequency}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-slate-400 mb-3">{ex.description}</p>
                                                        <div className="flex gap-4 text-xs font-mono text-indigo-300">
                                                            <span>SETS: {ex.sets}</span>
                                                            <span>REPS: {ex.reps}</span>
                                                            {ex.holdTime && <span>HOLD: {ex.holdTime}</span>}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Dumbbell className="w-5 h-5 text-indigo-400" />
                                    Equipment Needed
                                </h3>
                                <ul className="list-disc list-inside text-slate-300 space-y-1">
                                    {program.equipmentNeeded.map(item => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                                <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                                    <AlertOctagon className="w-5 h-5" />
                                    Contraindications
                                </h3>
                                <p className="text-sm text-slate-300 mb-2">Do not start this program if:</p>
                                <ul className="list-disc list-inside text-slate-300 space-y-1 ml-1 text-sm">
                                    {program.contraindications.map(item => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
