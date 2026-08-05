import type { Metadata } from "next";

const OG_IMAGE = "https://southtexasbirds.org/images/og-default.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/conservation" },
  title: { absolute: "Conservation & Giving Back | South Texas Birds" },
  description:
    "Nonprofits protecting the refuges, sanctuaries, and habitat corridors that make Rio Grande Valley birding possible — Laguna Atascosa, Santa Ana, the National Butterfly Center, and more.",
  openGraph: {
    title: "Conservation & Giving Back | South Texas Birds",
    description:
      "Nonprofits protecting the refuges, sanctuaries, and habitat corridors that make Rio Grande Valley birding possible.",
    images: [{ url: OG_IMAGE, width: 1200,
        height: 630, alt: "Altamira Oriole in South Texas" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
    title: "Conservation & Giving Back | South Texas Birds",
    description:
      "Nonprofits protecting the refuges, sanctuaries, and habitat corridors that make Rio Grande Valley birding possible.",
  },
};

const siteGroups = [
  {
    name: "Friends of Laguna Atascosa NWR",
    description:
      "Supports Laguna Atascosa National Wildlife Refuge — home to the reintroduced Aplomado Falcon and one of the last strongholds for the endangered ocelot. 100% of donations go toward conservation projects on the refuge.",
    link: "https://flanwr.org/ways-to-give",
  },
  {
    name: "Friends of the Wildlife Corridor",
    description:
      "Supports Santa Ana and Lower Rio Grande Valley National Wildlife Refuges. Funds the Rio Reforestation program, which has restored native thornscrub habitat on former cropland since 1984 to reconnect the wildlife corridor along the river.",
    link: "https://www.friendsofthewildlifecorridor.org/become-a-member",
  },
  {
    name: "National Butterfly Center",
    description:
      "A 100-acre restored habitat sanctuary in Mission that draws an outstanding variety of hummingbirds and orioles alongside its namesake butterflies — one of the Valley's most productive birding stops.",
    link: "https://www.nationalbutterflycenter.org/support-nbc/donate-now/form/7-national-butterfly-center-donations",
  },
];

const regionalGroups = [
  {
    name: "Valley Land Fund",
    description:
      "A Rio Grande Valley land trust that has protected over 8,000 acres of native South Texas habitat since 1987 through direct land purchase, gift, and conservation easement.",
    link: "https://valleylandfund.com/donations/",
  },
  {
    name: "Audubon Texas",
    description:
      "The state program of the National Audubon Society, working on statewide bird conservation and habitat protection across Texas.",
    link: "https://act.audubon.org/a/donate-texas",
  },
  {
    name: "American Bird Conservancy",
    description:
      "A national nonprofit focused on protecting wild birds and their habitats across the Americas, rated four stars by Charity Navigator.",
    link: "https://abcbirds.org/ways-to-give/",
  },
];

export default function ConservationPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-14 pb-20">

        {/* ── Page header ─────────────────────────────────────────────── */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#C77F4A" }}
        >
          Give Back
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#0E6B6B" }}
        >
          Conservation &amp; Giving Back
        </h1>
        <p className="text-base leading-relaxed max-w-2xl mb-4" style={{ color: "#4E4B46" }}>
          Every hotspot and species on this site depends on habitat that a small number of
          refuges, sanctuaries, and land trusts work continuously to protect and restore. If
          South Texas birding has given you a life bird or two, these are the organizations
          doing that work on the ground.
        </p>
        <div
          className="flex items-start gap-2.5 rounded-lg px-4 py-3 mb-14 text-xs leading-relaxed max-w-2xl"
          style={{
            background: "rgba(14,107,107,0.05)",
            border: "1px solid rgba(14,107,107,0.1)",
            color: "#5C5954",
          }}
        >
          <span aria-hidden="true" style={{ fontSize: "0.9rem", lineHeight: 1.4 }}>ℹ</span>
          <span>
            These are independent nonprofits — South Texas Birds has no financial relationship
            with any of them and receives nothing from these links. Donations go directly to
            each organization.
          </span>
        </div>

        {/* ── Refuges & Sites ──────────────────────────────────────────── */}
        <section>
          <div
            aria-hidden="true"
            style={{ width: "2.5rem", height: 2, background: "#C77F4A", marginBottom: "0.75rem" }}
          />
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-2"
            style={{ color: "#0E6B6B" }}
          >
            Refuges &amp; Sites
          </h2>
          <p className="text-sm mb-6" style={{ color: "#5C5954" }}>
            Friends groups and sanctuaries tied directly to the hotspots featured on this site.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteGroups.map((org) => (
              <div
                key={org.name}
                className="rounded-xl flex flex-col"
                style={{
                  background: "#fff",
                  borderTop: "3px solid #0E6B6B",
                  boxShadow: "0 1px 8px rgba(14,107,107,0.08)",
                }}
              >
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="font-serif text-lg font-bold leading-snug mb-2"
                    style={{ color: "#0E6B6B" }}
                  >
                    {org.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#4E4B46" }}>
                    {org.description}
                  </p>
                  <a
                    href={org.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block text-center text-sm font-semibold rounded-lg px-4 py-2.5 transition-opacity hover:opacity-85"
                    style={{ backgroundColor: "#C77F4A", color: "#fff" }}
                  >
                    Donate →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Regional & National Groups ───────────────────────────────── */}
        <section className="mt-16">
          <div
            aria-hidden="true"
            style={{ width: "2.5rem", height: 2, background: "#C77F4A", marginBottom: "0.75rem" }}
          />
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-2"
            style={{ color: "#0E6B6B" }}
          >
            Regional &amp; National Groups
          </h2>
          <p className="text-sm mb-6" style={{ color: "#5C5954" }}>
            Broader organizations working on habitat protection and bird conservation across
            South Texas and beyond.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regionalGroups.map((org) => (
              <div
                key={org.name}
                className="rounded-xl flex flex-col"
                style={{
                  background: "#fff",
                  borderTop: "3px solid #D4A24C",
                  boxShadow: "0 1px 8px rgba(14,107,107,0.08)",
                }}
              >
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="font-serif text-lg font-bold leading-snug mb-2"
                    style={{ color: "#0E6B6B" }}
                  >
                    {org.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#4E4B46" }}>
                    {org.description}
                  </p>
                  <a
                    href={org.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block text-center text-sm font-semibold rounded-lg px-4 py-2.5 transition-opacity hover:opacity-85"
                    style={{ backgroundColor: "#C77F4A", color: "#fff" }}
                  >
                    Donate →
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
              { "@type": "ListItem", "position": 2, "name": "Conservation & Giving Back", "item": "https://southtexasbirds.org/conservation" },
            ],
          }),
        }}
      />
    </div>
  );
}
