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

    // Already in the viewport on mount — skip animation so visible content
    // never gets a layout-shifting transform applied to it.
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    // Opacity is intentionally never changed. Content is always fully readable.
    // Only transform is used so that a stuck or missed animation leaves text
    // visible rather than invisible.
    const fromTransform =
      direction === "left" ? "translateX(-1.75rem)" : "translateY(1.5rem)";
    el.style.transform = fromTransform;

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      el.style.transition = `transform 0.65s ease-out`;
      if (delay) el.style.transitionDelay = `${delay}ms`;
      el.style.transform = "none";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect();
        clearTimeout(fallbackId);
      },
      // No negative rootMargin: elements at the bottom of the page must still
      // trigger even when they can't scroll past the viewport's lower edge.
      { threshold: 0, rootMargin: "0px" }
    );

    // Failsafe: clear the transform within 800 ms even if IO never fires.
    // A briefly-offset element is a minor visual glitch; invisible text is not.
    const fallbackId = window.setTimeout(() => {
      reveal();
      observer.disconnect();
    }, 800);

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
