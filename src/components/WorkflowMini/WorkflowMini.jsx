import "./WorkflowMini.css";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionIntro from "../ui/SectionIntro";

/** Compact N-step horizontal flow with connecting arrows. */
export default function WorkflowMini({ eyebrow, title, subtitle, steps }) {
  return (
    <div className="wf-mini">
      <SectionIntro eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="wf-mini__row">
        {steps.map((s, i) => (
          <div className="wf-mini__wrap" key={s.title}>
            <Reveal as="div" className="wf-mini__step" delay={i * 90}>
              <span className="wf-mini__num">{String(i + 1).padStart(2, "0")}</span>
              {s.icon && (
                <span className="wf-mini__ic">
                  <Icon name={s.icon} size={18} />
                </span>
              )}
              <h4 className="wf-mini__title">{s.title}</h4>
              {s.desc && <p className="wf-mini__desc">{s.desc}</p>}
            </Reveal>
            {i < steps.length - 1 && (
              <span className="wf-mini__arrow" aria-hidden="true">
                <Icon name="ArrowRight" size={18} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
