import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/5/5b/Tyrannus_couchii_112139785_%28cropped%29.jpg";

export const metadata: Metadata = {
  title: "Couch's Kingbird (Tyrannus couchii) | South Texas Birds",
  description:
    "Couch's Kingbird identification, habitat, and where to find it in South Texas. The default large yellow kingbird of the Rio Grande Valley — distinguished from the nearly identical Tropical Kingbird by call.",
  openGraph: {
    type: "article",
    title: "Couch's Kingbird | South Texas Birds",
    description: "Couch's Kingbird identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Couch's Kingbird perched on a branch" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
];

export default function CouchsKingbirdPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Rio Grande Valley · Year-round Resident</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>Couch&apos;s Kingbird</h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>Tyrannus couchii &nbsp;·&nbsp; <span className="not-italic" lang="es">Tirano de Couch</span></p>
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
            <Image src={PHOTO} alt="Couch's Kingbird perched on a branch" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:Tyrannus_couchii_112139785_(cropped).jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Couch&apos;s Kingbird is the quintessential large flycatcher of the lower Rio Grande
              Valley — found in virtually every park, garden, woodland edge, and roadside tree
              throughout the region. It was long lumped with the Tropical Kingbird as a single
              species; the two were split in 1983 based on call differences, range, and subtle
              plumage distinctions. In the Valley, Couch&apos;s is by far the more abundant of the
              two and is the default large yellow kingbird you will encounter at any RGV stop.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large flycatcher with gray head, olive-green back, white throat, and bright
              yellow underparts. The bill is heavy and slightly hooked. The tail is notched
              (slightly forked) and brown without rufous edges — the most reliable visual
              distinction from the Tropical Kingbird, which shows a more deeply notched tail
              with a brownish-gray tone.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In practice, the call is the surest way to separate the two: Couch&apos;s gives
              a rolling, nasal <em>breeeer</em> or <em>kip-breeeer</em>; the Tropical Kingbird
              produces a rapid, high-pitched twittering pip series. Any large yellow kingbird
              calling clearly can be identified by ear in seconds.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Couch&apos;s Kingbirds occupy a wide range of open and semi-open habitats —
              woodland edges, riparian corridors, roadsides, towns, parks, and suburban
              gardens with large trees. They readily adapt to human-altered landscapes and
              are among the most conspicuous birds in any RGV community.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The U.S. range is essentially limited to the lower Rio Grande Valley. The species
              is more widespread in Mexico, where it inhabits lowland forest edges and open
              country from the U.S. border south through the Yucatán Peninsula.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Like all kingbirds, Couch&apos;s is an aerial insectivore that sallies from a
              conspicuous perch to catch flying insects, returning to the same perch or a
              nearby one. Diet is primarily large insects — beetles, grasshoppers, wasps,
              and dragonflies — supplemented by berries and small fruits in season.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Kingbirds are famously aggressive in defense of nest and territory, readily
              mobbing and chasing much larger birds including hawks, herons, and crows.
              Nests are built in trees, often at moderate heights in parks or along
              roadsides. Both parents share incubation and chick-rearing duties.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>Effectively impossible to miss anywhere in the Valley. If you see a large yellow flycatcher on a wire or treetop in the RGV, it is almost certainly this species.</p>
          </section>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>IUCN: Least Concern</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Common and stable. The species adapts well to suburban and agricultural
                environments and shows no signs of population decline. Its versatility
                in habitat use makes it one of the more resilient birds in the Valley.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Couch&apos;s Kingbird is named for Darius Nash Couch, a U.S. Army officer and
                naturalist who collected the type specimen in Tamaulipas, Mexico, in the 1850s.
                The species was described by Spencer Fullerton Baird in 1858 — then spent 125 years
                lumped with the Tropical Kingbird before being recognized as a distinct species
                based on differences in vocalizations and range.
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
            "headline": "Couch's Kingbird (Tyrannus couchii) | South Texas Birds",
            "description": "Couch's Kingbird identification, habitat, and where to find it in South Texas. The default large yellow kingbird of the Rio Grande Valley — distinguished from the nearly identical Tropical Kingbird by call.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Tyrannus_couchii_112139785_%28cropped%29.jpg",
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
