import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <Sparkles className="w-16 h-16 text-slate-600 mb-6" />
            <h2 className="text-3xl font-bold text-slate-50 mb-4">Tool Not Found</h2>
            <p className="text-slate-400 mb-8 max-w-md">
                We rely on real intelligence, but sometimes links break. This page doesn't exist.
            </p>
            <Link
                href="/tools"
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg transition-colors"
            >
                Browse All Tools
            </Link>
        </div>
    );
}
