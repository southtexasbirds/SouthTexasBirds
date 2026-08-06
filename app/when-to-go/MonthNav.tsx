import Link from "next/link";
import { MONTHS } from "./data";

/** Prev/Next nav between written month guides — same pattern as BirdNav's prev/next for species. */
export default function MonthNav({ slug }: { slug: string }) {
  const guides = MONTHS.filter((m) => m.hasGuide).sort((a, b) => a.order - b.order);
  const idx = guides.findIndex((m) => m.slug === slug);
  if (idx < 0) return null;

  const prev = idx > 0 ? guides[idx - 1] : null;
  const next = idx < guides.length - 1 ? guides[idx + 1] : null;

  return (
    <nav className="flex justify-between items-start gap-4 pt-6" style={{ borderTop: "1px solid rgba(14,107,107,0.15)" }} aria-label="Month navigation">
      {prev ? (
        <Link href={`/when-to-go/${prev.slug}`} className="flex flex-col max-w-[45%] transition-opacity hover:opacity-70">
          <span className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "#C77F4A" }}>← Previous</span>
          <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>{prev.name}</span>
        </Link>
      ) : <span />}
      <Link href="/when-to-go" className="text-xs font-semibold tracking-widest uppercase self-center transition-opacity hover:opacity-70" style={{ color: "#0E6B6B" }}>
        All Months
      </Link>
      {next ? (
        <Link href={`/when-to-go/${next.slug}`} className="flex flex-col items-end max-w-[45%] text-right transition-opacity hover:opacity-70">
          <span className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "#C77F4A" }}>Next →</span>
          <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>{next.name}</span>
        </Link>
      ) : <span />}
    </nav>
  );
}
