import "./Steps.css";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { steps } from "../../data/content";
import { useCenterActive } from "../../hooks/useCenterActive";

function StepCard({ s, i }) {
  const { ref, isCenter } = useCenterActive();
  return (
    <Reveal
      ref={ref}
      as="article"
      className={`stepc ${isCenter ? "is-active-center" : ""}`}
      delay={i * 90}
    >
      <span className="stepc__ic">
        <Icon name={s.icon} size={20} />
      </span>
      <div className="stepc__body">
        <div className="stepc__top">
          <h3 className="stepc__title">{s.title}</h3>
          <span className="stepc__num">{String(i + 1).padStart(2, "0")}</span>
        </div>
        <p className="stepc__desc">{s.desc}</p>
      </div>
    </Reveal>
  );
}

export default function Steps() {
  return (
    <section id="how" className="section steps">
      <div className="container steps__grid">
        <Reveal className="steps__left">
          <div className="steps__stars" aria-hidden="true" />
          <div className="steps__left-inner">
            <h2 className="steps__title">
              {steps.titleLead} <span className="tmuted">{steps.titleMuted}</span>
            </h2>
            <p className="steps__sub">{steps.subtitle}</p>
            <Button variant="brand" href="/pricing" chip={<Icon name="ArrowRight" size={16} />}>
              {steps.cta}
            </Button>
          </div>
        </Reveal>

        <div className="steps__list">
          {steps.items.map((s, i) => (
            <StepCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

