import type { Metadata } from "next";
import Link from "next/link";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg";

export const metadata: Metadata = {
  title: {
    absolute: "About South Texas Birding | Rio Grande Valley & Coastal Bend Guide",
  },
  description:
    "Learn about South Texas birding: the Rio Grande Valley, Coastal Bend, and when to visit for migrants, Whooping Cranes, hawks, and winter waterfowl.",
  openGraph: {
    title: "About South Texas Birding | Rio Grande Valley & Coastal Bend Guide",
    description:
      "Learn about South Texas birding: the Rio Grande Valley, Coastal Bend, and when to visit for migrants, Whooping Cranes, hawks, and winter waterfowl.",
    images: [
      { url: OG_IMAGE, width: 2585, height: 1723, alt: "Altamira Oriole in South Texas" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
    title: "About South Texas Birding | Rio Grande Valley & Coastal Bend Guide",
    description:
      "Learn about South Texas birding: the Rio Grande Valley, Coastal Bend, and when to visit for migrants, Whooping Cranes, hawks, and winter waterfowl.",
  },
};

const seasons = [
  {
    name: "Spring",
    dates: "Apr – May",
    body: "Trans-Gulf migrants arrive at South Padre Island. Neotropical species return to the Valley.",
    accent: "#C77F4A",
    targets: [
      { name: "Painted Bunting", slug: "painted-bunting" },
      { name: "Swallow-tailed Kite", slug: "swallow-tailed-kite" },
      { name: "Scissor-tailed Flycatcher", slug: "scissor-tailed-flycatcher" },
    ],
  },
  {
    name: "Summer",
    dates: "Jun – Aug",
    body: "Resident species are nesting. Fewer migrants but great for family and behavior watching.",
    accent: "#D4A24C",
    targets: [
      { name: "Green Jay", slug: "green-jay" },
      { name: "Buff-bellied Hummingbird", slug: "buff-bellied-hummingbird" },
      { name: "Groove-billed Ani", slug: "groove-billed-ani" },
    ],
  },
  {
    name: "Fall",
    dates: "Sep – Oct",
    body: "Peak hawk migration at Hazel Bazemore. Shorebirds and waterfowl begin to arrive.",
    accent: "#C77F4A",
    targets: [
      { name: "Broad-winged Hawk", slug: "broad-winged-hawk" },
      { name: "Piping Plover", slug: "piping-plover" },
      { name: "Reddish Egret", slug: "reddish-egret" },
    ],
  },
  {
    name: "Winter",
    dates: "Nov – Mar",
    body: "Whooping Cranes at Aransas. Ducks, geese, and sandhill cranes throughout. Resident specialties reliably present.",
    accent: "#0E6B6B",
    targets: [
      { name: "Whooping Crane", slug: "whooping-crane" },
      { name: "Mottled Duck", slug: "mottled-duck" },
      { name: "Aplomado Falcon", slug: "aplomado-falcon" },
    ],
  },
];

const sectionRule = (
  <div
    aria-hidden="true"
    style={{ width: "2.5rem", height: 2, background: "#C77F4A", marginBottom: "0.75rem" }}
  />
);

export default function AboutPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-3xl mx-auto px-6 pt-14 pb-20">

        {/* ── Page header ─────────────────────────────────────────────── */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#C77F4A" }}
        >
          The Guide
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold mb-8"
          style={{ color: "#0E6B6B" }}
        >
          About South Texas Birds
        </h1>

        {/* ── Lead paragraphs ─────────────────────────────────────────── */}
        <p className="text-lg leading-relaxed mb-5" style={{ color: "#2B2B26" }}>
          South Texas is widely regarded as one of the greatest birding regions in North
          America. The area sits at the convergence of several major ecological zones: the
          subtropical Rio Grande Valley, the semi-arid Tamaulipan thornscrub, the Gulf
          Coast barrier islands, and the sweeping coastal prairies of the Coastal Bend.
        </p>
        <p className="text-base leading-relaxed mb-14" style={{ color: "#4E4B46" }}>
          This convergence creates a mosaic of habitats that supports an extraordinary
          diversity of bird life — over 500 species have been recorded in the region. For
          visiting birders, this means a single trip can yield resident Mexican
          specialties, Gulf Coast waterbirds, wintering raptors, and Neotropical migrants
          all in the same day.
        </p>

        {/* ── The Rio Grande Valley ───────────────────────────────────── */}
        <section className="mb-12">
          {sectionRule}
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#0E6B6B" }}
          >
            The Rio Grande Valley
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
            The lower Rio Grande Valley (RGV) hugs the Texas-Mexico border from Laredo to
            the Gulf. The resacas (oxbow lakes), riparian corridors, and remaining stands
            of native brush provide irreplaceable habitat for species that occur nowhere
            else in the U.S., including{" "}
            <Link href="/birds/green-jay" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Green Jay</Link>,{" "}
            <Link href="/birds/altamira-oriole" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Altamira Oriole</Link>,{" "}
            <Link href="/birds/plain-chachalaca" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Plain Chachalaca</Link>,{" "}
            <Link href="/birds/buff-bellied-hummingbird" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Buff-bellied Hummingbird</Link>,
            and{" "}
            <Link href="/birds/ferruginous-pygmy-owl" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Ferruginous Pygmy-Owl</Link>.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            The World Birding Center comprises nine sites across the Valley — from Roma
            Bluffs in the west to South Padre Island on the coast — making it easy to
            explore a range of habitats on a single trip.
          </p>
        </section>

        {/* ── The Coastal Bend ────────────────────────────────────────── */}
        <section className="mb-12">
          {sectionRule}
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#0E6B6B" }}
          >
            The Coastal Bend
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
            North of the RGV, the Coastal Bend stretches from Corpus Christi to Rockport
            and beyond. Aransas National Wildlife Refuge is the winter home of the last
            natural wild flock of{" "}
            <Link href="/birds/whooping-crane" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Whooping Cranes</Link>{" "}
            — one of conservation&apos;s greatest
            success stories. The bays, salt marshes, and coastal prairies support
            remarkable concentrations of waterbirds, shorebirds, and raptors.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            Hazel Bazemore County Park near Corpus Christi is perhaps the most impressive
            hawk watch in North America — in peak September days, hundreds of thousands of
            <Link href="/birds/broad-winged-hawk" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Broad-winged Hawks</Link> can be seen streaming overhead.
          </p>
        </section>

        {/* ── When to Visit ───────────────────────────────────────────── */}
        <section className="mb-14">
          {sectionRule}
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-6"
            style={{ color: "#0E6B6B" }}
          >
            When to Visit
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {seasons.map((s) => (
              <div
                key={s.name}
                className="rounded-xl p-5"
                style={{
                  background: "#fff",
                  borderTop: `3px solid ${s.accent}`,
                  boxShadow: "0 1px 6px rgba(14,107,107,0.06)",
                }}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3
                    className="font-serif text-lg font-bold"
                    style={{ color: "#0E6B6B" }}
                  >
                    {s.name}
                  </h3>
                  <span
                    className="text-xs font-semibold tabular-nums"
                    style={{ color: s.accent }}
                  >
                    {s.dates}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
                  {s.body}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.targets.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/birds/${t.slug}`}
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full transition-opacity hover:opacity-75"
                      style={{
                        background: `rgba(${s.accent === "#0E6B6B" ? "14,107,107" : "199,127,74"},0.09)`,
                        color: s.accent,
                        border: `1px solid ${s.accent}30`,
                      }}
                    >
                      {t.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── About the Creator ───────────────────────────────────────── */}
        <section className="mb-14">
          {sectionRule}
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#0E6B6B" }}
          >
            About the Creator
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            South Texas Birds is built and maintained by a Rio Grande Valley local with a
            passion for the region&apos;s incredible birdlife. This site exists to help
            visiting and local birders alike make the most of one of North America&apos;s
            richest birding destinations.
          </p>
        </section>

        {/* ── CTAs ────────────────────────────────────────────────────── */}
        <div
          style={{ height: 1, background: "rgba(14,107,107,0.1)" }}
          className="mb-8"
        />
        <div className="flex flex-wrap gap-3">
          <Link
            href="/birds"
            className="font-semibold px-6 py-3 rounded-lg text-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#C77F4A", color: "#fff" }}
          >
            Browse Species
          </Link>
          <Link
            href="/hotspots"
            className="font-semibold px-6 py-3 rounded-lg text-sm border transition-opacity hover:opacity-75"
            style={{ borderColor: "#0E6B6B", color: "#0E6B6B" }}
          >
            View Hotspots
          </Link>
        </div>

      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://southtexasbirds.org" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://southtexasbirds.org/about" },
            ],
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "South Texas Birds",
            "url": "https://southtexasbirds.org",
            "description": "Birding guide for the Rio Grande Valley and South Texas coast. Discover 500+ species, hotspot maps, and seasonal tips.",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "riksalinas@gmail.com",
              "contactType": "editorial"
            }
          })
        }}
      />
    </div>
  );
}
