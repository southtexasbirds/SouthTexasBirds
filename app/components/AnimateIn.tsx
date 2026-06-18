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

    const rect = el.getBoundingClientRect();

    // If the element is already in the viewport when this runs, never set
    // opacity:0 — the content is already readable and must stay that way.
    // Animation is skipped for on-screen elements; it's a scroll enhancement
    // only, not a visibility mechanism.
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    // Element is below the fold — safe to hide and reveal on scroll.
    el.style.opacity = "0";
    el.style.transform =
      direction === "left" ? "translateX(-1.75rem)" : "translateY(1.5rem)";

    const reveal = () => {
      el.style.transition = `opacity 0.65s ease-out, transform 0.65s ease-out`;
      if (delay) el.style.transitionDelay = `${delay}ms`;
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect();
        clearTimeout(fallbackId);
      },
      { threshold: 0, rootMargin: "0px 0px -30px 0px" }
    );

    // Hard failsafe: if the IO never fires (e.g. the element is never scrolled
    // past, or IO is suppressed by a browser extension or reduced-motion
    // override that only partially applies), reveal after 2.5s so content is
    // never permanently hidden.
    const fallbackId = window.setTimeout(() => {
      reveal();
      observer.disconnect();
    }, 2500);

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(fallbackId);
    };
  }, [direction, delay]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
