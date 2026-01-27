'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Coins } from 'lucide-react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'All Programs', href: '/benefits-navigator/programs' },
        { name: 'Eligibility Quiz', href: '/benefits-navigator/quiz' },
        { name: 'By Province', href: '/benefits-navigator/provinces' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-emerald-50/95 backdrop-blur border-b border-emerald-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/benefits-navigator" className="flex items-center gap-2 group">
                        <Coins className="w-8 h-8 text-emerald-600 group-hover:scale-110 transition-transform" />
                        <div>
                            <div className="text-lg font-bold text-slate-900 tracking-tight leading-none">
                                Canadian<br /><span className="text-emerald-700">Benefits</span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-bold text-slate-600 hover:text-emerald-700 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/benefits-navigator/quiz"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-full transition-colors shadow-sm"
                        >
                            Check Eligibility
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-slate-600 hover:text-emerald-700"
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
                    <div className="md:hidden py-4 space-y-2 border-t border-emerald-100">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-base font-bold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
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
