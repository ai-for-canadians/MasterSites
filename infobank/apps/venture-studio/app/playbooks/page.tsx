import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { playbooks } from '@/lib/data/playbooks';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';

export default function PlaybooksPage() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-950">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-white mb-8">All Playbooks</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {playbooks.map(pb => (
                            <Link key={pb.id} href={`/playbooks/${pb.slug}`} className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:bg-zinc-800/80">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-purple-500/10 text-purple-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                                        {pb.category.replace('_', ' ')}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {pb.name}
                                </h3>
                                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                                    {pb.description}
                                </p>

                                <div className="flex items-center gap-4 text-xs text-zinc-500 border-t border-zinc-800 pt-4 mt-auto">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {pb.timelineMonths}mo
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <DollarSign className="w-3 h-3" /> {pb.startupCostRange}
                                    </span>
                                    <span className="ml-auto flex items-center text-purple-400 font-medium">
                                        View <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                                    </span>
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
