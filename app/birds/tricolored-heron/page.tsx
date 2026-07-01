import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/6/6e/Tri-colored_heron_sunrise_bunche_beach_%2833516451355%29_%28cropped%29.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/tricolored-heron" },
  title: "Tricolored Heron (Egretta tricolor) | South Texas Birds",
  description:
    "Tricolored Heron identification, habitat, and where to find it in South Texas. The only U.S. heron with a white belly contrasting against slate-blue upperparts — an agile, fast-running coastal forager.",
  openGraph: {
    type: "article",
    title: "Tricolored Heron | South Texas Birds",
    description:
      "Tricolored Heron identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Tricolored Heron at sunrise in coastal marsh" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [PHOTO],
  },
};

const spots = [
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Laguna Atascosa National Wildlife Refuge", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "South Padre Island Birding & Nature Center", region: "South Padre Island", href: "/hotspots#south-padre-island" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
];

export default function TricoloredHeronPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>

      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/birds"
          className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70"
          style={{ color: "#C77F4A" }}
        >
          ← All Species
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#C77F4A" }}
          >
            Texas Gulf Coast · Year-round Resident
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-1"
            style={{ color: "#0E6B6B" }}
          >
            Tricolored Heron
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Egretta tricolor &nbsp;·&nbsp; <span className="not-italic" lang="es">Garceta tricolor</span>
          </p>
          <span
            className="inline-block text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: "#0E6B6B", color: "#EFE3CE" }}
          >
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
            <Image
              src={PHOTO}
              alt="Tricolored Heron at sunrise in coastal marsh"
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
              href="https://commons.wikimedia.org/wiki/File:Tri-colored_heron_sunrise_bunche_beach_(33516451355)_(cropped).jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
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
              The Tricolored Heron is a common and energetic resident of South Texas coastal
              wetlands — the only heron in the United States with a sharply contrasting white
              belly set against slate-blue upperparts. Fast and aggressive in its foraging,
              it rushes through shallow water in short sprints rather than standing and waiting
              like most of its relatives. It is one of the most frequently seen herons along
              the Texas Gulf Coast, from resacas in the Rio Grande Valley to the tidal marshes
              of the Laguna Madre.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Adults are slate-blue on the back, wings, and neck, with a white stripe down
              the front of the neck and white underparts — the three-color pattern that gives
              the species its name. The bill is long and yellow with a darker tip; legs are
              yellow to yellowish-green. In breeding plumage, the neck acquires reddish-brown
              streaks and the back develops long, wispy plumes. A white rump patch is visible
              in flight.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Immature birds are browner on the neck and wing coverts, with a rufous wash,
              but still show the white belly. The combination of slate-blue body and white
              underparts is unique among herons in its range and makes identification
              straightforward at any age.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Tricolored Herons occupy a broad range of wetland types: coastal marshes, tidal
              flats, estuaries, mangroves, resacas, ponds, and the margins of freshwater lakes.
              They are equally at home in brackish and freshwater habitats and are among the
              most versatile herons in the region.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the U.S., they breed along the Gulf and Atlantic coasts from Texas to Maine,
              with the largest concentrations in the Gulf states. In South Texas, they are
              year-round residents, common along the coast and on larger inland water bodies.
              The species also ranges widely through the Caribbean and coastal Latin America
              south to northern Brazil.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              More active and dynamic than most herons, the Tricolored Heron forages by
              running through shallow water in short bursts, stabbing rapidly at fish.
              It may also use a canopy spread similar to the Reddish Egret — wings partially
              open to reduce glare — though it does so less consistently. The diet is primarily
              small fish, supplemented by frogs, crustaceans, and aquatic invertebrates.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Tricolored Herons nest colonially, often in mixed-species colonies with other
              herons, egrets, spoonbills, and cormorants. Nests are built in mangroves,
              willows, or other shrubby vegetation over water. Pairs raise one brood per year,
              typically two to four eggs. Both parents share incubation and chick-rearing.
            </p>
          </section>
        </AnimateIn>

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

        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span
                className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3"
                style={{ background: "#0E6B6B", color: "#EFE3CE" }}
              >
                IUCN: Least Concern
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Populations are generally stable. Coastal wetland loss and disturbance of
                nesting colonies are the primary threats along the Texas coast. The species
                rebounded strongly after the end of the plume trade in the early 20th century
                and is now one of the more numerous herons in the Gulf region.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section
              className="rounded-2xl p-7 h-full"
              style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}
            >
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Tricolored Heron was formerly known as the Louisiana Heron — a name that
                persisted for decades in field guides before being changed to reflect the
                species&apos; much broader range across the Caribbean and Latin America.
                Long-time birders still occasionally use the old name.
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
            "url": "https://southtexasbirds.org/birds/tricolored-heron",
            "headline": "Tricolored Heron (Egretta tricolor) | South Texas Birds",
            "description": "Tricolored Heron identification, habitat, and where to find it in South Texas. The only U.S. heron with a white belly contrasting against slate-blue upperparts — an agile, fast-running coastal forager.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Tri-colored_heron_sunrise_bunche_beach_%2833516451355%29_%28cropped%29.jpg",
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
