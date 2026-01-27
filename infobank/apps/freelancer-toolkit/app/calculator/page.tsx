import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RateCalculator } from '@/components/calculator/RateCalculator';

export default function CalculatorPage() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-50">
            <Header />
            <main className="flex-1 py-12 md:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <h1 className="text-5xl font-black text-zinc-900 mb-6 tracking-tighter uppercase italic">Rate Calculator</h1>
                        <p className="text-xl text-zinc-500 font-medium">
                            Most freelancers undercharge because they forget to account for time off, taxes, and overhead.
                            Use this tool to find your survival rate vs. your growth rate.
                        </p>
                    </div>

                    <RateCalculator />
                </div>
            </main>
            <Footer />
        </div>
    );
}
