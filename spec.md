# VENICE Brand

## Current State
Full five-page vintage editorial site (Home, Beauty, Fashion, Talent, Contact) with user accounts, inbox messaging, and a verified badge for KeegantheCEO@VENICEtalent.com. No Recommendations page exists yet.

## Requested Changes (Diff)

### Add
- New `RecommendationsPage.tsx` with two sections:
  1. **Beauty Brands** — 8 cards featuring real brands (Doting Beauty, Boreal, Rare Beauty, Charlotte Tilbury, Tower 28, Ilia, Saie, Fenty Beauty), each with a short description and a working external link to their official website.
  2. **Movies** — 3 cards for Legally Blonde, Mean Girls, and Gentlemen Prefer Blondes, each with a description and a link to where to watch (JustWatch or streaming platform).
- Add `"recommendations"` as a valid `Page` type in `App.tsx`
- Add Recommendations route to `App.tsx` renderPage switch
- Add "Recommendations" link to `Navigation.tsx` mainNavLinks
- Add "Recommendations" link to the footer nav list in `Footer.tsx`

### Modify
- `App.tsx` Page type union — add `"recommendations"`
- `Navigation.tsx` mainNavLinks array — add Recommendations entry
- `Footer.tsx` footer nav list — add recommendations page link

### Remove
- Nothing

## Implementation Plan
1. Create `src/frontend/src/pages/RecommendationsPage.tsx` with vintage editorial styling matching the rest of the site
2. Update `App.tsx` Page type and renderPage switch
3. Update `Navigation.tsx` mainNavLinks
4. Update `Footer.tsx` nav list
5. Validate (typecheck + build)
