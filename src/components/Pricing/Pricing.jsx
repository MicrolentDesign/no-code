import { useState } from "react";
import "./Pricing.css";
import Icon from "../ui/Icon";
import SectionIntro from "../ui/SectionIntro";
import Reveal from "../ui/Reveal";
import { pricing } from "../../data/content";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <SectionIntro
          eyebrow={pricing.eyebrow}
          title={
            <>
              {pricing.titleLead} <span className="tmuted">{pricing.titleAccent}</span>
            </>
          }
          subtitle={pricing.subtitle}
        />

        <Reveal className="pricing__toggle">
          <span className={!yearly ? "is-on" : ""}>{pricing.monthlyLabel}</span>
          <button
            className={`pricing__switch ${yearly ? "is-year" : ""}`}
            onClick={() => setYearly((v) => !v)}
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle yearly pricing"
          >
            <span className="pricing__knob" />
          </button>
          <span className={yearly ? "is-on" : ""}>
            {pricing.yearlyLabel}
            <em className="pricing__save">{pricing.yearlyNote}</em>
          </span>
        </Reveal>

        <div className="pricing__grid">
          {pricing.plans.map((p, i) => {
            const price = yearly ? p.price.yearly : p.price.monthly;
            const period = price === 0 ? "forever" : yearly ? "per month, billed yearly" : "per month";
            return (
              <Reveal
                as="article"
                key={p.name}
                delay={i * 90}
                className={`plan ${p.featured ? "plan--featured" : ""}`}
              >
                <div className="plan__top">
                  <h3 className="plan__name">{p.name}</h3>
                  <p className="plan__blurb">{p.blurb}</p>
                  <div className="plan__price">
                    <span className="plan__amt">${price}</span>
                    <span className="plan__per">/{period}</span>
                  </div>
                </div>
                <a href="#" className={`plan__cta ${p.featured ? "plan__cta--solid" : ""}`}>
                  {p.cta}
                  <Icon name="ArrowRight" size={16} />
                </a>
                <ul className="plan__feats">
                  {p.features.map((f) => (
                    <li key={f}>
                      <span className="plan__check">
                        <Icon name="Check" size={13} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
