import { ProviderGuide, TherapyType } from '@/types';

export const providers: ProviderGuide[] = [
    {
        id: 'psychiatrist',
        name: 'Psychiatrist',
        slug: 'psychiatrist',
        qualifications: 'MD or DO (Medical Doctor)',
        canPrescribe: true,
        bestFor: ['Medication management', 'Severe mental illness', 'Diagnosis'],
        averageCost: '$200 - $500 / session'
    },
    {
        id: 'psychologist',
        name: 'Clinical Psychologist',
        slug: 'psychologist',
        qualifications: 'PhD or PsyD',
        canPrescribe: false, // Generally
        bestFor: ['Psychological testing', 'Diagnosing complex conditions', 'Evidence-based therapy'],
        averageCost: '$150 - $300 / session'
    },
    {
        id: 'social_worker',
        name: 'Licensed Clinical Social Worker (LCSW)',
        slug: 'lcsw',
        qualifications: 'Master\'s Degree (MSW)',
        canPrescribe: false,
        bestFor: ['Talk therapy', 'Connecting to resources', 'Case management'],
        averageCost: '$100 - $200 / session'
    },
    {
        id: 'counselor',
        name: 'Licensed Professional Counselor (LPC/LMHC)',
        slug: 'counselor',
        qualifications: 'Master\'s Degree',
        canPrescribe: false,
        bestFor: ['General talk therapy', 'Relationship issues', 'Stress management'],
        averageCost: '$100 - $200 / session'
    }
];

export const therapies: TherapyType[] = [
    {
        id: 'cbt',
        name: 'Cognitive Behavioral Therapy',
        acronym: 'CBT',
        summary: 'Focuses on changing negative thought patterns to change behavior.',
        bestFor: ['anxiety', 'mood'],
        whatToExpect: 'Structured sessions with homework. Identifying cognitive distortions.'
    },
    {
        id: 'dbt',
        name: 'Dialectical Behavior Therapy',
        acronym: 'DBT',
        summary: 'Teaches skills for emotional regulation, distress tolerance, and mindfulness.',
        bestFor: ['personality', 'trauma'],
        whatToExpect: 'Learning module skills (mindfulness, interpersonal effectiveness, emotion regulation).'
    },
    {
        id: 'emdr',
        name: 'Eye Movement Desensitization and Reprocessing',
        acronym: 'EMDR',
        summary: 'Uses eye movements to help the brain process traumatic memories.',
        bestFor: ['trauma'],
        whatToExpect: 'Recalling memories while following a visual or auditory stimulus.'
    }
];
