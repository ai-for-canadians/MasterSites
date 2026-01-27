'use client';

import { useState, useMemo } from 'react';
import { DollarSign, Clock, Umbrella, Banknote } from 'lucide-react';

export function RateCalculator() {
    const [targetIncome, setTargetIncome] = useState(80000);
    const [expenses, setExpenses] = useState(15000);
    const [vacationWeeks, setVacationWeeks] = useState(4);
    const [sickDays, setSickDays] = useState(5);
    const [billablePercentage, setBillablePercentage] = useState(60);

    const results = useMemo(() => {
        const totalNeeds = targetIncome + expenses;
        const workingWeeks = 52 - vacationWeeks;
        const workingDays = (workingWeeks * 5) - sickDays;
        const workingHours = workingDays * 8;
        const billableHours = workingHours * (billablePercentage / 100);

        const hourlyRate = totalNeeds / billableHours;
        const dailyRate = hourlyRate * 8;

        return {
            hourly: Math.round(hourlyRate),
            daily: Math.round(dailyRate),
            billableHours: Math.round(billableHours)
        };
    }, [targetIncome, expenses, vacationWeeks, sickDays, billablePercentage]);

    return (
        <div className="bg-zinc-900 text-white rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Inputs */}
                <div className="p-8 md:p-12 space-y-8 bg-zinc-800/50">
                    <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Target Net Income (Pre-Tax)</label>
                        <div className="flex items-center gap-4">
                            <span className="text-2xl font-bold text-zinc-400">$</span>
                            <input
                                type="number"
                                value={targetIncome}
                                onChange={e => setTargetIncome(Number(e.target.value))}
                                className="bg-transparent text-4xl font-black focus:outline-none w-full border-b border-zinc-700 pb-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Annual Expenses</label>
                            <input
                                type="number"
                                value={expenses}
                                onChange={e => setExpenses(Number(e.target.value))}
                                className="bg-transparent text-xl font-bold border-b border-zinc-700 focus:outline-none w-full py-1"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Vacation Weeks</label>
                            <input
                                type="number"
                                value={vacationWeeks}
                                onChange={e => setVacationWeeks(Number(e.target.value))}
                                className="bg-transparent text-xl font-bold border-b border-zinc-700 focus:outline-none w-full py-1"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Billable %</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    min="20"
                                    max="100"
                                    value={billablePercentage}
                                    onChange={e => setBillablePercentage(Number(e.target.value))}
                                    className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-white"
                                />
                                <span className="text-sm font-bold w-10">{billablePercentage}%</span>
                            </div>
                            <p className="text-[10px] text-zinc-500 mt-1">Admin/Sales time</p>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="p-8 md:p-12 bg-zinc-900 flex flex-col justify-center">
                    <div className="mb-12">
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">You should charge:</div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-7xl font-black text-white">${results.hourly}</span>
                            <span className="text-2xl font-bold text-zinc-500">/ hour</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-800">
                        <div>
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Day Rate</div>
                            <div className="text-2xl font-black text-white">${results.daily}</div>
                        </div>
                        <div>
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Billable Hours / Yr</div>
                            <div className="text-2xl font-black text-white">{results.billableHours}h</div>
                        </div>
                    </div>

                    <div className="mt-12 bg-zinc-800/30 p-4 rounded-xl flex items-center gap-4">
                        <Umbrella className="w-5 h-5 text-zinc-500" />
                        <p className="text-[10px] text-zinc-400 font-medium leading-tight uppercase tracking-wide">
                            This includes your time off, sick days, and non-billable overhead.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
