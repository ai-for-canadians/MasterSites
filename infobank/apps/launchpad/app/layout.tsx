import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FeedbackWidget } from '@infobank/feedback';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'LaunchPad - Your idea. Our tools. Shared ownership.',
    description: 'Submit ideas for new InfoBank sites. Community funds development. Contributors become co-owners.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
                <FeedbackWidget siteId="launchpad" accentColor="purple" />
            </body>
        </html>
    );
}
