import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <Compass className="w-16 h-16 text-slate-600 mb-6" />
            <h2 className="text-3xl font-bold text-slate-50 mb-4">Path Not Found</h2>
            <p className="text-slate-400 mb-8 max-w-md">
                We couldn't find the page you're looking for. Let's get you back on track.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold rounded-lg transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
