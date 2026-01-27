import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-3xl px-6 lg:px-8 prose prose-indigo">
                    <h1>About Parenting Playbook</h1>
                    <p>
                        This site exists to summarize scientific consensus on child development and parenting practices.
                    </p>
                    <p>
                        We rate evidence based on the quality and quantity of peer-reviewed research available (RCTs, meta-analyses, and longitudinal studies).
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
