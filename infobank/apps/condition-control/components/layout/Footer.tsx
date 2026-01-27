export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-400">
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Condition Control</h3>
                        <p className="text-sm leading-relaxed">
                            Empowering patients with evidence-based lifestyle tools.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Disclaimer</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            This site provides information, not medical advice. Always consult your doctor before changing your diet, exercise, or medication regimen.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Metabolic Health</li>
                            <li>Cardiovascular</li>
                            <li>Chronic Pain</li>
                            <li>Gut Health</li>
                        </ul>
                        <div className="text-sm mt-4">
                            © {new Date().getFullYear()} Infobank. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
