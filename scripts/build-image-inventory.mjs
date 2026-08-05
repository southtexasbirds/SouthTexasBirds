// One-off script: builds scripts/image-inventory.json by parsing the
// existing Wikimedia-hotlinked image references out of app/birds/data.ts
// and app/hotspots/page.tsx (the two data sources that drive every
// species-card / species-hero / hotspot-card image on the site).
//
// Not part of the runtime build — run manually with `node scripts/build-image-inventory.mjs`.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const toBirdId = (name) =>
  name
    .toLowerCase()
    .replace(/['’‘]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Convert a Wikimedia thumbnail URL to the original full-resolution URL by
// stripping the /thumb/.../<width>px-<filename> derivative path segment.
function originalUrl(url) {
  const m = url.match(
    /^(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons)\/thumb\/(.+?)\/[0-9]+px-[^/]+$/
  );
  if (m) return `${m[1]}/${m[2]}`;
  return url;
}

function wikiFilePageUrl(sourceUrl) {
  const filename = decodeURIComponent(sourceUrl.split("/").pop());
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;
}

// ---- 1. Species (app/birds/data.ts) ----
const dataTsPath = path.join(ROOT, "app", "birds", "data.ts");
const dataTsSrc = fs.readFileSync(dataTsPath, "utf8");

const speciesEntries = [];
const entryRe = /name:\s*"([^"]+)"[\s\S]*?photo:\s*"([^"]+)"/g;
let m;
while ((m = entryRe.exec(dataTsSrc))) {
  speciesEntries.push({ name: m[1], thumbUrl: m[2] });
}

const species = speciesEntries.map(({ name, thumbUrl }) => {
  const slug = toBirdId(name);
  const sourceUrl = originalUrl(thumbUrl);
  const usage = [
    "app/birds/data.ts (photo field — species card thumb on /birds and /gallery)",
  ];
  const pageFile = path.join(ROOT, "app", "birds", slug, "page.tsx");
  if (fs.existsSync(pageFile)) {
    usage.push(`app/birds/${slug}/page.tsx (PHOTO const — species page hero)`);
  }
  return {
    slug,
    name,
    category: "species",
    sourceUrl,
    usage,
    wikiFilePageUrl: wikiFilePageUrl(sourceUrl),
  };
});

// ---- 2. Hotspots (app/hotspots/page.tsx) ----
const hotspotsPath = path.join(ROOT, "app", "hotspots", "page.tsx");
const hotspotsSrc = fs.readFileSync(hotspotsPath, "utf8");

const hotspotIdsMatch = hotspotsSrc.match(/const hotspotIds = \[([\s\S]*?)\];/);
const hotspotIds = [...hotspotIdsMatch[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);

const hotspotBlockRe = /name:\s*"([^"]+)"[\s\S]*?photo:\s*\n?\s*"([^"]+)",\s*\n\s*photoAlt:\s*"([^"]+)"/g;
const hotspotEntries = [];
while ((m = hotspotBlockRe.exec(hotspotsSrc))) {
  hotspotEntries.push({ name: m[1], thumbUrl: m[2], photoAlt: m[3] });
}

if (hotspotEntries.length !== hotspotIds.length) {
  throw new Error(
    `Hotspot count mismatch: ${hotspotEntries.length} photo entries vs ${hotspotIds.length} hotspotIds`
  );
}

const hotspots = hotspotEntries.map(({ name, thumbUrl, photoAlt }, i) => {
  const sourceUrl = originalUrl(thumbUrl);
  return {
    slug: hotspotIds[i],
    name,
    category: "hotspot",
    sourceUrl,
    usage: [`app/hotspots/page.tsx (photo field — card header thumbnail for "${photoAlt}")`],
    wikiFilePageUrl: wikiFilePageUrl(sourceUrl),
  };
});

// ---- 3. Metadata-only references (not migrated by this task) ----
// These pages reference a Wikimedia URL only inside openGraph/twitter/JSON-LD
// metadata — there is no rendered <Image>/<img> element for them, so they are
// not "image src contexts" and are out of scope for the display migration in
// tasks 2-3. Recorded here for completeness / to explain the count gap.
const metadataOnlyFiles = [
  "app/layout.tsx",
  "app/page.tsx",
  "app/about/page.tsx",
  "app/gear/page.tsx",
  "app/conservation/page.tsx",
  "app/gallery/page.tsx",
  "app/itineraries/page.tsx",
  "app/checklist/page.tsx",
  "app/news/page.tsx",
  "app/birds/layout.tsx",
  "app/news/*/page.tsx (15 article pages — OG_IMAGE const, no inline <Image>)",
];

const allEntries = [...species, ...hotspots];
const bySourceUrl = new Map();
for (const e of allEntries) {
  if (!bySourceUrl.has(e.sourceUrl)) bySourceUrl.set(e.sourceUrl, []);
  bySourceUrl.get(e.sourceUrl).push(`${e.slug} (${e.category})`);
}
const sharedSourceFiles = [...bySourceUrl.entries()]
  .filter(([, slugs]) => slugs.length > 1)
  .map(([sourceUrl, slugs]) => ({ sourceUrl, usedBy: slugs }));

const inventory = {
  generatedAt: new Date().toISOString().slice(0, 10),
  totalInventoryEntries: species.length + hotspots.length,
  uniqueSourceFilesToDownload: bySourceUrl.size,
  species,
  hotspots,
  sharedSourceFiles,
  notes: {
    metadataOnlyReferences:
      "The following files reference upload.wikimedia.org only inside openGraph/twitter/JSON-LD metadata (social-share image), not as a rendered <Image>/<img> src. No inline article/news images exist anywhere on the site today — verified via grep for <Image|<img in app/news/*/page.tsx (zero matches). These are out of scope for this migration (tasks 2-3 target display 'image src contexts' only) and are left as-is.",
    metadataOnlyFiles,
  },
};

const outPath = path.join(ROOT, "scripts", "image-inventory.json");
fs.writeFileSync(outPath, JSON.stringify(inventory, null, 2) + "\n");

console.log(`Wrote ${outPath}`);
console.log(`  species entries: ${species.length}`);
console.log(`  hotspot entries: ${hotspots.length}`);
console.log(`  total inventory entries: ${inventory.totalInventoryEntries}`);
console.log(`  unique source files to download: ${inventory.uniqueSourceFilesToDownload}`);
console.log(`  (${sharedSourceFiles.length} source files are reused by 2+ entries — 8 of the 9 hotspot cards reuse an existing species photo)`);
