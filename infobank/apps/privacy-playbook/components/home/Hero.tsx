import Link from 'next/link';
import { Shield, ArrowRight, Lock } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative py-24 px-4 overflow-hidden bg-slate-900 border-b border-cyan-500/10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-900" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
                        <Lock className="w-4 h-4" />
                        <span>Encrypted. Anonymous. Sovereign.</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-50">
                        Reclaim your
                        <span className="text-cyan-500"> digital privacy</span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-8">
                        Simplified guides for the complicated world of digital security. Audit your devices, secure your accounts, and vanish from trackers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link
                            href="/guides"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-cyan-500/20"
                        >
                            Start Hardening
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/threat-models"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-50 font-semibold rounded-lg border border-slate-700 transition-colors"
                        >
                            Explore Threat Models
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-8 text-sm text-slate-500 font-mono">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                            <span>SYSTEM: SECURE</span>
                        </div>
                        <div>•</div>
                        <div>NO TRACKERS FOUND</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
