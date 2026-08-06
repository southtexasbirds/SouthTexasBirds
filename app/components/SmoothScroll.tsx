"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    let lenis: Lenis | undefined;
    let rafId: number;

    function start() {
      lenis = new Lenis({ duration: 1.2 });
      function raf(time: number) {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }

    function stop() {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenis = undefined;
    }

    if (!query.matches) start();

    // React live if the user flips the OS setting without reloading the page.
    function handleChange(e: MediaQueryListEvent) {
      if (e.matches) stop();
      else start();
    }
    query.addEventListener("change", handleChange);

    return () => {
      query.removeEventListener("change", handleChange);
      stop();
    };
  }, []);

  return null;
}
