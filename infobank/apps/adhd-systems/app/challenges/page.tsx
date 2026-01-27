import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function ChallengesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center py-24">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Challenge Explorer</h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                            Browse systems by the specific executive function challenge you are facing.
                        </p>
                        <Link
                            href="/systems"
                            className="rounded-md bg-slate-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-600"
                        >
                            View All Systems instead
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
