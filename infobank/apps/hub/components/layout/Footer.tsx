import Link from 'next/link';
import { categories } from '@/lib/data/categories';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-50 mb-4">InfoBank</h3>
            <p className="text-slate-400 text-sm">
              Real information for real life. Evidence-based resources for
              Canadians.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-50 mb-4">
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/sites?category=${category.slug}`}
                    className="text-sm text-slate-400 hover:text-slate-50 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-50 mb-4">
              InfoBank
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-400 hover:text-slate-50 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/sites"
                  className="text-sm text-slate-400 hover:text-slate-50 transition-colors"
                >
                  All Sites
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-50 mb-4">
              Connect
            </h4>
            <p className="text-sm text-slate-400">
              Built for Canadians who value evidence over hype.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} InfoBank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
