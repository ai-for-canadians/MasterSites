import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Leader Watch - Global Political Transparency',
  description: 'Tracking world leaders on democracy, equality, and transparency. Evidence-based ratings of who is advancing prosperity and who is concentrating power.',
  openGraph: {
    title: 'Leader Watch - Global Political Transparency',
    description: 'Evidence-based ratings of world leaders on democracy, equality, and accountability.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-50`}>
        <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a href="/" className="flex items-center gap-2">
                <span className="text-2xl">👁️</span>
                <span className="text-xl font-bold text-slate-50">Leader Watch</span>
              </a>
              <div className="flex items-center gap-6">
                <a href="/" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Leaderboard
                </a>
                <a href="/methodology" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Methodology
                </a>
                <a href="/compare" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Compare
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-slate-800 py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-slate-400">
              <p className="mb-2">
                Data sourced from V-Dem, Transparency International, Freedom House, UNDP, RSF, and Climate Action Tracker.
              </p>
              <p className="text-sm">
                Part of the <a href="https://master-sites.vercel.app" className="text-amber-400 hover:underline">InfoBank</a> network.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
