import Lenis from "lenis";

/**
 * Single shared Lenis instance for the whole app (module-scoped singleton
 * rather than per-component) so any component — Navbar links, the Platform
 * page's sticky feature nav, etc. — can trigger a smooth scrollTo without
 * needing to thread the instance through props/context.
 */
let lenis = null;
let rafId = null;

export function initLenis() {
  if (lenis) return lenis;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return null;

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    anchors: { offset: -84 },
  });

  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  return lenis;
}

export function destroyLenis() {
  if (rafId) cancelAnimationFrame(rafId);
  if (lenis) lenis.destroy();
  lenis = null;
  rafId = null;
}

/** Smoothly scroll to an element by id, offset below the fixed navbar. */
export function scrollToId(id, offset = -84) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: false });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
