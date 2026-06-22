"use client";

interface Props {
  /** Set to false to disable entirely (e.g. behind a feature flag). Default: true. */
  enabled?: boolean;
  /** Override the default 0.04 opacity. Lower = subtler. */
  opacity?: number;
}

/**
 * Fixed-position SVG noise overlay that adds a subtle analogue film grain
 * texture site-wide. Rendered via CSS feTurbulence — zero image requests,
 * zero runtime JS after mount. pointer-events: none so it never blocks clicks.
 */
export default function FilmGrain({ enabled = true, opacity }: Props) {
  if (!enabled) return null;
  return (
    <div
      className="film-grain"
      style={opacity !== undefined ? { opacity } : undefined}
      aria-hidden
    />
  );
}
