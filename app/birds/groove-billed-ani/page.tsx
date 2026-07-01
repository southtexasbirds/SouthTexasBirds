import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/6/69/Groove-billed_ani_%28Crotophaga_sulcirostris%29_Cayo.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/groove-billed-ani" },
  title: "Groove-billed Ani (Crotophaga sulcirostris) | South Texas Birds",
  description:
    "Groove-billed Ani identification, habitat, and where to find it in the Rio Grande Valley. A social, loose-feathered cuckoo that breeds communally in thornscrub.",
  openGraph: {
    type: "article",
    title: "Groove-billed Ani | South Texas Birds",
    description: "Groove-billed Ani identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Groove-billed Ani perched in Belize" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
];

export default function GrooveBilledAniPage() {
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
            Rio Grande Valley · Summer Resident
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Groove-billed Ani
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Crotophaga sulcirostris &nbsp;·&nbsp; <span className="not-italic" lang="es">Garrapatero piquiliso</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Summer resident
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
            <Image src={PHOTO} alt="Groove-billed Ani perched showing large ridged bill and loose dark plumage" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 35%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Groove-billed_ani_(Crotophaga_sulcirostris)_Cayo.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Groove-billed Ani is one of those birds that immediately announces itself: glossy black with a
              comically oversized ridged bill, loose iridescent plumage, and a long floppy tail, it moves through
              thornscrub in small flocks that call constantly with a liquid, rising <em>ti-coo</em>. A member of the
              cuckoo family, it is a common summer resident in the Rio Grande Valley and one of the first birds many
              visitors learn to identify by sound — the liquid call carries well through dense brush. Anis are
              notoriously social, nesting communally and often roosting in tight groups.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              All black (32–36 cm / 12.5–14 in) with iridescent green-purple gloss, a long graduated tail, and a
              large, laterally compressed bill with parallel horizontal grooves on the upper mandible — the feature
              that gives the species its name. The plumage often looks loose and somewhat disheveled. The tail is
              frequently held cocked or pumped when the bird walks.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The smooth-billed Ani — a closely related species — is extremely rare in South Texas and best
              distinguished by the bill: the Smooth-billed has a rounded, curved culmen ridge without grooves, while
              the Groove-billed shows parallel grooves along the upper mandible visible at moderate range. In the
              Valley, any ani is almost certainly Groove-billed.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Open thornscrub, woodland edges, agricultural land with hedgerows, and disturbed habitats near water.
              The Groove-billed Ani is remarkably tolerant of human-modified landscapes and is regularly found in
              suburban areas, farmland edges, and along roadsides where brushy cover is available.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the U.S., primarily a summer resident in South Texas, with most birds arriving April and departing
              October. A small number may overwinter in the Valley in mild years. The range extends from South Texas
              through Central America and into northwestern South America.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Forages in groups, often following cattle or other large animals to catch insects flushed by their
              movement — one of the behaviors that earns the bird its Spanish name, <em>garrapatero</em> (tick-eater).
              Diet includes large insects, lizards, frogs, and occasionally ticks picked from livestock. The flight
              is weak and undulating, with a few rapid wingbeats followed by a glide.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Communal nesting is the most remarkable aspect of the species&apos; biology: groups of 2–4 pairs build
              a single large nest of sticks together, and all females lay in the same nest. All adults share
              incubation and chick-rearing duties. Communal nests can contain 10 or more eggs.
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
                Common and stable throughout its range. The species&apos; tolerance of disturbed and agricultural
                land has helped it maintain and expand populations in areas where native habitat has been reduced.
                In South Texas, population trends appear stable.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Communal nesting in anis has an interesting evolutionary logic: each female in the group buries the
                eggs of other females under new nest material before laying her own on top. This means eggs laid
                last are on top — closest to warmth — and hatch first. The first-hatching female&apos;s chicks are
                therefore the most likely to survive. The result is a subtle arms race within the cooperative group
                that biologists have studied as a textbook example of conflict within cooperation.
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
            "url": "https://southtexasbirds.org/birds/groove-billed-ani",
            "headline": "Groove-billed Ani (Crotophaga sulcirostris) | South Texas Birds",
            "description": "Groove-billed Ani identification, habitat, and where to find it in the Rio Grande Valley. A social, loose-feathered cuckoo that breeds communally in thornscrub.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Groove-billed_ani_%28Crotophaga_sulcirostris%29_Cayo.jpg",
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
