import Link from 'next/link';
import { Compass, ArrowRight, HeartPulse } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative py-24 px-4 overflow-hidden bg-slate-900">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-slate-900 to-slate-900" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm mb-6">
                        <HeartPulse className="w-4 h-4" />
                        <span>You are not alone. Help is available.</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-50">
                        Navigating mental health
                        <span className="text-teal-500"> made clear</span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-8">
                        Demystifying conditions, therapy types, and how to find the right provider. No medical jargon, just practical guidance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link
                            href="/conditions"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold rounded-lg transition-colors"
                        >
                            Understand Symptoms
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/providers"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-50 font-semibold rounded-lg border border-slate-700 transition-colors"
                        >
                            Who Should I See?
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                            <Compass className="w-4 h-4 text-teal-500" />
                            <span>Provider Directory (Coming Soon)</span>
                        </div>
                        <div>•</div>
                        <div>Evidence-Based Resources</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
