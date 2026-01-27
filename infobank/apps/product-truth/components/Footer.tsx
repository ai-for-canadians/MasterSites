import Link from 'next/link';
import { Shield, Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-emerald-500" />
              <span className="text-xl font-bold text-slate-50">
                Product<span className="text-emerald-500">Truth</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Your trusted source for transparent product ingredient analysis.
              Make informed decisions about the products you use every day.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-slate-400 hover:text-emerald-500 text-sm transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/ingredients" className="text-slate-400 hover:text-emerald-500 text-sm transition-colors">
                  Ingredients Database
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-slate-400 hover:text-emerald-500 text-sm transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-emerald-500 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-slate-400 hover:text-emerald-500 text-sm transition-colors">
                  Our Methodology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-emerald-500 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} ProductTruth. All rights reserved. Information provided for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
