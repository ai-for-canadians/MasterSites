# InfoBank Hub - Build Prompt

## Reference Documents
Read before building:
- /docs/DESIGN_SYSTEM.md
- /docs/TECH_STANDARDS.md
- /docs/CONTENT_STANDARDS.md

---

## Overview

**Site Name:** InfoBank Hub
**URL:** infobank.ca (main domain)
**Template Type:** Custom (master directory)

**One-Line Description:**
The central hub that helps Canadians discover and navigate all InfoBank resources.

---

## User Value

**Who is this for?**
Anyone seeking evidence-based information about health, life skills, finances, or Canadian-specific topics.

**What problem do they have?**
Information online is scattered, unreliable, and hard to find. People don't know what resources exist or which to trust.

**How does this solve it?**
A curated, organized directory of all InfoBank sites with clear descriptions, search functionality, and trust signals.

**Success looks like:**
User arrives → understands what InfoBank is → finds relevant site → navigates there in under 30 seconds.

---

## Pages

### Homepage (/)

**Purpose:** Introduce InfoBank and help users find relevant resources.

**Sections:**

1. **Hero Section**
   - Headline: "Real information for real life"
   - Subheadline: "Evidence-based resources for Canadians. No ads. No BS. Just information you can trust."
   - Search bar (search across all sites)
   - CTA button: "Explore Sites"

2. **Site Categories** (grid of category cards)
   - Health & Body (icon: Heart)
   - Life & Money (icon: Wallet)
   - Work & Career (icon: Briefcase)
   - Canada Specific (icon: MapPin)
   - Each card shows category name, description, site count

3. **Featured Sites** (3-4 highlighted sites)
   - Product Truth (featured)
   - Canadian Benefits Navigator (featured)
   - Movement Rx (featured)
   - Each with: name, tagline, description, "Visit" button

4. **How We're Different** (trust section)
   - Evidence-based: Every claim has a source
   - Canadian-first: Built for Canadians, eh
   - No ads: We don't sell your attention
   - Open about limits: We say when we don't know

5. **All Sites** (complete directory grid)
   - Filterable by category
   - Search within directory
   - Card for each site: name, tagline, category badge, status badge

6. **Newsletter Signup**
   - "Get notified when we launch new sites"
   - Email input + subscribe button

7. **Footer**
   - About InfoBank
   - All categories
   - Contact
   - Social links

### About Page (/about)

**Purpose:** Explain InfoBank's mission, approach, and story.

**Sections:**
1. Mission statement
2. Our evidence standards
3. The team / founder story
4. Contact information

### Sites Directory (/sites)

**Purpose:** Browse all sites with filtering.

**Content:**
- Category filter tabs
- Search input
- Grid of all site cards
- Each card: name, tagline, description, category, status

### Individual Site Page (/sites/[slug])

**Purpose:** Learn about a specific site before visiting.

**Content:**
- Site name and tagline
- Full description
- Key features list
- Who it's for
- Screenshot/preview
- "Visit Site" button

---

## Data Structure
```sql
-- Categories for organizing sites
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT NOT NULL,
  color TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- All sites in the network
CREATE TABLE sites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  tagline TEXT NOT NULL,
  description TEXT NOT NULL,
  category_id UUID REFERENCES categories(id),
  url TEXT,
  status TEXT DEFAULT 'coming_soon' CHECK (status IN ('live', 'coming_soon', 'beta')),
  is_featured BOOLEAN DEFAULT false,
  icon TEXT,
  features JSONB,
  who_its_for TEXT,
  sort_order INTEGER DEFAULT 0,
  launched_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter subscribers
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  confirmed BOOLEAN DEFAULT false
);
```

---

## Features

### Site Search
**What it does:** Search across all site names, taglines, and descriptions
**How it works:** Client-side filtering for now (small dataset), can add Supabase full-text later

### Category Filtering
**What it does:** Filter sites by category
**How it works:** URL params + client state, instant filtering

### Newsletter Signup
**What it does:** Collect emails for launch notifications
**How it works:** Form → API route → Supabase insert

---

## Seed Data

### Categories (create all 5)

1. **Health & Body**
   - slug: health
   - icon: Heart
   - color: emerald
   - description: Evidence-based health and wellness information

2. **Life & Money**
   - slug: life
   - icon: Wallet
   - color: blue
   - description: Practical guidance for life's big decisions

3. **Work & Career**
   - slug: career
   - icon: Briefcase
   - color: purple
   - description: Navigate your career with confidence

4. **Canada Specific**
   - slug: canada
   - icon: MapPin
   - color: red
   - description: Resources built specifically for Canadians

5. **Food & Home**
   - slug: home
   - icon: Home
   - color: amber
   - description: Eat well, live well, maintain your space

### Sites (create at least 15)

**Featured Sites (3):**

1. **Product Truth**
   - Category: Health & Body
   - Tagline: "Know what's really in your products"
   - Description: A searchable database of personal care and household products with ingredient safety analysis, evidence ratings, and better alternatives.
   - Status: coming_soon
   - Featured: true
   - Features: ["Ingredient safety ratings", "Product comparisons", "Evidence-based concerns", "Safer alternatives"]
   - Who it's for: Anyone who wants to make informed choices about the products they use

2. **Canadian Benefits Navigator**
   - Category: Canada Specific
   - Tagline: "Find programs you qualify for"
   - Description: Navigate Canadian government benefits, grants, and programs. Federal and provincial, with eligibility checkers and application guides.
   - Status: coming_soon
   - Featured: true
   - Features: ["Eligibility quiz", "Federal & provincial programs", "Application guides", "Deadline tracking"]
   - Who it's for: Any Canadian who might be missing out on benefits they qualify for

3. **Movement Rx**
   - Category: Health & Body
   - Tagline: "Fix the pain from modern life"
   - Description: Evidence-based exercises and routines to address common pain from sitting, phone use, and sedentary lifestyles. Interactive body map, video guides, custom routines.
   - Status: coming_soon
   - Featured: true
   - Features: ["Interactive body map", "Video-guided exercises", "Custom routines", "Progress tracking"]
   - Who it's for: Desk workers, phone users, anyone with chronic pain from modern habits

**Additional Sites (12+):**

4. **Condition Control** - Health - "Lifestyle interventions your doctor didn't mention"
5. **Supplements Guide** - Health - "What actually works (and what doesn't)"
6. **Sleep Better** - Health - "Evidence-based sleep optimization"
7. **Real Results** - Health - "Real stories, verified transformations"
8. **Career Pivot** - Career - "Change careers without starting over"
9. **Salary Negotiation** - Career - "Get paid what you're worth"
10. **Debt Freedom** - Life - "A clear path out of debt"
11. **First Home Guide** - Life - "Navigate buying your first home in Canada"
12. **Newcomer Guide** - Canada - "Your first 90 days in Canada"
13. **ADHD Life Systems** - Life - "Systems that actually work for ADHD brains"
14. **Kitchen Confidence** - Home - "Cook real food without recipes"
15. **Emergency Prep** - Home - "Be ready for anything"

For each site, create complete data with: name, slug, tagline, full description, category, features array, who_its_for text, status (coming_soon for all except hub).

---

## Acceptance Criteria

### Functionality
- [ ] Homepage renders with all sections
- [ ] Category filtering works
- [ ] Site search works
- [ ] Newsletter form submits successfully
- [ ] All navigation links work
- [ ] Mobile menu works
- [ ] Individual site pages render

### Design
- [ ] Matches design system exactly
- [ ] Dark theme throughout
- [ ] Amber accent colors used correctly
- [ ] Responsive at 320px, 768px, 1024px
- [ ] Cards and components match patterns

### Content
- [ ] All 5 categories created
- [ ] At least 15 sites with complete data
- [ ] 3 featured sites highlighted
- [ ] No placeholder text anywhere

### Technical
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 90
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Proper meta tags on all pages
