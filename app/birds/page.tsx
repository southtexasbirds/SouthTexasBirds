"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type CSSProperties } from "react";
import AudioPlayer from "../components/AudioPlayer";
import { birdAudio } from "./audioData";

import { birds, toBirdId, detailPages } from "./data";

const birdHotspotMap: Record<string, { label: string; anchor: string }[]> = {
  "Green Jay": [
    { label: "Bentsen SP", anchor: "bentsen" },
    { label: "Santa Ana NWR", anchor: "santa-ana" },
  ],
  "Altamira Oriole": [
    { label: "Bentsen SP", anchor: "bentsen" },
    { label: "Santa Ana NWR", anchor: "santa-ana" },
  ],
  "Plain Chachalaca": [
    { label: "Bentsen SP", anchor: "bentsen" },
    { label: "Resaca de la Palma", anchor: "resaca-de-la-palma" },
  ],
  "Buff-bellied Hummingbird": [
    { label: "Quinta Mazatlan", anchor: "quinta-mazatlan" },
    { label: "Nat'l Butterfly Ctr", anchor: "national-butterfly-center" },
  ],
  "Painted Bunting": [{ label: "South Padre Island", anchor: "south-padre-island" }],
  "Roseate Spoonbill": [
    { label: "Estero Llano Grande", anchor: "estero-llano-grande" },
    { label: "Laguna Atascosa", anchor: "laguna-atascosa" },
  ],
  "Crested Caracara": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "Harris's Hawk": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "Aplomado Falcon": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "Broad-winged Hawk": [{ label: "Bentsen SP", anchor: "bentsen" }],
  "Gray Hawk": [{ label: "Bentsen SP", anchor: "bentsen" }],
  "Hook-billed Kite": [
    { label: "Bentsen SP", anchor: "bentsen" },
    { label: "Santa Ana NWR", anchor: "santa-ana" },
  ],
  "Ringed Kingfisher": [
    { label: "Salineño", anchor: "salineno" },
    { label: "Estero Llano Grande", anchor: "estero-llano-grande" },
  ],
  "Green Kingfisher": [
    { label: "Salineño", anchor: "salineno" },
    { label: "Estero Llano Grande", anchor: "estero-llano-grande" },
  ],
  "Vermilion Flycatcher": [{ label: "Quinta Mazatlan", anchor: "quinta-mazatlan" }],
  "Great Kiskadee": [
    { label: "Bentsen SP", anchor: "bentsen" },
    { label: "Santa Ana NWR", anchor: "santa-ana" },
  ],
  "Tropical Kingbird": [
    { label: "Salineño", anchor: "salineno" },
    { label: "Santa Ana NWR", anchor: "santa-ana" },
  ],
  "Ferruginous Pygmy-Owl": [
    { label: "Resaca de la Palma", anchor: "resaca-de-la-palma" },
    { label: "Bentsen SP", anchor: "bentsen" },
  ],
  "Elf Owl": [{ label: "Bentsen SP", anchor: "bentsen" }],
  "Least Grebe": [{ label: "Estero Llano Grande", anchor: "estero-llano-grande" }],
  "Black-bellied Whistling-Duck": [{ label: "Estero Llano Grande", anchor: "estero-llano-grande" }],
  "Masked Duck": [{ label: "Estero Llano Grande", anchor: "estero-llano-grande" }],
  "Northern Jacana": [{ label: "Estero Llano Grande", anchor: "estero-llano-grande" }],
  "Groove-billed Ani": [
    { label: "Estero Llano Grande", anchor: "estero-llano-grande" },
    { label: "Quinta Mazatlan", anchor: "quinta-mazatlan" },
  ],
  "Clay-colored Thrush": [
    { label: "Santa Ana NWR", anchor: "santa-ana" },
    { label: "Resaca de la Palma", anchor: "resaca-de-la-palma" },
  ],
  "Long-billed Thrasher": [
    { label: "Santa Ana NWR", anchor: "santa-ana" },
    { label: "Salineño", anchor: "salineno" },
  ],
  "Audubon's Oriole": [
    { label: "Salineño", anchor: "salineno" },
    { label: "Bentsen SP", anchor: "bentsen" },
  ],
  "Olive Sparrow": [
    { label: "Santa Ana NWR", anchor: "santa-ana" },
    { label: "Salineño", anchor: "salineno" },
  ],
  "White-tipped Dove": [
    { label: "Santa Ana NWR", anchor: "santa-ana" },
    { label: "Salineño", anchor: "salineno" },
  ],
  "Reddish Egret": [
    { label: "South Padre Island", anchor: "south-padre-island" },
    { label: "Laguna Atascosa", anchor: "laguna-atascosa" },
  ],
  "Neotropic Cormorant": [{ label: "Estero Llano Grande", anchor: "estero-llano-grande" }],
  "White-tailed Hawk": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "White-tailed Kite": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "Couch's Kingbird": [
    { label: "Quinta Mazatlan", anchor: "quinta-mazatlan" },
    { label: "Nat'l Butterfly Ctr", anchor: "national-butterfly-center" },
  ],
  "Scissor-tailed Flycatcher": [{ label: "South Padre Island", anchor: "south-padre-island" }],
  "Rose-throated Becard": [{ label: "Santa Ana NWR", anchor: "santa-ana" }],
  "Red-billed Pigeon": [
    { label: "Bentsen SP", anchor: "bentsen" },
    { label: "Salineño", anchor: "salineno" },
  ],
  "Inca Dove": [
    { label: "Quinta Mazatlan", anchor: "quinta-mazatlan" },
    { label: "Nat'l Butterfly Ctr", anchor: "national-butterfly-center" },
  ],
  "American Oystercatcher": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "Tropical Parula": [{ label: "Resaca de la Palma", anchor: "resaca-de-la-palma" }],
  "Mottled Duck": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "Piping Plover": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
};

// Status badge inline styles — no Tailwind color utilities
function statusBadgeStyle(status: string): CSSProperties {
  if (status.includes("Rare"))
    return {
      background: "rgba(199,127,74,0.1)",
      color: "#C77F4A",
      border: "1px solid rgba(199,127,74,0.25)",
    };
  if (status.includes("Winter"))
    return {
      background: "rgba(40,80,130,0.08)",
      color: "#2B507A",
      border: "1px solid rgba(40,80,130,0.2)",
    };
  if (status.includes("Summer"))
    return {
      background: "rgba(212,162,76,0.12)",
      color: "#7A5C10",
      border: "1px solid rgba(212,162,76,0.3)",
    };
  if (status === "Migrant")
    return {
      background: "rgba(90,55,130,0.08)",
      color: "#5A3782",
      border: "1px solid rgba(90,55,130,0.2)",
    };
  if (status === "Uncommon resident")
    return {
      background: "rgba(212,162,76,0.1)",
      color: "#8A6518",
      border: "1px solid rgba(212,162,76,0.25)",
    };
  // Resident (all remaining variants)
  return {
    background: "rgba(14,107,107,0.08)",
    color: "#0E6B6B",
    border: "1px solid rgba(14,107,107,0.2)",
  };
}

const statusGroups: Record<string, string[]> = {
  Resident: ["Resident", "Uncommon resident", "Resident (reintroduced)", "Resident (naturalized)", "Resident / winter visitor"],
  Rare: ["Rare resident"],
  Winter: ["Winter visitor", "Winter visitor / migrant"],
  Summer: ["Summer resident"],
  Migrant: ["Migrant"],
};

const filterLabels = ["All", "Resident", "Rare", "Winter", "Summer", "Migrant"] as const;
type Filter = (typeof filterLabels)[number];

export default function BirdsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const q = query.toLowerCase();

  const filtered = birds.filter((bird) => {
    const matchesSearch =
      q === "" ||
      bird.name.toLowerCase().includes(q) ||
      bird.scientific.toLowerCase().includes(q) ||
      bird.family.toLowerCase().includes(q) ||
      bird.habitat.toLowerCase().includes(q) ||
      bird.notes.toLowerCase().includes(q);

    const matchesFilter =
      activeFilter === "All" ||
      (statusGroups[activeFilter]?.includes(bird.status) ?? false);

    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ background: "#EFE3CE" }}>

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#C77F4A" }}
        >
          Rio Grande Valley
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold mb-3"
          style={{ color: "#0E6B6B" }}
        >
          South Texas Bird Species
        </h1>
        <p className="text-sm mb-10" style={{ color: "#5C5954" }}>
          {birds.length} specialty and notable species of the Rio Grande Valley and South Texas
          coast. Photos via{" "}
          <a
            href="https://commons.wikimedia.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            style={{ color: "#5C5954" }}
          >
            Wikimedia Commons
          </a>{" "}
          &mdash;{" "}
          <Link
            href="/credits"
            className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            style={{ color: "#5C5954" }}
          >
            see full photo credits
          </Link>
          . Bird call recordings via{" "}
          <a
            href="https://www.xeno-canto.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            style={{ color: "#5C5954" }}
          >
            Xeno-canto
          </a>{" "}
          (CC licensed).
        </p>

        {/* ── Search + filters ──────────────────────────────────────────── */}
        <div className="space-y-3">
          <input
            type="search"
            placeholder="Search by name, family, habitat…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-md rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E6B6B]/40"
            style={{
              background: "#fff",
              border: "1px solid rgba(14,107,107,0.22)",
              color: "#2B2B26",
              boxShadow: "0 1px 3px rgba(14,107,107,0.06)",
            }}
          />
          <div className="flex flex-wrap gap-2">
            {filterLabels.map((label) => (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className="rounded-full px-4 py-1.5 text-xs font-medium transition-opacity hover:opacity-80"
                style={
                  activeFilter === label
                    ? { backgroundColor: "#0E6B6B", color: "#fff" }
                    : {
                        background: "#fff",
                        border: "1px solid rgba(14,107,107,0.2)",
                        color: "#0E6B6B",
                      }
                }
              >
                {label}
                {label === "All"
                  ? ` (${birds.length})`
                  : ` (${birds.filter((b) => statusGroups[label]?.includes(b.status)).length})`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        {filtered.length === 0 ? (
          <div className="py-24 text-center text-sm" style={{ color: "#6E6B66" }}>
            No birds match &ldquo;{query}&rdquo;
            {activeFilter !== "All" && (
              <>
                {" "}in the{" "}
                <span style={{ color: "#0E6B6B", fontWeight: 600 }}>{activeFilter}</span> filter
              </>
            )}.
          </div>
        ) : (
          <>
            {(query || activeFilter !== "All") && (
              <p className="text-xs mb-5" style={{ color: "#6E6B66" }}>
                {filtered.length} of {birds.length} species
              </p>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((bird) => (
                <div
                  key={bird.name}
                  id={toBirdId(bird.name)}
                  className="rounded-xl overflow-hidden flex flex-col"
                  style={{
                    background: "#fff",
                    borderTop: "3px solid #D4A24C",
                    boxShadow: "0 1px 8px rgba(14,107,107,0.08)",
                  }}
                >
                  {/* Photo */}
                  {detailPages[bird.name] ? (
                    <Link
                      href={detailPages[bird.name]}
                      className="relative h-48 shrink-0 block"
                      style={{ background: "#0E6B6B" }}
                      tabIndex={-1}
                      aria-hidden
                    >
                      <Image
                        src={bird.photo}
                        alt={bird.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </Link>
                  ) : (
                    <div
                      className="relative h-48 shrink-0"
                      style={{ background: "#0E6B6B" }}
                    >
                      <Image
                        src={bird.photo}
                        alt={bird.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Info */}
                  <div className="p-4 flex flex-col flex-1">
                    <h2
                      className="font-serif text-base font-bold leading-snug mb-0.5"
                      style={{ color: "#0E6B6B" }}
                    >
                      {detailPages[bird.name] ? (
                        <Link
                          href={detailPages[bird.name]}
                          className="hover:underline underline-offset-2"
                        >
                          {bird.name}
                        </Link>
                      ) : (
                        bird.name
                      )}
                    </h2>
                    <p
                      className="text-xs italic mb-2.5"
                      style={{ color: "#6E6B66" }}
                    >
                      {bird.scientific}
                    </p>

                    <span
                      className="self-start text-xs font-medium px-2.5 py-0.5 rounded-full mb-3"
                      style={statusBadgeStyle(bird.status)}
                    >
                      {bird.status}
                    </span>

                    <p className="text-xs mb-3" style={{ color: "#4E4B46" }}>
                      <span
                        className="font-semibold tracking-widest uppercase"
                        style={{ fontSize: "0.6rem", color: "#C77F4A" }}
                      >
                        Habitat
                      </span>
                      {"  "}
                      {bird.habitat}
                    </p>

                    <p
                      className="text-sm leading-relaxed mt-auto"
                      style={{ color: "#4E4B46" }}
                    >
                      {bird.notes}
                    </p>

                    {birdAudio[bird.scientific] && (
                      <AudioPlayer {...birdAudio[bird.scientific]} />
                    )}

                    {birdHotspotMap[bird.name] && (
                      <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(14,107,107,0.1)" }}>
                        <p
                          className="font-semibold tracking-widest uppercase mb-1.5"
                          style={{ fontSize: "0.6rem", color: "#C77F4A" }}
                        >
                          Found at
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {birdHotspotMap[bird.name].map((hs) => (
                            <Link
                              key={hs.anchor}
                              href={`/hotspots#${hs.anchor}`}
                              className="text-xs font-medium px-2 py-0.5 rounded-full hover:opacity-75 transition-opacity"
                              style={{
                                background: "rgba(14,107,107,0.08)",
                                color: "#0E6B6B",
                                border: "1px solid rgba(14,107,107,0.18)",
                              }}
                            >
                              {hs.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

    </div>
  );
}
