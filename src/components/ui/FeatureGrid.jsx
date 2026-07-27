import "./FeatureGrid.css";
import FeatureCard from "./FeatureCard";

/** Uniform N-card feature grid (3 cols desktop / 2 tablet / 1 mobile). */
export default function FeatureGrid({ items }) {
  return (
    <div className="feat-grid">
      {items.map((it, i) => (
        <FeatureCard key={it.title} {...it} delay={i * 60} />
      ))}
    </div>
  );
}
