# HANDOFF.md

## Last updated
- **Date:** 2026-07-31
- **Agent:** Desktop (competitor research + site improvements)

---

## Desktop Agent — 2026-07-31

### What was done this session
- Note: `desktop-work`/`laptop-work` branches from June are far behind `main` (all species pages, /news, etc. now live only on `main`) — treat them as stale, work directly off `main`.
- Researched comparable birding destination sites (World Birding Center, Great Texas Coastal Birding Trail, regional tour operators) for improvement ideas.
- Extracted the bird catalog into `app/birds/data.ts` (shared by `/birds` and the new checklist page).
- Added `/checklist`: printable species checklist grouped by family, with a print stylesheet and print/PDF button.
- Replaced the 4-season blurb grid on `/about` with a 12-month target-species grid linking to `/birds`.

### What's next (from competitor research, not yet done)
- eBird "recent sightings" link per hotspot on `/hotspots`.
- Interactive map on `/hotspots` plotting the 9 sites (lat/lng already exists in `geoCoords`, currently only used for JSON-LD schema, not shown to users).
- `/events` festival/calendar page (currently festivals are one-off `/news` posts, e.g. RGVBF).
- Standalone photo gallery page reusing existing Wikimedia species photos.
- "Suggested itineraries" page (e.g. "3-day RGV loop") stitching hotspots + species together.

### Notes
- `npm install` was needed — `node_modules` wasn't present at session start.
- Build and lint pass; two pre-existing lint issues unrelated to this session (Header.tsx set-state-in-effect, credits/page.tsx unused import) were left alone.

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
