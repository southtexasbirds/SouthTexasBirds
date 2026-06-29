import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/8/8e/Green_Parakeet_-in_tree_-South_Texas-8.jpg";

export const metadata: Metadata = {
  title: "Green Parakeet (Psittacara holochlorus) | South Texas Birds",
  description:
    "Green Parakeet identification, habitat, and where to find it in South Texas. A naturalized population of all-green parakeets that has thrived in the Rio Grande Valley since the 1970s.",
  openGraph: {
    title: "Green Parakeet | South Texas Birds",
    description: "Green Parakeet identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Green Parakeet perched in tree in South Texas" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
];

export default function GreenParakeetPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Rio Grande Valley · Resident (naturalized)</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>Green Parakeet</h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>Psittacara holochlorus &nbsp;·&nbsp; <span className="not-italic">Perico verde</span></p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>Resident</span>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image src={PHOTO} alt="Green Parakeet perched in tree in South Texas" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 35%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:Green_Parakeet_-in_tree_-South_Texas-8.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Green Parakeet is one of two naturalized parrot species that have become
              established residents of the lower Rio Grande Valley. Originally native to
              northeastern Mexico, wild-caught birds that escaped or were released from the
              pet trade in the 1970s established a feral population that has now grown to
              several thousand birds in the McAllen-Brownsville corridor. The ABA (American
              Birding Association) officially accepted the Texas population as a countable
              species in 2017. Their raucous calls and acrobatic flights over Valley neighborhoods
              at dawn and dusk are now a defining feature of the urban soundscape.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Almost entirely bright green — a relatively large parakeet (13 inches) with long
              pointed tail. Yellow-green on the underparts; brighter green above. The face shows
              occasional scattered orange-red feathers, especially around the lores, though
              much less than some other green parakeet species. Bill is pale and heavy. In
              flight, yellowish underwing coverts contrast with greener flight feathers.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The main confusion species in the Valley is the Monk Parakeet, which is smaller
              and grayer on the face and breast. Green Parakeets travel in noisy flocks and
              are often heard before they are seen — a loud, harsh <em>kree-kree</em> in
              flight is characteristic. Flying flocks show rapid, direct wingbeats.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              In the Rio Grande Valley, Green Parakeets inhabit urban and suburban areas with
              large trees — palm groves, city parks, neighborhoods with mature fig, citrus,
              and native trees. They roost communally in large numbers and range widely to
              forage each day. Cliff faces and tall structures are used for nesting.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The naturalized Texas population is concentrated in Hidalgo and Cameron counties.
              The native range is in eastern and southern Mexico from Tamaulipas south through
              Central America.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Green Parakeets are highly social and feed in flocks, consuming fruits, seeds,
              flowers, grain, and cultivated crops. They can cause significant damage to
              orchards and gardens. Figs, palm fruits, and sorghum are favored foods in the
              Valley.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Large communal roosts — sometimes thousands of birds — form at dusk in palm
              groves and other tall trees. The pre-roost gatherings, with their swirling
              green flocks and deafening noise, are a spectacle in their own right. Nesting
              occurs in cliff cavities, buildings, and bridges.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>Look for flocks flying overhead at dawn and dusk in any McAllen or Brownsville neighborhood. Local birders can point you to current roost sites, which shift seasonally.</p>
          </section>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>IUCN: Least Concern</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                The native population in Mexico is stable. The naturalized Texas population
                has grown substantially and is self-sustaining. Some concern exists about
                competition with native cavity-nesters, though cliff-nesting reduces
                this overlap. ABA-countable since 2017.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Green Parakeet population in South Texas is large enough that coordinated
                Christmas Bird Counts regularly record thousands of individuals in the
                McAllen area — making it one of the most numerous parakeet species counted
                anywhere in North America each winter. The colony grows a little larger
                every year.
              </p>
            </section>
          </AnimateIn>
        </div>
        <AnimateIn>
          <div className="text-center pt-4">
            <Link href="/birds" className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← Browse all South Texas species</Link>
          </div>
        </AnimateIn>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Green Parakeet (Psittacara holochlorus) | South Texas Birds",
            "description": "Green Parakeet identification, habitat, and where to find it in South Texas. A naturalized population of all-green parakeets that has thrived in the Rio Grande Valley since the 1970s.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Green_Parakeet_-in_tree_-South_Texas-8.jpg",
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
