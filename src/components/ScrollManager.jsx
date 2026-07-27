import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { scrollToId, scrollToTop } from "../lib/lenis";

/**
 * Runs on every route/hash change: scrolls to the hash target if present
 * (used by cross-page anchor links like "/#features" or "/platform#backtesting"),
 * otherwise resets to the top of the new page. Skips the top-reset on the
 * very first mount so initial page load never triggers a visible scroll.
 */
export default function ScrollManager() {
  const location = useLocation();
  const firstRun = useRef(true);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(id)));
    } else if (!firstRun.current) {
      scrollToTop();
    }
    firstRun.current = false;
  }, [location.pathname, location.hash]);

  return null;
}
