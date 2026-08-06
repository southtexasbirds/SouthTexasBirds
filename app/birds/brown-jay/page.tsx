import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO = "/images/birds/brown-jay.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/brown-jay" },
  title: "Brown Jay (Cyanocorax morio) | South Texas Birds",
  description:
    "Brown Jay identification and history in the Rio Grande Valley — once a Salineño specialty, now effectively absent from the U.S. What to know about this former South Texas bird.",
  openGraph: {
    type: "article",
    title: "Brown Jay | South Texas Birds",
    description: "Brown Jay identification and history in the Rio Grande Valley — once a Salineño specialty, now effectively absent from the U.S.",
    images: [{ url: "https://southtexasbirds.org/images/og-default.jpg", alt: "Brown Jay, a large dark jay with a white belly and long tail" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Salineño Wildlife Preserve", region: "Salineño", href: "/hotspots#salineno" },
];

export default function BrownJayPage() {
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
            Rio Grande Valley · Historical / Vagrant
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Brown Jay
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Cyanocorax morio &nbsp;·&nbsp; <span className="not-italic" lang="es">Chara papán</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#6E6B66", color: "#EFE3CE" }}>
            Historical / vagrant
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
            <Image src={PHOTO} alt="Brown Jay, a large dark jay with a white belly and long tail, on the ground" fill priority className="object-cover" style={{ objectPosition: "50% 35%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Brown_Jay_(25018938602).jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              For decades, the Brown Jay was one of the signature reasons serious birders made the long drive to
              Salineño: a large, loud, unmistakable jay found nowhere else in the country, holding on at the
              extreme northern tip of its range along the Rio Grande near Salineño and Falcon Dam. That is no
              longer the case. Sightings grew sparser through the 2000s and 2010s, and the species is now
              considered effectively gone from the United States — this page exists to document a former South
              Texas specialty and the small chance of its return, not to point anyone toward a findable bird.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              A large, long-tailed jay (38–43 cm / 15–17 in) — noticeably bigger than a Green Jay — with dark
              sooty-brown upperparts, head, and breast that contrast sharply with a clean white belly and undertail.
              The bill, legs, and eye are black in adults (young birds show yellow bare parts that darken with age).
              Sociable and vocal, it moves in loose, noisy family groups and gives a harsh, far-carrying <em>keeow</em>
              or rattling call that, historically, was often the first clue to its presence. Formerly placed in its
              own genus, <em>Psilorhinus</em>, before molecular studies folded it into <em>Cyanocorax</em> alongside
              the Green Jay.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Riparian forest and adjacent brushy woodland along the Rio Grande — historically the same stretch of
              river corridor near Salineño and Falcon Dam favored by other river specialties like Red-billed Pigeon
              and Audubon&apos;s Oriole.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The species remains common through Mexico and Central America; the U.S. population was always a
              small, marginal extension of that range at the very northern edge, rather than a self-sustaining core
              population. That marginal status is exactly what made it vulnerable to disappearing from the U.S.
              side of the river even while it remains secure just to the south.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              An omnivorous, highly social jay that historically moved through the canopy and understory in
              cooperative family groups, often with helpers assisting at the nest. Diet includes large insects,
              small vertebrates, fruit, and seeds. Where it remains common further south, it is a bold, noisy
              presence readily drawn in by pishing or playback — the kind of bird that is hard to miss where it
              occurs, which makes its quiet disappearance from Texas all the more notable.
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
            <p className="text-sm leading-relaxed mt-4" style={{ color: "#4E4B46" }}>
              Honestly: there is no place in South Texas where a Brown Jay is currently expected. Salineño, its
              last regular U.S. stronghold, is the only site worth listing here, and it is listed for historical
              context and the outside chance of a returning bird — not as a reliable destination. Any Brown Jay
              seen in Texas today would be an exceptional record worth reporting to eBird and the Texas rare-bird
              alert.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}>
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Best Time to See</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Not currently expected.</strong> There is no reliable season or window for finding a Brown
              Jay in South Texas today. If one turns up, it would most likely be along the Salineño-to-Falcon Dam
              stretch of the river where the historical population held on longest. Check eBird rare-bird alerts
              rather than planning a trip around this species.
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
                Globally secure — the species remains common through Mexico and Central America and carries no
                elevated global conservation concern. Its disappearance from the U.S. is a local, range-edge story
                rather than a rangewide decline; the causes (habitat change along the river, or simply the normal
                contraction of a marginal population at the edge of its range) are not fully understood.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Brown Jay was long placed in its own monotypic genus, <em>Psilorhinus</em>, on the assumption it
                was only distantly related to the more colorful <em>Cyanocorax</em> jays like the Green Jay.
                Molecular studies overturned that: the Brown Jay actually sits within the Green Jay&apos;s own
                genus, making these two very differently colored birds — one a South Texas icon still common today,
                the other a South Texas ghost — closer relatives than their appearance would ever suggest.
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
            "datePublished": "2026-08-06",
            "dateModified": "2026-08-06",
            "url": "https://southtexasbirds.org/birds/brown-jay",
            "headline": "Brown Jay (Cyanocorax morio) | South Texas Birds",
            "description": "Brown Jay identification and history in the Rio Grande Valley — once a Salineño specialty, now effectively absent from the U.S. What to know about this former South Texas bird.",
            "image": "https://southtexasbirds.org/images/birds/brown-jay.webp",
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
                "name": "Can you still find a Brown Jay in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not reliably. The Brown Jay was formerly a regular specialty of the Salineño and Falcon Dam stretch of the Rio Grande, but sightings faded through the 2010s and the species is now considered effectively absent from the United States. Any record today would be an exceptional, noteworthy sighting rather than an expected find."
                }
              },
              {
                "@type": "Question",
                "name": "Where was the Brown Jay historically found in the U.S.?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Its U.S. range was always narrow and marginal: riparian forest along the Rio Grande near Salineño and the Falcon Dam area in Starr County, Texas, at the extreme northern edge of a range that extends south through Mexico and Central America. This was never a widespread U.S. bird, which is part of why its local disappearance went largely unnoticed outside of dedicated birding circles."
                }
              },
              {
                "@type": "Question",
                "name": "How do you identify a Brown Jay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A large, long-tailed jay with sooty-brown upperparts and a clean white belly and undertail, noticeably bigger than the Green Jay. Adults have all-black bill, legs, and eyes; young birds show yellow bare parts. It travels in loud, social family groups and gives a harsh, far-carrying call."
                }
              },
              {
                "@type": "Question",
                "name": "Is the Brown Jay related to the Green Jay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, more closely than their very different appearances suggest. The Brown Jay was formerly placed in its own genus, Psilorhinus, but molecular studies found it nested within Cyanocorax — the same genus as the Green Jay — and its scientific name was updated to Cyanocorax morio to reflect that relationship."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
