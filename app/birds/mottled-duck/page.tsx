import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/8/86/MottledDuck_Gam.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/mottled-duck" },
  title: "Mottled Duck (Anas fulvigula) | South Texas Birds",
  description:
    "Mottled Duck identification, habitat, and where to find it along the Texas Gulf Coast. The only dabbling duck that breeds year-round in the coastal marshes of South Texas.",
  openGraph: {
    type: "article",
    title: "Mottled Duck | South Texas Birds",
    description:
      "Mottled Duck identification, habitat, and where to find it along the Texas Gulf Coast.",
    images: [{ url: PHOTO, alt: "Mottled Duck on a coastal marsh" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [PHOTO],
  },
};

const spots = [
  { name: "Laguna Atascosa National Wildlife Refuge", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "South Padre Island Birding & Nature Center", region: "South Padre Island", href: "/hotspots#south-padre-island" },
  { name: "Coastal marshes along the Laguna Madre", region: "Cameron County", href: "/hotspots" },
];

export default function MottledDuckPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>

      {/* ── Back nav ─────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/birds"
          className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70"
          style={{ color: "#C77F4A" }}
        >
          ← All Species
        </Link>
      </div>

      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#C77F4A" }}
          >
            Texas Gulf Coast · Year-round Resident
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-1"
            style={{ color: "#0E6B6B" }}
          >
            Mottled Duck
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Anas fulvigula &nbsp;·&nbsp; <span className="not-italic" lang="es">Pato moteado</span>
          </p>
          <span
            className="inline-block text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: "#0E6B6B", color: "#EFE3CE" }}
          >
            Resident
          </span>
        </AnimateIn>
      </div>

      {/* ── Hero image ───────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image
              src={PHOTO}
              alt="Mottled Duck resting on a coastal Texas marsh"
              fill
              unoptimized
              priority
              className="object-cover"
              style={{ objectPosition: "50% 30%" }}
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:MottledDuck_Gam.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              Wikimedia Commons
            </a>
          </p>
        </AnimateIn>
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">

        {/* Overview */}
        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Mottled Duck is the only dabbling duck that breeds year-round along the Gulf
              Coast, and South Texas is at the heart of its range. Unlike most North American
              ducks that winter here and breed elsewhere, Mottled Ducks are permanent residents
              of the coastal marshes, resacas, and prairie potholes stretching from Corpus Christi
              south to the Rio Grande. They occupy an ecological niche that no other native duck
              fills on the Texas coast — and they face a conservation challenge unique to their
              sedentary lifestyle: ongoing hybridization with feral Mallards.
            </p>
          </section>
        </AnimateIn>

        {/* Identification */}
        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              At a glance, Mottled Ducks resemble a dark female Mallard — which is precisely
              what makes identification tricky in areas where feral Mallards are present. Key
              features: the body plumage is a warm tawny-brown, heavily mottled and scaled with
              dark centers; the head and neck are paler buff with a finely streaked pattern;
              and the bill is bright yellow in males, olive-yellow in females — clean and
              unmarked, lacking the Mallard&apos;s dark saddle or orange patches.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In flight, the iridescent blue-purple speculum is bordered by black lines with
              little or no white — unlike the Mallard&apos;s white-bordered speculum. The body
              is noticeably darker overall than a female Mallard. Hybrids with Mallards are
              common and can show intermediate characters; a pure Mottled Duck with a yellow
              bill and no white speculum border is a reliable identification.
            </p>
          </section>
        </AnimateIn>

        {/* Habitat & Range */}
        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Mottled Ducks are coastal marsh specialists. In South Texas they inhabit the
              brackish and freshwater marshes of the Laguna Madre system, the resacas and
              oxbow lakes of the Rio Grande delta, seasonal prairie ponds, and the tidal flats
              and bay margins along the Gulf Coast. They favor dense emergent vegetation —
              bulrush, cattail, and cordgrass — for nesting and loafing.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The species is non-migratory, with a range confined to the Gulf Coast from
              central Texas south through the Mexican states of Tamaulipas and Veracruz,
              and a disjunct population in peninsular Florida. Texas birds do not move
              far from their breeding areas, making the protection of coastal wetland
              habitats especially critical.
            </p>
          </section>
        </AnimateIn>

        {/* Behavior & Diet */}
        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Like other dabbling ducks, Mottled Ducks feed by tipping forward in shallow
              water to reach submerged vegetation and invertebrates, and by grazing on
              aquatic plants and seeds along muddy margins. The diet includes aquatic
              insects, mollusks, crustaceans, small fish, and plant material such as
              seeds of bulrush and panic grass. They are most active at dawn and dusk.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Nesting begins as early as February, earlier than most waterfowl. The female
              constructs a grass-lined nest in dense marsh vegetation, typically laying
              8–10 eggs. The male deserts the female after incubation begins — typical
              dabbling duck behavior. Ducklings are precocial and can feed themselves
              within hours of hatching; the female leads them to water immediately.
            </p>
          </section>
        </AnimateIn>

        {/* Where to See */}
        <AnimateIn>
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: "#0E6B6B" }}>
              Where to See in South Texas
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {spots.map((spot) => (
                <Link
                  key={spot.name}
                  href={spot.href}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 transition-opacity hover:opacity-80"
                  style={{ background: "#F7F0E4", borderLeft: "3px solid #C77F4A" }}
                >
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#0E6B6B" }}>{spot.name}</p>
                    <p className="text-xs" style={{ color: "#6E6B66" }}>{spot.region}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>
              Present year-round. Scan marshy edges and resacas; compare carefully with
              any female Mallard-type ducks, watching for the clean yellow bill and
              dark body.
            </p>
          </section>
        </AnimateIn>

        {/* Conservation & Fun Fact */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section
              className="rounded-2xl p-7 h-full"
              style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
            >
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span
                className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3"
                style={{ background: "#0E6B6B", color: "#EFE3CE" }}
              >
                IUCN: Least Concern
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Globally stable but under pressure along the Gulf Coast from habitat
                loss, coastal development, and — critically — hybridization with feral
                Mallards released by hunting operations. Hybrid birds can dilute the
                Mottled Duck gene pool over generations. Texas Parks and Wildlife
                Department actively discourages the release of pen-raised Mallards
                in the Mottled Duck&apos;s range for this reason.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section
              className="rounded-2xl p-7 h-full"
              style={{
                background: "#0E6B6B",
                boxShadow: "0 1px 6px rgba(14,107,107,0.15)",
              }}
            >
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Mottled Duck&apos;s breeding season is one of the earliest of any North
                American duck — nests with eggs have been found in February along the
                Texas coast, months before most migratory waterfowl have even left
                their wintering grounds. This head start on the breeding season is
                one of the key adaptations of a species that never needs to migrate.
              </p>
            </section>
          </AnimateIn>
        </div>

        {/* CTA */}
        <AnimateIn>
          <div className="text-center pt-4">
            <Link
              href="/birds"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#C77F4A" }}
            >
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
            "url": "https://southtexasbirds.org/birds/mottled-duck",
            "headline": "Mottled Duck (Anas fulvigula) | South Texas Birds",
            "description": "Mottled Duck identification, habitat, and where to find it along the Texas Gulf Coast. The only dabbling duck that breeds year-round in the coastal marshes of South Texas.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/8/86/MottledDuck_Gam.jpg",
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
