import Link from 'next/link';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative py-24 px-4 overflow-hidden bg-slate-900">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-slate-900 to-slate-900" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm mb-6">
                        <Zap className="w-4 h-4" />
                        <span>Tested by real humans. No marketing fluff.</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-50">
                        Cut through the
                        <span className="text-indigo-400"> AI hype</span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-8">
                        Honest, unbiased reviews of the best AI tools for work, code, and creativity. Stop wasting time on wrappers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link
                            href="/tools"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg transition-colors"
                        >
                            Find the Best Tools
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/compare"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-50 font-semibold rounded-lg border border-slate-700 transition-colors"
                        >
                            Compare Models
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-indigo-400" />
                            <span>Independent Ratings</span>
                        </div>
                        <div>•</div>
                        <div>Daily Updates</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
