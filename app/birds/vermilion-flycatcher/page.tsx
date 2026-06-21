import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/0/02/Karmintyrann_%28Pyrocephalus_obscurus%29%2C_M%C3%A4nnchen_1.jpg";

export const metadata: Metadata = {
  title: "Vermilion Flycatcher (Pyrocephalus rubinus) | South Texas Birds",
  description:
    "Vermilion Flycatcher identification, habitat, and where to find it in South Texas. The blazing red male is one of the most eye-catching birds in North America.",
  openGraph: {
    title: "Vermilion Flycatcher | South Texas Birds",
    description: "Vermilion Flycatcher identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Male Vermilion Flycatcher perched on a branch" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "South Padre Island", region: "Cameron County", href: "/hotspots#south-padre-island" },
];

export default function VermilionFlycatcherPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>
          ← All Species
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>
            South Texas · Year-round
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Vermilion Flycatcher
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Pyrocephalus rubinus &nbsp;·&nbsp; <span className="not-italic">Mosquero cardenal</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Resident / winter visitor
          </span>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}>
            <Image src={PHOTO} alt="Male Vermilion Flycatcher perched on a branch, South Texas" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </div>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Karmintyrann_(Pyrocephalus_obscurus),_M%C3%A4nnchen_1.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
              Wikimedia Commons
            </a>
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The male Vermilion Flycatcher is one of the most brilliantly colored birds in North America and one of
              the most reliably found at parks and open areas throughout South Texas. The combination of a blazing red
              crown and underparts against a jet-black back, wings, and tail creates a bird that seems almost too vivid
              for the muted tones of the Texas scrub. It sits conspicuously on exposed wires, branches, and fence posts,
              making short sallies into the air to catch insects — a textbook demonstration of the flycatcher
              hunting style.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The adult male is unmistakable: brilliant vermilion-red crown (often puffed into a crest when excited)
              and underparts, with jet-black back, wings, tail, and eyeline. In sunlight the red is nearly incandescent.
              Female and immature birds are brown above, white below with fine dark streaking, with a peachy-salmon
              wash on the lower belly and undertail — subtle but enough to hint at the male&apos;s color. First-year
              males show a patchy transition.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Size is small — about 13–14 cm (5 in) — compact, with the characteristic upright posture of a flycatcher
              on an exposed perch. No other small bird in South Texas shares the male&apos;s red-and-black combination.
              The female&apos;s peachy wash and streaked underparts separate it from other small female flycatchers.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Prefers open or semi-open areas near water: brushy fields, riparian edges, pond margins, parks, roadsides,
              and ranch country. Water is the key habitat element — Vermilion Flycatchers are almost always found near
              permanent or semi-permanent water sources, particularly where open ground or low grass provides hunting
              terrain.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In South Texas, residents are present year-round; the wintering population is augmented by birds from
              more northern breeding areas. The breeding range spans the southwestern U.S. south through Mexico and
              Central America to Bolivia and Argentina.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A classic aerial flycatcher: perches on an exposed post or wire, watches for insects, then makes a short
              aerial sortie to catch them before returning to the same perch. Diet is almost entirely insects — beetles,
              bees, flies, and grasshoppers. The male&apos;s conspicuous, colorful plumage makes every hunting foray
              a visible event.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Males perform a spectacular aerial display during the breeding season: a slow, butterfly-like flight with
              the red crest puffed and wings spread, delivered high above the territory while singing. Nests are small,
              neat cups of plant fibers placed on a horizontal branch, typically 1–6 meters high.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: "#0E6B6B" }}>Where to See in South Texas</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {spots.map((spot) => (
                <Link key={spot.name} href={spot.href} className="flex items-center gap-3 rounded-lg px-4 py-3 transition-opacity hover:opacity-80" style={{ background: "#F7F0E4", borderLeft: "3px solid #C77F4A" }}>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#0E6B6B" }}>{spot.name}</p>
                    <p className="text-xs" style={{ color: "#6E6B66" }}>{spot.region}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
                IUCN: Least Concern
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Populations in Texas appear stable, though declines have been documented in some western populations
                possibly linked to changes in riparian habitat. The species benefits from the open agricultural and
                ranch land of South Texas that provides abundant hunting habitat near water.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Male Vermilion Flycatchers offer their mates elaborate &ldquo;nuptial gifts&rdquo; during courtship —
                a brightly colored butterfly or other large insect, presented in a fluttering aerial display. The
                quality of the gift appears to influence female mate choice, making this one of a small group of
                birds where insect presentation is a documented courtship behavior.
              </p>
            </section>
          </AnimateIn>
        </div>

        <AnimateIn>
          <div className="text-center pt-4">
            <Link href="/birds" className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>
              ← Browse all South Texas species
            </Link>
          </div>
        </AnimateIn>

      </div>
    </div>
  );
}
