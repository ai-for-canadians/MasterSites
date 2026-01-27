export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-400">
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Movement Rx</h3>
                        <p className="text-sm leading-relaxed">
                            Standardized physical therapy protocols.
                            Treat the cause, not just the symptom.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Protocols</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Knee Pain</li>
                            <li>Low Back Pain</li>
                            <li>Shoulder Rehab</li>
                            <li>Neck Stiffness</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Medical Disclaimer</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Exercises are for educational purposes. If you experience sharp pain, stop immediately and consult a professional.
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
