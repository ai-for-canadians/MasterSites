import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | InfoBank',
    default: 'InfoBank - Real information for real life',
  },
  description:
    'Evidence-based resources for Canadians. No ads. No BS. Just information you can trust.',
  keywords: [
    'evidence-based',
    'Canadian resources',
    'health information',
    'career advice',
    'financial planning',
  ],
  authors: [{ name: 'InfoBank' }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://infobank.ca',
    siteName: 'InfoBank',
    title: 'InfoBank - Real information for real life',
    description:
      'Evidence-based resources for Canadians. No ads. No BS. Just information you can trust.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfoBank - Real information for real life',
    description:
      'Evidence-based resources for Canadians. No ads. No BS. Just information you can trust.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-900 text-slate-50">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
