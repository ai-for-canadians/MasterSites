import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TimelineSection } from '@/components/home/Timeline';
import { tasks } from '@/lib/data/tasks';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function HomePage() {
    const arrivalTasks = tasks.filter(t => t.stage === 'arrival');
    const week1Tasks = tasks.filter(t => t.stage === 'week-1');
    const month1Tasks = tasks.filter(t => t.stage === 'month-1');
    const month3Tasks = tasks.filter(t => t.stage === 'month-3');

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1">

                {/* Hero */}
                <section className="bg-red-50 py-20 border-b border-red-100">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-3 bg-red-100 rounded-full">
                                <MapPin className="w-8 h-8 text-red-600" />
                            </div>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
                            Your first <span className="text-red-700">90 days</span> in Canada
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Don&apos;t get overwhelmed. We&apos;ve broken down the essential administrative tasks into a simple, ordered timeline.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="#timeline" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                Start the Timeline
                            </Link>
                            <Link href="/checklist" className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold py-3 px-8 rounded-lg transition-colors">
                                View Checklist
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section id="timeline" className="py-24 relative overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none" />

                    <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
                        <div className="space-y-24">
                            <TimelineSection title="Day 0: Arrival" tasks={arrivalTasks} color="red" />
                            <TimelineSection title="Week 1" tasks={week1Tasks} color="slate" />
                            <TimelineSection title="Month 1" tasks={month1Tasks} color="slate" />
                            <TimelineSection title="Month 3" tasks={month3Tasks} color="slate" />
                        </div>

                        <div className="text-center mt-24">
                            <div className="inline-block p-1 bg-red-50 rounded-full">
                                <span className="block px-6 py-2 bg-white rounded-full text-slate-500 text-sm font-medium border border-red-100">
                                    You&apos;re settled! 🎉
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
