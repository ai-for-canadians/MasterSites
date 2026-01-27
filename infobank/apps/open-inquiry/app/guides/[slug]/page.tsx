import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

const guides = {
  'getting-started': {
    title: 'Getting Started with Harm Reduction',
    description:
      'Essential safety principles for anyone considering psychoactive substance use',
    content: `
## What is Harm Reduction?

Harm reduction is a set of practical strategies aimed at reducing negative consequences associated with substance use. Rather than requiring abstinence, harm reduction meets people where they are and provides practical tools to stay safer.

### Core Principles

**1. Pragmatic Acceptance**
- People use substances and will continue to use them
- Abstinence is not realistic or desired by everyone
- Focus on reducing harm rather than eliminating use

**2. Individual Autonomy**
- Respect people's right to make their own choices
- Provide information without judgment
- Support informed decision-making

**3. Incremental Progress**
- Any positive change is valuable
- Small steps toward safety are worthwhile
- Perfect is the enemy of good

## Essential Safety Practices

### Before Use

**Research Thoroughly**
- Understand the substance's effects, dosage, and duration
- Know potential interactions with medications or health conditions
- Review harm reduction guidelines specific to that substance

**Test Your Substances**
- Use reagent test kits to identify what you have
- Lab testing services provide detailed analysis
- Never assume street substances are pure or accurately dosed

**Prepare Your Environment**
- Choose a safe, comfortable setting
- Have a trusted, sober person present for powerful substances
- Clear your schedule with no responsibilities

**Check Your State**
- Ensure you're in a stable mental state
- Avoid use during acute stress, depression, or trauma
- Don't use to escape problems or emotional pain

### During Use

**Start Low, Go Slow**
- Begin with threshold or light doses
- Wait full duration before redosing
- New batches require new caution

**Stay Hydrated (But Not Excessively)**
- Sip water regularly
- Avoid overhydration with MDMA (dangerous)
- Monitor your intake

**Monitor Physical State**
- Check body temperature if using stimulants/empathogens
- Be aware of breathing and heart rate
- Take breaks to cool down if dancing/active

**Avoid Mixing**
- Don't combine substances without extensive research
- Some combinations are life-threatening
- Alcohol especially dangerous with many substances

### After Use

**Rest and Recover**
- Allow adequate sleep
- Eat nutritious food
- Replenish vitamins (especially after stimulants)

**Integration**
- Reflect on the experience
- Journal insights
- Discuss with trusted people if needed

**Spacing Use**
- Follow recommended intervals between uses
- More frequent use increases risks
- Tolerance develops quickly with many substances

## Red Flags: When NOT to Use

- Personal or family history of psychosis or schizophrenia
- Currently taking contraindicated medications
- Pregnant or nursing
- Acute mental health crisis
- Heart conditions (for stimulants)
- Alone with powerful psychedelics
- Pressure from others
- Using to cope with trauma or depression

## Emergency Situations

### When to Get Help

Call emergency services immediately if someone:
- Loses consciousness
- Has a seizure
- Has chest pain or difficulty breathing
- Shows signs of severe overheating
- Becomes violent or dangerously confused
- Mentions suicide

### What to Tell Paramedics

- Be honest about what was consumed
- Provide dosage if known
- Mention when it was taken
- Share any medical conditions

**Good Samaritan Laws** protect people who call for help in many jurisdictions.

## Resources

- **Erowid.org**: Comprehensive substance information
- **PsychonautWiki.org**: Dosage and effects database
- **DanceSafe.org**: Testing kits and MDMA-specific harm reduction
- **TripSit.me**: Real-time chat support during experiences
- **MAPS.org**: Research on therapeutic use

## Remember

The safest choice is always not to use substances. But if you do choose to use, these harm reduction practices can significantly reduce your risk of negative outcomes. Stay informed, stay safe, and prioritize your wellbeing.
    `,
  },
  'substance-testing': {
    title: 'Substance Testing Guide',
    description:
      'How to test substances for purity and identify dangerous adulterants',
    content: `
## Why Test Your Substances?

Street substances are frequently misrepresented or contaminated. Testing can reveal:
- Wrong substance entirely (e.g., NBOMe sold as LSD)
- Dangerous adulterants (e.g., fentanyl in cocaine)
- Cutting agents that increase risk

Testing cannot guarantee safety, but it dramatically reduces risk of consuming something unexpected.

## Types of Testing

### Reagent Tests (At Home)

**What They Do:**
- Provide color reactions indicating substance presence
- Fast results (seconds to minutes)
- Cannot measure purity or dosage
- Cannot detect all adulterants

**Common Reagents:**
- **Marquis**: MDMA, amphetamines, opioids
- **Ehrlich**: LSD, tryptamines
- **Mecke**: MDMA, opioids
- **Simon's**: Distinguishes MDMA from MDA
- **Fentanyl strips**: Detect fentanyl presence

**How to Use:**
1. Place tiny sample on white ceramic plate
2. Add 1-2 drops of reagent
3. Observe color change
4. Compare to reaction chart
5. Photograph for reference

### Lab Testing Services

**What They Provide:**
- Precise identification of all substances present
- Quantitative analysis (how much of each substance)
- Detection of all adulterants
- Professional analysis

**Services:**
- **EcstasyData.org** (US): Mail-in testing
- **Energy Control** (International): Comprehensive analysis
- **The Loop** (UK/Europe): Festival testing services

**Process:**
1. Mail small sample to lab
2. Receive detailed report in 1-2 weeks
3. Results show exact composition

## Interpreting Results

### Positive Results
If test confirms expected substance:
- Reduces but doesn't eliminate risk
- Still cannot confirm purity level with reagents
- Proceed with other harm reduction practices

### Unexpected Results
If test shows different substance:
- **Do not consume**
- Consider reporting to drug checking services
- Warn others who may have same batch

### No Reaction
If reagent shows no color change:
- Could indicate unexpected substance
- Could indicate very low concentration
- Could indicate inert cutting agent
- **Exercise extreme caution**

## Testing Different Substances

### MDMA/Ecstasy
- Use Marquis (should turn purple/black)
- Use Simon's (distinguishes MDMA from MDA)
- Consider lab testing due to common adulterants

### LSD
- Use Ehrlich (should turn purple)
- NBOMe compounds won't react to Ehrlich
- Use Hofmann for confirmation

### Cocaine
- Use Marquis, Mecke, Scott
- Fentanyl test strips increasingly important
- Lab testing reveals cutting agents

### Ketamine
- Use Morris, Mandelin, Mecke
- Can be confused with other substances visually
- Lab testing recommended

### Cannabis Products
- Lab testing for potency and contaminants
- Pesticide testing important for concentrates
- Heavy metal testing for vape cartridges

## Where to Get Testing Supplies

**Reagent Kits:**
- DanceSafe.org
- Bunk Police
- EZ Test
- Test Kit Plus

**Fentanyl Test Strips:**
- BTNX
- DanceSafe
- Local harm reduction organizations

## Limitations of Testing

**What Testing Cannot Do:**
- Guarantee safety
- Measure exact potency with reagents alone
- Detect all possible adulterants
- Account for individual reactions
- Replace other harm reduction practices

**What Testing Can Do:**
- Identify dangerous misrepresentations
- Detect common adulterants
- Reduce risk of unexpected substances
- Provide informed decision-making data

## Best Practices

1. **Test Every Batch**: Different pills from same bag can vary
2. **Test Before Events**: Don't test at the venue
3. **Keep Records**: Photo results for reference
4. **Share Information**: Warn community about bad batches
5. **Multiple Tests**: Use several reagents for confirmation
6. **Sample Carefully**: Test from multiple parts of pill/powder

## If Results Are Concerning

- **Do not consume**
- Share findings with harm reduction organizations
- Consider lab testing for detailed analysis
- Warn others who may have same source
- Dispose of substance safely

## Remember

Testing is one layer of harm reduction, not a guarantee. Always combine testing with:
- Proper dosing
- Safe setting
- Knowledgeable sitter
- Medical screening
- Integration support

The only way to eliminate risk is abstinence. If you choose to use, testing is one of the most important steps you can take.
    `,
  },
  // Add more guides as needed
};

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({
    slug,
  }));
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides[params.slug as keyof typeof guides];

  if (!guide) {
    notFound();
  }

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/guides"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all guides
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{guide.title}</h1>
            </div>
          </div>
          <p className="text-xl text-slate-400">{guide.description}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-purple max-w-none">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <div
              className="space-y-6"
              dangerouslySetInnerHTML={{
                __html: guide.content
                  .split('\n\n')
                  .map((para) => {
                    // Handle headers
                    if (para.startsWith('## ')) {
                      return `<h2 class="text-2xl font-bold text-slate-50 mt-8 mb-4">${para.slice(3)}</h2>`;
                    }
                    if (para.startsWith('### ')) {
                      return `<h3 class="text-xl font-semibold text-purple-400 mt-6 mb-3">${para.slice(4)}</h3>`;
                    }
                    // Handle lists
                    if (para.startsWith('- ') || para.match(/^\d+\. /)) {
                      const items = para.split('\n');
                      const listItems = items.map((item) => {
                        const match = item.match(/^[-\d.]+\s+(.+)/);
                        return match
                          ? `<li class="text-slate-300">${match[1]}</li>`
                          : '';
                      });
                      return `<ul class="list-disc list-inside space-y-2 text-slate-300 mb-4">${listItems.join('')}</ul>`;
                    }
                    // Handle bold paragraphs (headings)
                    if (para.startsWith('**') && para.endsWith('**')) {
                      return `<p class="font-semibold text-slate-200 mb-2">${para.slice(2, -2)}</p>`;
                    }
                    // Regular paragraphs
                    return `<p class="text-slate-300 leading-relaxed mb-4">${para.replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-100">$1</strong>')}</p>`;
                  })
                  .join(''),
              }}
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
          <p className="text-sm text-amber-200">
            <strong>Disclaimer:</strong> This guide provides educational information
            for harm reduction purposes. It is not medical advice and does not
            encourage illegal activity. Always research laws in your area and consult
            healthcare professionals for medical decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
