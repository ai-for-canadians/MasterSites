import type { Program } from '@/types';

export const programs: Program[] = [
    {
        id: 'patellar-tendinopathy',
        name: 'Jumper\'s Knee Protocol',
        slug: 'jumpers-knee',
        bodyPart: 'knee',
        tagline: 'Fixing anterior knee pain',
        description: 'Evidence-based loading protocol for patellar tendinopathy. Focuses on isometric holds followed by heavy slow resistance.',
        equipmentNeeded: ['Leg extension machine (gym) OR Decline board', 'Weights'],
        contraindications: ['Acute tear', 'Swelling after trauma (see doctor)'],
        lastUpdated: '2025-01-26',
        phases: [
            {
                id: 'phase-1',
                name: 'Analgesic Isometrics',
                slug: 'isometrics',
                weekRange: 'Weeks 1-2',
                description: 'Reduce pain and cortical inhibition. Do this daily before any other activity.',
                goals: ['Reduce pain to <3/10 during load', 'Wake up muscles'],
                exercises: [
                    {
                        id: 'iso-hold',
                        name: 'Spanish Squat Hold',
                        description: 'Hold a mid-squat position with shins vertical.',
                        sets: 5,
                        reps: '1',
                        holdTime: '45 seconds',
                        frequency: '2-3x Daily (6 hours apart)'
                    }
                ]
            },
            {
                id: 'phase-2',
                name: 'Heavy Slow Resistance',
                slug: 'hsr',
                weekRange: 'Weeks 3-12',
                description: 'Remodel the tendon structure with heavy load. 3 seconds up, 3 seconds down.',
                goals: ['Increase tendon stiffness', 'Build strength'],
                exercises: [
                    {
                        id: 'single-leg-squat',
                        name: 'Single Leg Decline Squat',
                        description: 'Slow controlled descent on a decline board/plate.',
                        sets: 3,
                        reps: '15RM -> 6RM',
                        frequency: 'Every other day'
                    }
                ]
            }
        ]
    },
    {
        id: 'low-back-pain',
        name: 'McGill Big 3',
        slug: 'lower-back',
        bodyPart: 'back',
        tagline: 'Stabilize the spine',
        description: 'Core stability protocol not for "abs" but for stiffness. Based on Dr. Stuart McGill\'s research.',
        equipmentNeeded: ['Floor mat'],
        contraindications: ['Radicular pain (sciatica) down leg - consult pro'],
        lastUpdated: '2025-01-26',
        phases: [
            {
                id: 'daily-maintenance',
                name: 'Daily Spine Hygiene',
                slug: 'big-3',
                weekRange: 'Forever',
                description: 'Build endurance in the stabilizers.',
                goals: ['Paint-free movement', 'Core endurance'],
                exercises: [
                    {
                        id: 'curl-up',
                        name: 'Modified Curl-Up',
                        description: 'Hands under low back, lift head/shoulders slightly. Hold.',
                        sets: 3,
                        reps: 'Descending pyramid (6-4-2)',
                        holdTime: '10 seconds',
                        frequency: 'Daily'
                    },
                    {
                        id: 'side-plank',
                        name: 'Side Plank',
                        description: 'On knees or feet. Spine neutral.',
                        sets: 3,
                        reps: 'Descending pyramid (6-4-2)',
                        holdTime: '10 seconds',
                        frequency: 'Daily'
                    },
                    {
                        id: 'bird-dog',
                        name: 'Bird Dog',
                        description: 'Opposite arm/leg extension. Focus on NOT moving the spine.',
                        sets: 3,
                        reps: 'Descending pyramid (6-4-2)',
                        holdTime: '10 seconds',
                        frequency: 'Daily'
                    }
                ]
            }
        ]
    },
    {
        id: 'rotator-cuff',
        name: 'Shoulder Impingement Layout',
        slug: 'shoulder-rehab',
        bodyPart: 'shoulder',
        tagline: 'Open up the subacromial space',
        description: 'Improving scapular mechanics to stop pinching the tendon.',
        equipmentNeeded: ['Resistance bands', 'Light weights'],
        contraindications: ['Cannot lift arm above 90 degrees'],
        lastUpdated: '2025-01-26',
        phases: [
            {
                id: 'phase-1',
                name: 'Scapular Control',
                slug: 'scap-control',
                weekRange: 'Weeks 1-4',
                description: 'Learning to move the shoulder blade.',
                goals: ['Proper movement patterns'],
                exercises: [
                    {
                        id: 'y-t-w',
                        name: 'Y-T-W Raises',
                        description: 'Prone on floor/bench. Raise arms in Y, T, W shapes.',
                        sets: 3,
                        reps: '10-15',
                        frequency: 'Daily'
                    }
                ]
            }
        ]
    }
];
