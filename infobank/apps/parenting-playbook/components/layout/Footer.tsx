export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-slate-500">
                    <h3 className="font-bold text-indigo-900 mb-2">Parenting Playbook</h3>
                    <p className="text-sm max-w-md mx-auto mb-8">
                        Our mission is to replace guilt with evidence. We summarize scientific consensus on child development so you can make informed decisions.
                    </p>
                    <div className="text-xs">
                        © {new Date().getFullYear()} Infobank Project. Medical Warning: This is information, not medical advice.
                    </div>
                </div>
            </div>
        </footer>
    );
}
