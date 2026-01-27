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
                            Movement Rx digitizes standard physical therapy protocols.
                        </p>
                        <p className="text-lg text-slate-300">
                            We believe that basic musculoskeletal care should be free and accessible. These protocols are based on current best evidence for tendon loading and spinal stability.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
