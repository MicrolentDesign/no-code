import "./FeatureCard.css";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { useCenterActive } from "../../hooks/useCenterActive";

/**
 * Plain (non-bento) feature card: white by default, crossfades to the blue
 * gradient + dot pattern on hover/focus or when centered on mobile scroll.
 */
export default function FeatureCard({ icon, title, desc, delay = 0 }) {
  const { ref, isCenter } = useCenterActive();

  return (
    <Reveal
      ref={ref}
      as="article"
      className={`feat-card ${isCenter ? "is-active-center" : ""}`}
      delay={delay}
      tabIndex={0}
    >
      <span className="feat-card__bg" aria-hidden="true" />
      <span className="feat-card__icon">
        <Icon name={icon} size={22} />
      </span>
      <h3 className="feat-card__title">{title}</h3>
      <p className="feat-card__desc">{desc}</p>
    </Reveal>
  );
}

