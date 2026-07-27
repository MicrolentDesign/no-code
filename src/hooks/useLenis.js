import { useEffect } from "react";
import { initLenis, destroyLenis } from "../lib/lenis";

/**
 * Lenis smooths native window scrolling (no transformed wrapper), so
 * position: sticky and IntersectionObserver-based reveals keep working
 * untouched. Skipped entirely under prefers-reduced-motion.
 */
export default function useLenis() {
  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);
}
