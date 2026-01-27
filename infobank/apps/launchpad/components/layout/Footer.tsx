import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-slate-400">
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">LaunchPad</h3>
                        <p className="text-sm leading-relaxed">
                            Your idea. Our tools. Shared ownership.
                            Community-funded InfoBank sites.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/ideas" className="hover:text-slate-50">Browse Ideas</Link></li>
                            <li><Link href="/launched" className="hover:text-slate-50">Launched Sites</Link></li>
                            <li><Link href="/submit" className="hover:text-slate-50">Submit Idea</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Learn</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/how-it-works" className="hover:text-slate-50">How It Works</Link></li>
                            <li><Link href="/about" className="hover:text-slate-50">About</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Legal</h3>
                        <p className="text-sm leading-relaxed">
                            Ownership percentages are illustrative.
                            See terms for full details.
                        </p>
                        <div className="mt-4 text-sm">© {new Date().getFullYear()} Infobank</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
