import { ConversationTemplate } from '@/types';

export const conversations: ConversationTemplate[] = [
    {
        id: 'asking-raise',
        title: 'Asking for a Raise',
        slug: 'asking-for-raise',
        categoryId: 'work',
        summary: 'How to request a salary increase based on performance and market value.',
        difficulty: 'High',
        riskLevel: 'Medium',
        whatToPrepare: [
            'List of accomplishments from the past 6-12 months',
            'Market research on salary ranges for your role',
            'Specific number or range you are asking for',
            'Plan B if they say no (e.g., more equity, benefits)'
        ],
        openingLines: [
            "I'd like to schedule some time to review my performance and compensation.",
            "I've loved working on [Project X], and I'd like to discuss my future at the company and my compensation."
        ],
        scripts: [
            {
                label: 'The Evidence-Based Approach',
                tone: 'assertive',
                content: "Over the past year, I've taken on [Responsibilities A, B, C] which have led to [Result X]. Based on my research, the market rate for this level of contribution is [Range]. I'd like to adjust my salary to [Amount] to reflect this."
            },
            {
                label: 'The Collaborative Approach',
                tone: 'collaborative',
                content: "I'm really committed to this team. I've been looking at my contributions compared to the market, and I believe my current salary is below market value. I'd love to work together to bring my compensation in line with my performance."
            }
        ],
        commonObjections: [
            {
                objection: "We don't have the budget right now.",
                response: "I understand budgets are tight. Can we agree on a timeline for when we can revisit this? Or are there other levers we can pull, like a bonus or equity?"
            },
            {
                objection: "You're not ready for that level yet.",
                response: "I appreciate the feedback. Can you be specific about what milestones I need to hit to get to that level, and can we set a review date for 3 months from now?"
            }
        ],
        tips: [
            'Practice with a friend beforehand.',
            'Don\'t make it about your personal needs (rent, bills), but about your value.',
            'Silence is powerful. State your number and wait.'
        ]
    },
    {
        id: 'declining-work',
        title: 'Declining Additional Work',
        slug: 'declining-additional-work',
        categoryId: 'work',
        summary: 'Saying no to new tasks when you are already at capacity.',
        difficulty: 'Medium',
        riskLevel: 'Medium',
        whatToPrepare: [
            'Current project list and deadlines',
            'Clear understanding of your priorities'
        ],
        openingLines: [
            "Thanks for thinking of me for this.",
            "I'd love to help, but let's look at my current bandwidth."
        ],
        scripts: [
            {
                label: 'The "Yes, If" Approach',
                tone: 'collaborative',
                content: "I can take this on, but I'd need to de-prioritize [Project A] to hit the deadline. Which one is higher priority for you?"
            },
            {
                label: 'The Clear No',
                tone: 'firm',
                content: "My plate is fully booked with [Project A] and [Project B] right now, so I can't give this new project the attention it needs. I can arguably pick it up next week, or perhaps [Colleague] has capacity?"
            }
        ],
        commonObjections: [
            {
                objection: "It will just take a few minutes.",
                response: "In my experience, these tasks usually require deep focus. I want to make sure I deliver quality work on my current priorities."
            },
            {
                objection: "Everyone is busy, we just need to push through.",
                response: "I understand, but if I add this, the quality of [Critical Project] will suffer. I want to protect that deliverable."
            }
        ],
        tips: [
            'Offer an alternative solution if possible.',
            'Don\'t over-apologize.',
            'Be visible about your current workload.'
        ]
    },
    {
        id: 'breakup',
        title: 'Breaking Up with Someone',
        slug: 'breaking-up',
        categoryId: 'relationships',
        summary: 'Ending a romantic relationship with kindness and clarity.',
        difficulty: 'High',
        riskLevel: 'High',
        whatToPrepare: [
            'Choose a private, neutral place',
            'Know your "why" (but keep it simple)',
            'Plan for afterwards (support for yourself)'
        ],
        openingLines: [
            "I need to talk to you about us.",
            "This is really hard to say, but I've been doing some thinking."
        ],
        scripts: [
            {
                label: 'Direct and Kind',
                tone: 'empathetic',
                content: "I care about you, but I've realized that this relationship isn't working for me anymore. I don't see a future together, and it's not fair to either of us to continue when I feel this way."
            },
            {
                label: 'The "Different Paths" Explanation',
                tone: 'neutral',
                content: "I've realized our values/goals are moving in different directions. I need to be on my own right now to figure out what I want."
            }
        ],
        commonObjections: [
            {
                objection: "But we can fix it! Give me another chance.",
                response: "I know this is painful, but my decision is final. I've thought about this a lot and I know it's the right choice for me."
            },
            {
                objection: "Is there someone else?",
                response: "This is about us and how I'm feeling about this relationship."
            }
        ],
        tips: [
            'Use "I" statements ("I feel", "I need").',
            'Avoid blaming or listing their faults.',
            'Make it a clean break—don\'t offer false hope of staying friends immediately.'
        ]
    },
    {
        id: 'pay-back-money',
        title: 'Asking a Friend to Pay You Back',
        slug: 'asking-friend-pay-back',
        categoryId: 'money',
        summary: 'Recovering a loan without ruining the friendship.',
        difficulty: 'Medium',
        riskLevel: 'Medium',
        whatToPrepare: [
            'Exact amount owed',
            'Date it was lent/details',
            'Easy payment method (Venmo link, etc.)'
        ],
        openingLines: [
            "Hey! Just doing my monthly budget reviews.",
            "Quick reminder about that dinner last week."
        ],
        scripts: [
            {
                label: 'Casual Nudge',
                tone: 'neutral',
                content: "Hey! Just realized I never got the Venmo for the tickets last week ($50). Can you send that over when you have a sec?"
            },
            {
                label: 'Direct Request',
                tone: 'assertive',
                content: "Hey [Name], it's been a few weeks since I lent you that $200. I need those funds for some bills coming up. Can you pay me back by Friday?"
            }
        ],
        commonObjections: [
            {
                objection: "I'm totally broke right now.",
                response: "I get that. Can you send half now and the rest next week? I really need to close this out."
            },
            {
                objection: "I thought that was a gift/You offered!",
                response: "Sorry for the confusion, but I definitely intended it as a loan. I need the money back."
            }
        ],
        tips: [
            'Don\'t let it fester. Ask sooner rather than later.',
            'Keep it transactional and distinct from your friendship emotions.',
            'Assume they just forgot.'
        ]
    },
    {
        id: 'boundaries-inlaws',
        title: 'Setting Boundaries with Family/In-Laws',
        slug: 'boundaries-inlaws',
        categoryId: 'family',
        summary: 'Limit visits or unsolicited advice from family members.',
        difficulty: 'High',
        riskLevel: 'High',
        whatToPrepare: [
            'Examples of the behavior',
            'United front with your partner (if applicable)',
            'Specific boundary you want to set'
        ],
        openingLines: [
            "I want to talk about our upcoming visit.",
            "We need to discuss how we handle [Topic]."
        ],
        scripts: [
            {
                label: 'The "Unsolicited Advice" Script',
                tone: 'assertive',
                content: "We appreciate that you want to help, but we've decided to handle [parenting/house/wedding] this way. Please respect our decision and stop making comments about it."
            },
            {
                label: 'The "Visit Duration" Script',
                tone: 'firm',
                content: "We love seeing you, but shorter visits work better for our schedule. Next time, let's plan for 3 days instead of a week so we can all enjoy the time more."
            }
        ],
        commonObjections: [
            {
                objection: "You're being ungrateful/disrespectful.",
                response: "This isn't about respect, it's about what works for our family. We want to have a good relationship with you, and these boundaries help us do that."
            },
            {
                objection: "But we've always done it this way.",
                response: "I understand, but this is how we are doing it now."
            }
        ],
        tips: [
            'Be consistent. If you say no, mean no.',
            'Don\'t JADE (Justify, Argue, Defend, Explain) too much.',
            'Reinforce positive interactions.'
        ]
    },
    {
        id: 'performance-review-bad',
        title: 'Giving Critical Feedback',
        slug: 'giving-critical-feedback',
        categoryId: 'work',
        summary: 'Addressing poor performance or behavior with a direct report or peer.',
        difficulty: 'Medium',
        riskLevel: 'Medium',
        whatToPrepare: [
            'Specific examples (dates, events)',
            'Impact of the behavior',
            'Desired change'
        ],
        openingLines: [
            "I have some feedback I'd like to share with you.",
            "I want to talk about how [Project] went."
        ],
        scripts: [
            {
                label: 'Situation-Behavior-Impact (SBI)',
                tone: 'neutral',
                content: "In the meeting yesterday (Situation), when you interrupted the client (Behavior), it made us look unorganized and frustrated them (Impact). Going forward, please let them finish speaking before jumping in."
            },
            {
                label: 'The Growth Focus',
                tone: 'collaborative',
                content: "I noticed you've been missing deadlines lately. I know you're capable of great work. What's going on, and how can we get you back on track?"
            }
        ],
        commonObjections: [
            {
                objection: "It wasn't my fault/They started it.",
                response: "Regardless of the cause, I need you to focus on how you react and manage your responsibilities."
            },
            {
                objection: "I didn't know that was an expectation.",
                response: "I'm clarifying it now. Going forward, the expectation is [X]."
            }
        ],
        tips: [
            'Focus on the behavior, not the person.',
            'Do it in private.',
            'Ask for their perspective.'
        ]
    },
    {
        id: 'dtr',
        title: 'Defining the Relationship (DTR)',
        slug: 'defining-the-relationship',
        categoryId: 'relationships',
        summary: 'Asking "What are we?" without panicking.',
        difficulty: 'Medium',
        riskLevel: 'High',
        whatToPrepare: [
            'Know what YOU want (exclusive? casual?)',
            'Be ready for an answer you might not like'
        ],
        openingLines: [
            "I've really enjoyed the last few months with you.",
            "I feel like we're in a good place, and I want to check in."
        ],
        scripts: [
            {
                label: 'Vulnerable and Direct',
                tone: 'empathetic',
                content: "I really like where this is going, and I'm not interested in seeing other people anymore. I want to be exclusive with you. How do you feel about that?"
            },
            {
                label: 'The Check-In',
                tone: 'collaborative',
                content: "I'm having a great time with you. I wanted to see if you're seeing other people, or if you see this becoming serious?"
            }
        ],
        commonObjections: [
            {
                objection: "I'm not ready for labels.",
                response: "I understand. For me, knowing we are working towards something is important. If you're not there, I need to think about what that means for me."
            },
            {
                objection: "I like things how they are.",
                response: "I do too, but I need emotional security. If we aren't exclusive, I'm going to keep my options open."
            }
        ],
        tips: [
            'Don\'t do this over text.',
            'Be clear about your standards.',
            'If they say no, believe them.'
        ]
    },
    {
        id: 'declining-invite',
        title: 'Declining an Invitation',
        slug: 'declining-invitation',
        categoryId: 'social',
        summary: 'Saying no to weddings, parties, or trips without guilt.',
        difficulty: 'Low',
        riskLevel: 'Low',
        whatToPrepare: [
            'Check your calendar',
            'Decide if you want to give a reason (you usually don\'t need one)'
        ],
        openingLines: [
            "Thank you so much for inviting me!",
            "It sounds like a great event."
        ],
        scripts: [
            {
                label: 'Simple and Polite',
                tone: 'neutral',
                content: "Thanks for the invite! I won't be able to make it, but I hope you have a wonderful time."
            },
            {
                label: 'The "Prior Commitments" (Vague)',
                tone: 'neutral',
                content: "I have a conflict that weekend so I can't attend. Sad to miss it!"
            }
        ],
        commonObjections: [
            {
                objection: "Aw, come on, just stop by!",
                response: "I really can't, but thanks for pushing! Have a drink for me."
            },
            {
                objection: "Why not?",
                response: "I just have too much on my plate right now."
            }
        ],
        tips: [
            'Don\'t over-explain. "I can\'t make it" is a complete sentence.',
            'Send a gift if it\'s a wedding.',
            'RSVP early so they can fill your spot.'
        ]
    },
    {
        id: 'politics-family',
        title: 'Stopping Political Talks',
        slug: 'stopping-politics-talk',
        categoryId: 'family',
        summary: 'De-escalating heated political arguments with relatives.',
        difficulty: 'Medium',
        riskLevel: 'Medium',
        whatToPrepare: [
            'Patience',
            'Topics to pivot to (kids, sports, food)'
        ],
        openingLines: [
            "Let's pause for a second.",
            "I don't think we're going to agree on this."
        ],
        scripts: [
            {
                label: 'The "Agree to Disagree"',
                tone: 'neutral',
                content: "I know we feel strongly about this, but I don't want to argue. Let's agree to disagree and enjoy dinner."
            },
            {
                label: 'The Hard Boundary',
                tone: 'firm',
                content: "I'm not comfortable discussing politics here. If you keep bringing it up, I'm going to step away/leave."
            }
        ],
        commonObjections: [
            {
                objection: "You just need to listen to the facts!",
                response: "I've heard your perspective, but I'm done talking about this topic for today."
            }
        ],
        tips: [
            'Don\'t try to win the argument.',
            'Physically leave the room if needed.',
            'Keep your tone calm.'
        ]
    },
    {
        id: 'cancel-plans',
        title: 'Canceling Plans Last Minute',
        slug: 'canceling-plans',
        categoryId: 'social',
        summary: 'Bailing on a commitment when necessary.',
        difficulty: 'Medium',
        riskLevel: 'Low',
        whatToPrepare: [
            'Reason (be honest if possible)',
            'Alternative date'
        ],
        openingLines: [
            "I feel terrible doing this.",
            "Something has come up."
        ],
        scripts: [
            {
                label: 'The Honest Re-schedule',
                tone: 'empathetic',
                content: "I'm so sorry, but I'm feeling incredibly drained/sick and won't be fun company tonight. Can we reschedule for next Tuesday?"
            },
            {
                label: 'The Emergency',
                tone: 'neutral',
                content: "Something urgent came up with work/family and I have to deal with it. I'm so sorry to miss our plans."
            }
        ],
        commonObjections: [
            {
                objection: "This is the second time you've canceled.",
                response: "I know, and I feel bad about it. I really value our time, I've just been overwhelmed. Dinner is on me next time."
            }
        ],
        tips: [
            'Call if it\'s very last minute.',
            'Offer a specific new date immediately.',
            'Don\'t lie extravagantly.'
        ]
    },
    {
        id: 'prenup',
        title: 'Suggesting a Prenup',
        slug: 'suggesting-prenup',
        categoryId: 'money',
        summary: 'Discussing financial protection before marriage.',
        difficulty: 'High',
        riskLevel: 'High',
        whatToPrepare: [
            'Understanding of what a prenup actually does',
            'Assurance of your commitment'
        ],
        openingLines: [
            "I want to talk about our financial future.",
            "We've planned so much for the wedding, we should plan for the marriage mechanics too."
        ],
        scripts: [
            {
                label: 'The "Safety Net" Approach',
                tone: 'neutral',
                content: "No one buys car insurance expecting to crash, but it's responsible to have. I want us to create a prenup so that we decide what's fair while we love each other, not leaving it to state laws."
            },
            {
                label: 'The Financial Clarity',
                tone: 'assertive',
                content: "We both have assets entering this marriage. I think a prenup is a smart way to clarify our finances so we never have to worry about them later."
            }
        ],
        commonObjections: [
            {
                objection: "You're planning for us to fail.",
                response: "Not at all. I'm planning for clarity. It's about protecting both of us."
            }
        ],
        tips: [
            'Bring it up months before the wedding, not days.',
            'Frame it as financial planning.',
            'Both parties should have legal counsel.'
        ]
    },
    {
        id: 'flaking-friend',
        title: 'Confronting a Flaky Friend',
        slug: 'confronting-flaky-friend',
        categoryId: 'social',
        summary: 'Addressing a pattern of canceling or no-showing.',
        difficulty: 'Medium',
        riskLevel: 'Medium',
        whatToPrepare: [
            'Specific examples',
            'How it makes you feel (disrespected, undervalued)'
        ],
        openingLines: [
            "I noticed you've canceled the last few times.",
            "Are we okay?"
        ],
        scripts: [
            {
                label: 'The Feelings Statement',
                tone: 'empathetic',
                content: "When you cancel last minute, I feel like my time isn't valued. I love hanging out with you, but I need you to stick to plans we make."
            },
            {
                label: 'The Reality Check',
                tone: 'firm',
                content: "It's frustrating to hold time for you only to have you bail. If you're too busy to hang out, just let me know so I don't keep expecting it."
            }
        ],
        commonObjections: [
            {
                objection: "I'm just so busy/anxious!",
                response: "I understand, but maybe we should stop making concrete plans for a while until things settle down."
            }
        ],
        tips: [
            'Don\'t attack their character, focus on the action.',
            'Allow them to bow out of the friendship if they are overwhelmed.'
        ]
    },
    {
        id: 'chores',
        title: 'Division of Household Chores',
        slug: 'household-chores',
        categoryId: 'relationships',
        summary: 'Asking for more help around the house.',
        difficulty: 'Medium',
        riskLevel: 'Medium',
        whatToPrepare: [
            'List of what you do vs. what needs doing',
            'Time when you are both calm'
        ],
        openingLines: [
            "I'm feeling overwhelmed with the house stuff.",
            "Can we revisit our chore division?"
        ],
        scripts: [
            {
                label: 'The "Team" Approach',
                tone: 'collaborative',
                content: "I feel like I'm carrying the mental load for the house management. I need us to find a more balanced system so I'm not resentful."
            },
            {
                label: 'The Specific Request',
                tone: 'assertive',
                content: "I need you to take ownership of [Dishes/Laundry]. That means doing it without me asking/reminding."
            }
        ],
        commonObjections: [
            {
                objection: "I do help when you ask!",
                response: "The goal is for me not to have to ask (project manage). I need you to take initiative."
            }
        ],
        tips: [
            'Agree on standards of "clean".',
            'Make a schedule.'
        ]
    },
    {
        id: 'quitting',
        title: 'Resigning from a Job',
        slug: 'resigning',
        categoryId: 'work',
        summary: 'Leaving a position professionally.',
        difficulty: 'High',
        riskLevel: 'Medium',
        whatToPrepare: [
            'Transition plan',
            'Official resignation letter',
            'Last day date'
        ],
        openingLines: [
            "Do you have a moment to talk?",
            "I have some news to share."
        ],
        scripts: [
            {
                label: 'Standard Professional',
                tone: 'neutral',
                content: "I've accepted a new opportunity and will be moving on. My last day will be [Date]. I want to ensure a smooth transition over the next two weeks."
            },
            {
                label: 'The Grateful Goodbye',
                tone: 'empathetic',
                content: "I've learned so much here, but it's time for me to take the next step in my career. I'm resigning effectively [Date]."
            }
        ],
        commonObjections: [
            {
                objection: "What can we do to keep you? (Counter-offer)",
                response: "I appreciate the gesture, but my decision is final. I'm excited for this new chapter."
            }
        ],
        tips: [
            'Keep it short.',
            'Don\'t burn bridges.',
            'Focus on the logistics of leaving.'
        ]
    },
    {
        id: 'apology',
        title: 'Apologizing Sincerely',
        slug: 'sincere-apology',
        categoryId: 'social',
        summary: 'Making amends when you messed up.',
        difficulty: 'Medium',
        riskLevel: 'Medium',
        whatToPrepare: [
            'Understanding of exactly what you did wrong',
            'No excuses'
        ],
        openingLines: [
            "I wanted to apologize for...",
            "I've been thinking about what happened."
        ],
        scripts: [
            {
                label: 'The Full Accountability',
                tone: 'empathetic',
                content: "I'm sorry for [Action]. I know it hurt you by [Impact]. I was wrong to do that. In the future, I will [Change]."
            },
            {
                label: 'The Short & Clear',
                tone: 'assertive',
                content: "I owe you an apology. I dropped the ball on [Task] and I'm sorry."
            }
        ],
        commonObjections: [
            {
                objection: "That doesn't fix it.",
                response: "I know. I just wanted to acknowledge my mistake. Is there anything I can do to make it right?"
            }
        ],
        tips: [
            'Avoid "I\'m sorry IF/BUT".',
            'Acknowledge the impact, not just the intent.',
            'Ask for forgiveness but don\'t demand it.'
        ]
    }
];
