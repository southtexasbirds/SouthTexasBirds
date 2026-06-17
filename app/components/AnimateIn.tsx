"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: "up" | "left";
}

export default function AnimateIn({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Set the initial hidden state via inline styles so it takes effect
    // regardless of CSS class loading order or specificity.
    el.style.opacity = "0";
    el.style.transform =
      direction === "left" ? "translateX(-1.75rem)" : "translateY(1.5rem)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // Apply the transition and animate to visible
        el.style.transition = `opacity 0.65s ease-out, transform 0.65s ease-out`;
        if (delay) el.style.transitionDelay = `${delay}ms`;
        el.style.opacity = "1";
        el.style.transform = "none";
        observer.disconnect();
      },
      // threshold:0 fires as soon as any pixel enters the viewport;
      // the negative bottom margin avoids triggering at the very edge.
      { threshold: 0, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
