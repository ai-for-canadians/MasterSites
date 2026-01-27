import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">About</h1>
                    <div className="prose prose-invert">
                        <p className="text-lg text-slate-300">
                            Emergency Prep exists to counter the "doomsday prepper" narrative. You don't need a bunker or thousands of dollars of freeze-dried food.
                        </p>
                        <p className="text-lg text-slate-300">
                            We focus on the most likely scenarios: extended power outages, severe weather, and financial emergencies. Our goal is to make every household resilient for 72 hours to 2 weeks.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
