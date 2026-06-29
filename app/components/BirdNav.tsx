"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BIRDS_ORDER } from "../birds/birdsOrder";

export default function BirdNav() {
  const pathname = usePathname();

  if (!pathname.startsWith("/birds/")) return null;
  const slug = pathname.slice("/birds/".length);
  if (!slug) return null;

  const idx = BIRDS_ORDER.findIndex((b) => b.slug === slug);
  if (idx < 0) return null;

  const current = BIRDS_ORDER[idx];
  const prev = idx > 0 ? BIRDS_ORDER[idx - 1] : null;
  const next = idx < BIRDS_ORDER.length - 1 ? BIRDS_ORDER[idx + 1] : null;

  const cornellUrl = `https://www.allaboutbirds.org/guide/${current.name.replace(/\s+/g, "_")}`;
  const ebirdUrl = `https://ebird.org/search?q=${encodeURIComponent(current.name)}`;

  return (
    <nav
      className="max-w-4xl mx-auto px-6 pb-12"
      aria-label="Species navigation"
    >
      <div
        className="flex justify-between items-start gap-4 pt-6"
        style={{ borderTop: "1px solid rgba(14,107,107,0.15)" }}
      >
        {prev ? (
          <Link
            href={`/birds/${prev.slug}`}
            className="flex flex-col max-w-[45%] transition-opacity hover:opacity-70"
          >
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-0.5"
              style={{ color: "#C77F4A" }}
            >
              ← Previous
            </span>
            <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>
              {prev.name}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/birds/${next.slug}`}
            className="flex flex-col items-end max-w-[45%] text-right transition-opacity hover:opacity-70"
          >
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-0.5"
              style={{ color: "#C77F4A" }}
            >
              Next →
            </span>
            <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>
              {next.name}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>

      <div className="flex justify-center gap-3 mt-5">
        <a
          href={cornellUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-75"
          style={{
            background: "rgba(14,107,107,0.07)",
            color: "#0E6B6B",
            border: "1px solid rgba(14,107,107,0.18)",
          }}
        >
          Cornell Lab ↗
        </a>
        <a
          href={ebirdUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-75"
          style={{
            background: "rgba(14,107,107,0.07)",
            color: "#0E6B6B",
            border: "1px solid rgba(14,107,107,0.18)",
          }}
        >
          eBird ↗
        </a>
      </div>
    </nav>
  );
}
