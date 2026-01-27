import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-slate-400">
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Impact Scorecard</h3>
                        <p className="text-sm leading-relaxed">
                            Transparency ratings for nonprofits and companies.
                            We analyze what actually matters, not just marketing claims.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Leaderboards</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/nonprofits" className="hover:text-slate-50 transition-colors">Nonprofits</Link></li>
                            <li><Link href="/companies" className="hover:text-slate-50 transition-colors">Companies</Link></li>
                            <li><Link href="/bcorps" className="hover:text-slate-50 transition-colors">B Corps</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">About</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/methodology" className="hover:text-slate-50 transition-colors">Methodology</Link></li>
                            <li><Link href="/submit" className="hover:text-slate-50 transition-colors">Submit Organization</Link></li>
                            <li><Link href="/about" className="hover:text-slate-50 transition-colors">About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Disclaimer</h3>
                        <p className="text-sm leading-relaxed">
                            Ratings are based on publicly available information and third-party sources.
                            Not financial or investment advice.
                        </p>
                        <div className="mt-4 text-sm">
                            © {new Date().getFullYear()} Infobank
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
