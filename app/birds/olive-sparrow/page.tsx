import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/4/48/Olive_Sparrow_%28Arremonops_rufivirgatus%29_Edinbug%2C_Texas%2C_USA.png";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/olive-sparrow" },
  title: "Olive Sparrow (Arremonops rufivirgatus) | South Texas Birds",
  description:
    "Olive Sparrow identification, habitat, and where to find it in South Texas. A characteristic bird of the dense Tamaulipan thornscrub — heard far more often than seen.",
  openGraph: {
    type: "article",
    title: "Olive Sparrow | South Texas Birds",
    description:
      "Olive Sparrow identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Olive Sparrow perched in South Texas thornscrub" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [PHOTO],
  },
};

const spots = [
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Salineño Wildlife Preserve", region: "Salineño", href: "/hotspots#salineno" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
];

export default function OliveSparrowPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>

      {/* ── Back nav ─────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/birds"
          className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70"
          style={{ color: "#C77F4A" }}
        >
          ← All Species
        </Link>
      </div>

      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#C77F4A" }}
          >
            Rio Grande Valley · Year-round Resident
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-1"
            style={{ color: "#0E6B6B" }}
          >
            Olive Sparrow
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Arremonops rufivirgatus &nbsp;·&nbsp; <span className="not-italic" lang="es">Gorrión oliváceo</span>
          </p>
          <span
            className="inline-block text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: "#0E6B6B", color: "#EFE3CE" }}
          >
            Resident
          </span>
        </AnimateIn>
      </div>

      {/* ── Hero image ───────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image
              src={PHOTO}
              alt="Olive Sparrow perched in South Texas thornscrub"
              fill
              unoptimized
              priority
              className="object-cover"
              style={{ objectPosition: "50% 30%" }}
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Olive_Sparrow_(Arremonops_rufivirgatus)_Edinbug,_Texas,_USA.png"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              Wikimedia Commons
            </a>
          </p>
        </AnimateIn>
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">

        {/* Overview */}
        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Olive Sparrow is as much a part of the Tamaulipan thornscrub soundtrack as the
              rustling of dry leaves. Drab and skulking, it rarely ventures far from the deep shade
              of dense brush, and most visitors hear its dry, accelerating trill long before they
              catch a glimpse. It is one of the characteristic endemic birds of the lower Rio Grande
              Valley — the northern edge of a range that extends south through Mexico and Central
              America — and a quiet but dependable presence at nearly every RGV nature reserve.
            </p>
          </section>
        </AnimateIn>

        {/* Identification */}
        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A medium-sized sparrow, plain and olive-toned throughout — olive-green above, buffy
              white below — with two bold brown lateral crown stripes framing a pale central crown
              stripe. The face shows a faint brown eye stripe and a whitish supercilium, giving
              the bird a clean but understated expression. There are no wing bars, streaking on the
              breast, or other bold markings.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Roughly the size of a Song Sparrow. Sexes look alike. The plain, unstreaked underparts
              and olive wash to the upperparts distinguish it from any other sparrow regularly found
              in the Valley. The most reliable identification cue is the song: a series of dry chips
              that accelerates into a rapid trill, delivered persistently from within dense cover.
            </p>
          </section>
        </AnimateIn>

        {/* Habitat & Range */}
        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              In South Texas, Olive Sparrows are tied almost exclusively to dense Tamaulipan
              thornscrub — the spiny, subtropical brushland of mesquite, acacia, brasil, granjeno,
              and cactus that characterizes the Rio Grande Plain. They strongly favor the shadiest,
              most tangled understory and avoid open ground. Gardens with mature native plantings
              occasionally attract them to the edges of towns.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The U.S. range is essentially confined to the lower Rio Grande Valley, from Webb
              County east to Cameron County. The species is far more widespread in Mexico and
              through Central America to Costa Rica, inhabiting a variety of dry scrub and
              forest-edge habitats.
            </p>
          </section>
        </AnimateIn>

        {/* Behavior & Diet */}
        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Olive Sparrows forage almost entirely on the ground beneath dense cover, scratching
              through leaf litter for seeds, berries, and invertebrates — a double-scratch with
              both feet simultaneously, the classic sparrow technique. They are remarkably reluctant
              to fly, preferring to run into brush when disturbed rather than take wing.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              They are year-round residents and do not migrate. Pairs maintain territories and
              breed from March through August, building a domed grass nest low in a shrub or
              cactus. Males sing persistently in spring and early summer from a perch just inside
              the brush edge — their clearest concession to visibility. Patience and stillness
              near a singing bird are usually rewarded with a brief but satisfying look.
            </p>
          </section>
        </AnimateIn>

        {/* Where to See */}
        <AnimateIn>
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: "#0E6B6B" }}>
              Where to See in South Texas
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {spots.map((spot) => (
                <Link
                  key={spot.name}
                  href={spot.href}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 transition-opacity hover:opacity-80"
                  style={{ background: "#F7F0E4", borderLeft: "3px solid #C77F4A" }}
                >
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#0E6B6B" }}>{spot.name}</p>
                    <p className="text-xs" style={{ color: "#6E6B66" }}>{spot.region}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>
              Listen for the accelerating chip-trill from dense brush. Stand quietly near a singing
              bird and scan the shrub edges — they will occasionally pop up briefly.
            </p>
          </section>
        </AnimateIn>

        {/* Conservation & Fun Fact */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section
              className="rounded-2xl p-7 h-full"
              style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
            >
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span
                className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3"
                style={{ background: "#0E6B6B", color: "#EFE3CE" }}
              >
                IUCN: Least Concern
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                The species is stable across its broad range in Mexico and Central America.
                In South Texas, ongoing habitat loss from brush clearing, agriculture, and
                development is the primary local pressure. Protected reserves in the Rio Grande
                Valley — Santa Ana, Bentsen, Resaca de la Palma — are critical for maintaining
                the U.S. population.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section
              className="rounded-2xl p-7 h-full"
              style={{
                background: "#0E6B6B",
                boxShadow: "0 1px 6px rgba(14,107,107,0.15)",
              }}
            >
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Despite being one of the most common birds in the Valley&apos;s thornscrub, the
                Olive Sparrow is routinely missed by visiting birders — not because it&apos;s rare,
                but because it simply refuses to come out. Learning its song is the single most
                effective upgrade a visiting birder can make before arriving in the Rio Grande Valley.
              </p>
            </section>
          </AnimateIn>
        </div>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>In the News</p>
            <Link href="/news/thornscrub-restoration-rgv" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
              <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>Tamaulipan Thornscrub Restoration Expands Across the Rio Grande Valley</span>
              <span className="text-sm" style={{ color: "#5C5954" }}>The Olive Sparrow is one of the defining birds of dense Tamaulipan thornscrub — a habitat that conservationists are now actively rebuilding across the Valley.</span>
              <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
            </Link>
          </section>
        </AnimateIn>

        {/* CTA */}
        <AnimateIn>
          <div className="text-center pt-4">
            <Link
              href="/birds"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#C77F4A" }}
            >
              ← Browse all South Texas species
            </Link>
          </div>
        </AnimateIn>

      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "datePublished": "2026-06-20",
            "dateModified": "2026-06-28",
            "url": "https://southtexasbirds.org/birds/olive-sparrow",
            "headline": "Olive Sparrow (Arremonops rufivirgatus) | South Texas Birds",
            "description": "Olive Sparrow identification, habitat, and where to find it in South Texas. A characteristic bird of the dense Tamaulipan thornscrub — heard far more often than seen.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/4/48/Olive_Sparrow_%28Arremonops_rufivirgatus%29_Edinbug%2C_Texas%2C_USA.png",
                        "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": {
              "@type": "Organization",
              "name": "South Texas Birds",
              "url": "https://southtexasbirds.org"
            }
          })
        }}
      />
    </div>
  );
}
