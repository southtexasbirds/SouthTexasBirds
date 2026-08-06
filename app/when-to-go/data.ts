// Month-by-month RGV birding data. Mirrors the app/birds/data.ts pattern:
// lightweight structured fields live here so the index page's season-at-a-
// glance table, the sitemap, and each month's own "at a glance" panel can
// all read from one source. The actual long-form prose for months with a
// full guide lives in app/when-to-go/{slug}/page.tsx, same as species pages
// keep their prose in their own page.tsx and only the summary fields here.

export type MonthOverview = {
  slug: string;
  name: string;
  order: number; // 1 = January
  /** Whether a full written guide exists at /when-to-go/{slug}. */
  hasGuide: boolean;
  /** Short phrase for the season-at-a-glance table and month card. */
  tagline: string;
  arriving: string[];
  leaving: string[];
  peaking: string[];
};

export const MONTHS: MonthOverview[] = [
  {
    slug: "january",
    name: "January",
    order: 1,
    hasGuide: false,
    tagline: "Peak winter — wintering specialties fully settled",
    arriving: [],
    leaving: [],
    peaking: ["Whooping Crane", "Painted Bunting", "Vermilion Flycatcher", "Mottled Duck"],
  },
  {
    slug: "february",
    name: "February",
    order: 2,
    hasGuide: false,
    tagline: "Peak winter continues — mild days, feeders busy",
    arriving: [],
    leaving: [],
    peaking: ["Whooping Crane", "Painted Bunting", "Vermilion Flycatcher"],
  },
  {
    slug: "march",
    name: "March",
    order: 3,
    hasGuide: false,
    tagline: "Winter-to-spring turnover — cranes depart, early breeders arrive",
    arriving: ["Scissor-tailed Flycatcher", "Gray Hawk"],
    leaving: ["Whooping Crane"],
    peaking: ["Painted Bunting"],
  },
  {
    slug: "april",
    name: "April",
    order: 4,
    hasGuide: false,
    tagline: "Spring migration builds toward the South Padre fallout window",
    arriving: ["Swallow-tailed Kite", "Buff-bellied Hummingbird breeders"],
    leaving: [],
    peaking: ["Painted Bunting", "Scissor-tailed Flycatcher"],
  },
  {
    slug: "may",
    name: "May",
    order: 5,
    hasGuide: false,
    tagline: "Trans-Gulf fallout season — the spring migration peak",
    arriving: [],
    leaving: ["Vermilion Flycatcher (winter contingent)"],
    peaking: ["Painted Bunting", "Swallow-tailed Kite", "Buff-bellied Hummingbird"],
  },
  {
    slug: "june",
    name: "June",
    order: 6,
    hasGuide: false,
    tagline: "Summer heat arrives — breeding season for resident specialties",
    arriving: [],
    leaving: [],
    peaking: ["Green Jay", "Altamira Oriole", "Elf Owl", "Ferruginous Pygmy-Owl"],
  },
  {
    slug: "july",
    name: "July",
    order: 7,
    hasGuide: false,
    tagline: "Height of summer — dawn birding only, first shorebirds returning",
    arriving: ["Piping Plover"],
    leaving: [],
    peaking: ["Green Jay", "Altamira Oriole"],
  },
  {
    slug: "august",
    name: "August",
    order: 8,
    hasGuide: false,
    tagline: "Fall migration quietly begins — first kites and shorebirds move",
    arriving: ["Swallow-tailed Kite", "Broad-winged Hawk (vanguard)"],
    leaving: [],
    peaking: ["Piping Plover", "Reddish Egret"],
  },
  {
    slug: "september",
    name: "September",
    order: 9,
    hasGuide: true,
    tagline: "Hawk migration peak — Broad-winged Hawk kettles, still brutally hot",
    arriving: ["Broad-winged Hawk"],
    leaving: ["Swallow-tailed Kite"],
    peaking: ["Broad-winged Hawk", "Piping Plover", "Reddish Egret"],
  },
  {
    slug: "october",
    name: "October",
    order: 10,
    hasGuide: true,
    tagline: "The turnover month — summer residents out, winter arrivals in",
    arriving: ["Painted Bunting", "Vermilion Flycatcher", "Aplomado Falcon (visibility rising)"],
    leaving: ["Broad-winged Hawk"],
    peaking: ["Roseate Spoonbill", "Piping Plover"],
  },
  {
    slug: "november",
    name: "November",
    order: 11,
    hasGuide: true,
    tagline: "Winter birding opens — Whooping Cranes settle in, temperatures turn comfortable",
    arriving: ["Whooping Crane"],
    leaving: [],
    peaking: ["Painted Bunting", "Piping Plover", "Aplomado Falcon", "Vermilion Flycatcher"],
  },
  {
    slug: "december",
    name: "December",
    order: 12,
    hasGuide: false,
    tagline: "Peak winter season — Christmas Bird Counts, comfortable temperatures",
    arriving: [],
    leaving: [],
    peaking: ["Whooping Crane", "Painted Bunting", "Vermilion Flycatcher", "Piping Plover"],
  },
];

export type MonthGuideDetail = {
  summary: string;
  weather: { high: string; low: string; humidity: string; rain: string };
  targetSpecies: { name: string; slug: string }[];
  hotspots: { name: string; anchor: string }[];
  notes: string;
  oneDayPlan: string;
  ogPhoto: { slug: string; alt: string };
};

// Full guide detail — only for months with hasGuide: true above.
export const MONTH_GUIDE_DETAILS: Record<string, MonthGuideDetail> = {
  september: {
    summary:
      "Hawk migration peak — Broad-winged Hawk kettles fill the sky and fall shorebirds work the coast, but the Valley is still brutally hot, so plan around dawn.",
    weather: { high: "92°F", low: "74°F", humidity: "Muggy — roughly 26 muggy days in the month", rain: "3.5 in., ~10 rainy days (the wettest month of the year)" },
    targetSpecies: [
      { name: "Broad-winged Hawk", slug: "broad-winged-hawk" },
      { name: "Swallow-tailed Kite", slug: "swallow-tailed-kite" },
      { name: "Hook-billed Kite", slug: "hook-billed-kite" },
      { name: "White-tailed Hawk", slug: "white-tailed-hawk" },
      { name: "Crested Caracara", slug: "crested-caracara" },
      { name: "Piping Plover", slug: "piping-plover" },
      { name: "Reddish Egret", slug: "reddish-egret" },
      { name: "American Oystercatcher", slug: "american-oystercatcher" },
    ],
    hotspots: [
      { name: "Bentsen-Rio Grande Valley State Park", anchor: "bentsen" },
      { name: "South Padre Island Birding & Nature Center", anchor: "south-padre-island" },
      { name: "Laguna Atascosa NWR", anchor: "laguna-atascosa" },
      { name: "National Butterfly Center", anchor: "national-butterfly-center" },
    ],
    notes:
      "No fixed festival dates in September, but this is the lead-up month for the Rio Grande Valley Birding Festival planning season — worth checking the RGVBF page for the current year's schedule before booking a fall trip.",
    oneDayPlan:
      "Be at Bentsen's hawk tower by 8 a.m. — kettles build once thermals form, usually after 9–10 a.m. Watch through late morning, then retreat indoors or to shade through the brutal early afternoon. If a cold front is forecast with clearing skies and northwest wind, prioritize the hawk tower over everything else that day.",
    ogPhoto: { slug: "broad-winged-hawk", alt: "Broad-winged Hawk kettle over South Texas" },
  },
  october: {
    summary:
      "The Valley's turnover month: the last Broad-winged Hawks thin out, Painted Buntings and winter specialties start filtering back in, and the first real cold fronts make mornings genuinely pleasant.",
    weather: { high: "87°F", low: "68°F", humidity: "Noticeably drier than September", rain: "2.1 in., ~6 rainy days" },
    targetSpecies: [
      { name: "Broad-winged Hawk", slug: "broad-winged-hawk" },
      { name: "Aplomado Falcon", slug: "aplomado-falcon" },
      { name: "Crested Caracara", slug: "crested-caracara" },
      { name: "White-tailed Kite", slug: "white-tailed-kite" },
      { name: "Painted Bunting", slug: "painted-bunting" },
      { name: "Roseate Spoonbill", slug: "roseate-spoonbill" },
      { name: "Vermilion Flycatcher", slug: "vermilion-flycatcher" },
      { name: "Piping Plover", slug: "piping-plover" },
    ],
    hotspots: [
      { name: "Santa Ana National Wildlife Refuge", anchor: "santa-ana" },
      { name: "Bentsen-Rio Grande Valley State Park", anchor: "bentsen" },
      { name: "Laguna Atascosa NWR", anchor: "laguna-atascosa" },
      { name: "South Padre Island Birding & Nature Center", anchor: "south-padre-island" },
    ],
    notes:
      "Santa Ana NWR's best season runs October through April, so October is effectively opening day there. First real cold fronts typically arrive by mid-to-late October, though the exact timing shifts year to year — check the forecast rather than the calendar.",
    oneDayPlan:
      "Split the day: Santa Ana or Estero Llano Grande in the cooler morning for songbirds and early waterfowl, then Bentsen's hawk tower in the afternoon for whatever raptor push is still moving. October mornings no longer demand a brutal-heat dawn start, so this is the first month where a relaxed two-site day works well.",
    ogPhoto: { slug: "painted-bunting", alt: "Painted Bunting, one of the first winter specialties to return in October" },
  },
  november: {
    summary:
      "Winter birding properly opens: Whooping Cranes have settled in at Aransas, four of the Valley's nine hotspots enter their best season, and temperatures turn genuinely comfortable for the first time since spring.",
    weather: { high: "79°F", low: "61°F", humidity: "Comfortable — down to roughly 10 muggy days", rain: "1.2 in., ~3 rainy days (driest stretch of the fall)" },
    targetSpecies: [
      { name: "Whooping Crane", slug: "whooping-crane" },
      { name: "Aplomado Falcon", slug: "aplomado-falcon" },
      { name: "Painted Bunting", slug: "painted-bunting" },
      { name: "Vermilion Flycatcher", slug: "vermilion-flycatcher" },
      { name: "Piping Plover", slug: "piping-plover" },
      { name: "Mottled Duck", slug: "mottled-duck" },
      { name: "American Oystercatcher", slug: "american-oystercatcher" },
      { name: "Neotropic Cormorant", slug: "neotropic-cormorant" },
    ],
    hotspots: [
      { name: "Santa Ana National Wildlife Refuge", anchor: "santa-ana" },
      { name: "Laguna Atascosa NWR", anchor: "laguna-atascosa" },
      { name: "Salineño Wildlife Preserve", anchor: "salineno" },
      { name: "Resaca de la Palma State Park", anchor: "resaca-de-la-palma" },
    ],
    notes:
      "The Rio Grande Valley Birding Festival is held in Harlingen in November — see the festival article for the current year's details. Whooping Crane boat tours from Rockport Harbor book out well in advance for the November–March season, so reserve ahead rather than planning to book on arrival.",
    oneDayPlan:
      "Laguna Atascosa rewards a full day in November: open coastal prairie for Aplomado Falcon and White-tailed Hawk in the morning, then the impoundments and resacas for Mottled Duck, Piping Plover, and the winter waterfowl building up through the refuge. If crane season is the priority instead, budget a separate day-trip north to Rockport for the Aransas boat tour rather than trying to combine it with RGV birding in a single day.",
    ogPhoto: { slug: "whooping-crane", alt: "Whooping Crane at Aransas National Wildlife Refuge, wintering season" },
  },
};
