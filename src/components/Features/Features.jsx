import "./Features.css";
import SectionIntro from "../ui/SectionIntro";
import Icon from "../ui/Icon";
import { features } from "../../data/content";
import { useCenterActive } from "../../hooks/useCenterActive";

function BentoCard({ f }) {
  const { ref, isCenter } = useCenterActive();
  return (
    <article
      ref={ref}
      tabIndex={0}
      className={`bcard ${f.large ? "bcard--lg" : ""} ${isCenter ? "is-active-center" : ""}`}
    >
      <span className="bcard__bg" aria-hidden="true" />
      <div className="bcard__visual">
        <span className="bcard__orb" />
        <span className="bcard__icon">
          <Icon name={f.icon} size={f.large ? 30 : 24} />
        </span>
      </div>
      <div className="bcard__body">
        <h3 className="bcard__title">{f.title}</h3>
        <p className="bcard__desc">{f.desc}</p>
      </div>
    </article>
  );
}

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <SectionIntro
          eyebrow={features.eyebrow}
          title={
            <>
              {features.titleLead} <span className="tmuted">{features.titleMuted}</span>
            </>
          }
          subtitle={features.subtitle}
        />

        <div className="bento">
          {features.items.map((f) => (
            <BentoCard key={f.title} f={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

