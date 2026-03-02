# VENICE Brand

## Current State
The app has: Home, Beauty, Fashion, Talent, Contact, Recommendations, SignIn, SignUp, and Inbox pages. Navigation is in Navigation.tsx and App.tsx. The Page type union and nav links both need extending for new pages.

## Requested Changes (Diff)

### Add
- A new "Beauty News" page (`BeautyNewsPage.tsx`) that displays a daily beauty editorial with 6 paragraphs/articles.
- Articles cover: fashion news, makeup trends, and talent spotlights with a focus on Playboy models/talent, Netflix stars, and Prime Video talent.
- The page has a "Today's Edition" masthead with a date stamp and 6 editorial article cards, each with a full paragraph body.
- Page key: `"beautynews"` added to the `Page` type in App.tsx and Navigation.tsx.
- Nav link "News" added to mainNavLinks in Navigation.tsx.

### Modify
- `App.tsx`: Add `BeautyNewsPage` import, add `"beautynews"` to `Page` type, add case in `renderPage`.
- `Navigation.tsx`: Add `"beautynews"` to the local `Page` type, add `{ label: "News", page: "beautynews" }` to `mainNavLinks`.

### Remove
- Nothing removed.

## Implementation Plan
1. Create `src/frontend/src/pages/BeautyNewsPage.tsx` with 6 editorial news articles spanning fashion, makeup, and talent (Playboy, Netflix, Prime Video focused).
2. Update `App.tsx` to import and route to `BeautyNewsPage`.
3. Update `Navigation.tsx` to include the "News" nav link.
