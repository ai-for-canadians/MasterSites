'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Briefcase, Calculator } from 'lucide-react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'Rate Calculator', href: '/calculator', icon: Calculator },
        { name: 'Guides', href: '/guides' },
        { name: 'Templates', href: '/templates' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-zinc-900 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                            <Briefcase className="w-5 h-5 text-zinc-100" />
                        </div>
                        <div>
                            <div className="text-xl font-black text-zinc-900 tracking-tighter">
                                FREELANCE<span className="text-zinc-400">TOOLKIT</span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-1 text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors uppercase tracking-wider"
                            >
                                {item.icon && <item.icon className="w-4 h-4" />}
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-zinc-600 hover:text-zinc-900"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-2 border-t border-zinc-200">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-base font-bold text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
