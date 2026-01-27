'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'Timeline', href: '/timeline' },
        { name: 'Checklist', href: '/checklist' },
        { name: 'Provinces', href: '/provinces' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-red-50/95 backdrop-blur border-b border-red-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="text-2xl font-black text-red-600 tracking-tighter">
                            NEW<span className="text-slate-900">COMER</span>
                        </div>
                        <div className="h-6 w-[1px] bg-red-200 mx-1"></div>
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-widest leading-none">
                            Canada<br />Guide
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-bold text-slate-600 hover:text-red-600 transition-colors uppercase tracking-wide"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-slate-600 hover:text-red-600"
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
                    <div className="md:hidden py-4 space-y-2 border-t border-red-100">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-base font-bold text-slate-700 hover:bg-white hover:text-red-600 rounded-lg transition-colors"
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
