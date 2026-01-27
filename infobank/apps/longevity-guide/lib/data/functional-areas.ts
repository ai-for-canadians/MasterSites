import type { FunctionalAreaGuide } from '@/types';

export const functionalAreas: FunctionalAreaGuide[] = [
    {
        id: 'physical',
        name: 'Physical Function',
        slug: 'physical',
        icon: 'Dumbbell',
        description: 'Strength, mobility, balance, and the ability to perform daily activities without limitation. Physical function is the foundation of independence.',
        declineTimeline: 'Muscle mass peaks at ~30, declines ~3-5% per decade after 30, accelerates after 60',
        metrics: [
            {
                name: 'Grip Strength',
                description: 'Correlates with overall strength and mortality',
                howToMeasure: 'Handheld dynamometer (or dead hang time as proxy)',
                targetRange: 'Men: >40kg, Women: >25kg',
            },
            {
                name: 'Leg Strength',
                description: 'Leg press or squat relative to body weight',
                howToMeasure: 'Leg press 1.5x bodyweight or goblet squat bodyweight',
                targetRange: 'Ability to stand from chair without hands',
            },
            {
                name: 'Gait Speed',
                description: 'Walking speed over 4 meters; strong mortality predictor',
                howToMeasure: 'Time to walk 4 meters at normal pace',
                targetRange: '>1.0 m/s (ideally >1.2 m/s)',
            },
            {
                name: 'Balance',
                description: 'Single-leg stand duration',
                howToMeasure: 'Stand on one leg with eyes open, then closed',
                targetRange: '>30 seconds eyes open, >10 seconds eyes closed',
            },
        ],
        keyInterventions: ['resistance-training', 'zone-2-training', 'creatine', 'balance-training'],
    },
    {
        id: 'cognitive',
        name: 'Cognitive Function',
        slug: 'cognitive',
        icon: 'Brain',
        description: 'Memory, processing speed, executive function, and the ability to learn new things. Cognitive decline is not inevitable—lifestyle factors have major impact.',
        declineTimeline: 'Processing speed peaks at ~18-25, but wisdom/vocabulary increase with age. Pathological decline typically starts 50s-60s',
        metrics: [
            {
                name: 'Memory',
                description: 'Short-term and long-term recall ability',
                howToMeasure: 'Formal testing (MoCA) or apps like Cambridge Brain Sciences',
                targetRange: 'MoCA score ≥26/30',
            },
            {
                name: 'Processing Speed',
                description: 'How quickly you can process and respond to information',
                howToMeasure: 'Reaction time tests, Stroop test',
                targetRange: 'Reaction time <300ms',
            },
            {
                name: 'Executive Function',
                description: 'Planning, decision-making, impulse control',
                howToMeasure: 'Trail Making Test, Wisconsin Card Sort',
            },
        ],
        keyInterventions: ['zone-2-training', 'sleep-optimization', 'omega-3', 'social-engagement'],
    },
    {
        id: 'metabolic',
        name: 'Metabolic Health',
        slug: 'metabolic',
        icon: 'Flame',
        description: 'Insulin sensitivity, glucose regulation, and metabolic flexibility. Metabolic dysfunction underlies most chronic diseases of aging.',
        declineTimeline: 'Insulin sensitivity decreases with age, accelerated by inactivity and poor diet. Prediabetes often starts in 40s',
        metrics: [
            {
                name: 'Fasting Glucose',
                description: 'Blood sugar after overnight fast',
                howToMeasure: 'Standard blood test',
                targetRange: '<90 mg/dL (optimal), <100 mg/dL (acceptable)',
            },
            {
                name: 'HbA1c',
                description: '3-month average blood sugar',
                howToMeasure: 'Standard blood test',
                targetRange: '<5.5% (optimal), <5.7% (acceptable)',
            },
            {
                name: 'Fasting Insulin',
                description: 'Insulin level after overnight fast',
                howToMeasure: 'Blood test (not always included in standard panels)',
                targetRange: '<7 µIU/mL',
            },
            {
                name: 'Triglyceride/HDL Ratio',
                description: 'Proxy for insulin resistance',
                howToMeasure: 'Calculate from lipid panel',
                targetRange: '<1.5',
            },
        ],
        keyInterventions: ['zone-2-training', 'resistance-training', 'intermittent-fasting', 'caloric-restriction'],
    },
    {
        id: 'cardiovascular',
        name: 'Cardiovascular Health',
        slug: 'cardiovascular',
        icon: 'Heart',
        description: 'Heart function, blood vessel health, and aerobic capacity. Cardiovascular disease remains the #1 killer—but is largely preventable.',
        declineTimeline: 'VO2max declines ~10% per decade after 30 without intervention. Arterial stiffness increases with age',
        metrics: [
            {
                name: 'VO2max',
                description: 'Maximum oxygen uptake; #1 predictor of all-cause mortality',
                howToMeasure: 'Formal lab test or estimate from 12-min run/walk test',
                targetRange: 'Above average for age (ideally top 25%)',
            },
            {
                name: 'Resting Heart Rate',
                description: 'Heart rate at complete rest',
                howToMeasure: 'Measure first thing in morning before rising',
                targetRange: '<60 bpm (athletes may be much lower)',
            },
            {
                name: 'Blood Pressure',
                description: 'Force of blood against artery walls',
                howToMeasure: 'Home BP monitor, multiple readings',
                targetRange: '<120/80 mmHg',
            },
            {
                name: 'ApoB',
                description: 'Number of atherogenic particles (better than LDL)',
                howToMeasure: 'Blood test (request specifically)',
                targetRange: '<90 mg/dL (ideally <60-70)',
            },
        ],
        keyInterventions: ['zone-2-training', 'omega-3', 'sauna', 'sleep-optimization'],
    },
    {
        id: 'bone',
        name: 'Bone Health',
        slug: 'bone',
        icon: 'Bone',
        description: 'Bone density and fracture risk. Hip fractures in elderly have ~20% one-year mortality. Prevention starts decades before.',
        declineTimeline: 'Peak bone mass at ~30. Women lose up to 20% in first 5-7 years post-menopause. Men decline more gradually',
        metrics: [
            {
                name: 'Bone Mineral Density (DEXA)',
                description: 'T-score comparing to young adult peak',
                howToMeasure: 'DEXA scan at hip and spine',
                targetRange: 'T-score > -1.0',
            },
            {
                name: 'FRAX Score',
                description: '10-year fracture probability',
                howToMeasure: 'Online calculator with clinical risk factors',
                targetRange: '<10% major osteoporotic fracture risk',
            },
        ],
        keyInterventions: ['resistance-training', 'vitamin-d3', 'calcium', 'balance-training'],
    },
    {
        id: 'sensory',
        name: 'Sensory Health',
        slug: 'sensory',
        icon: 'Eye',
        description: 'Vision and hearing preservation. Sensory decline significantly impacts quality of life and is linked to cognitive decline.',
        declineTimeline: 'Presbyopia (near vision loss) typically starts at 40. Hearing loss begins earlier than most realize (often 30s)',
        metrics: [
            {
                name: 'Visual Acuity',
                description: 'Sharpness of vision',
                howToMeasure: 'Standard eye exam',
                targetRange: '20/20 corrected',
            },
            {
                name: 'Hearing',
                description: 'Ability to hear across frequency range',
                howToMeasure: 'Audiogram',
                targetRange: '<25 dB hearing level across speech frequencies',
            },
            {
                name: 'Intraocular Pressure',
                description: 'Glaucoma screening',
                howToMeasure: 'Tonometry during eye exam',
                targetRange: '<21 mmHg',
            },
        ],
        keyInterventions: ['omega-3', 'lutein-zeaxanthin', 'hearing-protection'],
    },
];

export function getFunctionalArea(slug: string): FunctionalAreaGuide | undefined {
    return functionalAreas.find(a => a.slug === slug);
}
