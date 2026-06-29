import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/e/e5/Masked_duck_%28Nomonyx_dominicus%29.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/masked-duck" },
  title: "Masked Duck (Nomonyx dominicus) | South Texas Birds",
  description:
    "Masked Duck identification, habitat, and where to find it in the Rio Grande Valley. One of the most secretive and sought-after rarities in U.S. birding.",
  openGraph: {
    type: "article",
    title: "Masked Duck | South Texas Birds",
    description: "Masked Duck identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Male Masked Duck showing chestnut body and black mask" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
];

export default function MaskedDuckPage() {
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
            Rio Grande Valley · Rare Resident
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Masked Duck
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Nomonyx dominicus &nbsp;·&nbsp; <span className="not-italic" lang="es">Pato enmascarado</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Rare resident
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
            <Image src={PHOTO} alt="Male Masked Duck showing chestnut body and black face mask" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 40%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Masked_duck_(Nomonyx_dominicus).jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Masked Duck is a true gem of Rio Grande Valley birding — a small, secretive stiff-tailed duck that
              disappears into dense marsh vegetation and can be virtually impossible to find even when present. It is
              the only member of the genus <em>Nomonyx</em> and the sole relative of the Ruddy Duck found in the Valley.
              Numbers in South Texas fluctuate dramatically depending on conditions, and in good years — when water
              levels are right and emergent vegetation is dense — Estero Llano Grande or Santa Ana NWR can produce
              reliable sightings. In bad years, the species can go undetected for months.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A small (30–36 cm / 12–14 in) stiff-tailed duck that often holds the stiff tail cocked upward like a
              Ruddy Duck. Breeding male: warm chestnut body, black face mask, bright blue bill. Non-breeding male and
              female: brown overall with two pale horizontal stripes on each side of the face — a distinctive pattern
              not shared by Ruddy Duck. The female also has the striped face, though less bold than the male&apos;s.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Distinguished from the Ruddy Duck by the facial stripes (Ruddy has a plain cheek), the smaller size,
              and the tendency to remain skulking in thick vegetation rather than loafing in open water.
              White wing patches visible in flight also separate it from Ruddy Duck at any age.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Dense freshwater marshes with abundant emergent vegetation — cattails, bulrushes, water hyacinth — at the
              water&apos;s edge. Strongly tied to vegetated margins; rarely seen in open water. The species is more
              reluctant to take flight than most ducks and will dive or run into vegetation when disturbed rather than
              flushing into the air.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the United States, essentially restricted to the Rio Grande Valley as an irregular rare resident.
              Broader range extends through the Caribbean and from Mexico through Central America to Peru and Brazil.
              Movements are poorly understood but the species appears to be partially nomadic, appearing irregularly
              at sites in response to water and vegetation conditions.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Forages by diving for aquatic seeds, aquatic invertebrates, and plant material, submerging cleanly from
              the surface like the closely related Ruddy Duck. The stiff tail is held cocked upward when the bird is
              alert or displaying. Secretive by nature, it spends much of its time concealed within emergent vegetation,
              making detection a matter of patience and often luck.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Best found by scanning the edges of vegetation beds from a fixed observation point, watching for the
              bird to emerge briefly into an open channel or pool. Early morning light and calm conditions improve
              the chances of seeing one before it retreats into cover.
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
                Globally considered Least Concern, though populations are poorly monitored due to the species&apos;
                secretive habits and patchy distribution. Loss of freshwater marshes throughout its range is the
                primary threat. In South Texas, maintenance of managed wetlands at the major refuges provides critical
                habitat for this elusive species.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Masked Duck is placed in its own monotypic genus, <em>Nomonyx</em>, separate from the Ruddy Duck
                and Old World stiff-tails in <em>Oxyura</em>. Molecular studies suggest the two lineages diverged
                early and independently evolved the stiff-tail display behavior. The Masked Duck&apos;s closest
                living relative is the Ruddy Duck — the only other stiff-tail found in the Americas — making their
                overlap in South Texas a rare meeting of the two American stiff-tail lineages.
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
            "headline": "Masked Duck (Nomonyx dominicus) | South Texas Birds",
            "description": "Masked Duck identification, habitat, and where to find it in the Rio Grande Valley. One of the most secretive and sought-after rarities in U.S. birding.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Masked_duck_%28Nomonyx_dominicus%29.jpg",
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
