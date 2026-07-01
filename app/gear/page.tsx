import type { Metadata } from "next";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/gear" },
  title: { absolute: "Birding Gear & Optics | Rio Grande Valley Birding Guide | South Texas Birds" },
  description:
    "Binocular recommendations for South Texas birding. Editor-tested picks for the Rio Grande Valley — from best all-around to best value and best compact.",
  openGraph: {
    title: "Birding Gear & Optics | South Texas Birds",
    description:
      "Binocular recommendations for South Texas birding. Editor-tested picks from best all-around to best value and best compact.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg",
        width: 2585,
        height: 1723,
        alt: "Altamira Oriole in South Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
    title: "Birding Gear & Optics | South Texas Birds",
    description:
      "Binocular recommendations for South Texas birding — best all-around, best value, and best compact.",
  },
};

const optics = [
  {
    name: "Nikon Monarch M7 8×42",
    badge: "Best All-Around",
    price: "$489.95",
    description:
      "The most versatile birding binocular, balancing comfort, performance, and price with no meaningful quality sacrifices.",
    link: "https://amzn.to/4v28Z5v",
    borderColor: "#C77F4A",
    badgeStyle: {
      background: "rgba(199,127,74,0.1)",
      color: "#C77F4A",
      border: "1px solid rgba(199,127,74,0.25)",
    },
  },
  {
    name: "Vortex Diamondback HD 8×42",
    badge: "Best Value",
    price: "$239",
    description:
      "Consistently rated the best value binocular on the market, with HD optics and features once reserved for premium models.",
    link: "https://amzn.to/4vk1Nmb",
    borderColor: "#D4A24C",
    badgeStyle: {
      background: "rgba(212,162,76,0.12)",
      color: "#7A5C10",
      border: "1px solid rgba(212,162,76,0.3)",
    },
  },
  {
    name: "Nikon Monarch M7 8×30 Bundle",
    badge: "Best Compact / Travel",
    price: "$504.95",
    description:
      "A lightweight, compact option that outperforms its size class. Bundle includes case, lens pen, and cleaning cloth.",
    link: "https://amzn.to/4vT8ueB",
    borderColor: "#0E6B6B",
    badgeStyle: {
      background: "rgba(14,107,107,0.08)",
      color: "#0E6B6B",
      border: "1px solid rgba(14,107,107,0.2)",
    },
  },
];

const fieldGuides = [
  {
    name: "Birds of Texas Field Guide",
    author: "Stan Tekiela",
    badge: "Essential Field Guide",
    price: "$13.30",
    description:
      "Texas's best-selling bird guide. 176 species organized by color for fast identification, with range maps and comparison features for similar-looking birds.",
    link: "https://amzn.to/4ePJq2s",
    borderColor: "#C77F4A",
    badgeStyle: {
      background: "rgba(199,127,74,0.1)",
      color: "#C77F4A",
      border: "1px solid rgba(199,127,74,0.25)",
    },
  },
  {
    name: "Vortex Diamondback HD Spotting Scope",
    badge: "For Serious Birders",
    price: "From $599",
    description:
      "A serious upgrade for hawk watches and shorebird flats. HD glass delivers sharp detail at long range — ideal for Bentsen's hawk tower or Laguna Atascosa's open coastline.",
    link: "https://amzn.to/4eyTH1O",
    borderColor: "#D4A24C",
    badgeStyle: {
      background: "rgba(212,162,76,0.12)",
      color: "#7A5C10",
      border: "1px solid rgba(212,162,76,0.3)",
    },
  },
];

export default function GearPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-14 pb-20">

        {/* ── Page header ─────────────────────────────────────────────── */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#C77F4A" }}
        >
          The Field Kit
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#0E6B6B" }}
        >
          Gear &amp; Optics
        </h1>
        <p className="text-base leading-relaxed max-w-2xl mb-14" style={{ color: "#4E4B46" }}>
          A quality pair of binoculars is the single most important piece of gear for any
          birding trip. In the dense thornscrub and bright open skies of South Texas, optics
          that handle fast light changes and close focus distances make the difference between
          a brief glimpse and a proper look.
        </p>

        {/* ── Recommended Optics ──────────────────────────────────────── */}
        <section>
          <div
            aria-hidden="true"
            style={{ width: "2.5rem", height: 2, background: "#C77F4A", marginBottom: "0.75rem" }}
          />
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-2"
            style={{ color: "#0E6B6B" }}
          >
            Recommended Optics
          </h2>
          <p className="text-sm mb-6" style={{ color: "#5C5954" }}>
            Hand-picked for South Texas conditions — strong contrast, close focus, and
            all-day comfort in the heat.
          </p>

          {/* Affiliate disclosure */}
          <div
            className="flex items-start gap-2.5 rounded-lg px-4 py-3 mb-8 text-xs leading-relaxed"
            style={{
              background: "rgba(14,107,107,0.05)",
              border: "1px solid rgba(14,107,107,0.1)",
              color: "#5C5954",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: "0.9rem", lineHeight: 1.4 }}>ℹ</span>
            <span>
              <strong style={{ color: "#4E4B46" }}>Affiliate disclosure:</strong> As an Amazon
              Associate, I earn from qualifying purchases. Prices shown are approximate and may
              vary.
            </span>
          </div>

          {/* Product cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {optics.map((item) => (
              <div
                key={item.name}
                className="rounded-xl flex flex-col"
                style={{
                  background: "#fff",
                  borderTop: `3px solid ${item.borderColor}`,
                  boxShadow: "0 1px 8px rgba(14,107,107,0.08)",
                }}
              >
                <div className="p-5 flex flex-col flex-1">
                  {/* Badge */}
                  <span
                    className="self-start text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3"
                    style={item.badgeStyle}
                  >
                    {item.badge}
                  </span>

                  {/* Name */}
                  <h3
                    className="font-serif text-lg font-bold leading-snug mb-1"
                    style={{ color: "#0E6B6B" }}
                  >
                    {item.name}
                  </h3>

                  {/* Price */}
                  <p
                    className="text-2xl font-bold tabular-nums mb-3"
                    style={{ color: "#D4A24C" }}
                  >
                    {item.price}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5 flex-1"
                    style={{ color: "#4E4B46" }}
                  >
                    {item.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block text-center text-sm font-semibold rounded-lg px-4 py-2.5 transition-opacity hover:opacity-85"
                    style={{ backgroundColor: "#C77F4A", color: "#fff" }}
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Field Guides & Scopes ────────────────────────────────────── */}
        <section className="mt-16">
          <div
            aria-hidden="true"
            style={{ width: "2.5rem", height: 2, background: "#C77F4A", marginBottom: "0.75rem" }}
          />
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-2"
            style={{ color: "#0E6B6B" }}
          >
            Field Guides &amp; Scopes
          </h2>
          <p className="text-sm mb-8" style={{ color: "#5C5954" }}>
            A good field guide and a spotting scope open up two different dimensions of
            South Texas birding — fast ID in the brush and long-range views at hawk watches
            and coastal flats.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            {fieldGuides.map((item) => (
              <div
                key={item.name}
                className="rounded-xl flex flex-col"
                style={{
                  background: "#fff",
                  borderTop: `3px solid ${item.borderColor}`,
                  boxShadow: "0 1px 8px rgba(14,107,107,0.08)",
                }}
              >
                <div className="p-5 flex flex-col flex-1">
                  {/* Badge */}
                  <span
                    className="self-start text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3"
                    style={item.badgeStyle}
                  >
                    {item.badge}
                  </span>

                  {/* Name */}
                  <h3
                    className="font-serif text-lg font-bold leading-snug mb-1"
                    style={{ color: "#0E6B6B" }}
                  >
                    {item.name}
                  </h3>

                  {/* Price */}
                  <p
                    className="text-2xl font-bold tabular-nums mb-3"
                    style={{ color: "#D4A24C" }}
                  >
                    {item.price}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5 flex-1"
                    style={{ color: "#4E4B46" }}
                  >
                    {item.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block text-center text-sm font-semibold rounded-lg px-4 py-2.5 transition-opacity hover:opacity-85"
                    style={{ backgroundColor: "#C77F4A", color: "#fff" }}
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://southtexasbirds.org" },
              { "@type": "ListItem", "position": 2, "name": "Birding Gear & Optics", "item": "https://southtexasbirds.org/gear" },
            ],
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Recommended Birding Gear for South Texas",
            "description": "Editor-tested binocular and field guide picks for Rio Grande Valley birding.",
            "itemListElement": [...optics, ...fieldGuides].map((item, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": item.name,
              "url": item.link,
            })),
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
                "name": "What magnification binoculars are best for South Texas birding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "8x42 is the ideal all-around magnification for South Texas birding. The 8x provides a wide enough field of view to track birds through dense thornscrub, while 42mm objectives gather enough light for performance in the low-angle morning light and bright midday glare typical of the Rio Grande Valley. 10x binoculars can be useful for hawk watches at Bentsen or shorebirds on open coastal flats, but the narrower field of view makes them harder to use in brush.",
                },
              },
              {
                "@type": "Question",
                "name": "Do I need a spotting scope for South Texas birding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A spotting scope is very useful but not essential for a first South Texas trip. It becomes most valuable at specific sites: hawk watches (Bentsen State Park's tower, Hazel Bazemore), shorebird flats at Laguna Atascosa, and scanning the bays for Whooping Cranes at Aransas. For thornscrub birding at Santa Ana, Quinta Mazatlán, or Resaca de la Palma, binoculars are more practical and a scope is rarely needed.",
                },
              },
              {
                "@type": "Question",
                "name": "What are the best binoculars for birding the Rio Grande Valley?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For the Rio Grande Valley, the Nikon Monarch M7 8x42 is the top all-around recommendation — it handles South Texas's fast light transitions from deep shade to bright sun exceptionally well, with a close focus of 1.5m that's ideal for birds at the feeder stations at Bentsen and Quinta Mazatlán. Budget-focused birders should look at the Vortex Diamondback HD 8x42, which offers HD optics at a significantly lower price point.",
                },
              },
              {
                "@type": "Question",
                "name": "What is the best birding field guide for Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For South Texas specifically, Stan Tekiela's 'Birds of Texas Field Guide' is the top recommendation for visiting birders — it's organized by color rather than taxonomy, which is uniquely helpful when you're trying to quickly ID an unfamiliar species in dense brush. The Sibley Guide to Birds is a useful supplement for range maps and detailed species accounts. For trip planning, eBird's mobile app is essential for seeing what other birders have recently observed at each hotspot.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
