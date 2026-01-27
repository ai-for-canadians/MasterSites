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
                            Salary Negotiation is a resource dedicated to closing the pay gap, one awkward conversation at a time.
                        </p>
                        <p className="text-lg text-slate-300">
                            We believe that transparency and preparation are the best tools for fair compensation. Employers have all the data and practice; we give you the script so you can level the playing field.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
