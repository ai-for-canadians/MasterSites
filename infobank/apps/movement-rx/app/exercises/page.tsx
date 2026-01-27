import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { programs } from '@/lib/data/programs';

export default function ExercisesPage() {
    const allExercises = programs.flatMap(p =>
        p.phases.flatMap(phase => phase.exercises.map(ex => ({ ...ex, programName: p.name })))
    );

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Exercise Index</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Individual movements sorted by name.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allExercises.map((ex, idx) => (
                            <div key={`${ex.id}-${idx}`} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                <h3 className="font-bold text-white mb-2">{ex.name}</h3>
                                <p className="text-sm text-slate-400 mb-4">{ex.description}</p>
                                <div className="text-xs text-indigo-400 font-medium">
                                    Part of: {ex.programName}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
