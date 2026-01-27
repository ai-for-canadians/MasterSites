export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-400">
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Sleep Better</h3>
                        <p className="text-sm leading-relaxed">
                            Evidence-based tools and protocols for optimizing sleep.
                            Research-backed, noise-free.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Sleep Hygiene</li>
                            <li>Environment</li>
                            <li>Supplements</li>
                            <li>Protocols</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Legal</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Not medical advice. Consult your doctor for sleep disorders.
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
