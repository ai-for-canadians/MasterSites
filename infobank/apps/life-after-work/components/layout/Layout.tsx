'use client';

import Link from 'next/link';
import { Sunset, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-amber-50/90 backdrop-blur sticky top-0 z-50 border-b border-amber-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Sunset className="w-8 h-8 text-amber-600" />
                    <span className="text-xl font-bold text-slate-900">Life After Work</span>
                </Link>

                <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
                    <Link href="/retirement" className="hover:text-amber-700">Strategies</Link>
                    <Link href="/calculators" className="hover:text-amber-700">Calculators</Link>
                    <Link href="/community" className="hover:text-amber-700">Community</Link>
                </div>

                <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>
            {mobileMenuOpen && (
                <div className="md:hidden p-4 bg-white border-b border-amber-100 flex flex-col gap-4">
                    <Link href="/retirement" onClick={() => setMobileMenuOpen(false)}>Strategies</Link>
                    <Link href="/calculators" onClick={() => setMobileMenuOpen(false)}>Calculators</Link>
                </div>
            )}
        </header>
    );
}

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-white">
                    <Sunset className="w-6 h-6 text-amber-500" />
                    <span className="font-bold">Life After Work</span>
                </div>
                <div className="text-xs">© {new Date().getFullYear()} Infobank Project. Not financial advice.</div>
            </div>
        </footer>
    );
}
