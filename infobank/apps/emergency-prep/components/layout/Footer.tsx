export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-400">
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Emergency Prep</h3>
                        <p className="text-sm leading-relaxed">
                            Practical preparedness for realistic scenarios.
                            No bunkers, just common sense.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Power Outages</li>
                            <li>Winter Storms</li>
                            <li>Evacuation Lists</li>
                            <li>Financial Emergency</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Disclaimer</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Information for educational purposes only. Always follow official local authority guidance during emergencies.
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
