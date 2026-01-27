import Link from 'next/link';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-cyan-500" />
              <span className="text-xl font-bold text-slate-50">
                Privacy<span className="text-cyan-500">Playbook</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Actionable guides to digital privacy and security. We test tools and audit workflows so you can browse with peace of mind.
            </p>
            <p className="text-slate-500 text-xs">
              Open source & community focused.
            </p>
          </div>

          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/guides"
                  className="text-slate-400 hover:text-cyan-500 text-sm transition-colors"
                >
                  Hardening Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-slate-400 hover:text-cyan-500 text-sm transition-colors"
                >
                  Recommended Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/threat-models"
                  className="text-slate-400 hover:text-cyan-500 text-sm transition-colors"
                >
                  Threat Modeling
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
                  className="text-slate-400 hover:text-cyan-500 text-sm transition-colors"
                >
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Privacy Playbook. A project by InfoBank.
          </p>
        </div>
      </div>
    </footer>
  );
}
