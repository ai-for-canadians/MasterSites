import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LeaderboardTable } from '@/components/home/LeaderboardTable';
import { countries } from '@/lib/data/countries';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <Header />
            <main className="flex-1">

                {/* Hero */}
                <section className="relative overflow-hidden pt-24 pb-12">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            Which governments <span className="text-sky-500">actually deliver</span>?
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                            Political accountability through transparent data. We track which governments increase equality, prosperity, and freedom—and which ones don&apos;t.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/leaderboard" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors">
                                View Full Leaderboard
                            </Link>
                            <Link href="/methodology" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 px-5 rounded-lg transition-colors">
                                Our Methodology
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Leaderboard Preview */}
                <section className="py-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">2024 G20 Rankings</h2>
                            <Link href="/leaderboard" className="text-sm text-sky-400 hover:text-white flex items-center gap-1">
                                View All <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <LeaderboardTable countries={countries.slice(0, 10)} />
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
