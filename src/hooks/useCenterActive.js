import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to detect when an element is near the vertical center of the screen on mobile/touch devices.
 * Enables automatic "hover" / highlighted card state as the user scrolls past.
 */
export function useCenterActive() {
  const ref = useRef(null);
  const [isCenter, setIsCenter] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    // Activate on mobile / touch or screens <= 860px
    const checkTouch = () =>
      window.matchMedia("(hover: none), (max-width: 860px)").matches;

    if (!checkTouch()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCenter(entry.isIntersecting);
      },
      {
        rootMargin: "-44% 0px -44% 0px", // Tight 12% vertical center band so only one card lights up at a time
        threshold: 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isCenter };
}
