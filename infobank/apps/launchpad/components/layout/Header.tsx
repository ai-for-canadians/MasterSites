'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'Ideas', href: '/ideas' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Launched', href: '/launched' },
        { name: 'Submit', href: '/submit' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-3">
                        <Rocket className="w-8 h-8 text-purple-400" />
                        <div>
                            <div className="text-xl font-bold text-slate-50">
                                Launch<span className="text-purple-400">Pad</span>
                            </div>
                            <div className="text-xs text-slate-500 hidden sm:block">
                                Community-funded ideas
                            </div>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-slate-300 hover:text-slate-50 font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-slate-400 hover:text-slate-50"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg"
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
