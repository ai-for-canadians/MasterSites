export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-400">
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Longevity Guide</h3>
                        <p className="text-sm leading-relaxed">
                            Evidence-based information to help you live longer and healthier.
                            Cutting through the hype with scientific rigor.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Lifestyle</li>
                            <li>Nutrition</li>
                            <li>Supplements</li>
                            <li>Medications</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Legal</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Not medical advice. Consult your physician before starting any new protocol.
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
