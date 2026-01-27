import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LeaderboardTable } from '@/components/home/LeaderboardTable';
import { countries } from '@/lib/data/countries';

export default function LeaderboardPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
                    <h1 className="text-3xl font-bold text-white mb-4">Global Governance Index</h1>
                    <p className="text-slate-400 max-w-3xl">
                        Ranking G20 nations based on a composite score of democracy, corruption, equality, development, press freedom, and governance effectiveness.
                    </p>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <LeaderboardTable countries={countries} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
