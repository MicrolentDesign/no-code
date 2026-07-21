import "./Integrations.css";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { integrations } from "../../data/content";

export default function Integrations() {
  return (
    <section className="integ section">
      <div className="container">
        <Reveal className="integ__head">
          <h2 className="integ__title">
            {integrations.titleLead} <span className="tmuted">{integrations.titleMuted}</span>
          </h2>
          <p className="integ__sub">{integrations.subtitle}</p>
          <Button variant="brand" href="#" chip={<Icon name="ArrowRight" size={16} />}>
            {integrations.cta}
          </Button>
        </Reveal>

        <Reveal className="integ__orbit" delay={120}>
          {/* connector lines */}
          <svg className="integ__lines" viewBox="0 0 1000 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            {[70, 160, 230, 300, 390].map((y, i) => (
              <path
                key={`l${i}`}
                d={`M120 ${y} C 300 ${y}, 380 230, 500 230`}
                fill="none"
                stroke="url(#ig)"
                strokeWidth="1.5"
              />
            ))}
            {[70, 160, 230, 300, 390].map((y, i) => (
              <path
                key={`r${i}`}
                d={`M880 ${y} C 700 ${y}, 620 230, 500 230`}
                fill="none"
                stroke="url(#ig)"
                strokeWidth="1.5"
              />
            ))}
            <defs>
              <linearGradient id="ig" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2E6BFF" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#2E6BFF" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          <div className="integ__col integ__col--left">
            {integrations.nodesLeft.map((n, i) => (
              <span className="integ__node" key={n + i} style={{ animationDelay: `${i * 0.4}s` }}>
                <Icon name={n} size={22} />
              </span>
            ))}
          </div>

          <div className="integ__center">
            <span className="integ__center-glow" />
            <span className="integ__center-mark">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path
                  d="M8.5 21 13 11.5l3 5.6L19.3 10 24 21"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <div className="integ__col integ__col--right">
            {integrations.nodesRight.map((n, i) => (
              <span className="integ__node" key={n + i} style={{ animationDelay: `${i * 0.4 + 0.2}s` }}>
                <Icon name={n} size={22} />
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
