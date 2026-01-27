export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-400">
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Gut Health Deep Dive</h3>
                        <p className="text-sm leading-relaxed">
                            Evidence-based gut health information.
                            Making sense of the microbiome, probiotics, and digestive conditions.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Digestive Conditions</li>
                            <li>Probiotic Database</li>
                            <li>Diet Protocols</li>
                            <li>Testing Guide</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Legal</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Not medical advice. Consult your gastroenterologist before starting any new treatment.
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
