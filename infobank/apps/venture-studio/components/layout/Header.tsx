'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Rocket, Plus, LayoutDashboard, Component, Sparkles } from 'lucide-react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // In a real app, this would check if user is logged in
    const isLoggedIn = true;

    const navigation = [
        { name: 'Playbooks', href: '/playbooks', icon: Component },
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    ];

    return (
        <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-gradient-to-tr from-purple-600 to-pink-600 p-2 rounded-lg group-hover:scale-105 transition-transform">
                            <Rocket className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <div className="text-lg font-bold text-white tracking-tight">
                                VentureStudio
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            >
                                <item.icon className="w-4 h-4" />
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/dashboard"
                            className="bg-zinc-100 hover:bg-white text-zinc-900 font-semibold text-sm py-2 px-4 rounded-full transition-colors flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            New Venture
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-zinc-400 hover:text-white"
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
                    <div className="md:hidden py-4 space-y-2 border-t border-zinc-800">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white rounded-lg transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-3 px-4 py-3 text-base font-bold text-purple-400 hover:bg-zinc-900 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Plus className="w-5 h-5" />
                            New Venture
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
