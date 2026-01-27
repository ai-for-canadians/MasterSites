import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <Shield className="w-16 h-16 text-slate-600 mb-6" />
            <h2 className="text-3xl font-bold text-slate-50 mb-4">You've reached a dead end</h2>
            <p className="text-slate-400 mb-8 max-w-md">
                The page you are looking for has been moved or deleted. In the world of privacy, sometimes things just disappear.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors"
            >
                Return to Safety
            </Link>
        </div>
    );
}
