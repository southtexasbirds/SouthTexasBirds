import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/2/25/Whistling_duck_flight02_-_natures_pics-edit1.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/black-bellied-whistling-duck" },
  title: "Black-bellied Whistling-Duck (Dendrocygna autumnalis) | South Texas Birds",
  description:
    "Black-bellied Whistling-Duck identification, habitat, and where to find it in the Rio Grande Valley. This colorful, noisy duck has expanded dramatically across South Texas.",
  openGraph: {
    type: "article",
    title: "Black-bellied Whistling-Duck | South Texas Birds",
    description: "Black-bellied Whistling-Duck identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Black-bellied Whistling-Ducks in flight" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
];

export default function BlackBelliedWhistlingDuckPage() {
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
            Black-bellied Whistling-Duck
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Dendrocygna autumnalis &nbsp;·&nbsp; <span className="not-italic" lang="es">Pijiji alas blancas</span>
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
            <Image src={PHOTO} alt="Black-bellied Whistling-Ducks in flight showing bold white wing patches" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 40%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Whistling_duck_flight02_-_natures_pics-edit1.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Black-bellied Whistling-Duck is one of South Texas&apos;s great ornithological success stories.
              Once a local rarity, this colorful, loud, and sociable duck has expanded dramatically across the region
              over the past three decades — it now breeds in suburban ponds, city parks, and golf courses as readily
              as in the wildlife refuges. Flocks of dozens flying low over resacas at dusk, calling their characteristic
              whistled squeal, have become a quintessential sight and sound of the Rio Grande Valley. Unlike most ducks,
              they are long-legged, upright-standing birds that perch readily in trees.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large (48–53 cm / 19–21 in), long-legged duck with an upright posture that reads almost goose-like at
              a distance. Adults are unmistakable: chestnut body, black belly, gray face, bright coral-pink bill and
              legs, and in flight a bold white wing stripe on black wings. The head is plain gray with a dark cap.
              Juveniles are duller, with a gray bill and less distinct belly marking.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In flight the white wing patches flash prominently — unlike any other duck in the region — and the
              species&apos; high-pitched multi-note whistle (pe-chee-chee or similar) confirms identification
              instantly. Flocks often fly at low altitude with slow, deliberate wingbeats, calling constantly.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Ponds, resacas, flooded fields, marshes, and any freshwater body with nearby trees for nesting.
              Remarkably adaptable — nests in tree cavities (and readily accepts nest boxes) in both wild and urban
              settings. The species has expanded its range considerably northward in Texas, now breeding well north of
              the Rio Grande Valley.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Native range extends from the southern United States through Central America to northern Argentina.
              Year-round resident throughout South Texas, with numbers augmented by local movements and some influx
              from Mexico in fall and winter.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Feeds on seeds, grain, aquatic plants, and some invertebrates, often grazing in agricultural fields at
              night. Highly gregarious: flocks of hundreds gather at favored roost sites, and the species nests semi-
              colonially when nest boxes or tree cavities are concentrated. Unlike most ducks, both sexes share
              incubation and chick-rearing duties, and pairs may remain together across multiple seasons.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Nest boxes erected for Wood Ducks are readily adopted, which has contributed to the species&apos; dramatic
              population growth in Texas. Clutch size is unusually large — 12 to 16 eggs is typical — and &ldquo;dump
              nesting&rdquo; (multiple females laying in the same box) can produce clutches of 30 or more.
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
                Population is stable and expanding in the United States. The species&apos; adaptability to suburban
                environments, willingness to use nest boxes, and tolerance of human presence have made it one of the
                few North American waterfowl species increasing in both range and numbers.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Black-bellied Whistling-Ducks are among the most monogamous of waterfowl — pairs often stay together
                for multiple breeding seasons, and both parents brood and care for the ducklings together. This is
                unusual in ducks, where males typically abandon the female after incubation begins. The species&apos;
                family bonds are strong enough that juveniles from earlier broods sometimes help their parents raise
                subsequent clutches.
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
            "headline": "Black-bellied Whistling-Duck (Dendrocygna autumnalis) | South Texas Birds",
            "description": "Black-bellied Whistling-Duck identification, habitat, and where to find it in the Rio Grande Valley. This colorful, noisy duck has expanded dramatically across South Texas.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Whistling_duck_flight02_-_natures_pics-edit1.jpg",
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
