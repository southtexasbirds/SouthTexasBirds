import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/d/d0/American_oystercatcher_on_Fort_Tilden_beach_%2893754%29.jpg";

export const metadata: Metadata = {
  title: "American Oystercatcher (Haematopus palliatus) | South Texas Birds",
  description:
    "American Oystercatcher identification, habitat, and where to find it in South Texas. A boldly patterned shorebird with a vivid orange-red bill, found on coastal beaches and oyster reefs year-round.",
  openGraph: {
    title: "American Oystercatcher | South Texas Birds",
    description: "American Oystercatcher identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "American Oystercatcher on beach showing orange bill" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Laguna Atascosa National Wildlife Refuge", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "South Padre Island Birding & Nature Center", region: "South Padre Island", href: "/hotspots#south-padre-island" },
];

export default function AmericanOystercatcherPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Texas Coast · Year-round Resident</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>American Oystercatcher</h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>Haematopus palliatus &nbsp;·&nbsp; <span className="not-italic" lang="es">Ostrero americano</span></p>
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
            <Image src={PHOTO} alt="American Oystercatcher on beach showing bold black-and-white pattern and orange bill" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 40%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:American_oystercatcher_on_Fort_Tilden_beach_(93754).jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The American Oystercatcher is one of the most visually striking shorebirds on
              the Texas coast — a large, boldly patterned bird with a jet-black hood, brown
              back, white underparts, and a vivid orange-red bill that looks like it was
              designed by a graphic designer. Found on coastal beaches, tidal flats, and
              oyster reefs year-round, it announces its presence with a loud, piping
              call that carries far down the beach. Watching one work an oyster bed — prying
              shells open with that remarkable bill — is a memorable spectacle.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large shorebird (18 inches) with distinctive two-tone plumage: black hood and
              upper breast, dark brown back and wings, white belly and flanks. The bill is the
              defining feature — long, bright orange-red, laterally compressed, and knife-like
              at the tip. Eyes are bright yellow with a red orbital ring. Legs are pale pinkish.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In flight, white wing stripes and white rump are conspicuous. The loud, repeated
              <em> kleeeep</em> call is often the first indication of the bird&apos;s presence.
              No other shorebird on the Texas coast shares this combination of large size,
              black-and-white pattern, and orange bill.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              American Oystercatchers are coastal specialists, restricted to beaches, tidal
              mudflats, barrier islands, and shallow bays with oyster reefs. They nest on
              the ground above the tideline on open beaches or shell ridges. In South Texas,
              they are found along the Laguna Madre coast and on South Padre Island.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The U.S. range spans both coasts — from New England south along the Atlantic
              Coast, around the Gulf, and up the Pacific Coast to Baja California. The Texas
              Gulf Coast hosts a significant breeding population. Winter birds may be joined
              by migrants from more northerly populations.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              As the name suggests, oystercatchers specialize in bivalves — oysters, mussels,
              clams — which they open by either hammering the shell until it cracks or by
              inserting the bill through a gap and severing the adductor muscle. Individual
              birds tend to specialize in one technique or the other. They also eat marine
              worms, crabs, and other invertebrates.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Pairs are strongly monogamous and faithful to nest sites, sometimes using the
              same territory for many years. They are vigilant and noisy in defense of the
              nest, running loudly toward intruders. Both parents share incubation and
              chick-rearing; chicks are precocial and follow parents to foraging areas
              while still learning to open shells.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>Walk the South Padre Island beaches and scan oyster reefs at low tide. The loud call often locates the bird before you see it. Look for pairs near the tideline.</p>
          </section>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>IUCN: Least Concern</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Stable but sensitive to coastal development and disturbance at nest sites.
                Beach driving, foot traffic, and predation by feral animals threaten
                nesting success on Gulf coast barrier islands. Oyster reef habitat is
                declining in several bays, affecting foraging availability.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Young oystercatchers are fed by their parents for several months after hatching —
                they cannot open oysters independently until they are fully grown. The technique
                is learned, not innate, and juvenile birds practice on empty shells. Newly
                independent birds may spend their first year foraging mainly on easier prey
                like marine worms before mastering the bivalve-opening skill.
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
            "headline": "American Oystercatcher (Haematopus palliatus) | South Texas Birds",
            "description": "American Oystercatcher identification, habitat, and where to find it in South Texas. A boldly patterned shorebird with a vivid orange-red bill, found on coastal beaches and oyster reefs year-round.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/d/d0/American_oystercatcher_on_Fort_Tilden_beach_%2893754%29.jpg",
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
