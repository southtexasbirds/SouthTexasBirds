import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/4/47/ReddishEgret_Gam.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/reddish-egret" },
  title: "Reddish Egret (Egretta rufescens) | South Texas Birds",
  description:
    "Reddish Egret identification, habitat, and where to find it on the Texas coast. North America's rarest heron, known for its spectacular lunging, dancing foraging display.",
  openGraph: {
    type: "article",
    title: "Reddish Egret | South Texas Birds",
    description:
      "Reddish Egret identification, habitat, and where to find it on the Texas coast.",
    images: [{ url: PHOTO, alt: "Reddish Egret foraging in shallow coastal water" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [PHOTO],
  },
};

const spots = [
  { name: "South Padre Island Birding & Nature Center", region: "South Padre Island", href: "/hotspots#south-padre-island" },
  { name: "Laguna Atascosa National Wildlife Refuge", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
];

export default function ReddishEgretPage() {
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
            Reddish Egret
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Egretta rufescens &nbsp;·&nbsp; <span className="not-italic" lang="es">Garceta rojiza</span>
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
              alt="Reddish Egret foraging in shallow coastal water"
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
              href="https://commons.wikimedia.org/wiki/File:ReddishEgret_Gam.jpg"
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
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Reddish Egret is among the rarest herons in North America, and one of the
              most entertaining birds on the Texas coast. Where other herons stalk motionlessly
              and strike with precision, the Reddish Egret dances — sprinting, lurching,
              spinning, and spreading its wings in a canopy display that startles fish into
              panicked motion. Once nearly extirpated by the plume trade, the species has
              recovered but remains uncommon. Texas holds a significant portion of the entire
              U.S. breeding population, making the coastal lagoons from Corpus Christi south to
              the Rio Grande an important stronghold.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The dark morph — by far the most common form in Texas — is unmistakable: a
              slate-blue body with a shaggy, wine-red head and neck, shaggy plumes on the
              breast and back, and a distinctive two-toned bill that is pink at the base and
              black at the tip. Legs are blue-gray. In breeding plumage the shaggy neck feathers
              are especially pronounced.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              A white morph also exists — pure white with the same pink-and-black bill and
              blue-gray legs — and is much rarer, accounting for a small percentage of the
              population. No other white heron in Texas has this distinctive bill pattern.
              The dancing, lurching foraging style immediately identifies any Reddish Egret
              regardless of morph.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Reddish Egrets are strictly coastal birds, tied to shallow saltwater — tidal
              flats, open coastal bays, salt lagoons, and the margins of barrier island
              beaches. They nest colonially on coastal islands, often with other herons and
              spoonbills, and forage in the shallowest water they can find: typically less
              than a foot deep.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the U.S., breeding is concentrated along the Texas coast, with smaller
              populations in Florida. They are year-round residents in South Texas, though
              some dispersal occurs after breeding. The species also breeds along the Gulf
              coast of Mexico, the Caribbean, and the Bahamas.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The Reddish Egret&apos;s foraging behavior is unique among North American herons.
              It actively chases fish through shallow water, running and wheeling with wings
              spread in a canopy pose that shades the surface and reduces glare — making fish
              easier to see and reducing their ability to spot the predator. It also uses
              its wings as a herding tool, startling fish into shallower water.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Diet is almost entirely fish, supplemented occasionally by shrimp and other
              small aquatic invertebrates. Reddish Egrets are aggressive territorial foragers
              and will actively chase other herons away from productive feeding areas.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>
              Scan shallow coastal flats and the edges of tidal lagoons. The dancing foraging
              display is visible from a distance and immediately distinctive.
            </p>
          </section>
        </AnimateIn>

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
                The global population is estimated at around 2,000 breeding pairs — making it
                genuinely rare despite its Least Concern listing. Texas coastal development,
                disturbance at nesting colonies, and sea-level rise affecting tidal flat habitat
                are ongoing concerns. The Texas coast hosts a critical share of the U.S.
                breeding population.
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
                The Reddish Egret&apos;s canopy-spread foraging technique — wings open, body
                hunched over the water — creates a patch of shade that eliminates surface glare
                and may also mimic a floating object to fish below. It is one of the most
                sophisticated active hunting behaviors of any bird in North America.
              </p>
            </section>
          </AnimateIn>
        </div>

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
            "headline": "Reddish Egret (Egretta rufescens) | South Texas Birds",
            "description": "Reddish Egret identification, habitat, and where to find it on the Texas coast. North America's rarest heron, known for its spectacular lunging, dancing foraging display.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/ReddishEgret_Gam.jpg",
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
