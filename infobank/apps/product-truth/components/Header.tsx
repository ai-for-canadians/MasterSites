'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Package, Droplet, List } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Shield },
    { href: '/products', label: 'Products', icon: Package },
    { href: '/ingredients', label: 'Ingredients', icon: Droplet },
    { href: '/categories', label: 'Categories', icon: List },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/75">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-emerald-500" />
            <span className="text-xl font-bold text-slate-50">
              Product<span className="text-emerald-500">Truth</span>
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-emerald-500 ${
                    isActive ? 'text-emerald-500' : 'text-slate-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
