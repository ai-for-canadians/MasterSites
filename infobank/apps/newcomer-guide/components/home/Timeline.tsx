import Link from 'next/link';
import { Task } from '@/types';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface TimelineSectionProps {
    title: string;
    tasks: Task[];
    color: string;
}

export function TimelineSection({ title, tasks, color }: TimelineSectionProps) {
    if (tasks.length === 0) return null;

    return (
        <div className="relative pl-8 md:pl-0">
            <div className={`
          hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 
          ${color === 'red' ? 'bg-red-200' : 'bg-slate-200'}
       `} />

            <div className="md:text-center mb-12 relative z-10">
                <span className={`
             inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest border shadow-sm
             ${color === 'red' ? 'bg-red-100 text-red-700 border-red-200' : 'bg-white text-slate-600 border-slate-200'}
          `}>
                    {title}
                </span>
            </div>

            <div className="space-y-12">
                {tasks.map((task, i) => (
                    <div key={task.id} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                        {/* Content */}
                        <div className="flex-1 w-full md:w-auto">
                            <Link href={`/tasks/${task.slug}`} className="block group bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 rounded-xl p-6 transition-all">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-red-700 transition-colors">
                                        {task.title}
                                    </h3>
                                    {task.importance === 'critical' && (
                                        <AlertCircle className="w-5 h-5 text-red-500 fill-red-50" />
                                    )}
                                </div>
                                <p className="text-slate-600 text-sm mb-4">
                                    {task.description}
                                </p>
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {task.estimatedTime}
                                    </span>
                                    {task.provincialVariations && (
                                        <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                                            Provincial Rules Apply
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </div>

                        {/* Dot */}
                        <div className="hidden md:flex flex-shrink-0 w-8 h-8 rounded-full bg-white border-4 border-red-100 items-center justify-center relative z-10">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        </div>

                        {/* Spacer for alternating layout */}
                        <div className="hidden md:block flex-1" />

                    </div>
                ))}
            </div>
        </div>
    );
}
