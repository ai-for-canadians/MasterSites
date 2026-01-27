import { Condition } from '@/types';

export const conditions: Condition[] = [
    {
        id: 'depression',
        name: 'Major Depressive Disorder',
        slug: 'depression',
        category: 'mood',
        summary: 'Persistent feelings of sadness, loss of interest, and lack of energy.',
        description: 'Depression is more than just feeling sad. It is a serious mental health condition that affects how you feel, think, and handle daily activities.',
        symptoms: [
            'Persistent sad, anxious, or "empty" mood',
            'Loss of interest in hobbies/activities',
            'Fatigue or decreased energy',
            'Difficulty sleeping or oversleeping',
            'Changes in appetite/weight'
        ],
        commonTreatments: ['SSRI/SNRI Antidepressants', 'CBT', 'Interpersonal Therapy'],
        firstSteps: [
            'Schedule an appointment with your PCP to rule out physical causes',
            'Reach out to a trusted friend or family member',
            'Call 988 if experiencing crisis'
        ],
        professionalToSee: 'Therapist'
    },
    {
        id: 'gad',
        name: 'Generalized Anxiety Disorder (GAD)',
        slug: 'anxiety',
        category: 'anxiety',
        summary: 'Excessive, uncontrollable worry about everyday issues.',
        description: 'People with GAD experience persistent and excessive anxiety about a number of different things, such as health, work, social interactions, and everyday routine circumstances.',
        symptoms: [
            'Feeling restless or on edge',
            'Being easily fatigued',
            'Difficulty concentrating',
            'Irritability',
            'Muscle tension'
        ],
        commonTreatments: ['CBT', 'SSRI Antidepressants', 'Mindfulness'],
        firstSteps: [
            'Focus on sleep hygiene',
            'Reduce caffeine intake',
            'Practice deep breathing exercises'
        ],
        professionalToSee: 'Therapist'
    },
    {
        id: 'adhd',
        name: 'ADHD (Adult)',
        slug: 'adhd',
        category: 'developmental',
        summary: 'Difficulty with attention, hyperactivity, and impulsivity.',
        description: 'Adult ADHD can lead to unstable relationships, poor work performance, and low self-esteem. It often looks different than in children.',
        symptoms: [
            'Impulsiveness',
            'Disorganization and problems prioritizing',
            'Poor time management skills',
            'Problems focusing on a task',
            'Restlessness'
        ],
        commonTreatments: ['Stimulants (Adderall, Vyvanse)', 'Non-stimulants', 'Coaching'],
        firstSteps: [
            'Take a validated self-screener (ASRS)',
            'Find a specialist for diagnosis (general GPs may miss it)'
        ],
        professionalToSee: 'Psychiatrist'
    },
    {
        id: 'bipolar',
        name: 'Bipolar Disorder',
        slug: 'bipolar',
        category: 'mood',
        summary: 'Extreme mood swings including emotional highs (mania) and lows (depression).',
        description: 'Bipolar disorder causes shifts in mood, energy, activity levels, and the ability to carry out day-to-day tasks.',
        symptoms: [
            'Mania: Increased energy, euphoria, risky behavior, little sleep',
            'Depression: Hopelessness, low energy, sleep problems',
            'Mixed episodes'
        ],
        commonTreatments: ['Mood stabilizers', 'Antipsychotics', 'Psychotherapy'],
        firstSteps: [
            'Track moods in a journal',
            'Maintain a consistent sleep schedule (critical)',
            'Seek psychiatric evaluation'
        ],
        professionalToSee: 'Psychiatrist'
    },
    {
        id: 'ptsd',
        name: 'PTSD',
        slug: 'ptsd',
        category: 'trauma',
        summary: 'Reaction to a traumatic event involving flashbacks and avoidance.',
        description: 'PTSD can develop after experiencing or witnessing a terrifying event. It can last for months or years.',
        symptoms: [
            'Intrusive memories / Flashbacks',
            'Avoidance of triggers',
            'Negative changes in thinking/mood',
            'Hyperarousal (always on guard)'
        ],
        commonTreatments: ['EMDR', 'Trauma-focused CBT', 'Medication'],
        firstSteps: [
            'Ensure immediate safety',
            'Find a trauma-informed therapist',
            'Grounding techniques'
        ],
        professionalToSee: 'Therapist'
    },
    {
        id: 'ocd',
        name: 'Obsessive-Compulsive Disorder',
        slug: 'ocd',
        category: 'anxiety',
        summary: 'Uncontrollable, recurring thoughts (obsessions) and behaviors (compulsions).',
        description: 'OCD involves a cycle of obsessions (fears) and compulsions (rituals done to relieve the fear). It is not just "being neat".',
        symptoms: [
            'Fear of contamination or making a mistake',
            'Need for symmetry',
            'Unwanted forbidden thoughts',
            'Compulsive checking, washing, or counting'
        ],
        commonTreatments: ['ERP (Exposure and Response Prevention)', 'SSRIs'],
        firstSteps: [
            'Do NOT rely on reassurance (it feeds the cycle)',
            'Find an OCD specialist (general talk therapy can make it worse)'
        ],
        professionalToSee: 'Therapist'
    }
];
