import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FeedbackWidget } from '@infobank/feedback';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Impact Scorecard - Which organizations actually deliver',
    description: 'Transparency leaderboard for nonprofits and companies. See which organizations have real impact, not just marketing.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
                <FeedbackWidget siteId="impact-scorecard" accentColor="emerald" />
            </body>
        </html>
    );
}
