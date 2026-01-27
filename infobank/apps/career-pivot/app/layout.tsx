import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Career Pivot - Strategic advice for changing careers',
    description:
        'Actionable guides for pivoting into new industries. Skills analysis, certification reviews, and realistic timelines.',
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
