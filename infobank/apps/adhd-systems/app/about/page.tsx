import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">About Us</h1>
                    <div className="prose prose-invert">
                        <p className="text-lg text-slate-300">
                            ADHD Life Systems exists because most productivity advice is written by neurotypical people for neurotypical brains.
                        </p>
                        <p className="text-lg text-slate-300">
                            "Just buy a planner" or "Set a reminder" doesn't work when you lose the planner or ignore the reminder. We focus on strategies that work with your brain chemistry, not against it.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
