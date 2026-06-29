# HANDOFF.md

## Last updated
- **Date:** 2026-06-28
- **Agent:** Laptop

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
