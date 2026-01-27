export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-400">
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Kitchen Confidence</h3>
                        <p className="text-sm leading-relaxed">
                            Liberating you from recipes.
                            Master the heat, salt, and acid to cook anything.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Learn</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Core Techniques</li>
                            <li>Flavor Theory</li>
                            <li>Pantry Essentials</li>
                            <li>Meal Frameworks</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-semibold mb-4">Philosophy</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            "If you know a recipe, you can cook one dish. If you know a technique, you can cook a thousand."
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
