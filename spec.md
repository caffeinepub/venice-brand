# VENICE Brand

## Current State
- Full multi-page app: Home, Beauty, Fashion, Talent, Contact, Inbox, Sign In, Sign Up
- Auth is localStorage-based with session persistence (SESSION_KEY stored on login/signup)
- On page load, `useAuth` reads the stored session and restores `currentUserEmail`
- Navigation shows Inbox/email/Sign Out when logged in, or Sign In/Sign Up when logged out
- However: if a user navigates to the Sign In or Sign Up page while already logged in, those pages still render normally (no redirect)
- HomePage has a full-viewport Art Deco hero with a static background image, followed by About Strip, Feature Cards, Quote Banner, and Latest From The Edit sections
- No image slideshow exists on the home page

## Requested Changes (Diff)

### Add
- Image slideshow on the HomePage hero section: full-width, auto-advancing (4-5 seconds per slide), with manual prev/next arrows and dot indicators; featuring AI-generated vintage portrait images of Marilyn Monroe-style and 1950s/1980s icons with glamour aesthetic
- Persistent profile redirect: if a user is already signed in and navigates to `/signin` or `/signup` pages, automatically redirect them to their Inbox/profile page instead

### Modify
- App.tsx: when rendering `signin` or `signup` pages, check `isLoggedIn` (from `useAuth`) and redirect to `inbox` if true
- HomePage: replace static hero background with an image slideshow component; the VENICE wordmark, tagline, and CTA buttons remain overlaid on top of the slideshow
- The slideshow sits behind the existing hero overlay and text content

### Remove
- Nothing removed

## Implementation Plan
1. Generate 5 AI portrait images for the slideshow (Marilyn Monroe-style, Audrey Hepburn-style, Grace Kelly-style, Madonna 1980s-style, Cyndi Lauper 1980s-style) — vintage editorial look
2. Create a `HeroSlideshow` component that cycles through the images with fade transitions, auto-advance timer, prev/next arrows, and dot indicators
3. Integrate `HeroSlideshow` into `HomePage` hero section as the background layer (behind the dark overlay and text)
4. Update `App.tsx` to call `useAuth` and redirect signed-in users away from `signin`/`signup` pages to `inbox`
