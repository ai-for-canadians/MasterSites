import { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'work',
        name: 'Work & Career',
        slug: 'work',
        description: 'Salary negotiations, giving feedback, setting boundaries with bosses.',
        icon: 'Briefcase',
    },
    {
        id: 'relationships',
        name: 'Relationships',
        slug: 'relationships',
        description: 'Breakups, DTR (Defining the Relationship), addressing neds.',
        icon: 'Heart',
    },
    {
        id: 'family',
        name: 'Family',
        slug: 'family',
        description: 'Holiday boundaries, parenting differences, elder care.',
        icon: 'Home',
    },
    {
        id: 'money',
        name: 'Money',
        slug: 'money',
        description: 'Asking for repayment, splitting bills, financial planning.',
        icon: 'DollarSign',
    },
    {
        id: 'social',
        name: 'Social',
        slug: 'social',
        description: 'Declining invites, confronting friends, canceling plans.',
        icon: 'Users',
    },
];
