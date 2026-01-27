import Link from 'next/link';
import { Compass } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Compass className="w-8 h-8 text-teal-500" />
              <span className="text-xl font-bold text-slate-50">
                Mental<span className="text-teal-500">Navigator</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Demystifying therapy, psychiatry, and self-care. Clear explanations of conditions and provider types to help you find the right support.
            </p>
            <p className="text-slate-500 text-xs">
              Educational information only. Not medical advice. If you are in crisis, please call emergency services or 988.
            </p>
          </div>

          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/conditions"
                  className="text-slate-400 hover:text-teal-500 text-sm transition-colors"
                >
                  Conditions Index
                </Link>
              </li>
              <li>
                <Link
                  href="/providers"
                  className="text-slate-400 hover:text-teal-500 text-sm transition-colors"
                >
                  Provider Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-teal-500 text-sm transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-50 font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-teal-500 text-sm transition-colors"
                >
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MentalHealthNavigator. A project by InfoBank.
          </p>
        </div>
      </div>
    </footer>
  );
}
