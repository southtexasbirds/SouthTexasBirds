import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/4/48/Chondrohierax_uncinatus_76608753.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/hook-billed-kite" },
  title: "Hook-billed Kite (Chondrohierax uncinatus) | South Texas Birds",
  description:
    "Hook-billed Kite identification, habitat, and where to find it in the Rio Grande Valley. One of the rarest regularly occurring raptors in the United States.",
  openGraph: {
    type: "article",
    title: "Hook-billed Kite | South Texas Birds",
    description: "Hook-billed Kite identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Hook-billed Kite perched in riparian forest" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission — hawk watch platform", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Salineño", region: "Zapata County", href: "/hotspots#salineno" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
];

export default function HookBilledKitePage() {
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
            Hook-billed Kite
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Chondrohierax uncinatus &nbsp;·&nbsp; <span className="not-italic" lang="es">Milano pico garfio</span>
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
            <Image src={PHOTO} alt="Hook-billed Kite perched in riparian forest, South Texas" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Chondrohierax_uncinatus_76608753.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Hook-billed Kite is one of the rarest regularly occurring raptors in the United States, found north
              of the Rio Grande only in a small patch of riparian forest in Starr County and at Bentsen-Rio Grande SP.
              It is a genuine rarity — sought by visiting birders who must invest patient hours at the hawk watch
              platform, scanning thermals above the river forest for the distinctive silhouette. The enormous hooked
              bill betrays the species&apos; highly specialized diet: it is a snail specialist, and the outsized bill
              is an evolutionary tool for prying land snails from their shells.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A medium-sized raptor (38–43 cm / 15–17 in) with unusually variable plumage. Adults occur in a gray
              morph (male: gray above, finely barred gray and white below), a brown morph (female: brown above, barred
              rufous and white below), and a rare dark morph. All forms share the diagnostic feature: an enormously
              deep, strongly hooked bill visible at close range or in flight.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In flight, the best field marks are the combination of broadly banded tail and a characteristic
              &ldquo;hunchbacked&rdquo; silhouette — the large head and heavy bill weight the front of the bird,
              giving it a distinctive front-heavy look when soaring. The wings are relatively broad and rounded.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Dense riparian forest where large land snails (genus Rabdotus) are abundant. The Hook-billed Kite is a
              dietary specialist on arboreal land snails, and its occurrence in South Texas is closely tied to patches
              of mature riparian forest where snail populations are high. In the U.S., limited to the riparian
              corridor near Bentsen SP and Salineño.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The broader range extends from northeastern Mexico south through Central America and most of South
              America to Bolivia, with a separate island population in Cuba. The species is more widespread and
              approachable in areas of Mexico just south of the border.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Essentially a snail specialist: Hook-billed Kites feed almost entirely on large arboreal land snails of
              the genus Rabdotus and related groups, which they pry from the shell or crush with the powerful hooked
              bill. This dietary specialization explains both the extraordinary bill morphology and the species&apos;
              dependence on specific forest patches where snail populations are adequate.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Birds are most visible in the morning and late afternoon when they soar over the forest canopy to
              relocate between foraging areas. The best strategy in South Texas is early morning observation from the
              hawk watch platform at Bentsen SP, scanning the thermals that develop above the river forest.
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

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}>
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Best Time to See</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Year-round at Salineño</strong> — the Hook-billed Kite&apos;s most reliable territory in the U.S. is along the Rio Grande at Salineño Wildlife Preserve, where birds are present in every month. Early morning is best: arrive before 8 a.m. and scan the woodland edge above the river. <strong>September</strong> is a bonus window when birds are more likely to soar high on thermals alongside migrating raptors at Bentsen. Calm, sunny mornings after a cold front passage maximize soaring activity.
            </p>
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
                Least Concern globally, but the U.S. population is tiny and highly vulnerable. Clearance of riparian
                forest and suppression of land snail populations — on which the kite depends entirely — are the
                primary local threats. The protected corridor at Bentsen SP is essential to its continued presence
                in the country.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Different Hook-billed Kites within a population can have bills of radically different sizes — some
                individuals have bills nearly twice as deep as others of the same sex. Bill depth correlates with
                the size of snails taken: large-billed birds tackle bigger, thicker-shelled species while small-billed
                birds specialize on thinner ones. It is one of the clearest examples of within-species ecological
                specialization known in birds.
              </p>
            </section>
          </AnimateIn>
        </div>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>In the News</p>
            <Link href="/news/fall-hawk-migration-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
              <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>South Texas Fall Hawk Migration: Broad-winged Kettles at Bentsen</span>
              <span className="text-sm" style={{ color: "#5C5954" }}>Hook-billed Kites often soar during the same thermal conditions that lift migrating Broad-winged Hawks — making Bentsen's hawk watch tower one of the best places to spot this rare resident in flight.</span>
              <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
            </Link>
          </section>
        </AnimateIn>

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
            "url": "https://southtexasbirds.org/birds/hook-billed-kite",
            "headline": "Hook-billed Kite (Chondrohierax uncinatus) | South Texas Birds",
            "description": "Hook-billed Kite identification, habitat, and where to find it in the Rio Grande Valley. One of the rarest regularly occurring raptors in the United States.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/4/48/Chondrohierax_uncinatus_76608753.jpg",
                        "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": {
              "@type": "Organization",
              "name": "South Texas Birds",
              "url": "https://southtexasbirds.org"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Where can I see a Hook-billed Kite in the United States?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Hook-billed Kite is one of the rarest regularly occurring raptors in the United States, found only along a short stretch of the Rio Grande in South Texas. Salineño Wildlife Preserve is the most reliable U.S. site, with one to three territorial pairs present most years. Bentsen-Rio Grande Valley State Park hawk tower is also productive during the fall raptor migration when birds soar on thermals."
                }
              },
              {
                "@type": "Question",
                "name": "What does a Hook-billed Kite eat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hook-billed Kites are specialized snail eaters. Their strongly hooked bill is specifically adapted for extracting the soft bodies of large land snails (genus Orthalicus) from their shells. This dietary specialization makes the kite closely tied to humid subtropical woodland where these snails are abundant — specifically the riparian forest along the lower Rio Grande."
                }
              },
              {
                "@type": "Question",
                "name": "Is the Hook-billed Kite endangered?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Hook-billed Kite is not globally threatened — it is common across much of Central and South America — but in the United States it exists at the extreme northern edge of its range with a very small population. Habitat loss along the Rio Grande is the primary concern for U.S. birds. Its dependence on riparian forest makes it vulnerable to continued clearing of the corridor."
                }
              },
              {
                "@type": "Question",
                "name": "How do I identify a Hook-billed Kite?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In flight, the Hook-billed Kite has a distinctive silhouette: paddle-shaped wings that bulge broadly in the middle, a rounded tail with pale banding, and a relatively large-headed appearance. The bill is massive and strongly hooked but difficult to see at distance. Males are gray above with white barring below; females are brown above with rufous-barred underparts. The pale underwing with dark markings is the most reliable field mark in flight."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
