import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photo Credits",
  description:
    "Full attribution for all bird photographs on South Texas Birds. Images sourced from Wikimedia Commons under Creative Commons and public domain licenses.",
  openGraph: {
    title: "Photo Credits | South Texas Birds",
    description:
      "Full attribution for all bird photographs on South Texas Birds. Images sourced from Wikimedia Commons under Creative Commons licenses.",
  },
  twitter: {
    card: "summary",
    title: "Photo Credits | South Texas Birds",
    description:
      "Full attribution for all bird photographs on South Texas Birds.",
  },
};

type PhotoCredit = {
  subject: string;
  photographer: string;
  license: string;
  licenseUrl: string | null;
  commonsFile: string;
};

const credits: PhotoCredit[] = [
  {
    subject: "Altamira Oriole",
    photographer: "Charles J. Sharp",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Altamira_oriole_(Icterus_gularis_gigas)_Copan.jpg",
  },
  {
    subject: "American Oystercatcher",
    photographer: "Rhododendrites",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "American_oystercatcher_on_Fort_Tilden_beach_(93754).jpg",
  },
  {
    subject: "Aplomado Falcon",
    photographer: "Bernard DUPONT",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    commonsFile: "Aplomado_Falcon_(Falco_femoralis)_(31631199902).jpg",
  },
  {
    subject: "Audubon's Oriole",
    photographer: "Andy Morffew",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    commonsFile: "Audubon's_Oriole_(12626811374).jpg",
  },
  {
    subject: "Black-bellied Whistling-Duck",
    photographer: "Alan D. Wilson / NaturesPicsOnline.com",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    commonsFile: "Whistling_duck_flight02_-_natures_pics-edit1.jpg",
  },
  {
    subject: "Botteri's Sparrow",
    photographer: "Alastair Rae",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    commonsFile: "Aimophila_botterii.jpg",
  },
  {
    subject: "Broad-winged Hawk",
    photographer: "Julie Waters",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    commonsFile: "Julie_Waters_broad_winged_hawk.JPG",
  },
  {
    subject: "Buff-bellied Hummingbird",
    photographer: "HarmonyonPlanetEarth",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    commonsFile:
      "Buff-bellied_Hummingbird-Sabal_Palm_Bird_Sanctuary-TX_-_2015-05-21at11-43-412_(21421266100).jpg",
  },
  {
    subject: "Clay-colored Thrush",
    photographer: "Charles J. Sharp",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Clay-coloured_thrush_(Turdus_grayi_casius)_2.jpg",
  },
  {
    subject: "Couch's Kingbird",
    photographer: "Lauren (iNaturalist)",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    commonsFile: "Tyrannus_couchii_112139785_(cropped).jpg",
  },
  {
    subject: "Crested Caracara",
    photographer: "Andreas Trepte",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Schopfkarakara.jpg",
  },
  {
    subject: "Elf Owl",
    photographer: "BBODO",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    commonsFile: "Micrathene_whitneyi_29APR12_Madera_Canyon_AZ.jpg",
  },
  {
    subject: "Ferruginous Pygmy-Owl",
    photographer: "Charles J. Sharp",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Ferruginous_pygmy_owl_(Glaucidium_brasilianum_ridgwayi)_Copan.jpg",
  },
  {
    subject: "Gray Hawk",
    photographer: "The Lilac Breasted Roller",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    commonsFile: "Buteo_plagiatus_Belize.jpg",
  },
  {
    subject: "Great Kiskadee",
    photographer: "Rhododendrites",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Great_kiskadee_(70240).jpg",
  },
  {
    subject: "Greater Roadrunner",
    photographer: "Polinova",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Greater_Roadrunner_Tingley_Beach.jpg",
  },
  {
    subject: "Green Jay",
    photographer: "Chuck Homler / Focus On Wildlife",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Green_jay_(Cyanocorax_luxuosus)_in_Mission,_Texas,_USA.png",
  },
  {
    subject: "Green Kingfisher",
    photographer: "Charles J. Sharp",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Green_kingfisher_(Chloroceryle_americana)_male_3.jpg",
  },
  {
    subject: "Green Parakeet",
    photographer: "Michael Woodruff",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    commonsFile: "Green_Parakeet_-in_tree_-South_Texas-8.jpg",
  },
  {
    subject: "Groove-billed Ani",
    photographer: "Charles J. Sharp",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Groove-billed_ani_(Crotophaga_sulcirostris)_Cayo.jpg",
  },
  {
    subject: "Harris's Hawk",
    photographer: "Alan Vernon",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    commonsFile: "Harris's_Hawk_(Parabuteo_unicinctus)_3_of_4_in_set.jpg",
  },
  {
    subject: "Hook-billed Kite",
    photographer: "thibaudaronson",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Chondrohierax_uncinatus_76608753.jpg",
  },
  {
    subject: "Inca Dove",
    photographer: "Elaine R. Wilson",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    commonsFile: "IncaDove.jpg",
  },
  {
    subject: "Least Grebe",
    photographer: "Hector Bottai",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile:
      "Tachybaptus_dominicus_brachyrhynchus_-_Least_grebe;_Pantanal_route-park,_Corumbá,_Mato_Grosso_do_Sul,_Brazil.jpg",
  },
  {
    subject: "Long-billed Thrasher",
    photographer: "Bill Bouton",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    commonsFile:
      "Toxostoma_longirostre_-Laguna_Atascosa_National_Wildlife_Refuge,_Texas,_USA-8.jpg",
  },
  {
    subject: "Masked Duck",
    photographer: "Charles J. Sharp",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Masked_duck_(Nomonyx_dominicus).jpg",
  },
  {
    subject: "Mottled Duck",
    photographer: "JeffreyGammon",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "MottledDuck_Gam.jpg",
  },
  {
    subject: "Muscovy Duck (Salineño hotspot)",
    photographer: "Bernard DUPONT",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    commonsFile: "Muscovy_Duck_(Cairina_moschata)_male_(29039391935).jpg",
  },
  {
    subject: "Neotropic Cormorant",
    photographer: "Charles J. Sharp",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Neotropic_cormorant_(Nannopterum_brasilianum_mexicanum)_Peten.jpg",
  },
  {
    subject: "Northern Jacana",
    photographer: "Telegro",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Northern_Jacana_Costa_Rica.jpg",
  },
  {
    subject: "Olive Sparrow",
    photographer: "Chuck Homler / Focus On Wildlife",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Olive_Sparrow_(Arremonops_rufivirgatus)_Edinbug,_Texas,_USA.png",
  },
  {
    subject: "Painted Bunting",
    photographer: "Dakota L.",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    commonsFile: "Male_Painted_Bunting_Singing.jpg",
  },
  {
    subject: "Piping Plover",
    photographer: "Mdf; derivative work by Tmv23",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    commonsFile: "Charadrius-melodus-004_edit.jpg",
  },
  {
    subject: "Plain Chachalaca",
    photographer: "Chuck Homler / Focus On Wildlife",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Plain_Chachalaca_Roadside.png",
  },
  {
    subject: "Red-billed Pigeon",
    photographer: "Michael Woodruff",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    commonsFile: "Patagioenas_flavirostris_-Costa_Rica-8.jpg",
  },
  {
    subject: "Red-crowned Parrot",
    photographer: "Glandauer / Roger Moore",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    commonsFile: "Red_Crowned_Amazon.jpg",
  },
  {
    subject: "Reddish Egret",
    photographer: "JeffreyGammon",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "ReddishEgret_Gam.jpg",
  },
  {
    subject: "Ringed Kingfisher",
    photographer: "Bernard DUPONT",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    commonsFile: "Ringed_Kingfisher_(Megaceryle_torquata)_male_(28808454175).jpg",
  },
  {
    subject: "Rose-throated Becard",
    photographer: "Dan Vickers",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    commonsFile: "Pachyramphus_aglaiae_-_Dan_Vickers_-_459803351.jpeg",
  },
  {
    subject: "Roseate Spoonbill",
    photographer: "Mwanner",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    commonsFile: "Roseate_Spoonbill_-_Myakka_River_State_Park.jpg",
  },
  {
    subject: "Scissor-tailed Flycatcher",
    photographer: "Gary Kramer (USFWS)",
    license: "Public domain",
    licenseUrl: null,
    commonsFile: "Tyrannus_forficatus_on_branch.jpg",
  },
  {
    subject: "Swallow-tailed Kite",
    photographer: "Andy Morffew",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    commonsFile: "Swallow-tailed_Kite_(34163638494).jpg",
  },
  {
    subject: "Tricolored Heron",
    photographer: "Russ",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    commonsFile: "Tri-colored_heron_sunrise_bunche_beach_(33516451355)_(cropped).jpg",
  },
  {
    subject: "Tropical Kingbird",
    photographer: "Charles J. Sharp",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Tropical_kingbird_(Tyrannus_melancholicus).JPG",
  },
  {
    subject: "Tropical Parula",
    photographer: "Cephas",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    commonsFile: "Setophaga_pitiayumi_Monteverde_03.jpg",
  },
  {
    subject: "Vermilion Flycatcher",
    photographer: "Henry (lakeworth / Flickr)",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    commonsFile: "Karmintyrann_(Pyrocephalus_obscurus),_Männchen_1.jpg",
  },
  {
    subject: "White-collared Seedeater",
    photographer: "Laura Gaudette",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    commonsFile: "Sporophila_torqueola_55799290.jpg",
  },
  {
    subject: "White-tailed Hawk",
    photographer: "Agecom Bahia",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    commonsFile: "Buteo_albicaudatus_-Salvador_Zoo,_Ondina,_Salvador,_Bahia,_Brasil-8a.jpg",
  },
  {
    subject: "White-tailed Kite",
    photographer: "Greg Schechter",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    commonsFile: "Elanus_leucurus_3.jpg",
  },
  {
    subject: "White-tipped Dove",
    photographer: "Francesco Veronesi",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    commonsFile: "White-tipped_Dove_-_Panama_H8O8470.jpg",
  },
  {
    subject: "Whooping Crane",
    photographer: "Sasata",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    commonsFile: "Grus_americana_Sasata.jpg",
  },
];

export default function CreditsPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pt-14 pb-10">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-2"
          style={{ color: "#C77F4A" }}
        >
          Legal
        </p>
        <h1
          className="font-serif text-3xl md:text-4xl font-bold mb-3"
          style={{ color: "#0E6B6B" }}
        >
          Photo Credits
        </h1>
        <p className="text-sm max-w-2xl leading-relaxed mb-4" style={{ color: "#5C5954" }}>
          All bird and hotspot photographs on this site are sourced from{" "}
          <a
            href="https://commons.wikimedia.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            style={{ color: "#0E6B6B" }}
          >
            Wikimedia Commons
          </a>
          . 50 of 51 images are published under Creative Commons licenses that require
          crediting the specific photographer. Click{" "}
          <span style={{ color: "#0E6B6B", fontWeight: 600 }}>Source →</span> on any row to
          view the original file and full license text on Wikimedia Commons.
        </p>
        <div className="flex flex-wrap gap-3 text-xs">
          <span
            className="px-3 py-1 rounded-full font-medium"
            style={{
              background: "rgba(14,107,107,0.08)",
              color: "#0E6B6B",
              border: "1px solid rgba(14,107,107,0.18)",
            }}
          >
            50 CC-licensed images
          </span>
          <span
            className="px-3 py-1 rounded-full font-medium"
            style={{
              background: "rgba(212,162,76,0.1)",
              color: "#7A5C10",
              border: "1px solid rgba(212,162,76,0.28)",
            }}
          >
            1 public domain
          </span>
        </div>
      </div>

      {/* ── Credits list ─────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#fff",
            boxShadow: "0 2px 12px rgba(14,107,107,0.09)",
            border: "1px solid rgba(14,107,107,0.07)",
          }}
        >
          {/* Column header */}
          <div
            className="hidden sm:grid px-5 py-3 text-xs font-semibold tracking-widest uppercase"
            style={{
              gridTemplateColumns: "14rem 1fr auto",
              background: "#0E6B6B",
              color: "rgba(239,227,206,0.8)",
            }}
          >
            <span>Subject</span>
            <span>Photographer · License</span>
            <span>Source</span>
          </div>

          {/* Rows */}
          {credits.map((c, i) => (
            <div
              key={c.commonsFile}
              className="px-5 py-3.5"
              style={{
                borderBottom:
                  i < credits.length - 1 ? "1px solid rgba(14,107,107,0.07)" : undefined,
                background: i % 2 === 0 ? "#fff" : "rgba(14,107,107,0.025)",
              }}
            >
              <div
                className="sm:grid sm:items-baseline sm:gap-4"
                style={{ gridTemplateColumns: "14rem 1fr auto" }}
              >
                {/* Subject */}
                <span
                  className="block font-medium text-sm mb-0.5 sm:mb-0"
                  style={{ color: "#0E6B6B" }}
                >
                  {c.subject}
                </span>

                {/* Photographer + license */}
                <span className="text-sm" style={{ color: "#4E4B46" }}>
                  {c.photographer}
                  {" · "}
                  {c.licenseUrl ? (
                    <a
                      href={c.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline transition-opacity hover:opacity-75"
                      style={{ color: "#0E6B6B" }}
                    >
                      {c.license}
                    </a>
                  ) : (
                    <span style={{ color: "#7A5C10" }}>{c.license}</span>
                  )}
                </span>

                {/* Source link */}
                <a
                  href={`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(c.commonsFile)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium hover:opacity-75 transition-opacity mt-1 sm:mt-0 inline-block"
                  style={{ color: "#C77F4A" }}
                >
                  Source&nbsp;→
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs mt-6 text-center" style={{ color: "#8A867E" }}>
          Attribution compiled from Wikimedia Commons{" "}
          <code className="text-xs px-1 rounded" style={{ background: "rgba(14,107,107,0.08)" }}>
            imageinfo&amp;iiprop=extmetadata
          </code>{" "}
          API. If you spot an error, please{" "}
          <a
            href="mailto:riksalinas@gmail.com"
            className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            style={{ color: "#8A867E" }}
          >
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
