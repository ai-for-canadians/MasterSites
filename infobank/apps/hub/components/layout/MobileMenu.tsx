'use client';

import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-slate-800 bg-slate-900">
      <nav className="px-4 py-4 space-y-4">
        <Link
          href="/"
          onClick={onClose}
          className="block text-slate-400 hover:text-slate-50 font-medium transition-colors py-2"
        >
          Home
        </Link>
        <Link
          href="/sites"
          onClick={onClose}
          className="block text-slate-400 hover:text-slate-50 font-medium transition-colors py-2"
        >
          Sites
        </Link>
        <Link
          href="/about"
          onClick={onClose}
          className="block text-slate-400 hover:text-slate-50 font-medium transition-colors py-2"
        >
          About
        </Link>
      </nav>
    </div>
  );
}
