# InfoBank - Claude Code Guide

> This is the primary instruction file. Read this first for every task.

## Mission

Build production-quality, evidence-based information sites for Canadians.
Quality over speed. Every site should be something we're proud of.

## Before Any Task

1. Read this file completely
2. Check /docs/ for relevant standards
3. Look at existing apps for patterns
4. Use shared packages from /packages/

## Project Structure

```
apps/           → Individual sites (Next.js 14)
packages/ui     → Shared React components
packages/db     → Supabase utilities
packages/ai     → AI/OpenAI utilities
packages/config → Shared configs
docs/           → Standards & checklists
prompts/        → Site build specifications
```

## Tech Stack (Required)

| Layer      | Technology            |
|------------|-----------------------|
| Framework  | Next.js 14 (App Router) |
| Language   | TypeScript (strict mode) |
| Styling    | Tailwind CSS          |
| Database   | Supabase (PostgreSQL) |
| AI         | Vercel AI SDK + OpenAI |
| Monorepo   | PNPM + Turborepo      |

## Design System Quick Reference

### Colors (Dark Theme)

```
Background:     bg-slate-900    #0f172a
Surface:        bg-slate-800    #1e293b
Elevated:       bg-slate-700    #334155
Border:         border-slate-700
Text Primary:   text-slate-50
Text Secondary: text-slate-400
Accent:         bg-amber-500    #f59e0b
Accent Hover:   bg-amber-400
```

### Evidence Rating Colors

```
A (Strong):     text-emerald-400  bg-emerald-500/20
B (Good):       text-green-400    bg-green-500/20
C (Moderate):   text-amber-400    bg-amber-500/20
D (Weak):       text-orange-400   bg-orange-500/20
F (None):       text-red-400      bg-red-500/20
```

### Typography

```
Hero:           text-4xl md:text-5xl lg:text-6xl font-bold
Page Title:     text-3xl md:text-4xl font-bold
Section:        text-2xl font-semibold
Card Title:     text-xl font-semibold
Body:           text-base
Small:          text-sm text-slate-400
```

### Spacing

```
Section:        py-16 md:py-24
Container:      max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Card:           p-6
Grid Gap:       gap-6 or gap-8
```

### Standard Components

```jsx
// Primary Button
<button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors">

// Secondary Button
<button className="border border-slate-600 hover:border-slate-500 text-slate-50 font-semibold px-6 py-3 rounded-lg">

// Card
<div className="bg-slate-800 rounded-xl p-6 border border-slate-700">

// Input
<input className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent">
```

## Evidence Standards

Every health/science claim needs:
- Citation to primary source
- Evidence rating (A/B/C/D/F)
- Context (study type, limitations)

Never say "studies show" without a specific citation.

## Quality Checklist (Every Build)

Before completing any build:

### Code
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] No console.log statements
- [ ] No any types
- [ ] Error boundaries in place
- [ ] Loading states for async
- [ ] Error states for failures
- [ ] Empty states for no data

### Design
- [ ] Matches design system exactly
- [ ] Mobile responsive (test at 320px)
- [ ] Dark theme consistent
- [ ] Focus states visible
- [ ] Touch targets 44px+

### Content
- [ ] No placeholder text
- [ ] No lorem ipsum
- [ ] No TODO comments
- [ ] All images have alt text
- [ ] Canadian spelling (colour, centre, etc.)

## Never Do

- Use `any` type
- Leave console.log in code
- Skip loading/error states
- Use placeholder content
- Ignore mobile experience
- Skip accessibility
- Hardcode secrets

## File Naming

```
Components:     PascalCase.tsx    → ProductCard.tsx
Utilities:      camelCase.ts      → formatDate.ts
Pages:          lowercase         → about/page.tsx
Database:       snake_case        → user_favorites
```
