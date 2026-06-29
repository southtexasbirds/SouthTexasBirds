import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/7/7f/Grus_americana_Sasata.jpg";

export const metadata: Metadata = {
  title: "Whooping Crane (Grus americana) | South Texas Birds",
  description:
    "Whooping Crane identification, habitat, and where to find it on the Texas Gulf Coast. North America's tallest bird and one of conservation's greatest comeback stories.",
  openGraph: {
    title: "Whooping Crane | South Texas Birds",
    description:
      "Whooping Crane identification, habitat, and where to find it on the Texas Gulf Coast.",
    images: [{ url: PHOTO, alt: "Whooping Crane wading in shallow water" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [PHOTO],
  },
};

const spots = [
  { name: "Aransas National Wildlife Refuge", region: "Austwell", href: "/hotspots" },
  { name: "Rockport Harbor Boat Tours", region: "Rockport", href: "/hotspots" },
  { name: "Goose Island State Park", region: "Rockport area", href: "/hotspots" },
  { name: "Intracoastal Waterway Viewing Areas", region: "Fulton / Rockport", href: "/hotspots" },
];

export default function WhoopingCranePage() {
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
            Texas Gulf Coast · Winter Visitor
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-1"
            style={{ color: "#0E6B6B" }}
          >
            Whooping Crane
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Grus americana &nbsp;·&nbsp; <span className="not-italic">Grulla blanca</span>
          </p>
          <span
            className="inline-block text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: "#C77F4A", color: "#EFE3CE" }}
          >
            Winter Visitor
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
              alt="Whooping Crane wading in shallow coastal marsh water"
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
              href="https://commons.wikimedia.org/wiki/File:Grus_americana_Sasata.jpg"
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
              The Whooping Crane is North America&apos;s tallest bird and one of conservation&apos;s
              greatest comeback stories. After plummeting to just 15 wild birds in 1941 — pushed to
              the brink by hunting, habitat loss, and egg collection — the species has recovered
              through decades of intensive protection and international cooperation. Each autumn, the
              entire wild Wood Buffalo–Aransas flock migrates roughly 2,500 miles from its remote
              nesting grounds in Canada&apos;s Northwest Territories to winter along the Texas Gulf Coast,
              particularly at Aransas National Wildlife Refuge near Rockport. Seeing one in the
              wild remains one of the most stirring experiences in North American birding.
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
              Unmistakable: snow-white plumage with black wingtips that flash dramatically in flight,
              a bare red crown, and a black mask across the face. Standing nearly 5 feet tall
              (150 cm) with a wingspan of 7–8 feet (210–230 cm), Whooping Cranes tower over every
              other bird in the marsh. Long dark legs and a long neck complete the silhouette —
              in flight they extend neck and legs straight, unlike herons which fold the neck back.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Juveniles are washed rusty-brown, gradually molting to white over their first year.
              The call — a resonant, bugling <em>ker-loo</em> — carries more than a mile and is
              often heard well before the birds come into view. In mixed flocks with Sandhill Cranes,
              the size and colour contrast is immediately obvious.
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
              Whooping Cranes nest exclusively in the remote freshwater wetlands and sedge meadows
              of Wood Buffalo National Park, straddling the Alberta–Northwest Territories border in
              Canada. In Texas, they winter in the shallow tidal bays, salt marshes, and coastal
              flats of the central Gulf Coast — particularly the San Antonio Bay system surrounding
              Aransas NWR. The refuge was established in 1937 partly with this species in mind.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              During migration, birds follow a broad corridor through the Great Plains, stopping at
              prairie wetlands and river sandbars across the Central Flyway. Occasional stray
              individuals and small groups are seen well south of the main wintering area,
              including rare sightings in the Rio Grande Valley during passage.
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
              On their Texas wintering grounds, Whooping Cranes are opportunistic omnivores. Blue
              crabs are a dietary staple, supplemented by clams, crayfish, fish, frogs, snakes,
              and plant material including wolfberries (<em>Lycium carolinianum</em>) — the waxy red
              berries abundant in coastal Texas scrub. Pairs and family groups hold and defend
              individual territories along the bay shore throughout winter.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Whooping Cranes mate for life. Pairs perform elaborate unison-call and dance
              displays — leaping, bowing, and wing-spreading — that reinforce pair bonds. They
              typically raise a single chick per year; both parents incubate the clutch of two eggs,
              but usually only one chick survives to fledging. Young birds remain with their parents
              through the first winter, migrating and wintering as a family group.
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
              Best viewing window: November through March. Guided boat tours from Rockport Harbor
              offer the closest views of birds feeding in San Antonio Bay.
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
                style={{ background: "#A0522D", color: "#EFE3CE" }}
              >
                IUCN: Endangered
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                The Wood Buffalo–Aransas flock has grown from 15 birds in 1941 to approximately
                500–600 today — a remarkable recovery, but the species remains one of the most
                endangered birds in North America. The entire wild population winters in a
                relatively small area, making it acutely vulnerable to severe storms, oil spills,
                and freshwater inflow changes affecting blue crab abundance. Ongoing captive
                breeding programs provide a crucial safety net.
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
                In the 1980s, biologists placed Whooping Crane eggs into Sandhill Crane nests
                to create a cross-fostered population. The cranes hatched successfully — but
                bonded so completely with their Sandhill Crane foster families that they
                attempted to mate with Sandhill Cranes and ignored other Whooping Cranes entirely.
                The experiment was discontinued, a hard lesson in the limits of surrogate parenting.
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
    </div>
  );
}
