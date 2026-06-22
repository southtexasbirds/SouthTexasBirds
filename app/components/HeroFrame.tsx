import type { CSSProperties, ReactNode } from "react";

type Tint = "teal" | "orange";

interface Props {
  children: ReactNode;
  /** Adds a radial-gradient vignette around the edges of the frame. */
  vignette?: boolean;
  /** Overlays a semi-transparent colour wash using the site palette. */
  tint?: Tint;
  className?: string;
  style?: CSSProperties;
}

const TINT_COLORS: Record<Tint, string> = {
  teal:   "rgba(14, 107, 107, 0.28)",
  orange: "rgba(199, 127,  74, 0.22)",
};

/**
 * Wrapper for hero image areas. Keeps the container `relative` and stacks
 * optional vignette / colour-tint overlays above the image without touching
 * the image element itself. Composable — wrap any <Image fill> container.
 *
 * Usage:
 *   <HeroFrame vignette tint="teal" className="relative w-full rounded-2xl overflow-hidden" style={{ height: "..." }}>
 *     <Image ... fill />
 *   </HeroFrame>
 */
export default function HeroFrame({ children, vignette, tint, className = "", style }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {children}

      {tint && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: TINT_COLORS[tint], mixBlendMode: "multiply", zIndex: 1 }}
          aria-hidden
        />
      )}

      {vignette && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, transparent 38%, rgba(0,0,0,0.55) 100%)",
            zIndex: 2,
          }}
          aria-hidden
        />
      )}
    </div>
  );
}
