'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, HeartCrack } from 'lucide-react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'Process', href: '/process' },
        { name: 'Financial', href: '/financial' },
        { name: 'Kids', href: '/children' },
        { name: 'Emotional', href: '/support' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-slate-50/95 backdrop-blur border-b border-slate-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-slate-200 p-2 rounded-full group-hover:bg-slate-300 transition-colors">
                            <HeartCrack className="w-5 h-5 text-slate-700" />
                        </div>
                        <div>
                            <div className="text-lg font-bold text-slate-800 leading-none">
                                Divorce<span className="text-slate-500">Navigator</span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors border-b-2 border-transparent hover:border-slate-900 py-1"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-slate-500 hover:text-slate-900"
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
                    <div className="md:hidden py-4 space-y-2 border-t border-slate-200">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-colors"
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
