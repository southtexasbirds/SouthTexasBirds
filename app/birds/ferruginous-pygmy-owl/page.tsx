import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Ferruginous_pygmy_owl_%28Glaucidium_brasilianum_ridgwayi%29_Copan.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/ferruginous-pygmy-owl" },
  title: "Ferruginous Pygmy-Owl (Glaucidium brasilianum) | South Texas Birds",
  description:
    "Ferruginous Pygmy-Owl identification, habitat, and where to find it in the Rio Grande Valley. Tiny but fierce, this diurnal owl is a prized find in the Valley's dense brush.",
  openGraph: {
    type: "article",
    title: "Ferruginous Pygmy-Owl | South Texas Birds",
    description: "Ferruginous Pygmy-Owl identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Ferruginous Pygmy-Owl perched in South Texas" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Salineño", region: "Zapata County", href: "/hotspots#salineno" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
];

export default function FerrugynousPygmyOwlPage() {
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
            Rio Grande Valley · Year-round Resident
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Ferruginous Pygmy-Owl
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Glaucidium brasilianum &nbsp;·&nbsp; <span className="not-italic" lang="es">Tecolotito ferruginoso</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Resident
          </span>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image src={PHOTO} alt="Ferruginous Pygmy-Owl perched in thornscrub, South Texas" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Ferruginous_pygmy_owl_(Glaucidium_brasilianum_ridgwayi)_Copan.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Ferruginous Pygmy-Owl is tiny, fierce, and one of the most sought-after birds in the Rio Grande
              Valley. Barely larger than a sparrow, this largely diurnal owl hunts birds, lizards, and large insects
              with an aggression completely out of proportion to its size — it will attack prey several times its own
              weight. It is perhaps best located by the commotion it creates: when discovered by songbirds, the local
              population mobs the owl with alarm calls and swooping attacks, producing a noisy avian commotion audible
              from some distance.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A very small owl (15–17 cm / 6–6.5 in) with a relatively long, banded tail and no ear tufts — the
              latter distinguishing it from the similar-sized Eastern Screech-Owl. Plumage varies from rufous
              (reddish-brown) to gray-brown above, with white underparts heavily streaked dark brown. The facial disc
              is poorly defined; the eyes are yellow. The back of the head shows two black spots with pale edges —
              &ldquo;false eyes&rdquo; that give the impression of a face looking both forward and backward.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The call — a monotonous series of whistled toots at roughly two per second — is the key to finding one.
              Birds respond readily to imitations of this call, and the response of scolding songbirds often reveals
              the owl&apos;s location even before it is heard directly.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Dense Tamaulipan thornscrub and riparian woodland in South Texas, particularly areas with large trees or
              cacti containing old woodpecker cavities for nesting. Also uses woodland edges and areas with scattered
              trees. In the U.S., limited to the Lower Rio Grande Valley with a separate population in southern Arizona
              and New Mexico.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The broader range extends from the southwestern U.S. and Mexico through Central America to Bolivia and
              central Argentina. Resident throughout its range.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Despite its tiny size, the Ferruginous Pygmy-Owl is an aggressive predator: it takes lizards, small
              snakes, large insects, and birds up to its own size or slightly larger. It is largely diurnal — most
              active in the early morning and late afternoon — making it far more findable than most owls.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Nests in old woodpecker cavities in trees and fence posts; nest cavities are also used for nighttime
              roosting. Breeding runs from March to June in South Texas. The male calls persistently from perches
              near the nest cavity, and this calling is the most reliable way to locate a breeding pair.
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
                Least Concern globally, but the Texas population is locally sensitive to habitat loss. Heavy clearance
                of native thornscrub for agriculture and development reduces nesting and foraging habitat. Listed as
                a Species of Greatest Conservation Need in the Texas State Wildlife Action Plan.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The two black spots on the back of the Ferruginous Pygmy-Owl&apos;s head are not decorative — they
                function as &ldquo;false eyes,&rdquo; making the owl appear to face in two directions simultaneously.
                Predators approaching from behind are confronted with what looks like a face, which may deter attack.
                This false-eye feature appears independently in several small owl species across the world.
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "datePublished": "2026-06-20",
            "dateModified": "2026-06-28",
            "url": "https://southtexasbirds.org/birds/ferruginous-pygmy-owl",
            "headline": "Ferruginous Pygmy-Owl (Glaucidium brasilianum) | South Texas Birds",
            "description": "Ferruginous Pygmy-Owl identification, habitat, and where to find it in the Rio Grande Valley. Tiny but fierce, this diurnal owl is a prized find in the Valley's dense brush.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Ferruginous_pygmy_owl_%28Glaucidium_brasilianum_ridgwayi%29_Copan.jpg",
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
