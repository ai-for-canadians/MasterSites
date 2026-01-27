import { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'work',
        name: 'Work & Career',
        slug: 'work',
        description: 'Salary negotiations, giving feedback, setting boundaries with bosses.',
        icon: 'Briefcase',
        color: 'blue',
        sortOrder: 1,
    },
    {
        id: 'relationships',
        name: 'Relationships',
        slug: 'relationships',
        description: 'Breakups, DTR (Defining the Relationship), addressing a needs.',
        icon: 'Heart',
        color: 'red',
        sortOrder: 2,
    },
    {
        id: 'family',
        name: 'Family',
        slug: 'family',
        description: 'Holiday boundaries, parenting differences, elder care.',
        icon: 'Home',
        color: 'emerald',
        sortOrder: 3,
    },
    {
        id: 'money',
        name: 'Money',
        slug: 'money',
        description: 'Asking for repayment, splitting bills, financial planning.',
        icon: 'DollarSign',
        color: 'amber',
        sortOrder: 4,
    },
    {
        id: 'social',
        name: 'Social',
        slug: 'social',
        description: 'Declining invites, confronting friends, canceling plans.',
        icon: 'Users',
        color: 'purple',
        sortOrder: 5,
    },
];
