import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Life After Work - Retirement Strategy for Canadians',
    description:
        'Plan your retirement with confidence. CPP/OAS, withdrawal strategies, lifestyle planning, and financial security.',
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
