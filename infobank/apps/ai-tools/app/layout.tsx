import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Disclaimer } from '@/components/layout/Disclaimer';
import { FeedbackWidget } from '@infobank/feedback';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Tools Guide - Cut through the hype',
  description:
    'Honest reviews of AI tools. No affiliate bias, just what works. Categories: writing, image, code, productivity.',
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
          <Disclaimer />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <FeedbackWidget siteId="ai-tools" accentColor="orange" />
      </body>
    </html>
  );
}

