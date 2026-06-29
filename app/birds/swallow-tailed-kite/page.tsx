import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Swallow-tailed_Kite_%2834163638494%29.jpg";

export const metadata: Metadata = {
  title: "Swallow-tailed Kite (Elanoides forficatus) | South Texas Birds",
  description:
    "Swallow-tailed Kite identification, habitat, and where to see it in South Texas. Arguably the most graceful bird in North America, migrating through the Valley in spring and fall.",
  openGraph: {
    type: "article",
    title: "Swallow-tailed Kite | South Texas Birds",
    description: "Swallow-tailed Kite identification, habitat, and when to see it in South Texas.",
    images: [{ url: PHOTO, alt: "Swallow-tailed Kite in flight showing forked tail" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
];

export default function SwallowTailedKitePage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Rio Grande Valley · Spring &amp; Fall Migrant</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>Swallow-tailed Kite</h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>Elanoides forficatus &nbsp;·&nbsp; <span className="not-italic" lang="es">Milano tijereta</span></p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#5A3782", color: "#EFE3CE" }}>Migrant</span>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image src={PHOTO} alt="Swallow-tailed Kite in flight showing deeply forked tail" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:Swallow-tailed_Kite_(34163638494).jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Swallow-tailed Kite is, by many accounts, the most graceful bird in North
              America. Watching one bank and wheel overhead — black-and-white plumage flashing,
              the impossibly long forked tail swinging through arcs — is an experience that
              stops birders and non-birders alike in their tracks. South Texas lies along the
              main migration corridor between breeding grounds in the southeastern U.S. and
              wintering areas in South America; spring migrants move through from late April
              through May, and fall birds reappear in August. On good days, loose groups of
              a dozen or more may be seen soaring overhead at Valley hotspots.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Unmistakable. The combination of snow-white head and underparts contrasting with
              jet-black back, wings, and deeply forked tail is unique among North American
              birds. The tail is extraordinarily long — longer than the rest of the body —
              and the fork deepens even further in adults. In flight the black-and-white
              pattern and elegant sweeping wingbeats are distinctive from a great distance.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Sexes look alike. Juveniles are similar to adults but with slightly shorter
              tail streamers and fine streaking on the head and breast. No confusion
              species in its range.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Swallow-tailed Kites breed in the southeastern United States — primarily Florida,
              South Carolina, and neighboring states — in tall forest near wetlands. They winter
              in South America, mainly west of the Andes in Bolivia, Brazil, and surrounding
              countries. The migration route takes them across the Gulf of Mexico and through
              Mexico and Central America.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In South Texas, migrants may be seen over any habitat — woodland edges, open sky
              above river corridors, and parks — as they move through. The species does not
              breed in Texas, though occasional summer individuals linger.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Swallow-tailed Kites are aerial specialists, spending most of their active
              hours on the wing. They catch large insects — dragonflies, cicadas, beetles —
              in flight, as well as tree frogs, lizards, and nestlings snatched directly
              from branches or leaves without landing. They have been observed drinking
              and bathing in flight by skimming water surfaces.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              On migration they often travel in loose groups, riding thermals and soaring
              effortlessly for hours. Unlike most raptors they seem to genuinely enjoy
              aerial maneuvering — often seen playing in updrafts with no apparent
              foraging purpose.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>
              Best window: late April through May (spring) and August (fall). Look up — migrants often appear overhead with no warning.
            </p>
          </section>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>IUCN: Least Concern</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Stable globally. The U.S. population was significantly reduced by habitat loss
                in the 19th and early 20th centuries, contracting from a formerly wider range
                to its current southeastern stronghold. Deforestation at wintering grounds in
                South America is an ongoing concern for the long-term population.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Swallow-tailed Kites eat, drink, and bathe entirely in flight — they have been
                documented scooping water from the surface of ponds and rivers without landing.
                They also break twigs from trees while flying to build their nests high in
                the forest canopy, never touching the ground throughout the entire breeding cycle.
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
            "headline": "Swallow-tailed Kite (Elanoides forficatus) | South Texas Birds",
            "description": "Swallow-tailed Kite identification, habitat, and where to see it in South Texas. Arguably the most graceful bird in North America, migrating through the Valley in spring and fall.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Swallow-tailed_Kite_%2834163638494%29.jpg",
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
