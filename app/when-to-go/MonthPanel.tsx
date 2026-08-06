import Link from "next/link";
import type { MonthGuideDetail } from "./data";

/**
 * The "at a glance" structured panel shared by every month guide page:
 * weather stats, linked target species, linked hotspots, and notes.
 * Shared because every month guide needs the identical block — same
 * reasoning as HeroFrame/BirdNav being shared across species pages.
 */
export default function MonthPanel({ detail }: { detail: MonthGuideDetail }) {
  const { weather, targetSpecies, hotspots, notes } = detail;

  return (
    <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
      <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: "#0E6B6B" }}>At a Glance</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Typical High", value: weather.high },
          { label: "Typical Low", value: weather.low },
          { label: "Humidity", value: weather.humidity },
          { label: "Rainfall", value: weather.rain },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg p-3 text-center" style={{ background: "rgba(14,107,107,0.06)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#C77F4A" }}>{stat.label}</p>
            <p className="text-sm font-semibold leading-snug" style={{ color: "#0E6B6B" }}>{stat.value}</p>
          </div>
        ))}
      </div>

      <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Target Species</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {targetSpecies.map((s) => (
          <Link
            key={s.slug}
            href={`/birds/${s.slug}`}
            className="text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-75"
            style={{ background: "rgba(14,107,107,0.07)", color: "#0E6B6B", border: "1px solid rgba(14,107,107,0.18)" }}
          >
            {s.name}
          </Link>
        ))}
      </div>

      <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Recommended Hotspots</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {hotspots.map((h) => (
          <Link
            key={h.anchor}
            href={`/hotspots#${h.anchor}`}
            className="text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-75"
            style={{ background: "rgba(199,127,74,0.1)", color: "#C77F4A", border: "1px solid rgba(199,127,74,0.25)" }}
          >
            {h.name}
          </Link>
        ))}
      </div>

      <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Notes &amp; Events</p>
      <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>{notes}</p>
    </section>
  );
}
