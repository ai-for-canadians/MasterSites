'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Rocket, Briefcase } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { name: 'Playbooks', href: '/playbooks' },
        { name: 'Ventures', href: '/ventures' },
        { name: 'Invest', href: '/invest' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'How It Works', href: '/how-it-works' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-emerald-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-emerald-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-emerald-200">
                            <Rocket className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <div className="text-lg font-bold text-slate-900 leading-none">
                                VentureStudio<span className="text-emerald-600">SMB</span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors ${pathname === item.href
                                        ? 'text-emerald-600 font-bold'
                                        : 'text-slate-500 hover:text-slate-900'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/ventures/new"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
                        >
                            <Briefcase className="w-4 h-4" /> Start a Venture
                        </Link>
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
                    <div className="md:hidden py-4 space-y-2 border-t border-emerald-100 bg-white absolute left-0 right-0 shadow-xl">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-6 py-3 text-base font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/ventures/new"
                            className="block mx-6 mt-4 text-center bg-emerald-600 text-white font-bold py-3 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Start a Venture
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
