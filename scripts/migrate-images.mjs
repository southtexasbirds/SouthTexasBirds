// Downloads the original full-resolution Wikimedia Commons file for every
// entry in scripts/image-inventory.json and generates the self-hosted webp
// variants the site needs:
//
//   /public/images/birds/{slug}.webp        800px wide, q80  (species hero)
//   /public/images/birds/{slug}-thumb.webp  400px wide, q75  (card thumb)
//   /public/images/hotspots/{slug}.webp     800px wide, q80  (hotspot card)
//
// Downloads are deduped by source URL (8 of the 9 hotspot cards reuse a
// species photo — see scripts/image-inventory.json "sharedSourceFiles") and
// run sequentially with a short delay and a descriptive User-Agent, per
// Wikimedia's bot-etiquette guidelines. Failures are logged and skipped
// rather than aborting the batch; run again to retry just the failures.
//
// Usage: node scripts/migrate-images.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const INVENTORY_PATH = path.join(ROOT, "scripts", "image-inventory.json");
const BIRDS_OUT_DIR = path.join(ROOT, "public", "images", "birds");
const HOTSPOTS_OUT_DIR = path.join(ROOT, "public", "images", "hotspots");

const USER_AGENT =
  "SouthTexasBirdsBot/1.0 (https://southtexasbirds.org; contact: riksalinas@gmail.com) node-fetch image-migration";

const DELAY_MS = 3000;
const RETRY_COOLDOWN_MS = 20000;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function loadInventory() {
  return JSON.parse(fs.readFileSync(INVENTORY_PATH, "utf8"));
}

/** Build a map of sourceUrl -> list of output jobs (slug + category). */
function buildJobsBySourceUrl(inventory) {
  const bySourceUrl = new Map();
  const addJob = (entry) => {
    if (!bySourceUrl.has(entry.sourceUrl)) bySourceUrl.set(entry.sourceUrl, []);
    bySourceUrl.get(entry.sourceUrl).push(entry);
  };
  inventory.species.forEach(addJob);
  inventory.hotspots.forEach(addJob);
  return bySourceUrl;
}

/** All output file paths a given set of jobs (for one source URL) will produce. */
function expectedOutputPaths(jobs) {
  const paths = [];
  for (const entry of jobs) {
    if (entry.category === "species") {
      paths.push(path.join(BIRDS_OUT_DIR, `${entry.slug}.webp`));
      paths.push(path.join(BIRDS_OUT_DIR, `${entry.slug}-thumb.webp`));
    } else if (entry.category === "hotspot") {
      paths.push(path.join(HOTSPOTS_OUT_DIR, `${entry.slug}.webp`));
    }
  }
  return paths;
}

function alreadyDone(jobs) {
  return expectedOutputPaths(jobs).every((p) => fs.existsSync(p));
}

async function downloadOriginal(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`);
  }
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function writeVariant(buffer, outPath, width, quality) {
  await sharp(buffer)
    .resize({ width })
    .webp({ quality })
    .toFile(outPath);
}

/** Generate every required output file for a downloaded source buffer. */
async function generateOutputs(buffer, jobs) {
  for (const entry of jobs) {
    if (entry.category === "species") {
      await writeVariant(buffer, path.join(BIRDS_OUT_DIR, `${entry.slug}.webp`), 800, 80);
      await writeVariant(buffer, path.join(BIRDS_OUT_DIR, `${entry.slug}-thumb.webp`), 400, 75);
    } else if (entry.category === "hotspot") {
      await writeVariant(buffer, path.join(HOTSPOTS_OUT_DIR, `${entry.slug}.webp`), 800, 80);
    }
  }
}

async function processSourceUrl(sourceUrl, jobs) {
  const buffer = await downloadOriginal(sourceUrl);
  await generateOutputs(buffer, jobs);
}

async function runBatch(entries) {
  const succeeded = [];
  const failed = [];

  for (const [sourceUrl, jobs] of entries) {
    const label = jobs.map((j) => `${j.slug} (${j.category})`).join(", ");

    if (alreadyDone(jobs)) {
      console.log(`SKIP ${label} (already downloaded)`);
      succeeded.push(sourceUrl);
      continue;
    }

    try {
      await processSourceUrl(sourceUrl, jobs);
      console.log(`OK   ${label}`);
      succeeded.push(sourceUrl);
    } catch (err) {
      console.log(`FAIL ${label} — ${err.message}`);
      failed.push({ sourceUrl, jobs, error: err.message });
    }
    await sleep(DELAY_MS);
  }

  return { succeeded, failed };
}

async function main() {
  fs.mkdirSync(BIRDS_OUT_DIR, { recursive: true });
  fs.mkdirSync(HOTSPOTS_OUT_DIR, { recursive: true });

  const inventory = loadInventory();
  const jobsBySourceUrl = buildJobsBySourceUrl(inventory);
  const entries = [...jobsBySourceUrl.entries()];

  console.log(`Downloading ${entries.length} unique source files...\n`);
  const first = await runBatch(entries);

  let finalFailed = first.failed;
  if (first.failed.length > 0) {
    console.log(
      `\n${first.failed.length} failed (likely rate-limited) — cooling down ${RETRY_COOLDOWN_MS / 1000}s before retry...\n`
    );
    await sleep(RETRY_COOLDOWN_MS);
    const retryEntries = first.failed.map((f) => [f.sourceUrl, f.jobs]);
    const retry = await runBatch(retryEntries);
    finalFailed = retry.failed;
  }

  console.log("\n=== Summary ===");
  console.log(`Succeeded: ${entries.length - finalFailed.length} / ${entries.length}`);
  console.log(`Failed:    ${finalFailed.length} / ${entries.length}`);
  if (finalFailed.length > 0) {
    console.log("\nStill failing after retry — handle manually:");
    for (const f of finalFailed) {
      const label = f.jobs.map((j) => `${j.slug} (${j.category})`).join(", ");
      console.log(`  - ${label}\n    ${f.sourceUrl}\n    ${f.error}`);
    }
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
