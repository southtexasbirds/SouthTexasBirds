import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/d/df/Plain_Chachalaca_Roadside.png";

export const metadata: Metadata = {
  title: "Plain Chachalaca (Ortalis vetula) | South Texas Birds",
  description:
    "Plain Chachalaca identification, habitat, and where to find it in the Rio Grande Valley. The only member of its tropical family found in the United States.",
  openGraph: {
    type: "article",
    title: "Plain Chachalaca | South Texas Birds",
    description:
      "Plain Chachalaca identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Plain Chachalaca perched roadside in South Texas" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [PHOTO],
  },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
];

export default function PlainChachalacaPage() {
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
            Plain Chachalaca
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Ortalis vetula &nbsp;·&nbsp; <span className="not-italic" lang="es">Chachalaca Norteña</span>
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
              alt="Plain Chachalaca perched alongside a road in South Texas"
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
              href="https://commons.wikimedia.org/wiki/File:Plain_Chachalaca_Roadside.png"
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
              The Plain Chachalaca is the only member of the family Cracidae — a tropical group of
              large, hen-like birds that includes the curassows and guans of Central and South
              America — naturally occurring in the United States. South Texas is its entire U.S.
              range. If you have spent a morning in the Rio Grande Valley, you have almost certainly
              heard one before you saw it: the pre-dawn chorus of a group of chachalacas, voices
              overlapping in thunderous synchrony from the treetops, is one of the defining sounds
              of the region. Despite all the noise, the birds themselves are surprisingly easy to
              miss in the dense brush they call home.
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
              A large, slender, long-tailed bird — about 53–58 cm (21–23 in) from bill to tail tip —
              with a small rounded head, long neck, and the overall shape of a hen pheasant. Plumage
              is plain olive-brown above, slightly paler below, with a graduated tail tipped white.
              The bare red throat patch (dewlap) is visible at close range and is larger in males.
              Short, rounded wings reflect the species&apos; preference for scrambling through
              canopy over sustained flight.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Sexes look alike; males are slightly larger. Juveniles resemble adults but are duller
              with finer barring on the upperparts. In South Texas there is no similar bird: the
              combination of size, shape, plain brown plumage, and habitat (dense brush, often near
              feeders) is distinctive. Groups moving through the canopy often betray themselves by
              the sound of crashing branches as much as by their calls.
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
              In South Texas, Plain Chachalacas occupy dense Tamaulipan thornscrub, riparian forest
              along the Rio Grande and its resacas, and woodland edges. They adapt readily to
              suburban parks and nature center grounds with mature native vegetation, and are
              common visitors to feeding stations that offer corn or milo on the ground.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The U.S. range is limited to the Lower Rio Grande Valley, from Starr County east to
              Cameron County. The species is far more widespread in Mexico, ranging from Tamaulipas
              and Nuevo León south through the Gulf lowlands of Central America to northwestern
              Costa Rica, where it inhabits tropical and subtropical forest edges and disturbed
              woodlands at low to moderate elevations.
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
              Chachalacas are primarily herbivores, feeding on fruits, leaves, buds, flowers, and
              seeds gleaned from shrubs and trees, with insects taken occasionally. They forage
              mostly in the canopy and mid-story, moving through branches with surprising agility
              for their size. At feeding stations they readily come to the ground for corn, milo,
              and other grains, often forming groups of six to twenty or more birds.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              They are intensely social and roost communally in dense vegetation. The famous dawn
              chorus — a near-deafening, overlapping cha-cha-LAC-a call — is a group performance:
              multiple birds call simultaneously with different individuals covering different
              syllables in near-perfect synchrony. Nesting runs from March to June; the female
              builds a flat platform of twigs and leaves in dense brush, typically 2–5 meters up,
              and lays two to four eggs.
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
                The species is stable across its broad range and adapts well to disturbed and
                suburban habitats. In South Texas, ongoing brush clearing for agriculture and
                development reduces available habitat, but the population remains healthy. The
                protected corridor of reserves along the Rio Grande provides core habitat for the
                U.S. population.
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
                &ldquo;Chachalaca&rdquo; is one of the few English bird names that is fully
                onomatopoeic — it is a direct phonetic transcription of the call itself. During
                the dawn chorus, different birds in the group take different syllables
                simultaneously, producing an overlapping roar loud enough to carry over a mile
                through the brush.
              </p>
            </section>
          </AnimateIn>
        </div>

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
            "headline": "Plain Chachalaca (Ortalis vetula) | South Texas Birds",
            "description": "Plain Chachalaca identification, habitat, and where to find it in the Rio Grande Valley. The only member of its tropical family found in the United States.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/d/df/Plain_Chachalaca_Roadside.png",
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
