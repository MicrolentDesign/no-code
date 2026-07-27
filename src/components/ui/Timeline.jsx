import "./Timeline.css";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

/**
 * Vertical timeline with pulsing dots and connecting line.
 * steps: [{ icon, title, desc }]
 */
export default function Timeline({ eyebrow, title, subtitle, steps }) {
  return (
    <div className="timeline">
      <SectionIntro eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="timeline__track">
        {steps.map((s, i) => (
          <Reveal className="timeline__item" key={s.title} delay={i * 120}>
            <span className="timeline__dot">
              {s.icon && <Icon name={s.icon} size={18} />}
            </span>
            {i < steps.length - 1 && (
              <span className="timeline__line" aria-hidden="true" />
            )}
            <div className="timeline__content">
              <h4 className="timeline__title">{s.title}</h4>
              {s.desc && <p className="timeline__desc">{s.desc}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
