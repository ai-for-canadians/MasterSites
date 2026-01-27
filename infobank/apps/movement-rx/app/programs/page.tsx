import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProgramGrid } from '@/components/home/ProgramGrid';
import { programs } from '@/lib/data/programs';

export default function ProgramsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Rehab Programs</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Structured protocols designed to resolve specific mechanical issues.
                    </p>
                </div>

                <ProgramGrid programs={programs} />
            </main>
            <Footer />
        </div>
    );
}
