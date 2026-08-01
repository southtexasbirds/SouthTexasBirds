import type { Metadata } from "next";
import Link from "next/link";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/itineraries" },
  title: { absolute: "Birding Itineraries for the Rio Grande Valley | South Texas Birds" },
  description:
    "Three ready-made Rio Grande Valley birding itineraries: a 3-day RGV classic loop, a South Padre Island spring fallout weekend, and a winter waterfowl weekend.",
  openGraph: {
    title: "Birding Itineraries for the Rio Grande Valley | South Texas Birds",
    description:
      "Three ready-made Rio Grande Valley birding itineraries: a 3-day RGV classic loop, a South Padre Island spring fallout weekend, and a winter waterfowl weekend.",
    images: [{ url: OG_IMAGE, width: 2585, height: 1723, alt: "Altamira Oriole in South Texas" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
    title: "Birding Itineraries for the Rio Grande Valley | South Texas Birds",
    description:
      "Three ready-made Rio Grande Valley birding itineraries for the RGV and South Texas coast.",
  },
};

const sectionRule = (
  <div
    aria-hidden="true"
    style={{ width: "2.5rem", height: 2, background: "#C77F4A", marginBottom: "0.75rem" }}
  />
);

type Stop = { label: string; href: string };
type Day = { title: string; body: string; stops: Stop[] };
type Itinerary = {
  name: string;
  season: string;
  days: Day[];
  targets: Stop[];
};

const itineraries: Itinerary[] = [
  {
    name: "3-Day RGV Classic Loop",
    season: "Best year-round; peak Oct–Apr",
    days: [
      {
        title: "Day 1 — Mission",
        body:
          "Start at Bentsen-Rio Grande Valley State Park for the hawk watch tower and thornscrub feeders, then finish the afternoon at the National Butterfly Center next door for hummingbirds and orioles.",
        stops: [
          { label: "Bentsen SP", href: "/hotspots#bentsen" },
          { label: "National Butterfly Center", href: "/hotspots#national-butterfly-center" },
        ],
      },
      {
        title: "Day 2 — Alamo & McAllen",
        body:
          "Spend the morning at Santa Ana National Wildlife Refuge, the Valley's most celebrated site, then head to Quinta Mazatlán in McAllen for an easy urban feeder stop before dinner.",
        stops: [
          { label: "Santa Ana NWR", href: "/hotspots#santa-ana" },
          { label: "Quinta Mazatlán", href: "/hotspots#quinta-mazatlan" },
        ],
      },
      {
        title: "Day 3 — Weslaco & Brownsville",
        body:
          "Work the resaca trails at Estero Llano Grande State Park for Masked Duck and Northern Jacana, then close the loop at Resaca de la Palma State Park's tram tour through the Valley's largest stand of native thornscrub.",
        stops: [
          { label: "Estero Llano Grande", href: "/hotspots#estero-llano-grande" },
          { label: "Resaca de la Palma", href: "/hotspots#resaca-de-la-palma" },
        ],
      },
    ],
    targets: [
      { label: "Green Jay", href: "/birds/green-jay" },
      { label: "Altamira Oriole", href: "/birds/altamira-oriole" },
      { label: "Masked Duck", href: "/birds/masked-duck" },
      { label: "Northern Jacana", href: "/birds/northern-jacana" },
      { label: "Ferruginous Pygmy-Owl", href: "/birds/ferruginous-pygmy-owl" },
    ],
  },
  {
    name: "South Padre Island Spring Fallout Weekend",
    season: "Late April – mid May",
    days: [
      {
        title: "Day 1 — South Padre Island",
        body:
          "Spend the day at the South Padre Island Birding & Nature Center boardwalk. After a northwest wind follows a cold front, exhausted Trans-Gulf migrants can crowd every shrub — check the fall shorebird guide below for background on how these coastal fallout events work.",
        stops: [
          { label: "South Padre Island BNC", href: "/hotspots#south-padre-island" },
          { label: "Fall Shorebird Season Guide", href: "/news/fall-shorebird-season-south-padre" },
        ],
      },
      {
        title: "Day 2 — Laguna Atascosa NWR",
        body:
          "Drive the Bayside Drive auto loop at Laguna Atascosa for reintroduced Aplomado Falcon, White-tailed Hawk, and coastal waterbirds, then swing back through Rio Hondo before heading home.",
        stops: [{ label: "Laguna Atascosa NWR", href: "/hotspots#laguna-atascosa" }],
      },
    ],
    targets: [
      { label: "Painted Bunting", href: "/birds/painted-bunting" },
      { label: "Scissor-tailed Flycatcher", href: "/birds/scissor-tailed-flycatcher" },
      { label: "Reddish Egret", href: "/birds/reddish-egret" },
      { label: "Aplomado Falcon", href: "/birds/aplomado-falcon" },
    ],
  },
  {
    name: "Winter Waterfowl & Whooping Crane Weekend",
    season: "November – March",
    days: [
      {
        title: "Day 1 — Rio Hondo & Weslaco",
        body:
          "Winter is peak season for waterfowl and wintering shorebirds. Start at Laguna Atascosa NWR for Mottled Duck and Piping Plover, then head inland to Estero Llano Grande State Park's resaca for Black-bellied Whistling-Duck and Neotropic Cormorant.",
        stops: [
          { label: "Laguna Atascosa NWR", href: "/hotspots#laguna-atascosa" },
          { label: "Estero Llano Grande", href: "/hotspots#estero-llano-grande" },
        ],
      },
      {
        title: "Day 2 — Optional add-on: Aransas NWR",
        body:
          "For visitors with an extra day, the entire wild flock of Whooping Cranes winters roughly three hours up the coast at Aransas National Wildlife Refuge near Rockport, best viewed on a guided boat tour. The 2025–2026 season recorded a record count — see the news article below for details.",
        stops: [
          { label: "Whooping Crane species guide", href: "/birds/whooping-crane" },
          { label: "Record Count News", href: "/news/whooping-crane-record-count" },
        ],
      },
    ],
    targets: [
      { label: "Mottled Duck", href: "/birds/mottled-duck" },
      { label: "Piping Plover", href: "/birds/piping-plover" },
      { label: "Black-bellied Whistling-Duck", href: "/birds/black-bellied-whistling-duck" },
      { label: "Whooping Crane", href: "/birds/whooping-crane" },
    ],
  },
];

export default function ItinerariesPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-3xl mx-auto px-6 pt-14 pb-20">

        {/* ── Page header ─────────────────────────────────────────────── */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#C77F4A" }}
        >
          Trip Planning
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#0E6B6B" }}
        >
          Birding Itineraries
        </h1>
        <p className="text-base leading-relaxed max-w-2xl mb-14" style={{ color: "#4E4B46" }}>
          Three ready-made trip plans stitching together the hotspots and species already on
          this site — a good starting point for a first visit, which you can rearrange around
          your own dates and pace.
        </p>

        {itineraries.map((it) => (
          <section key={it.name} className="mb-16">
            {sectionRule}
            <div className="flex items-baseline justify-between gap-3 flex-wrap mb-4">
              <h2
                className="font-serif text-2xl md:text-3xl font-bold"
                style={{ color: "#0E6B6B" }}
              >
                {it.name}
              </h2>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(212,162,76,0.12)",
                  color: "#7A5C10",
                  border: "1px solid rgba(212,162,76,0.3)",
                }}
              >
                {it.season}
              </span>
            </div>

            <div className="flex flex-col gap-5 mb-6">
              {it.days.map((day) => (
                <div
                  key={day.title}
                  className="rounded-xl p-5"
                  style={{
                    background: "#fff",
                    borderTop: "3px solid #0E6B6B",
                    boxShadow: "0 1px 6px rgba(14,107,107,0.06)",
                  }}
                >
                  <h3
                    className="font-serif text-lg font-bold mb-2"
                    style={{ color: "#0E6B6B" }}
                  >
                    {day.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
                    {day.body}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {day.stops.map((stop) => (
                      <Link
                        key={stop.href}
                        href={stop.href}
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full transition-opacity hover:opacity-75"
                        style={{
                          background: "rgba(14,107,107,0.08)",
                          color: "#0E6B6B",
                          border: "1px solid rgba(14,107,107,0.2)",
                        }}
                      >
                        {stop.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#C77F4A" }}
            >
              Target Species
            </p>
            <div className="flex flex-wrap gap-1.5">
              {it.targets.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full hover:opacity-75 transition-opacity"
                  style={{
                    background: "rgba(212,162,76,0.11)",
                    color: "#7A5C10",
                    border: "1px solid rgba(212,162,76,0.28)",
                  }}
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <div style={{ height: 1, background: "rgba(14,107,107,0.1)" }} className="mb-8" />
        <div className="flex flex-wrap gap-3">
          <Link
            href="/hotspots"
            className="font-semibold px-6 py-3 rounded-lg text-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#C77F4A", color: "#fff" }}
          >
            View All Hotspots
          </Link>
          <Link
            href="/checklist"
            className="font-semibold px-6 py-3 rounded-lg text-sm border transition-opacity hover:opacity-75"
            style={{ borderColor: "#0E6B6B", color: "#0E6B6B" }}
          >
            Print Species Checklist
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
              { "@type": "ListItem", "position": 2, "name": "Birding Itineraries", "item": "https://southtexasbirds.org/itineraries" },
            ],
          }),
        }}
      />
    </div>
  );
}
