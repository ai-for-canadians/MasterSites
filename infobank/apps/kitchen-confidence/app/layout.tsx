import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kitchen Confidence - Cook without recipes',
    description:
        'Learn to cook by understanding techniques, not following recipes. Build skills that let you improvise with whatever\'s in your fridge.',
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
