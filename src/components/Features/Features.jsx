import "./Features.css";
import SectionIntro from "../ui/SectionIntro";
import Icon from "../ui/Icon";
import { features } from "../../data/content";

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
            <article
              key={f.title}
              className={`bcard ${f.large ? "bcard--lg" : ""} ${
                f.featured ? "bcard--featured" : ""
              }`}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
