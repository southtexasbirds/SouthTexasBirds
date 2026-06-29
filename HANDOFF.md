# HANDOFF.md

## Last updated
- **Date:** 2026-06-28 (extended session)
- **Agent:** Laptop

---

## Laptop Agent — 2026-06-28 (extended tune-up session)

### What was done this session
Full-site optimization across SEO, accessibility, content, and code quality:

**Metadata / SEO:**
- Added `card: "summary_large_image"` + images to twitter metadata on about, gear, homepage, hotspots pages
- Added `og:type: "article"` + `publishedTime` + `section` to all 3 news article openGraph
- Added `BreadcrumbList` JSON-LD to every page: via BirdNav for all 50 species pages; directly on news articles, hotspots, about, gear, news listing
- Added `NewsArticle` JSON-LD to all 3 news article pages
- Added `ItemList` JSON-LD to news listing and gear pages
- Added `Organization` JSON-LD to about page
- Added credits page (`/credits`) to sitemap with `changeFrequency: "yearly"`

**Accessibility:**
- Added `lang="la"` to scientific name `<p>` elements on all 50 species pages (batch PowerShell)
- Added `lang="es"` to Spanish common name `<span>` on all 50 species pages (same batch)
- Replaced date `<span>` chips with `<time dateTime="...">` in all 3 news article pages

**Content / Internal linking:**
- Added "Latest News" preview section to homepage (3 article cards with date, title, excerpt)
- Featured bird chips on homepage are now Links to species pages (were static divs)
- "In the News" sections added to Whooping Crane and Aplomado Falcon species pages
- Species names in about page prose linked to their detail pages (Green Jay, Altamira Oriole, Plain Chachalaca, Buff-bellied Hummingbird, Ferruginous Pygmy-Owl, Whooping Crane, Broad-winged Hawk)
- Hotspot bird chips now link directly to `/birds/{slug}` for 47/50 species (3 without pages fall back to listing anchor)

**BirdNav enhancements:**
- Cornell Lab (All About Birds) and eBird chip links added below prev/next nav on every species page

**Footer:**
- Added nav row: Species | Hotspots | News | Gear | About

**Code quality:**
- Extracted `toBirdId` to `birdsOrder.ts` as named export; removed duplicate definitions in birds/page.tsx and hotspots/page.tsx
- Removed unused `motion` (Framer Motion) package (`npm uninstall motion`)
- Removed dead `.card-glass` CSS class from globals.css

### What's next
- Consider adding `og:type: "article"` to individual species pages (needs batch edit or birds layout change)
- Could add author / datePublished fields to the Article JSON-LD on species pages
- Consider a "Related Species" section on species pages (similar birds section)
- More news articles! Site currently has 3 — adding more would improve news section depth
- Could add eBird location links on individual hotspot cards

### Notes
- All changes committed and pushed to `main`
- Build is clean: 66 pages, all static prerendered
- `node_modules` not committed (in .gitignore); run `npm install` on fresh checkout

---

## Laptop Agent — 2026-06-28

### What was done this session
- Applied `HeroFrame vignette` to all remaining 49 species pages (was only on green-jay)
  - 12 pages had multi-line div format; 37 had single-line format — both handled via script
  - Each page: added `import HeroFrame`, replaced `<div className="relative w-full rounded-2xl overflow-hidden" ...>` with `<HeroFrame vignette className="w-full rounded-2xl" ...>`
  - Build passes clean (all 50 species pages prerendered static, no TypeScript errors)

### What's next
- Consider `HeroFrame tint="teal"` on species pages where photo colors clash with the palette
- `card-glass` utility is available for cards over colored/photo backgrounds
- Could look at adding a second/supplementary photo per species page, or linking to eBird/Cornell

### Notes
- `node_modules` still not committed (in .gitignore); run `npm install` on any fresh checkout

---

## Laptop Agent — 2026-06-21

### What was done this session
- Added cinematic visual effects (committed to `main`):
  - `FilmGrain` component: fixed SVG feTurbulence overlay, opacity 0.04, added to root layout
  - `HeroFrame` component: composable server component adding vignette/tint overlays above hero images
  - Homepage hero: inline vignette radial-gradient overlay added
  - Green Jay species page: hero image wrapped with `HeroFrame vignette`
  - `AnimateIn`: easing upgraded to `cubic-bezier(0.16, 1, 0.3, 1)` at 0.75s (expo-out feel)
  - `globals.css`: `.film-grain` and `.card-glass` utility classes added
- Visually verified homepage and green-jay page with Edge headless screenshots — both render correctly

### What's next
- Apply `HeroFrame vignette` to remaining 30+ species pages (currently only green-jay has it)
- Consider `HeroFrame tint="teal"` on species pages where the photo colors clash with the palette
- `card-glass` utility is ready to use anywhere cards sit over a photo/colored background

### Notes
- `node_modules` was absent on this machine — ran `npm install` (not committed, in .gitignore)
- Desktop agent added a whooping-crane news article to main; pulled in cleanly before this commit

---

## Desktop Agent — 2026-06-20

### What was done this session
- Created `desktop-work` and `laptop-work` branches from `main`, pushed both to origin
- Created `.claude/agents/content-researcher.md` and `frontend-stylist.md` sub-agent definitions
- Applied teal+sand palette fixes to `app/page.tsx`
- Added Green Jay species page at `app/birds/green-jay/page.tsx`
- Merged both branches into `main`
- Corrected remote URL to `Cardops/southtexasbirds.github.io`

### Notes for the other agent
- This repo contains both a static site (`index.html`, `style.css`, etc.) and a Next.js app (`app/`)
- `frontend-stylist.md` updated to the laptop's richer static-site version
- No `setup-agents.ps1` exists on the desktop machine — branches were created manually

---

## Laptop Agent — 2026-06-20

### What was done this session
- Updated homepage `<h2>` headline in `index.html` to "Your Guide to the Birds of South Texas"

### What's next
- Desktop agent should pull `laptop-work`, review the change in a browser, and pick a follow-up content task

### Notes
- None
