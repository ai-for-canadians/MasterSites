import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'COMPASS - Government Performance Tracker',
    description:
        'Which governments actually deliver? Global data on democracy, equality, and development transparency.',
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
                    <main className="flex-1">{children}</main>
                </div>
            </body>
        </html>
    );
}
