import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/8/8c/Sporophila_torqueola_55799290.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/white-collared-seedeater" },
  title: "White-collared Seedeater (Sporophila morelleti) | South Texas Birds",
  description:
    "White-collared Seedeater identification, habitat, and where to find it in South Texas. A tiny, distinctive finch-like bird at the very northern edge of its range — Salineño is the best site in the U.S. to find it.",
  openGraph: {
    type: "article",
    title: "White-collared Seedeater | South Texas Birds",
    description: "White-collared Seedeater identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "White-collared Seedeater male showing black-and-white pattern" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Salineño Wildlife Preserve", region: "Salineño", href: "/hotspots#salineno" },
  { name: "Falcon State Park / Zapata area", region: "Zapata County", href: "/hotspots" },
];

export default function WhiteCollaredSeedeaterPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Upper Rio Grande · Rare Resident</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>White-collared Seedeater</h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>Sporophila morelleti &nbsp;·&nbsp; <span className="not-italic" lang="es">Semillero de collar</span></p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "rgba(199,127,74,0.15)", color: "#C77F4A", border: "1px solid rgba(199,127,74,0.35)" }}>Rare Resident</span>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image src={PHOTO} alt="White-collared Seedeater male perched showing black cap and white collar" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 35%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:Sporophila_torqueola_55799290.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The White-collared Seedeater is one of the most sought-after birds in the United
              States — a tiny, candy-colored finch at the very northern edge of a range that
              extends through Central America. In South Texas it is a rare, local resident along
              the upper Rio Grande, primarily in tall riparian grass and cane thickets near the
              river. Numbers fluctuate year to year, and finding the species requires patience
              and timing. Salineño is consistently the most reliable U.S. site. A singing male
              in the Rio Grande cane is a genuine Texas birding milestone.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A tiny finch (4.5 inches) with a round head, short heavy bill, and chunky body.
              Males are distinctive: black cap, back, and wings; white throat; white collar
              across the upper breast; buffy-white underparts; white wing bars. The bill is
              thick and rounded at the tip — typical of seed-crackers. Females are plain
              brownish-buff with wing bars and faint streaking, much less distinctive.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Males give a high, sweet, warbling song — surprisingly melodious for such a
              small bird. Females and immatures are best located by associating with males
              or by searching cane edges where the species forages for grass seeds.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              In South Texas, White-collared Seedeaters inhabit tall grass and cane
              (<em>Arundo donax</em>) thickets along the Rio Grande — particularly the transition
              zone where cane meets lower shrubby vegetation. The birds forage for grass seeds
              at the base of cane and in adjacent weedy areas.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The U.S. population is restricted to a narrow stretch of the Rio Grande in Webb
              and Zapata counties. The species ranges widely through Mexico and Central America
              south to Panama, where it is locally common in grassy and weedy habitats.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              White-collared Seedeaters are granivores, feeding almost exclusively on small
              grass seeds — clinging to seed heads and extracting seeds with the specialized
              short, rounded bill. They forage low in cane and grass, often disappearing
              into dense vegetation and remaining invisible for long periods.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Males sing persistently from exposed perches atop cane stems — the best
              way to locate the species. Outside of breeding season, small flocks may form,
              and birds can be found in mixed-species flocks with other small finches and
              sparrows at weedy margins.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>Check local eBird reports before making a special trip — the species is irregular and numbers vary by year. Listen for the sweet warbling song along the riverbank cane at Salineño.</p>
          </section>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>IUCN: Least Concern</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Stable across its broad Latin American range. The tiny U.S. population in
                Texas is at the range edge and is sensitive to habitat changes along the
                Rio Grande. Loss or spraying of river-edge cane habitat directly impacts
                the few sites where this species occurs in the U.S.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The White-collared Seedeater has one of the most melodious songs of any
                bird its size in North America — a rich, rolling warble that sounds too
                large to come from such a small body. Males sing from cane tops for minutes
                at a stretch during breeding season, and the song is often the only clue
                that the species is present at a site.
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
            "datePublished": "2026-06-20",
            "dateModified": "2026-06-28",
            "url": "https://southtexasbirds.org/birds/white-collared-seedeater",
            "headline": "White-collared Seedeater (Sporophila morelleti) | South Texas Birds",
            "description": "White-collared Seedeater identification, habitat, and where to find it in South Texas. A tiny, distinctive finch-like bird at the very northern edge of its range — Salineño is the best site in the U.S. to find it.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Sporophila_torqueola_55799290.jpg",
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
