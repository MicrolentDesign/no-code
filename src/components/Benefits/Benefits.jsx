import "./Benefits.css";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { benefits } from "../../data/content";

export default function Benefits() {
  return (
    <section className="benefits section">
      <div className="container">
        <div className="benefits__panel">
          <div className="benefits__bg" aria-hidden="true">
            <span className="benefits__globe" />
            <span className="benefits__glow" />
          </div>

          <Reveal className="benefits__head">
            <h2 className="benefits__title">
              {benefits.titleLead} <span className="benefits__muted">{benefits.titleMuted}</span>
            </h2>
            <p className="benefits__sub">{benefits.subtitle}</p>
            <div className="benefits__cta">
              <Button variant="white" href="#" chip={<Icon name="ArrowRight" size={16} />}>
                {benefits.ctaPrimary}
              </Button>
              <Button variant="glass" href="#" chip={<Icon name="Play" size={14} />}>
                {benefits.ctaSecondary}
              </Button>
            </div>
          </Reveal>

          <Reveal className="benefits__explore" delay={120}>
            <div className="benefits__explore-h">
              {benefits.exploreLabel}
              <Icon name="ArrowDownRight" size={18} />
            </div>
            <div className="benefits__cols">
              {benefits.items.map((it) => (
                <div className="bcol" key={it.title}>
                  <h3 className="bcol__title">{it.title}</h3>
                  <p className="bcol__desc">{it.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
