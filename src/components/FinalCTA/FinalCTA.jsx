import "./FinalCTA.css";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { finalCta as defaultData } from "../../data/content";

export default function FinalCTA({ data = defaultData }) {
  return (
    <section className="fcta section">
      <div className="container">
        <Reveal className="fcta__panel">
          <span className="fcta__wave fcta__wave--1" aria-hidden="true" />
          <span className="fcta__wave fcta__wave--2" aria-hidden="true" />

          <div className="fcta__avatars" aria-hidden="true">
            {(data.avatars || defaultData.avatars).map((src, i) => (
              <span className="fcta__av" key={i}>
                <img src={src} alt="Quantly user avatar" loading="lazy" />
              </span>
            ))}
          </div>

          <h2 className="fcta__title">
            {data.titleLead} <span className="tmuted">{data.titleMuted}</span>
          </h2>
          <p className="fcta__sub">{data.subtitle}</p>

          <div className="fcta__buttons">
            <Button variant="brand" size="lg" href="/pricing" chip={<Icon name="ArrowRight" size={16} />}>
              {data.cta}
            </Button>
            {data.ctaSecondary && (
              <Button variant="light" size="lg" href="/contact">
                {data.ctaSecondary}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

