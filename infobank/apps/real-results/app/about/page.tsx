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
                            Real Results is the antidote to the "Trust Me Bro" culture of the internet.
                        </p>
                        <p className="text-lg text-slate-300">
                            We aggregate stories of real human achievement, but only if they come with receipts. Our goal is to show you what is actually possible when you strip away the marketing fluff.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
