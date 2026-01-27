import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function VerificationPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">Verification Standards</h1>
                    <div className="prose prose-invert">
                        <p className="text-lg text-slate-300">
                            We believe that extraordinary claims require extraordinary evidence.
                        </p>
                        <h3>Financial Stories</h3>
                        <p>Must provide redacted bank statements showing the debt balance and the zero balance date. Investment claims must show brokerage screenshots.</p>

                        <h3>Weight Loss / Health</h3>
                        <p>Must provide time-stamped "before" photos or dated medical records (e.g. A1C lab results).</p>

                        <h3>Career Pivots</h3>
                        <p>Must provide LinkedIn history or offer letters (salary redacted if preferred, but title/company verified).</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
