export function Footer() {
    return (
        <footer className="bg-emerald-900 text-emerald-100 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold text-white mb-4">Canadian Benefits Navigator</h3>
                        <p className="text-sm leading-relaxed max-w-sm opacity-80">
                            Simplifying access to Canada's social safety net. We aggregate data on federal and provincial programs to help you find what you qualify for.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4 text-sm uppercase">Popular Categories</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>Family & Children</li>
                            <li>Seniors</li>
                            <li>Housing</li>
                            <li>Health & Dental</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4 text-sm uppercase">Disclaimer</h4>
                        <p className="text-xs opacity-60 leading-relaxed">
                            We are an information aggregator, not a government agency. Always verify eligibility and details on the official government application portals linked.
                        </p>
                        <p className="text-xs mt-4 opacity-40">
                            © {new Date().getFullYear()} Infobank Project.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
