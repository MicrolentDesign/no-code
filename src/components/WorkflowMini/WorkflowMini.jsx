import "./WorkflowMini.css";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionIntro from "../ui/SectionIntro";
import { useCenterActive } from "../../hooks/useCenterActive";

function WorkflowStep({ s, i }) {
  const { ref, isCenter } = useCenterActive();
  return (
    <Reveal
      ref={ref}
      as="div"
      className={`wf-mini__step ${isCenter ? "is-active-center" : ""}`}
      delay={i * 90}
    >
      {s.icon ? (
        <span className="wf-mini__ic">
          <Icon name={s.icon} size={20} />
        </span>
      ) : (
        <span className="wf-mini__num">{String(i + 1).padStart(2, "0")}</span>
      )}
      <div className="wf-mini__main">
        <div className="wf-mini__top">
          <h4 className="wf-mini__title">{s.title}</h4>
          <span className="wf-mini__badge">0{i + 1}</span>
        </div>
        {s.desc && <p className="wf-mini__desc">{s.desc}</p>}
      </div>
    </Reveal>
  );
}

/** Compact N-step horizontal flow with connecting arrows. */
export default function WorkflowMini({ eyebrow, title, subtitle, steps }) {
  return (
    <div className="wf-mini">
      <SectionIntro eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="wf-mini__row">
        {steps.map((s, i) => (
          <div className="wf-mini__wrap" key={s.title}>
            <WorkflowStep s={s} i={i} />
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
