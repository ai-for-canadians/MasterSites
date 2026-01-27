'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Landmark, TrendingUp } from 'lucide-react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'Accounts', href: '/accounts' },
        { name: 'Investments', href: '/investments' },
        { name: 'Getting Started', href: '/start' },
        { name: 'Brokerages', href: '/brokerages' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-zinc-900 p-1.5 rounded-lg group-hover:bg-indigo-600 transition-colors">
                            <Landmark className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <div className="text-lg font-bold text-zinc-900 tracking-tight leading-none">
                                Investing<span className="text-zinc-500">Basics</span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/start"
                            className="bg-zinc-900 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded transition-colors text-sm"
                        >
                            Start Here
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-zinc-500 hover:text-zinc-900"
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
                                className="block px-4 py-3 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors"
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
