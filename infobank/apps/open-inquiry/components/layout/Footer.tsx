import Link from 'next/link';
import { FlaskConical } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <FlaskConical className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-slate-50">
                Open<span className="text-purple-400">Inquiry</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Evidence-based information on psychedelics, nootropics, and research
              compounds. Independent, rigorous, harm reduction focused.
            </p>
            <p className="text-slate-500 text-xs">
              Educational information only. Not medical advice.
            </p>
          </div>

          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/substances"
                  className="text-slate-400 hover:text-purple-400 text-sm transition-colors"
                >
                  All Substances
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-slate-400 hover:text-purple-400 text-sm transition-colors"
                >
                  Research Library
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-slate-400 hover:text-purple-400 text-sm transition-colors"
                >
                  Harm Reduction
                </Link>
              </li>
              <li>
                <Link
                  href="/interactions"
                  className="text-slate-400 hover:text-purple-400 text-sm transition-colors"
                >
                  Interaction Checker
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
                  className="text-slate-400 hover:text-purple-400 text-sm transition-colors"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/about#methodology"
                  className="text-slate-400 hover:text-purple-400 text-sm transition-colors"
                >
                  Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/about#sources"
                  className="text-slate-400 hover:text-purple-400 text-sm transition-colors"
                >
                  Sources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} OpenInquiry. Information for educational
            purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
