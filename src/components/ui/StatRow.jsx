import "./StatRow.css";
import Reveal from "./Reveal";

export default function StatRow({ items }) {
  return (
    <div className="stat-row">
      {items.map((it, i) => (
        <Reveal as="div" className="stat-card" delay={i * 70} key={it.label}>
          <div className="stat-card__value">{it.value}</div>
          <div className="stat-card__label">{it.label}</div>
        </Reveal>
      ))}
    </div>
  );
}
