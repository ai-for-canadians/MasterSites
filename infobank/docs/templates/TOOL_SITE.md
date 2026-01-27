# Tool Site Template

Use for calculator and interactive tool sites.
Examples: Benefits Navigator, Salary Calculator, Debt Payoff

## Core Features
1. Input form
2. Calculation logic
3. Results display
4. Save/export (optional)

## Standard Pages
```
/                    # Tool entry point
/calculator          # Main calculator
/results             # Results page
/guide               # How to use
/about               # About this tool
```

## Database Schema
```sql
CREATE TABLE calculations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  tool_type TEXT NOT NULL,
  inputs JSONB NOT NULL,
  results JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Requirements
- Clear input validation
- Helpful error messages
- Results explanation
- Mobile-friendly interface
