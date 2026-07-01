import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/5/53/Green_jay_%28Cyanocorax_luxuosus%29_in_Mission%2C_Texas%2C_USA.png";

export const metadata: Metadata = {
  alternates: { canonical: "/news/south-texas-birding-calendar" },
  title: "South Texas Birding Calendar: When to Go for Each Species | South Texas Birds",
  description:
    "A month-by-month guide to birding the Rio Grande Valley. From Painted Bunting spring fallouts in April to Whooping Crane winters at Aransas — when you go determines what you see.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-28T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Planning",
    title: "South Texas Birding Calendar: When to Go | South Texas Birds",
    description:
      "A month-by-month guide to South Texas birding: what species are present, what events are happening, and when to plan your trip.",
    images: [{ url: OG_IMAGE, alt: "Green Jay in South Texas" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

type Month = {
  name: string;
  highlight: string;
  species: Array<{ name: string; href: string }>;
  tips: string;
};

const months: Month[] = [
  {
    name: "January – February",
    highlight: "Peak winter birding. The Valley's rarest wintering birds are settled on territory.",
    species: [
      { name: "Whooping Crane", href: "/birds/whooping-crane" },
      { name: "Painted Bunting", href: "/birds/painted-bunting" },
      { name: "Vermilion Flycatcher", href: "/birds/vermilion-flycatcher" },
      { name: "Mottled Duck", href: "/birds/mottled-duck" },
    ],
    tips: "Feeders at Bentsen, Santa Ana, and Estero Llano Grande are at peak activity. Take a Whooping Crane boat tour from Rockport before the season ends in March. Temperatures are mild — ideal walking conditions.",
  },
  {
    name: "March",
    highlight: "Late winter gives way to early spring. Wintering birds still present, first breeders return.",
    species: [
      { name: "Whooping Crane", href: "/birds/whooping-crane" },
      { name: "Scissor-tailed Flycatcher", href: "/birds/scissor-tailed-flycatcher" },
      { name: "Gray Hawk", href: "/birds/gray-hawk" },
      { name: "Painted Bunting", href: "/birds/painted-bunting" },
    ],
    tips: "The last Whooping Cranes depart Aransas by late March. Scissor-tailed Flycatchers and Gray Hawks begin arriving. Painted Buntings are still at feeders until mid-month. A transitional but productive window.",
  },
  {
    name: "April – May",
    highlight: "Spring migration peak. The best chance for fallout events at South Padre Island.",
    species: [
      { name: "Painted Bunting", href: "/birds/painted-bunting" },
      { name: "Swallow-tailed Kite", href: "/birds/swallow-tailed-kite" },
      { name: "Buff-bellied Hummingbird", href: "/birds/buff-bellied-hummingbird" },
      { name: "Scissor-tailed Flycatcher", href: "/birds/scissor-tailed-flycatcher" },
    ],
    tips: "April 20 – May 10 is the prime window for South Padre Island Trans-Gulf migration fallouts. Northwest winds after a cold front trigger the best events. RGV specialty birds are all on territory and vocal — a superb time for comprehensive Valley birding.",
  },
  {
    name: "June – July",
    highlight: "Summer heat arrives. Breeding season at its peak for resident species.",
    species: [
      { name: "Green Jay", href: "/birds/green-jay" },
      { name: "Altamira Oriole", href: "/birds/altamira-oriole" },
      { name: "Elf Owl", href: "/birds/elf-owl" },
      { name: "Ferruginous Pygmy-Owl", href: "/birds/ferruginous-pygmy-owl" },
    ],
    tips: "Summer is for the dedicated birder — temperatures can reach 105°F by afternoon. Start before dawn and finish by 10 a.m. Elf Owls and Ferruginous Pygmy-Owls call at dusk. Roseate Spoonbills begin post-breeding dispersal in July.",
  },
  {
    name: "August – September",
    highlight: "Fall migration begins. Broad-winged Hawk kettles at Bentsen are the headline event.",
    species: [
      { name: "Broad-winged Hawk", href: "/birds/broad-winged-hawk" },
      { name: "Swallow-tailed Kite", href: "/birds/swallow-tailed-kite" },
      { name: "Piping Plover", href: "/birds/piping-plover" },
      { name: "Reddish Egret", href: "/birds/reddish-egret" },
    ],
    tips: "The Broad-winged Hawk migration peaks September 18–25. Northwest winds on a clear day can produce kettles of 10,000 or more birds at Bentsen's hawk tower. First Piping Plovers arrive at South Padre Island by late July.",
  },
  {
    name: "October – November",
    highlight: "Fall migration continues; first winter arrivals appear. RGVBF festival in early November.",
    species: [
      { name: "Whooping Crane", href: "/birds/whooping-crane" },
      { name: "Painted Bunting", href: "/birds/painted-bunting" },
      { name: "Aplomado Falcon", href: "/birds/aplomado-falcon" },
      { name: "Roseate Spoonbill", href: "/birds/roseate-spoonbill" },
    ],
    tips: "Whooping Cranes arrive at Aransas NWR in late October. The Rio Grande Valley Birding Festival (RGVBF) in Harlingen in early November is the premier annual event for visiting birders, with over 100 guided field trips. Painted Buntings return to feeders from October onward.",
  },
  {
    name: "December",
    highlight: "Peak winter season begins. Christmas Bird Counts add community science to the experience.",
    species: [
      { name: "Whooping Crane", href: "/birds/whooping-crane" },
      { name: "Painted Bunting", href: "/birds/painted-bunting" },
      { name: "Vermilion Flycatcher", href: "/birds/vermilion-flycatcher" },
      { name: "Piping Plover", href: "/birds/piping-plover" },
    ],
    tips: "Multiple Christmas Bird Counts are held across the Valley and coastal areas in late December. Temperatures are pleasant (55–70°F), crowds are manageable, and winter residents are fully settled in. An excellent month for methodical coverage of the RGV hotspots.",
  },
];

export default function SouthTexasBirdingCalendarPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/news"
          className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70"
          style={{ color: "#C77F4A" }}
        >
          ← All News
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <time
              dateTime="2026-06-28"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              June 2026
            </time>
            {["Planning", "Guide"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                style={{
                  background: "rgba(199,127,74,0.1)",
                  color: "#C77F4A",
                  border: "1px solid rgba(199,127,74,0.22)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-snug"
            style={{ color: "#0E6B6B" }}
          >
            South Texas Birding Calendar: When to Go for Each Species
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            The Rio Grande Valley is a year-round birding destination — but when you go determines
            what you see. Winter brings Whooping Cranes and feeder birds. Spring delivers one of
            North America&apos;s most spectacular migration events at South Padre Island. Fall means
            hawk kettles at Bentsen. Here&apos;s a month-by-month guide to planning your South Texas
            birding trip.
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-8">

        {months.map((month) => (
          <AnimateIn key={month.name}>
            <section
              className="rounded-2xl p-7"
              style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
            >
              <h2 className="font-serif text-xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
                {month.name}
              </h2>
              <p className="text-sm font-medium mb-4" style={{ color: "#C77F4A" }}>
                {month.highlight}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {month.species.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-75"
                    style={{ background: "rgba(14,107,107,0.07)", color: "#0E6B6B", border: "1px solid rgba(14,107,107,0.18)" }}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                {month.tips}
              </p>
            </section>
          </AnimateIn>
        ))}

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}
          >
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Planning Tips
            </h2>
            <ul className="text-sm leading-relaxed space-y-2" style={{ color: "#4E4B46" }}>
              <li><strong>Best all-around months:</strong> November–December and March–April offer the widest species diversity with comfortable temperatures</li>
              <li><strong>Spring fallout window:</strong> Book accommodation at South Padre Island for late April — the island fills up fast when conditions look favorable</li>
              <li><strong>Hawk watch:</strong> The third week of September is the best single week for Broad-winged Hawks; check weather forecasts for northwest winds following cold fronts</li>
              <li><strong>Whooping Cranes:</strong> Boat tours from Rockport book out — reserve in advance for any visit between November and March</li>
              <li><strong>Summer strategy:</strong> If visiting June–August, focus on dawn and dusk; avoid midday; stay at parks with air conditioning nearby</li>
            </ul>
          </section>
        </AnimateIn>

        <AnimateIn>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/hotspots"
              className="flex-1 text-center rounded-xl px-5 py-4 font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: "#0E6B6B", color: "#EFE3CE" }}
            >
              Explore Birding Hotspots →
            </Link>
            <Link
              href="/birds"
              className="flex-1 text-center rounded-xl px-5 py-4 font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: "#F7F0E4", color: "#0E6B6B", border: "1px solid rgba(14,107,107,0.2)" }}
            >
              Browse All Species →
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div className="text-center pt-4">
            <Link
              href="/news"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#C77F4A" }}
            >
              ← All News &amp; Conservation
            </Link>
          </div>
        </AnimateIn>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://southtexasbirds.org" },
              { "@type": "ListItem", "position": 2, "name": "News & Conservation", "item": "https://southtexasbirds.org/news" },
              { "@type": "ListItem", "position": 3, "name": "South Texas Birding Calendar", "item": "https://southtexasbirds.org/news/south-texas-birding-calendar" },
            ],
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "South Texas Birding Calendar: When to Go for Each Species",
            "datePublished": "2026-06-28",
            "dateModified": "2026-06-28",
            "url": "https://southtexasbirds.org/news/south-texas-birding-calendar",
            "description": "A month-by-month guide to birding the Rio Grande Valley. From Painted Bunting spring fallouts in April to Whooping Crane winters at Aransas.",
            "image": OG_IMAGE,
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": {
              "@type": "Organization",
              "name": "South Texas Birds",
              "url": "https://southtexasbirds.org"
            },
            "keywords": ["South Texas birding", "Rio Grande Valley birding", "when to go birding Texas", "birding calendar", "RGV birding guide"],
            "articleSection": "Planning"
          })
        }}
      />
    </div>
  );
}
