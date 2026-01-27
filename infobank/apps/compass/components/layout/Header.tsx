'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Compass, BarChart2, Globe } from 'lucide-react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'Leaderboard', href: '/leaderboard' },
        { name: 'Compare', href: '/compare' },
        { name: 'Methodology', href: '/methodology' },
        { name: 'About', href: '/about' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Compass className="w-8 h-8 text-sky-500" />
                        <div>
                            <div className="text-xl font-bold text-slate-50 tracking-tight">
                                COMPASS
                            </div>
                            <div className="text-[10px] uppercase tracking-widest text-slate-400 hidden sm:block">
                                Global Governance Index
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wide"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-slate-400 hover:text-white"
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
                    <div className="md:hidden py-4 space-y-2 border-t border-slate-800">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-white rounded-lg transition-colors"
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
