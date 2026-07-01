import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/9/94/Great_kiskadee_%2870240%29.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/great-kiskadee" },
  title: "Great Kiskadee (Pitangus sulphuratus) | South Texas Birds",
  description:
    "Great Kiskadee identification, habitat, and where to find it in the Rio Grande Valley. Loud, bold, and impossible to miss — the defining bird of any RGV park.",
  openGraph: {
    type: "article",
    title: "Great Kiskadee | South Texas Birds",
    description: "Great Kiskadee identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Great Kiskadee perched in South Texas" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
];

export default function GreatKiskadeePage() {
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
            Great Kiskadee
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Pitangus sulphuratus &nbsp;·&nbsp; <span className="not-italic" lang="es">Luis bienteveo</span>
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
            <Image src={PHOTO} alt="Great Kiskadee perched in South Texas riparian woodland" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Great_kiskadee_(70240).jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              If there is one bird that defines the soundscape of the Rio Grande Valley, it is the Great Kiskadee —
              loud, abundant, and relentlessly conspicuous. Its name is an English transcription of its own call
              (KISS-ka-DEE), which it delivers constantly from dawn until dusk from the tops of tall trees, telephone
              wires, and feeder stations alike. This large, boldly patterned flycatcher is equally at home catching
              insects in midair, diving for fish in a resaca, stealing food from other birds, or raiding a nest — a
              dietary adventurism that distinguishes it from the more specialized members of its family.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large, robust flycatcher (22–25 cm / 9–10 in) with a massive black bill. Bold patterning throughout:
              bright yellow underparts, white throat, and a striking head pattern of black mask and cap, white
              supercilium, and white collar. The back and wings are rufous-brown. The black crown conceals a bright
              yellow coronal patch revealed only when the bird is excited or displaying.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The rufous-brown wings distinguish it from the similar-patterned Social Flycatcher, which is smaller
              with gray-brown wings. In the Valley, the Kiskadee&apos;s loud voice and large size make confusion with
              any other species unlikely once the bird is seen well.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Remarkably adaptable: Great Kiskadees occur in riparian forest, open woodland, resaca margins, suburban
              parks and gardens, roadsides, and anywhere with a few trees near water. They are among the most
              habitat-tolerant birds in the Valley and are genuinely difficult to avoid once you are in suitable
              habitat anywhere in the region.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the U.S., found in South Texas; the broader range extends from northeastern Mexico south through
              Central America to central Argentina — one of the most widespread flycatchers in the Western Hemisphere.
              The species is expanding northward in Texas, colonizing areas along the Nueces River drainage.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A dietary opportunist of the first order: Great Kiskadees catch flying insects aerially, pick fruit and
              berries from foliage, plunge into shallow water for small fish and tadpoles, steal food from other birds,
              and occasionally take eggs or nestlings. This dietary flexibility is exceptional among flycatchers and
              accounts for the species&apos; success across a wide range of habitats.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Bulky, domed nests of grass and plant fibers are built in trees, on utility poles, or in cacti. Pairs
              often use the same site across multiple seasons. The species is bold and will aggressively mob raptors
              and other perceived threats near the nest.
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

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}>
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Best Time to See</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Year-round</strong> — Great Kiskadees are permanent residents throughout South Texas. They are among the most conspicuous birds at any Valley nature center, perching openly on wires and branches and announcing themselves constantly with the loud <em>kis-ka-dee!</em> call. No special timing is needed — any visit to Bentsen, Estero Llano Grande, Santa Ana, or Quinta Mazatlán will produce Great Kiskadees. <strong>April through July</strong> is the breeding season, when pairs are particularly vocal and active.
            </p>
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
                One of the most abundant and adaptable birds in its range. In South Texas the population is stable
                and expanding. The species benefits from human-modified landscapes that provide open areas near water —
                essentially the same habitat produced by parks, golf courses, and suburban gardens.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Great Kiskadee is one of the very few flycatchers that regularly plunges into water to catch fish.
                It has been filmed diving into ponds and resacas for small fish and tadpoles — a feeding behavior
                typically associated with kingfishers. It even selects perch sites that offer a clear view of the
                water surface below, just as a kingfisher would.
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
            "url": "https://southtexasbirds.org/birds/great-kiskadee",
            "headline": "Great Kiskadee (Pitangus sulphuratus) | South Texas Birds",
            "description": "Great Kiskadee identification, habitat, and where to find it in the Rio Grande Valley. Loud, bold, and impossible to miss — the defining bird of any RGV park.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Great_kiskadee_%2870240%29.jpg",
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
