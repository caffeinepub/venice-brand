# VENICE Brand Website

## Current State
New project — no existing pages or content.

## Requested Changes (Diff)

### Add
- Multi-page single-page application (SPA) with 5 sections: Home, Beauty, Fashion, Talent, Contact
- Vintage multi-era aesthetic (1776 colonial, 1920s Art Deco, 1930s Hollywood, 1940s wartime, 1950s pin-up, 1960s mod)
- Ornate newspaper-masthead navigation bar
- Hero section with layered Art Deco geometric patterns, parchment textures, jewel tones, gold accents
- Beauty Tips editorial page (Skincare, Hair, Wellness, Timeless Looks) — wisdom-sharing, not product sales
- Fashion editorial lookbook page with era-specific features (flapper, 1940s silhouettes, mod)
- Talent showcase page with talent profiles, spotlight, open casting/submissions
- Contact page with 6 email cards styled as wax-seal/ornate letter cards plus a contact form
- Ornate vintage footer with large VENICE wordmark
- Era badge stamps throughout ("Est. 1920", "Since the Golden Age", etc.)
- CSS grain textures, Art Deco borders, vintage flourishes using CSS + Unicode/SVG
- Google Fonts: Playfair Display, Cormorant Garamond, Great Vibes
- Sepia hover effects on images, smooth vintage page transitions
- Fully responsive layout

### Modify
Nothing — new build.

### Remove
Nothing — new build.

## Implementation Plan
1. Build a single HTML file (`index.html`) in `src/frontend/public/` with:
   - Embedded `<style>` block with all CSS (design tokens, typography, textures, layout, animations)
   - Embedded `<script>` block for SPA navigation (show/hide sections)
   - All 5 page sections as `<section>` elements toggled by JS
2. Design tokens: cream/ivory bg, deep burgundy, antique gold, sepia, dusty rose, midnight navy
3. Typography: Great Vibes for VENICE brand name, Playfair Display for headlines, Cormorant Garamond for body
4. CSS textures: radial/linear gradients layered to simulate aged paper + grain noise
5. Art Deco ornamental dividers using SVG inline + CSS pseudo-elements with Unicode decorative characters
6. Navigation: fixed masthead bar with ornate ruled lines above/below, era badge
7. All editorial content inline (placeholder articles, talent bios, fashion features)
8. Contact email cards: grid of 6 cards each linking via `mailto:` with wax-seal styling
9. Contact form: name, email, subject, message fields in vintage-styled form
10. Footer: full-width ornate footer, large VENICE in Great Vibes, decorative borders, social icon links
