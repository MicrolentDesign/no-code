import { useEffect, useState } from "react";
import "./StickyFeatureNav.css";
import { scrollToId } from "../../lib/lenis";

/**
 * Sticky, scroll-spied section nav. items: [{ id, label }]. Desktop renders
 * a centered horizontal pill bar; mobile becomes horizontally scrollable chips.
 */
export default function StickyFeatureNav({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items.map((it) => document.getElementById(it.id)).filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="sfn" aria-label="Section navigation">
      <div className="sfn__inner">
        {items.map((it) => (
          <button
            key={it.id}
            className={`sfn__chip ${active === it.id ? "is-active" : ""}`}
            onClick={() => scrollToId(it.id)}
          >
            {it.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
