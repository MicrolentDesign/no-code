import "./FeatureGrid.css";
import FeatureCard from "./FeatureCard";

/**
 * Uniform N-card feature grid.
 * Auto-detects column count to avoid orphaned cards:
 *   4 items → 2 cols,  everything else → 3 cols.
 * Pass an explicit `columns` prop to override.
 */
export default function FeatureGrid({ items, columns }) {
  const cols = columns || (items.length === 4 ? 2 : 3);
  return (
    <div className="feat-grid" style={{ "--grid-cols": cols }}>
      {items.map((it, i) => (
        <FeatureCard key={it.title} {...it} delay={i * 60} />
      ))}
    </div>
  );
}

