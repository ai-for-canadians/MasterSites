import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AccountCard } from '@/components/home/AccountCard';
import { accounts } from '@/lib/data/accounts';

export default function AccountsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-zinc-900 mb-8 tracking-tight">Investment Accounts</h1>
                    <p className="text-xl text-zinc-500 mb-12 max-w-2xl">
                        Canada offers several "registered" accounts that help you avoid or defer taxes.
                        Choosing the right one can save you hundreds of thousands over your lifetime.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {accounts.map(acc => (
                            <AccountCard key={acc.id} account={acc} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
