import type { Condition, Category } from '@/types';

export const categories: Category[] = [
    { id: 'metabolic', name: 'Metabolic Health', slug: 'metabolic', icon: 'Activity', color: 'emerald' },
    { id: 'cardiovascular', name: 'Heart & Blood', slug: 'cardiovascular', icon: 'Heart', color: 'rose' },
    { id: 'pain', name: 'Chronic Pain', slug: 'pain', icon: 'Zap', color: 'yellow' },
    { id: 'digestive', name: 'Gut Health', slug: 'digestive', icon: 'Utensils', color: 'orange' },
];

export const conditions: Condition[] = [
    {
        id: 'type-2-diabetes',
        name: 'Type 2 Diabetes',
        slug: 'type-2-diabetes',
        category: 'metabolic',
        tagline: 'Reversing insulin resistance',
        description: 'A condition where cells stop responding to insulin, leading to high blood sugar. Often reversible with lifestyle changes.',
        interventions: [
            {
                id: 'low-carb',
                name: 'Carbohydrate Restriction',
                description: 'Reducing dietary glucose load to lower insulin demands.',
                evidenceLevel: 'High',
                mechanism: 'Lowers blood glucose directly; reduces hepatic fat.',
                protocol: '<50g net carbs/day for remission; <100g for management.',
                references: 142
            },
            {
                id: 'intermittent-fasting',
                name: 'Time Restricted Eating',
                description: 'Compressing eating window to 8-10 hours.',
                evidenceLevel: 'Medium',
                mechanism: 'Allows prolonged periods of low insulin, enabling fat oxidation.',
                protocol: '16:8 schedule (fast 16h, eat 8h).',
                references: 45
            },
            {
                id: 'resistance-training',
                name: 'Resistance Training',
                description: 'Building muscle mass.',
                evidenceLevel: 'High',
                mechanism: 'Muscle tissue acts as a "glucose sink" independent of insulin.',
                protocol: 'Full body resistance training 2-3x/week.',
                references: 89
            },
        ],
        lifestyleFactors: {
            diet: 'Focus on protein and healthy fats. Minimize sugar and starches.',
            exercise: 'Walk 10-15 min after meals to blunt glucose spikes.',
            sleep: 'Poor sleep induces acute insulin resistance.',
            stress: 'Cortisol releases stored glucose; manage stress.',
        },
        disclaimer: 'Consult your doctor before changing diet if you are on medication (insulin/metformin) as hypoglycemia can occur.',
        lastUpdated: '2025-01-26',
    },
    {
        id: 'hypertension',
        name: 'Hypertension',
        slug: 'hypertension',
        category: 'cardiovascular',
        tagline: 'The silent killer',
        description: 'Chronically high pressure in blood vessels, forcing the heart to work harder.',
        interventions: [
            {
                id: 'potassium',
                name: 'Potassium Increase',
                description: 'Eating more potassium-rich foods (not just cutting salt).',
                evidenceLevel: 'High',
                mechanism: 'Potassium relaxes blood vessel walls and helps excrete sodium.',
                protocol: '4700mg/day target via avocados, bacteria, potatoes.',
                references: 67
            },
            {
                id: 'breathing',
                name: 'Slow Deep Breathing',
                description: 'Resonance breathing exercises.',
                evidenceLevel: 'Medium',
                mechanism: 'Increases vagal tone, shifting nervous system to parasympathetic state.',
                protocol: '5-10 mins daily; 5 seconds in, 5 seconds out.',
                references: 32
            },
        ],
        lifestyleFactors: {
            diet: 'Whole foods, high potassium, adequate magnesium.',
            exercise: 'Zone 2 cardio lowers resting BP over time.',
            sleep: 'Apnea is a major cause of resistant hypertension.',
            stress: 'Chronic stress keeps vasoconstriction active.',
        },
        disclaimer: 'Monitor BP at home. Do not stop beta-blockers abruptly.',
        lastUpdated: '2025-01-26',
    },
    {
        id: 'migraine',
        name: 'Migraine',
        slug: 'migraine',
        category: 'pain',
        tagline: 'More than a headache',
        description: 'A neurological disease causing severe throbbing pain, often with nausea and light sensitivity.',
        interventions: [
            {
                id: 'magnesium',
                name: 'Magnesium Supplementation',
                description: 'High dose magnesium glycinate or oxide.',
                evidenceLevel: 'High',
                mechanism: 'Stabilizes neuronal excitability and vascular tone.',
                protocol: '400-600mg daily (check with doctor).',
                references: 28
            },
            {
                id: 'elimination-diet',
                name: 'Trigger Elimination',
                description: 'Identifying food triggers (aged cheese, wine, MSG).',
                evidenceLevel: 'Medium',
                mechanism: 'Reduces inflammatory/excitatory load.',
                protocol: 'Keep a headache diary to spot patterns.',
                references: 15
            },
        ],
        lifestyleFactors: {
            diet: 'Stable blood sugar is key; don\'t skip meals.',
            exercise: 'Regular low-impact cardio.',
            sleep: 'Consistent wake/sleep times are critical for migraine brain.',
            stress: 'Let-down effect (migraine after stress drops) is common.',
        },
        disclaimer: 'Sudden "thunderclap" headaches require emergency care.',
        lastUpdated: '2025-01-26',
    },
    {
        id: 'pcos',
        name: 'PCOS (Polycystic Ovary Syndrome)',
        slug: 'pcos',
        category: 'metabolic',
        tagline: 'Hormonal balance through metabolic health',
        description: 'A hormonal disorder causing enlarged ovaries with cysts. Affects menstruation, fertility, and is linked to insulin resistance, weight gain, and elevated androgens.',
        interventions: [
            {
                id: 'low-glycemic-diet',
                name: 'Low Glycemic Diet',
                description: 'Choosing foods that don\'t spike blood sugar rapidly.',
                evidenceLevel: 'High',
                mechanism: 'Reduces insulin spikes, which drive androgen production in ovaries.',
                protocol: 'Prioritize whole foods, fiber, and protein. Avoid refined carbs and sugars.',
                references: 78
            },
            {
                id: 'inositol',
                name: 'Inositol Supplementation',
                description: 'Myo-inositol and D-chiro-inositol combo.',
                evidenceLevel: 'High',
                mechanism: 'Acts as insulin sensitizer; restores ovulation in many cases.',
                protocol: '40:1 ratio (myo:d-chiro), typically 4g myo-inositol daily.',
                references: 95
            },
            {
                id: 'strength-training-pcos',
                name: 'Resistance Training',
                description: 'Building muscle to improve metabolic health.',
                evidenceLevel: 'Medium',
                mechanism: 'Muscle mass increases insulin sensitivity independent of weight loss.',
                protocol: '2-3 sessions per week of compound movements.',
                references: 42
            },
        ],
        lifestyleFactors: {
            diet: 'Mediterranean-style with low glycemic focus. Adequate protein at each meal.',
            exercise: 'Mix of strength training and walking. Avoid excessive cardio which can stress hormones.',
            sleep: 'Poor sleep worsens insulin resistance and hormonal imbalance.',
            stress: 'Chronic stress elevates cortisol, worsening symptoms.',
        },
        disclaimer: 'Work with an endocrinologist or reproductive specialist for fertility concerns.',
        lastUpdated: '2025-01-26',
    },
    {
        id: 'gerd',
        name: 'GERD (Acid Reflux)',
        slug: 'gerd',
        category: 'digestive',
        tagline: 'Healing the gut barrier',
        description: 'Gastroesophageal reflux disease occurs when stomach acid frequently flows back into the esophagus, causing heartburn and potential damage to the esophageal lining.',
        interventions: [
            {
                id: 'meal-timing',
                name: 'Meal Timing & Posture',
                description: 'Eating earlier and staying upright after meals.',
                evidenceLevel: 'High',
                mechanism: 'Gravity keeps acid down; lying flat allows backflow.',
                protocol: 'No eating 3 hours before bed. Elevate head of bed 6-8 inches.',
                references: 56
            },
            {
                id: 'trigger-avoidance',
                name: 'Trigger Food Elimination',
                description: 'Identifying and avoiding foods that relax the lower esophageal sphincter.',
                evidenceLevel: 'Medium',
                mechanism: 'Certain foods (coffee, chocolate, alcohol, fatty foods) relax the LES.',
                protocol: 'Elimination and reintroduction to find personal triggers.',
                references: 38
            },
            {
                id: 'weight-management',
                name: 'Weight Management',
                description: 'Reducing abdominal pressure through weight loss.',
                evidenceLevel: 'High',
                mechanism: 'Excess abdominal fat increases intra-abdominal pressure, forcing acid up.',
                protocol: '5-10% body weight loss often produces significant improvement.',
                references: 64
            },
        ],
        lifestyleFactors: {
            diet: 'Smaller, more frequent meals. Avoid spicy, acidic, and fatty foods.',
            exercise: 'Light activity after meals (walking). Avoid intense exercise after eating.',
            sleep: 'Left-side sleeping reduces reflux. Elevate bed head.',
            stress: 'Stress increases acid production and sensitivity.',
        },
        disclaimer: 'Chronic GERD can lead to Barrett\'s esophagus. See a GI specialist if symptoms persist.',
        lastUpdated: '2025-01-26',
    },
    {
        id: 'fibromyalgia',
        name: 'Fibromyalgia',
        slug: 'fibromyalgia',
        category: 'pain',
        tagline: 'Calming the amplified nervous system',
        description: 'A chronic condition characterized by widespread musculoskeletal pain, fatigue, sleep, and cognitive issues. The brain amplifies pain signals.',
        interventions: [
            {
                id: 'sleep-hygiene',
                name: 'Sleep Optimization',
                description: 'Prioritizing restorative sleep as foundational therapy.',
                evidenceLevel: 'High',
                mechanism: 'Poor sleep perpetuates pain sensitization; deep sleep is restorative.',
                protocol: 'Strict sleep schedule, dark/cool room, no screens 1hr before bed.',
                references: 72
            },
            {
                id: 'graded-exercise',
                name: 'Graded Exercise Therapy',
                description: 'Very gradual increase in activity to avoid flares.',
                evidenceLevel: 'High',
                mechanism: 'Movement reduces pain sensitivity over time, but too much causes flares.',
                protocol: 'Start with 5-10 min walking, increase by 10% weekly only if tolerated.',
                references: 88
            },
            {
                id: 'mindfulness-meditation',
                name: 'Mindfulness & CBT',
                description: 'Cognitive behavioral therapy and mindfulness-based stress reduction.',
                evidenceLevel: 'High',
                mechanism: 'Reduces central sensitization and catastrophizing; rewires pain pathways.',
                protocol: 'Daily 10-20 min meditation; structured CBT program with therapist.',
                references: 65
            },
        ],
        lifestyleFactors: {
            diet: 'Anti-inflammatory focus. Some find relief avoiding gluten/dairy.',
            exercise: 'Low impact only: swimming, walking, gentle yoga. Pacing is critical.',
            sleep: 'Non-negotiable—sleep disorders are extremely common in fibro.',
            stress: 'Stress is a major flare trigger. Daily relaxation practices essential.',
        },
        disclaimer: 'Fibromyalgia is a real medical condition, not "in your head." Seek a rheumatologist.',
        lastUpdated: '2025-01-26',
    },
    {
        id: 'high-cholesterol',
        name: 'High Cholesterol (Dyslipidemia)',
        slug: 'high-cholesterol',
        category: 'cardiovascular',
        tagline: 'Beyond the numbers',
        description: 'Elevated levels of cholesterol, particularly LDL, which increases risk of atherosclerosis and heart disease. Lifestyle factors have major impact.',
        interventions: [
            {
                id: 'fiber-intake',
                name: 'Soluble Fiber Increase',
                description: 'Eating oats, beans, and psyllium.',
                evidenceLevel: 'High',
                mechanism: 'Soluble fiber binds to cholesterol in the gut, preventing absorption.',
                protocol: '10-25g soluble fiber daily. Oatmeal, beans, flaxseed, apples.',
                references: 92
            },
            {
                id: 'plant-sterols',
                name: 'Plant Sterols/Stanols',
                description: 'Natural compounds that block cholesterol absorption.',
                evidenceLevel: 'High',
                mechanism: 'Compete with cholesterol in the intestine, reducing absorption.',
                protocol: '2g daily via fortified foods or supplements.',
                references: 48
            },
            {
                id: 'aerobic-exercise',
                name: 'Aerobic Exercise',
                description: 'Regular cardiovascular activity.',
                evidenceLevel: 'High',
                mechanism: 'Raises HDL, lowers triglycerides, improves LDL particle size.',
                protocol: '150 mins/week moderate intensity (brisk walking, cycling).',
                references: 112
            },
        ],
        lifestyleFactors: {
            diet: 'Limit saturated fat, eliminate trans fat. Emphasize omega-3s, nuts, olive oil.',
            exercise: 'Consistent aerobic activity; resistance training also helps.',
            sleep: 'Sleep apnea worsens lipid profiles.',
            stress: 'Chronic stress can elevate LDL and triglycerides.',
        },
        disclaimer: 'Family history matters greatly. Discuss statin therapy with your doctor if lifestyle isn\'t enough.',
        lastUpdated: '2025-01-26',
    },
    {
        id: 'ibs',
        name: 'IBS (Irritable Bowel Syndrome)',
        slug: 'ibs',
        category: 'digestive',
        tagline: 'Gut-brain connection',
        description: 'A functional gut disorder causing abdominal pain, bloating, and altered bowel habits without structural abnormalities. The gut-brain axis is central.',
        interventions: [
            {
                id: 'low-fodmap',
                name: 'Low FODMAP Diet',
                description: 'Eliminating fermentable carbohydrates that trigger symptoms.',
                evidenceLevel: 'High',
                mechanism: 'FODMAPs are poorly absorbed, fermented by bacteria, causing gas/pain.',
                protocol: 'Strict elimination 2-6 weeks, then systematic reintroduction.',
                references: 156
            },
            {
                id: 'peppermint-oil',
                name: 'Peppermint Oil',
                description: 'Enteric-coated capsules for IBS symptoms.',
                evidenceLevel: 'High',
                mechanism: 'Relaxes intestinal smooth muscle, reducing spasms.',
                protocol: '0.2-0.4ml enteric-coated capsules 3x/day before meals.',
                references: 34
            },
            {
                id: 'gut-directed-hypnotherapy',
                name: 'Gut-Directed Hypnotherapy',
                description: 'Specialized hypnosis targeting gut-brain communication.',
                evidenceLevel: 'High',
                mechanism: 'Modulates pain perception and gut motility through the gut-brain axis.',
                protocol: '6-12 weekly sessions with trained hypnotherapist.',
                references: 42
            },
        ],
        lifestyleFactors: {
            diet: 'Identify triggers via diary. Low FODMAP works for ~75%. Regular meal times.',
            exercise: 'Gentle movement helps motility. Avoid intense exercise if it triggers symptoms.',
            sleep: 'Poor sleep worsens IBS symptoms significantly.',
            stress: 'The gut has its own nervous system—stress directly affects it.',
        },
        disclaimer: 'IBS is a diagnosis of exclusion. Rule out celiac disease and inflammatory bowel disease.',
        lastUpdated: '2025-01-26',
    },
];

