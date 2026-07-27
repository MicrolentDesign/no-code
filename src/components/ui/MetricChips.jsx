import "./MetricChips.css";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function MetricChips({ items }) {
  return (
    <div className="metric-chips">
      {items.map((it, i) => (
        <Reveal as="div" className="metric-chip" delay={i * 60} key={it.label}>
          <span className="metric-chip__ic">
            <Icon name={it.icon} size={15} />
          </span>
          {it.label}
        </Reveal>
      ))}
    </div>
  );
}
