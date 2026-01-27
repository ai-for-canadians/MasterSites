export function Footer() {
    return (
        <footer className="bg-white border-t border-zinc-200 py-12 mt-auto font-mono">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-zinc-900 font-black text-sm uppercase tracking-tighter italic">
                        Freelancer Toolkit // V1.0
                    </div>
                    <div className="text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
                        Built for Independent Workers in Canada
                    </div>
                    <div className="text-zinc-500 text-xs">
                        © {new Date().getFullYear()} Infobank Project.
                    </div>
                </div>
            </div>
        </footer>
    );
}
