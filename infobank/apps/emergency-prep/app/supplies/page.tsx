import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SupplyList } from '@/components/home/SupplyList';
import { supplies } from '@/lib/data/scenarios';

export default function SuppliesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Supply List</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Items to keep stocked year-round. Rotate food and water annually.
                    </p>
                </div>
                <SupplyList items={supplies} />
            </main>
            <Footer />
        </div>
    );
}
