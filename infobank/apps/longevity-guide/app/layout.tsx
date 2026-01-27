import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import { Header } from '@/components/layout/Header';
// import { Footer } from '@/components/layout/Footer';
// import { Disclaimer } from '@/components/layout/Disclaimer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Longevity Guide - What actually extends healthspan',
    description:
        'Cut through anti-aging hype with evidence-based longevity information. Supplements, interventions, lifestyle factors—all rated by evidence quality.',
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
                    {/* <Header /> */}
                    {/* <Disclaimer /> */}
                    <main className="flex-1">{children}</main>
                    {/* <Footer /> */}
                </div>
            </body>
        </html>
    );
}
