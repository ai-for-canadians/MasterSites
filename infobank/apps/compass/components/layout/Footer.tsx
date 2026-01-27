export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-4">COMPASS</h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            We aggregate data from the world's most respected institutions to create a clear, comparative view of government performance.
                            Data sources include V-Dem, World Bank, Transparency International, and RSF.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Metrics</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>Democracy Score</li>
                            <li>Corruption Index</li>
                            <li>Equality Gini</li>
                            <li>Development HDI</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>Methodology</li>
                            <li>Data Sources</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Infobank Project. Open Data / Open Source.
                    </div>
                    <div className="text-xs text-slate-500">
                        Last Data Update: January 2024
                    </div>
                </div>
            </div>
        </footer>
    );
}
