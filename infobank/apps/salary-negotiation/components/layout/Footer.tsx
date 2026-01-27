export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-400">
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Salary Negotiation</h3>
                        <p className="text-sm leading-relaxed">
                            Stop leaving money on the table.
                            Evidence-based strategies and scripts for Canadian professionals.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Scripts Library</li>
                            <li>Negotiation Strategies</li>
                            <li>Salary Data</li>
                            <li>Research</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Legal</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Not legal or financial advice. We just help you ask for more.
                        </p>
                        <div className="text-sm">
                            © {new Date().getFullYear()} Infobank. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
