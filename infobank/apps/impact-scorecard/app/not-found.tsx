import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="bg-slate-900 min-h-[60vh] flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-slate-50 mb-4">404</h1>
                <p className="text-xl text-slate-400 mb-8">Organization not found</p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                    <Home className="w-5 h-5" />
                    Back to Leaderboard
                </Link>
            </div>
        </div>
    );
}
