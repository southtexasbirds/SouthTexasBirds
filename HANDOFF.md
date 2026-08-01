# HANDOFF.md

## Last updated
- **Date:** 2026-07-31
- **Agent:** Desktop

---

## Desktop Agent — 2026-07-31

### What was done this session
- Researched comparable birding destination sites (World Birding Center, Great Texas Coastal Birding Trail, regional tour operators) for improvement ideas.
- Built the `/checklist` page from the laptop agent's own "what's next" list (2026-07-01/07-02 entries below): a printable checklist of all 50 species grouped by family, with a print stylesheet (hides header/footer via a `.no-print` class + `@media print` rule in `globals.css`) and a print/save-as-PDF button. Added to the nav (`Header.tsx`) and `sitemap.ts`.
- Extracted the inline `birds` array out of `app/birds/page.tsx` into `app/birds/data.ts` so the checklist page (a server component) can reuse it — `app/birds/page.tsx` is `"use client"` and couldn't be imported from directly. `toBirdId`/`BIRDS_ORDER` in `birdsOrder.ts` were left as-is.
- Note: `desktop-work`/`laptop-work` branches are far behind `main` now — all real work happens directly on `main`; treat those branches as stale.
- Also drafted a 12-month "when to visit" grid to replace the 4-season blurbs on `/about`, but backed it out before committing — the current `/about` already has per-season target-species chips (added 2026-06-29) and FAQ JSON-LD that explicitly references the 4-season structure (e.g. "Winter (November–March)..."), so replacing it would have undone that SEO work. Left `/about` untouched.
- Added `/conservation`: a giving-back page linking to nonprofits tied to the site's own hotspots (Friends of Laguna Atascosa NWR, Friends of the Wildlife Corridor for Santa Ana/LRGV NWR, National Butterfly Center) plus regional/national groups (Valley Land Fund, Audubon Texas, American Bird Conservancy). All donate links verified via search before adding, not guessed. No payment handling on-site — this was a deliberate choice over a "support this site" donate button, since the site has no confirmed traffic yet and setting up a payment account is the user's call, not something to do unprompted.
- User then asked for the "support this site" button after all. Walked them through creating a PayPal Business Profile / PayPal.Me link in their own already-logged-in browser session (via Claude in Chrome) — user chose the username and confirmed the location-privacy and publish steps at each prompt; nothing was submitted without explicit confirmation. Live at **paypal.me/southtexasbirds**. Added a "Support This Site" link to the site footer (`layout.tsx`) and a full section on `/about`, both linking out to that PayPal.Me page — no payment form or PayPal SDK embedded on-site.

### What's next (from competitor research, not yet done)
- eBird "recent sightings" link per hotspot on `/hotspots` (note: 2026-06-30 session already added eBird + Google Maps action links to hotspot cards — check current state before duplicating).
- Interactive map on `/hotspots` plotting the 9 sites (lat/lng already exists in `geoCoords` in `app/hotspots/page.tsx`, currently only used for JSON-LD schema, not shown to users).
- Standalone photo gallery page reusing existing Wikimedia species photos.
- "Suggested itineraries" page (e.g. "3-day RGV loop") stitching hotspots + species together.

### Notes
- `npm install` was needed twice this session — `node_modules` wasn't present at session start, and again after picking up origin's `lenis` dependency.
- Build (`npm run build`) and this session's own files pass lint clean. Pre-existing lint issues (unescaped apostrophes in several species/news pages, a set-state-in-effect warning in `Header.tsx`, an unused import in `credits/page.tsx`) were left alone — unrelated to this session.
- Mid-session, `git push` was rejected because origin/main had ~90 commits of laptop-agent work (SEO schema, 15 news articles, homepage overhaul) that weren't in this machine's local `main` at session start. Local work was rebased on top of the fetched origin/main rather than force-pushed; nothing was lost. A `backup/desktop-session-2026-07-31` branch holds the original 3 commits from before the rebase, in case anything from that first pass (a data.ts extraction with a `detailPages` map, and the 12-month `/about` grid) is wanted later — safe to delete once confirmed unneeded.

---

## Laptop Agent — 2026-07-02

### What was done this session

**New news article (article #15): Estero Llano Grande birding guide**
- Created `app/news/estero-llano-grande-birding-guide/page.tsx`
- Targets "estero llano grande birding", "masked duck texas", "northern jacana texas" keyword clusters
- Covers: Masked Duck (most reliable U.S. site), Northern Jacana, Least Grebe, waterbirds, visitor center feeders, Alligator Lake Trail, Dowitcher Pond, when to visit
- Three JSON-LD blocks: BreadcrumbList, NewsArticle, FAQPage (4 Q&As)
- Related Articles: santa-ana-nwr-birding-guide, bentsen-rgv-state-park-birding-guide, birds-only-in-south-texas
- Added guide link button to Estero hotspot card in hotspots page
- News index and sitemap updated (now 15 articles total)

**Complete two-link "In the News" coverage — all 50 species pages now have 2 news links**
- Estero links added to: masked-duck, northern-jacana, least-grebe, black-bellied-whistling-duck, green-kingfisher, groove-billed-ani
- Remaining single-link species upgraded with best-fit second articles:
  - inca-dove (+ birding-calendar), greater-roadrunner (+ thornscrub), vermilion-flycatcher (+ santa-ana)
  - olive-sparrow (+ santa-ana), long-billed-thrasher (+ santa-ana), white-tipped-dove (+ santa-ana)
  - reddish-egret (+ fall-shorebird), scissor-tailed-flycatcher (+ birding-calendar)
  - broad-winged-hawk (+ bentsen), harriss-hawk (+ raptor-specialties), swallow-tailed-kite (+ raptor-specialties)
  - tropical-parula (+ birds-only), botteris-sparrow (+ birds-only)
  - red-crowned-parrot (+ rgvbf), green-parakeet (+ rgvbf), couchs-kingbird (+ bentsen)
  - whooping-crane (+ birding-calendar), painted-bunting (+ birds-only), american-oystercatcher (+ painted-bunting-south-padre)

**State of site as of this session:**
- 15 news articles (destination guides for Santa Ana, Bentsen, Laguna Atascosa, Estero + 11 others)
- 50 species pages, all with 2+ "In the News" links
- 6 of 9 hotspot cards have "Complete Birding Guide" link buttons (Estero, Laguna Atascosa, South Padre, Salineño, Bentsen, Santa Ana)
- All pages: BreadcrumbList + FAQPage JSON-LD

### What's next
- Write destination guides for the 3 remaining hotspots without guide links: Resaca de la Palma, National Butterfly Center (Mission), Quinta Mazatlan (McAllen) — each targets a keyword cluster and links back to relevant species
- Could write a 16th article targeting general "rio grande valley birding guide" or "south texas birding hotspots" overview article (high-traffic keyword)
- Could add a trip-planning feature or interactive hotspot map
- Could add a /checklist page for life-list tracking

### Notes
- All changes on `main` branch, pushed
- Build should be clean: 70 pages (69 prior + 1 new news article), all static

---

## Laptop Agent — 2026-07-01

### What was done this session

**New news article (12th):**
- Created `app/news/laguna-atascosa-birding-guide/page.tsx` — complete destination guide for Laguna Atascosa NWR
- Targets "laguna atascosa birding", "aplomado falcon viewing texas", "south texas coast birds" keyword clusters
- Three JSON-LD blocks: BreadcrumbList, NewsArticle, FAQPage (4 Q&As); Related Articles cross-links to south-texas-raptor-specialties, fall-shorebird-season-south-padre, spacex-refuge-land-exchange
- Added to `app/news/page.tsx` articles array and `app/sitemap.ts` NEWS_SLUGS (now 12 news articles)
- `isoDate: "2026-07-01"`, tags: ["Destination Guide", "Raptors", "RGV"]

**"In the News" links updated for 7 species pages:**
- aplomado-falcon: replaced spacex link with laguna-atascosa-birding-guide (more directly relevant)
- white-tailed-kite: upgraded to two-link (laguna-atascosa + raptor-specialties)
- roseate-spoonbill: upgraded to two-link (laguna-atascosa + fall-shorebird)
- tricolored-heron: upgraded to two-link (laguna-atascosa + fall-shorebird)
- piping-plover: upgraded to two-link (laguna-atascosa + fall-shorebird)
- mottled-duck: upgraded to two-link (laguna-atascosa + fall-shorebird)
- neotropic-cormorant: upgraded to two-link (laguna-atascosa + fall-shorebird)

### What's next
- Could write a 13th article targeting "south padre island birding" keyword cluster
- Could add FAQ JSON-LD to the /hotspots or /gear pages
- Could add an interactive species checklist or seasonal calendar feature
- eBird checklist embed or recent sightings block (needs eBird API access)

### Notes
- All changes on `main` branch
- Build should be clean: 68 pages (67 prior + 1 new news article), all static

---

## Laptop Agent — 2026-06-30

### What was done this session

**FAQPage JSON-LD (final batch):**
- Completed FAQPage schemas on all 50 species pages — every species page now has both Article JSON-LD and FAQPage JSON-LD with 4 Q&As

**New news article:**
- Created `app/news/south-texas-raptor-specialties/page.tsx` — full article covering South Texas's 7 resident raptor specialties: Hook-billed Kite, Gray Hawk, White-tailed Hawk, White-tailed Kite, Aplomado Falcon, Ferruginous Pygmy-Owl, Crested Caracara
- Article includes BreadcrumbList + NewsArticle + FAQPage JSON-LD; targets "south texas raptors", "hook-billed kite texas", "white-tailed hawk texas" keywords
- Added to `app/news/page.tsx` articles array and `app/sitemap.ts` NEWS_SLUGS (now 11 news articles)
- `isoDate: "2026-06-30"`, tags: ["Raptors", "Species Guide", "RGV"]

**"In the News" links added/updated:**
- hook-billed-kite: added raptor-specialties article (alongside existing fall-hawk-migration link)
- white-tailed-hawk: added raptor-specialties article (alongside existing fall-hawk-migration link)
- crested-caracara: added raptor-specialties article (alongside existing fall-hawk-migration link)
- aplomado-falcon: added raptor-specialties article (alongside existing spacex-land-exchange link)
- ferruginous-pygmy-owl: added raptor-specialties article (alongside existing thornscrub-restoration link)
- gray-hawk: new "In the News" section added (links to raptor-specialties)
- white-tailed-kite: new "In the News" section added (links to raptor-specialties)

### What's next
- Could build more species-cluster news articles (e.g. "South Texas Waterbirds", "Valley Sparrows")
- Could add a dedicated /raptors or /guides section for curated lists
- FAQ schema could go on the /hotspots or /gear pages
- Could add eBird checklist embed or recent sightings block (needs eBird API access)

### Notes
- All changes on `main` branch, not yet pushed — run `git push origin main`
- Build should be clean: 67 pages (66 prior + 1 new news article), all static

---

## Laptop Agent — 2026-06-29

### What was done this session

**Internal linking & content:**
- About page season cards: added 3 target species chip links per season (12 links total, all verified against actual species page slugs)
- Added 4th news article: "Tamaulipan Thornscrub Restoration Expands Across the Rio Grande Valley" (thornscrub-restoration-rgv)
- Added "In the News" sections to Green Jay, Plain Chachalaca, and Ferruginous Pygmy-Owl species pages, all linking to thornscrub article
- News listing page: updated from 3 to 4 articles; homepage news grid expanded to 4 columns

**Related Species:**
- Added `RELATED_SPECIES` map to `birdsOrder.ts` — 50 species, 3 curated related slugs each
- `BirdNav.tsx` now renders a "Related Species" chip row on every species page

**SEO:**
- Canonical URLs (`alternates.canonical`) added to all 65 pages via batch (homepage, about, birds listing, birds layout, hotspots, news listing, gear, credits, all 4 news articles, all 50 species pages)
- `og:type: "article"` added to all 50 species pages (batch)
- `datePublished: "2026-06-20"`, `dateModified: "2026-06-28"`, and `url` added to Article JSON-LD on all 50 species pages (batch)
- `FAQPage` JSON-LD added to about page (4 Q&As covering best seasons, winter/spring birds, top hotspots)
- `Organization` JSON-LD added to homepage (logo, sameAs, description)
- WebSite/Organization JSON-LD was already in root layout — duplicate removed from homepage
- `/birds` listing page: BreadcrumbList JSON-LD added (client component)

**Hotspots:**
- Google Maps + eBird explore buttons added to each hotspot card footer (using existing geoCoords data)
- Address link in card header simplified (no longer duplicated)

### What's next
- Could add more news articles (site now has 4, more would strengthen the news section)
- FAQ schema could also go on the hotspots or gear pages
- Species pages could add `author` to Article JSON-LD
- Consider adding a "Best time to see" section on individual species pages
- Could add eBird checklist embed or recent sightings block (needs eBird API access)
- The `robots.txt` is minimal — could add `Disallow` rules if needed
- Could add a `geo.position` meta tag to the hotspots page for location search

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
