import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/2/2c/Male_Painted_Bunting_Singing.jpg";

export const metadata: Metadata = {
  title: "Painted Bunting (Passerina ciris) | South Texas Birds",
  description:
    "Painted Bunting identification, habitat, and where to find it in South Texas. The most colorful bird in North America winters in the Rio Grande Valley in good numbers.",
  openGraph: {
    title: "Painted Bunting | South Texas Birds",
    description:
      "Painted Bunting identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Male Painted Bunting singing" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "South Padre Island", region: "Cameron County", href: "/hotspots#south-padre-island" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
];

export default function PaintedBuntingPage() {
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
            Rio Grande Valley · Winter Visitor &amp; Migrant
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Painted Bunting
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Passerina ciris &nbsp;·&nbsp; <span className="not-italic">Colorín sietecolores</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Winter visitor / migrant
          </span>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}>
            <Image src={PHOTO} alt="Male Painted Bunting singing" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </div>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Male_Painted_Bunting_Singing.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The male Painted Bunting is, by almost universal agreement, the most colorful bird in North America —
              a dazzling mosaic of cobalt blue on the head, brilliant scarlet on the breast and belly, and lime green
              on the back that seems almost too vivid to be real. South Texas hosts significant numbers of wintering
              birds and is crossed by migrating individuals in spring and fall, making the Rio Grande Valley one of
              the most reliable places in the country to see one. The female, in contrast, is a pure bright green —
              subtle by bunting standards, but among the greenest small birds on the continent.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The adult male is unmistakable: cobalt-blue head, brilliant red underparts, and lime-green back. No other
              North American songbird combines these three colors. The female and immature birds are uniform bright
              green above, paler yellowish-green below — much greener than most female songbirds, which helps separate
              them from similarly plain warblers and vireos. First-year males can show a patchy intermediate plumage
              with blotches of adult color.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Size is small — about 14 cm (5.5 in) — compact and thick-billed for a songbird. The stout finch-like
              bill, useful for cracking seeds, separates it from warblers and vireos of similar size. Painted Buntings
              visit feeders stocked with white millet, making them one of the more reliable feeder birds in winter at
              Valley nature centers.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Painted Buntings breed in two separate populations: one on the southern Great Plains (Texas, Oklahoma,
              Kansas) and another along the southeastern Atlantic coast. South Texas lies on the wintering and migratory
              route for the western Great Plains population, which winters in Mexico and Central America. Wintering birds
              in South Texas favor dense brushy edges, weedy fields, and gardens.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Spring migrants pass through March through May, and some birds linger into early June at South Padre
              Island and other coastal stops. Fall migration is less conspicuous. Wintering birds are typically present
              from October through March.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Primarily a seed eater: grass seeds, weed seeds, and white millet at feeders dominate the winter diet.
              Insects are added in the breeding season for protein. Buntings move through low vegetation and ground
              cover methodically, often in small flocks with other sparrows and buntings in winter.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Males on the breeding grounds are highly territorial and aggressive toward rival males; fights are fierce
              and occasionally fatal. The male&apos;s song is a sweet, high-pitched warble delivered persistently from
              a prominent perch during the breeding season.
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
                Despite Least Concern status, the western population has shown significant long-term declines.
                Primary threats include illegal capture for the cage-bird trade in wintering areas in Mexico and
                Central America, habitat loss on both breeding and wintering grounds, and window collisions during
                migration.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Male Painted Buntings can take nearly two years to acquire their brilliant adult plumage —
                first-year males resemble females and must wait until their second winter molt to show full
                color. This delayed plumage development may help young males avoid aggression from older,
                dominant males during their first breeding season.
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
