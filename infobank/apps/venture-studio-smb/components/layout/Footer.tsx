export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-4">Venture Studio SMB</h3>
                        <p className="max-w-md text-sm leading-relaxed mb-6">
                            Democratizing local business ownership through AI automation.
                            We believe communities should own the businesses that serve them.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/playbooks" className="hover:text-emerald-400">Playbooks</a></li>
                            <li><a href="/ventures" className="hover:text-emerald-400">Active Ventures</a></li>
                            <li><a href="/invest" className="hover:text-emerald-400">Invest</a></li>
                            <li><a href="/how-it-works" className="hover:text-emerald-400">How It Works</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Transparency</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/transparency" className="hover:text-emerald-400">Financial Reports</a></li>
                            <li><a href="/governance" className="hover:text-emerald-400">Governance</a></li>
                            <li><a href="/terms" className="hover:text-emerald-400">Terms of Service</a></li>
                            <li><a href="/risks" className="hover:text-emerald-400">Risk Disclosure</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Infobank Project. All rights reserved.</p>
                    <p className="opacity-50">Regulated under Canadian Community Investment Co-operative statutes.</p>
                </div>
            </div>
        </footer>
    );
}
