import "./FinalCTA.css";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { finalCta } from "../../data/content";

const AV = ["A", "M", "J", "K", "L"];

export default function FinalCTA() {
  return (
    <section className="fcta section">
      <div className="container">
        <Reveal className="fcta__panel">
          <span className="fcta__wave fcta__wave--1" aria-hidden="true" />
          <span className="fcta__wave fcta__wave--2" aria-hidden="true" />

          <div className="fcta__avatars" aria-hidden="true">
            {AV.map((a, i) => (
              <span className="fcta__av" key={i} style={{ "--i": i - 2 }}>
                {a}
              </span>
            ))}
          </div>

          <h2 className="fcta__title">
            {finalCta.titleLead} <span className="tmuted">{finalCta.titleMuted}</span>
          </h2>
          <p className="fcta__sub">{finalCta.subtitle}</p>
          <Button variant="brand" size="lg" href="#" chip={<Icon name="ArrowRight" size={16} />}>
            {finalCta.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
