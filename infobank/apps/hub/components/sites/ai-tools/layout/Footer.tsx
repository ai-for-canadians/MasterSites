import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-amber-500" />
              <span className="text-xl font-bold text-slate-50">
                AI<span className="text-amber-500">ToolsGuide</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Honest reviews of AI tools. No affiliate bias, just what works.
            </p>
            <p className="text-slate-500 text-xs">
              Independent information.
            </p>
          </div>

          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools"
                  className="text-slate-400 hover:text-amber-500 text-sm transition-colors"
                >
                  Browse Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/compare"
                  className="text-slate-400 hover:text-amber-500 text-sm transition-colors"
                >
                  Compare
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-amber-500 text-sm transition-colors"
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
                  className="text-slate-400 hover:text-amber-500 text-sm transition-colors"
                >
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} AI Tools Guide. A project by InfoBank.
          </p>
        </div>
      </div>
    </footer>
  );
}
