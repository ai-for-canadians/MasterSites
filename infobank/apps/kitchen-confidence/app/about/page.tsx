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
                            We believe that following recipes strictly prevents you from learning how to cook. It's painting by numbers vs learning how to paint.
                        </p>
                        <p className="text-lg text-slate-300">
                            Kitchen Confidence teaches you the "why" and "how"—heat control, seasoning, acid, texture—so you can walk into any kitchen and make something delicious.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
