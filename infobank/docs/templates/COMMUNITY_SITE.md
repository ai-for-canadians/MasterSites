# Community Site Template

Use for user-generated content sites.
Examples: Real Results, Practitioner Directory

## Core Features
1. Browse submissions
2. Submit content
3. Verification system
4. Moderation queue

## Standard Pages
```
/                    # Homepage with featured content
/browse              # Browse all submissions
/submit              # Submit new content
/[slug]              # Individual submission
/about               # About and guidelines
```

## Database Schema
```sql
CREATE TABLE submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content JSONB NOT NULL,
  category_id UUID REFERENCES categories(id),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  is_verified BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Seed Data Requirements
- Minimum 10-15 example submissions
- Mix of verified and unverified
- Several categories represented
