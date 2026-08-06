# HANDOFF.md

## Last updated
- **Date:** 2026-08-06
- **Agent:** Desktop (branch `feat/motion-and-species`, off `main`, not yet merged)

---

## Desktop Agent — 2026-08-06 (reduced-motion audit, Muscovy Duck + Brown Jay species pages, 52-species count sweep)

### What was done this session
On branch `feat/motion-and-species`, cut from `main` (which does **not** include the still-unmerged `feat/seo-sitemap` branch from a separate session — that branch's sitemap/robots/canonical/breadcrumb work is not part of this one and still needs its own merge).

- **prefers-reduced-motion audit**: The task described the site as using "Lenis smooth scroll and Framer Motion" — Framer Motion (the `motion` npm package) isn't actually in this project; it was removed in the 2026-06-28 session (see that entry below) and the site's scroll-reveal effect is `AnimateIn`, a hand-rolled `IntersectionObserver` + CSS-transition component, not a library. Audited what's actually there instead of installing Framer Motion just to wire up `MotionConfig`:
  - `SmoothScroll` (Lenis): already checked `prefers-reduced-motion` once before initializing: now also listens for `change` on the media query and starts/stops Lenis live if the user flips the OS setting without reloading.
  - `AnimateIn`: already skipped its transform entirely when reduced-motion is set — verified, no change needed.
  - Swept all CSS for animations/transitions needing a guard: only hover-triggered opacity transitions exist sitewide (user-initiated, not infinite or large-movement — didn't need a guard per the task's own criteria), and `FilmGrain`/`HeroFrame` overlays are static (no `@keyframes`). Nothing else found.
  - Commit: `feat: respect prefers-reduced-motion site-wide`.
- **LazyMotion — skipped, not applicable**: same root cause as above. There is no `framer-motion` import anywhere in the codebase to migrate to `LazyMotion`/`m`, and no `framer-motion`/`motion` dependency in `package.json` or the lockfile. Installing the library solely to configure `LazyMotion` around zero actual animations would be pure overhead with no bundle-size win to report — the opposite of what the task asked for. No commit made for this item, per the task's own "or note in HANDOFF why skipped" instruction.
- **Muscovy Duck species page**: Added to `app/birds/data.ts` and `birdsOrder.ts` (`BIRDS_ORDER` + `RELATED_SPECIES`), status "Rare resident." New page at `/birds/muscovy-duck` matching the existing template exactly, built around the wild-vs-feral distinction that's the whole point of the page: true wild birds are dark and iridescent with a white wing patch and only a small facial-skin patch, vs. the pied, warty-faced feral park bird most people picture and that isn't countable. Salineño (primary, dawn from the riverbank) and the Falcon Dam area (secondary, linked to `/hotspots` generally since it has no dedicated hotspot card — following the existing precedent set by the White-collared Seedeater page for secondary sites without their own card). Image: reused the Salineño hotspot card's existing photo rather than sourcing a duplicate of the same bird — it was already verified as genuine wild-type (dark plumage, white wing patch, minimal caruncle) and already downloaded/credited from a previous session. Added a `muscovy-duck` species entry to `scripts/image-inventory.json` sharing that `sourceUrl` with the `salineno` hotspot entry (documented in `sharedSourceFiles`), ran `migrate-images.mjs` to generate the species hero + thumb webp variants (deduped, no re-download). Renamed the `/credits` entry from "Muscovy Duck (Salineño hotspot)" to plain "Muscovy Duck" now that one credit covers both usages — matches how Green Jay's shared species/hotspot photo is credited. Wired into `/birds` (card grid; its "Rare resident" status already fit the existing "Rare" filter group, no new category needed), `/checklist` (Ducks family group, automatic from `data.ts`), and re-linked the Salineño hotspot chip, which now points at `/birds/muscovy-duck` instead of rendering as plain text. Commit: `feat: Muscovy Duck species page`.
- **Brown Jay species page**: Added to `data.ts`/`birdsOrder.ts`, status **"Historical / vagrant"** — added as a new residency category since none of the existing ones (Resident/Rare/Winter/Summer/Migrant) honestly fit a species that's effectively gone from the U.S.; added a matching filter chip and a distinct muted-gray badge style on `/birds` so it doesn't visually read as a findable resident bird. New page at `/birds/brown-jay`, same template, framed honestly per the task: Salineño's history as the hook, identification/behavior described from where the species remains common (Mexico/Central America), and both the "Where to See" and "Best Time to See" sections say plainly the bird is not currently expected anywhere in the U.S. rather than implying it's findable. **Used the currently accepted scientific name, `Cyanocorax morio`, instead of the task's `Psilorhinus morio`** — `Psilorhinus` was merged into `Cyanocorax` after molecular studies found it nested within that genus (confirmed: `Psilorhinus morio` is now a redirect/synonym category on Wikimedia Commons), and using the outdated name on a birding-reference site would be a real accuracy error. Noted as the page's Fun Fact since it's a genuinely interesting aside — it puts Brown Jay in the same genus as the Green Jay. Image: new CC BY 2.0 Wikimedia Commons photo (Andy Reago & Chrissy McClarren, a clear adult on the ground), added as a new species entry in `image-inventory.json`, run through `migrate-images.mjs`, credited on `/credits`. Wired into `/birds` (card grid + new Historical filter), `/checklist` (Jays & Crows family group, automatic), and re-linked the Salineño hotspot chip. Commit: `feat: Brown Jay species page`.
- **52-species count sweep**: Grepped the whole `app/` tree for species-count copy and metadata (not a blind find-replace — read each hit in context first). Updated homepage (meta description/OG/Twitter, both hero CTA buttons, Organization JSON-LD description), `/birds` layout metadata (title + description, was "50+"), `/gallery` metadata, `/checklist` metadata, and `/credits`' photo-count badges (51 of 52 images now that Brown Jay added one new credit entry; Muscovy Duck reused an existing one, so no new credit for it). **Deliberately left `app/layout.tsx`'s "500+ species" untouched** — that's a real, distinct statistic (the Rio Grande Valley's all-time recorded species count as a birding region), not this site's page count, so lumping it into the 50→52 sweep would have introduced a factual error rather than fixed one. In-page counts already computed from `birds.length` (e.g. `/birds` and `/checklist` body copy, `/birds` filter chip counts) needed no manual edit — confirmed they now read 52/1 automatically in the build output. Commit: `chore: update species counts to 52 site-wide`.
- Build (`npm run build`) and lint (`npm run lint`) both pass clean (exit 0) after every commit in this session, not just at the end. Confirmed in the build output: both new pages render as static pages, both appear in `/sitemap.xml` (78 `<url>` entries, up from 76), and both Salineño hotspot chips now link to `/birds/muscovy-duck` and `/birds/brown-jay` instead of rendering as plain unlinked text.

### What's next
- **`feat/seo-sitemap` branch (from a separate, still-unmerged session) needs to be merged** — it has sitemap.xml/robots.ts/canonical/breadcrumb work that predates this branch and isn't included here. Merge order matters: both branches touch `app/news/data.ts`-adjacent files and `app/birds/*` pages, so expect to resolve conflicts rather than fast-forward either way.
- **Species gap fills — now closed**: Muscovy Duck and Brown Jay both have full pages; the site is at 52 species.
- **Long-tail content** — more destination guides, seasonal articles, or species-cluster pieces, per the pattern of the existing 15 news articles. Neither new species page has an "In the News" section (no existing article covers either bird) — could be a angle for a future Salineño-focused article covering both the Muscovy Duck and the Brown Jay's decline together.
- Branch `feat/motion-and-species` has been pushed to origin but **not merged to `main`**.

---

## Desktop Agent — 2026-08-05 (branch integration complete)

### What was done this session
Merged both unmerged branches from earlier today into `main`, in order:

1. `fix/audit-aug5` → `main` (clean merge, no conflicts — `main` hadn't diverged since that branch was cut).
2. `main` → `feat/local-images`, to pull the just-merged audit work in before finishing that branch. This produced conflicts in `HANDOFF.md` and all 50 species page files (`app/birds/*/page.tsx`) — in every case the same one-line conflict: each species page's JSON-LD `Article.image` field, where `feat/local-images` had the per-page local photo (`/images/birds/{slug}.webp`) and `fix/audit-aug5`'s work on `main` had the sitewide `og-default.jpg` fallback. Resolved every one in favor of the per-page local image (per-page beats the sitewide default — a more accurate social-share image for each species). `app/layout.tsx`, `app/page.tsx`, `app/birds/data.ts`, and `app/hotspots/page.tsx` all auto-merged cleanly with no conflicts, because the two branches had touched different lines in each (hero/OG image lines vs. species-photo/hotspot-photo lines, or in `data.ts`'s case, the `photo` field vs. the unrelated `family` field) — confirmed each merged correctly by inspection, not just by "no conflict markers." `HANDOFF.md`'s conflict (both branches had written a session entry with the same date) was resolved by keeping both write-ups as separate dated entries rather than picking one.
3. `feat/local-images` (now containing both branches' work) → `main`, clean merge.

- **Final state**: every image on the site is self-hosted from `/public/images/` — the homepage hero (`hero-altamira.webp`), the sitewide default OG/social-share image (`og-default.jpg`), all 50 species-page heroes and card thumbnails, and all 9 hotspot card photos. Every species page's `openGraph`/`twitter`/JSON-LD image now points at that species' own local photo rather than the sitewide default, giving each page an accurate per-page social preview. Grep for `upload.wikimedia.org` returns zero results in any `src=` or metadata context anywhere in `app/`. `npm run build` and `npm run lint` both pass clean (exit 0) on `main` post-merge.

### What's next
- **`sitemap.xml` + Search Console submission** — still pending, carried over across multiple sessions now; worth prioritizing next since the site's content and image work are both in a stable state.
- **`prefers-reduced-motion` check** — `AnimateIn`, `FilmGrain`, and `SmoothScroll` (scroll/fade/grain effects) haven't been audited for whether they respect the user's reduced-motion preference. Should check and add a media-query guard if missing.
- **`LazyMotion` / code-splitting review** — not currently needed (`AnimateIn` is lightweight CSS-transition based, no heavy animation library in use), but worth a check if a heavier animation dependency is ever added later.
- **Species gap fills**: Muscovy Duck and Brown Jay are both referenced as hotspot specialties (Salineño) but have no `/birds` page of their own — both currently render as unlinked plain text in the hotspot bird-chip list (see `fix/audit-aug5`'s dead-anchor fix) rather than linking anywhere. Adding pages for these would close that gap. (Note: Red-billed Pigeon, also mentioned as a possible gap, already has a full species page at `app/birds/red-billed-pigeon/page.tsx` — if there's a different concern about its content depth, worth clarifying with Rick rather than assuming a rewrite is needed.)

---

## Desktop Agent — 2026-08-05 (image migration — `feat/local-images`)

### What was done this session
Full migration of every remaining Wikimedia-hotlinked *display* image to self-hosted, optimized local files, on branch `feat/local-images` (pushed, not yet merged to `main` as of this entry — see integration note above). Note: this branch was cut from `main` directly and does **not** include the separate `fix/audit-aug5` branch's OG/hero-image work (also unmerged at the time) — the two branches touch overlapping files (`app/layout.tsx`, `app/page.tsx`, `app/birds/data.ts`, etc.) and needed a careful merge, not a fast-forward.

- **Inventory** (`scripts/build-image-inventory.mjs` → `scripts/image-inventory.json`): found 59 image references across 50 species + 9 hotspot cards, resolving to **51 unique source files** — 8 of the 9 hotspot card photos turned out to be exact duplicates of an already-inventoried species photo (e.g. the Santa Ana card reuses the Green Jay photo), so only the Salineño/Muscovy Duck photo was genuinely hotspot-only. Confirmed zero inline `<Image>`/`<img>` elements exist anywhere in the 15 news article pages — their Wikimedia URLs are metadata-only (`openGraph`/`twitter` social-share image), not display images, so they were correctly left out of this migration's scope.
- **Download + optimize** (`scripts/migrate-images.mjs`): downloads each original full-resolution Commons file (not the 330px thumbnails the site was hotlinking) and generates `/public/images/birds/{slug}.webp` (800w q80, species hero), `/public/images/birds/{slug}-thumb.webp` (400w q75, card thumb), and `/public/images/hotspots/{slug}.webp` (800w q80). Deduped downloads by source URL so the 8 shared hotspot/species photos are fetched once. First run hit Wikimedia's anonymous-request rate limit after ~29 downloads (HTTP 429); fixed by raising the inter-request delay to 3s and making the script resumable (skips any source whose output files already exist), then re-ran — **51/51 succeeded**, nothing needed manual handling. Total `/public/images` size: **4.0MB** (well under the 50MB budget).
- **Swapped every display image to local files**: `app/birds/data.ts` (`photo` field → `-thumb.webp`), all 50 species pages (`PHOTO` const → `.webp`, dropped the now-unnecessary `unoptimized` prop), and `app/hotspots/page.tsx` (9 card `photo` fields → `/images/hotspots/{slug}.webp`, also dropped `unoptimized`). `/birds` cards, `/gallery`, and the hotspot card thumbnails already had correct `sizes` props matching their actual grid layouts from earlier work — verified rather than re-added. One incidental fix: species pages' `openGraph`/`twitter` metadata read from the same `PHOTO` const, so repointing it to the local file automatically gave every species page its own accurate social-share image instead of hotlinking; the JSON-LD `Article.image` field on each species page was a separate hardcoded literal that didn't get this benefit automatically, so it was updated to match in the same commit for consistency. Grep-verified zero `upload.wikimedia.org` in any `src=` context sitewide.
- **Attribution — checked, already complete, no changes needed**: cross-checked all 51 unique migrated files against `/credits` by filename; every one already had a full credit entry (photographer, license, dynamically-generated Wikimedia file-page link) from earlier work, including the Salineño/Muscovy Duck hotspot-only photo. Nothing was missing, so no commit was made for this step — didn't want to fabricate a diff.
- Build and lint both pass clean (exit 0).

---

## Desktop Agent — 2026-08-05 (site audit — `fix/audit-aug5`)

### What was done this session
Site audit fixes, on branch `fix/audit-aug5` (pushed, later merged to `main` — see integration note above):

- **Self-hosted hero + OG images**: Downloaded the Wikimedia Altamira Oriole photo, generated `/public/images/hero-altamira.webp` (1600px wide, q80) and `/public/images/og-default.jpg` (exactly 1200×630, center-cropped, q80, ~98KB) with `sharp`. Homepage hero now uses `next/image` with the local file (`fill`, `priority`, `sizes="100vw"`, no more `unoptimized`). Site-wide metadata (`app/layout.tsx`) and every page's `openGraph`/`twitter`/JSON-LD `image` fields now point at `https://southtexasbirds.org/images/og-default.jpg` (1200×630) instead of hotlinking Wikimedia — this touched all 50 species pages, all 15 news articles, and the remaining standalone pages (hotspots, about, gear, conservation, gallery, itineraries, checklist, news listing, birds listing layout). Deliberately did **not** touch species-page hero photos or `/birds` listing/gallery thumbnails (`app/birds/data.ts`) — those still hotlinked Wikimedia at the time; that became the `feat/local-images` branch's job (see above). Confirmed Altamira Oriole is already credited on `/credits`.
- **Dead species anchors**: On `/hotspots`, bird chips for species without a `/birds` entry now render as plain unlinked text instead of dumping users at `/birds#slug` (which doesn't exist) — checked live against `BIRDS_ORDER` from `birdsOrder.ts`, not a hardcoded list, so it stays correct as species are added. Also found and fixed one more dead anchor outside the task's list: the Buff-bellied Hummingbird species page linked to `/hotspots#sabal-palm`, a location that isn't one of the 9 tracked hotspots — unlinked it the same way. Verified all 9 `/hotspots#slug` anchors used by species pages (`bentsen`, `santa-ana`, `estero-llano-grande`, `quinta-mazatlan`, `national-butterfly-center`, `resaca-de-la-palma`, `south-padre-island`, `laguna-atascosa`, `salineno`) match `id` attributes on `/hotspots` exactly — they already did, no missing ids.
- **Nav/footer unification — investigated, found already done**: The task described `/birds` and `/gear` using a short nav (no Checklist) and short footer, versus a full nav/footer elsewhere. Checked the code and the built HTML output for `/birds`, `/gear`, and `/hotspots`: all three already render the identical `Header` component (with Checklist) and the identical full footer (Gallery, Itineraries, Support This Site, Photo Credits) from the single root `app/layout.tsx` — there is only one Nav component and one Footer in the codebase, no second variant exists anywhere. This was presumably already fixed in an earlier session. No code change was needed or made for this item; verified rather than assumed.
- **Copy fixes**: Homepage hero text, meta description, and Organization JSON-LD now say "reintroduced Aplomado Falcons make their home" instead of "Aplomado Falcons are resident." Standardized the Santa Ana NWR acreage to **2,088 acres** everywhere it was quoted as 2,000 (hotspots page, news listing excerpt, the Santa Ana guide article's own meta description/OG description, and the About page FAQ JSON-LD — the guide article's body text and FAQ already said 2,088, so this fixes an inconsistency that existed within that one article too). On `/checklist`, merged the "Hawks" and "Hawks & Kites" family groups into one "Hawks, Kites & Allies" (7 species), and renamed "Tanagers" (White-collared Seedeater, the only member) to "Seedeaters & Allies" — done by editing the `family` field in `app/birds/data.ts`, since `/checklist` derives its groups from that data rather than a hardcoded list.
- Build (`npm run build`) and lint (`npm run lint`) are both clean. Grep-verified no `upload.wikimedia.org` remains in any metadata/OG/JSON-LD `image` context sitewide.

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
- Added an interactive map to `/hotspots` (`app/hotspots/HotspotMap.tsx`, a `"use client"` component using plain `leaflet` + OpenStreetMap tiles — not `react-leaflet`, to sidestep any React 19 peer-dep friction). Plots the 9 sites using the `geoCoords` that already existed but were previously only used for invisible JSON-LD. Added `leaflet` + `@types/leaflet` as dependencies. Markers use `L.circleMarker` (no external icon image assets to manage) with a popup linking to each site's card via its existing anchor id.
- Added `/gallery`: a grid of all 50 species photos (reuses `bird.photo` from `app/birds/data.ts`, no new asset sourcing), each linking to its species page. Noticed a few Wikimedia thumbnail URLs (Aplomado Falcon, Ringed Kingfisher) fail to load intermittently — confirmed this is pre-existing on `/birds` too, not something the gallery introduced. Not fixed; worth a look if it persists.
- Added `/itineraries`: three static trip plans (3-day RGV classic loop; South Padre Island spring fallout weekend, late Apr–mid May; winter waterfowl/Whooping Crane weekend, Nov–Mar) that only link to hotspot anchors, species pages, and news articles that already exist — no new hotspot data invented. This closes out every item from the original competitor-research punch list (see prior "what's next" section, now empty).
- Confirmed the intermittent Aplomado Falcon / Ringed Kingfisher image-load failures noted above are not dead links (both Wikimedia URLs return 200 directly) — it's Next's image optimizer choking on concurrent external fetches in dev. Not a real bug; no fix needed.
- Fixed every remaining lint error/warning sitewide (`npm run lint` is now 0/0): escaped unescaped apostrophes across 25 species/news pages, replaced Header.tsx's close-mobile-menu-on-route-change `useEffect` with the React-recommended derived-state-during-render pattern (verified via JS that opening the mobile nav then clicking a link still closes it), and removed an unused `Link` import in `credits/page.tsx`.

### What's next
- Original competitor-research punch list (eBird links, interactive map, photo gallery, itineraries) is fully done, and the codebase is lint-clean. No open items carried over — next session should pick a fresh direction with the user.

### Notes
- `npm install` was needed twice this session — `node_modules` wasn't present at session start, and again after picking up origin's `lenis` dependency.
- Build (`npm run build`) passes and lint is fully clean as of this session.
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
