import "./Hero.css";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { hero as defaultHero } from "../../data/content";

/**
 * data: content object with {eyebrow, titleLead, titleMuted, subtitle, cta, demo}
 * widgets: optional node replacing the default flanking widgets (used by the
 *   Platform page's 4-panel illustration); defaults to the homepage pair.
 * sectionId: id for the <section> (homepage relies on "home" for its nav anchor).
 */
export default function Hero({ data = defaultHero, widgets, sectionId = "home" }) {
  return (
    <section id={sectionId} className="hero">
      {/* light aurora background + optional looping video
          (drop a file at /public/assets/hero-bg.mp4 to enable it) */}
      <div className="hero__bg" aria-hidden="true">
        <video className="hero__video" autoPlay muted loop playsInline poster="">
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        <span className="hero__rays" />
        <span className="hero__glow" />
      </div>

      <div className="container hero__inner">
        <span className="hero__eyebrow">
          <span className="hero__eyebrow-ic">
            <Icon name="Rocket" size={13} />
          </span>
          {data.eyebrow}
        </span>

        <h1 className="hero__title">
          {data.titleLead}
          <br />
          <span className="tmuted">{data.titleMuted}</span>
        </h1>

        <p className="hero__sub">{data.subtitle}</p>

        <div className="hero__cta">
          <Button variant="brand" size="lg" href="#" chip={<Icon name="ArrowRight" size={16} />}>
            {data.cta}
          </Button>
          <Button variant="light" size="lg" href="#" chip={<Icon name="Play" size={14} />}>
            {data.demo}
          </Button>
        </div>
      </div>

      {/* flanking dashboard widgets (Ternic composition) */}
      {widgets ?? (
        <>
          <StrategyWidget />
          <PulseWidget />
        </>
      )}
    </section>
  );
}

/* ---- left widget: strategy deploy card ---- */
function StrategyWidget() {
  return (
    <div className="hwidget hwidget--left" aria-hidden="true">
      <div className="hwidget__head">
        <span className="hwidget__label">Strategy</span>
        <span className="hwidget__pill">
          <i /> Ready to deploy
        </span>
      </div>
      <div className="hwidget__strat">
        <span className="hwidget__strat-ic">
          <Icon name="Blocks" size={18} />
        </span>
        <div>
          <div className="hwidget__strat-name">Momentum Breakout</div>
          <div className="hwidget__strat-sub">BTC / USDT · 1H</div>
        </div>
      </div>
      <div className="hwidget__field">
        <span>Allocated capital</span>
        <strong>$5,000.00</strong>
      </div>
      <div className="hwidget__field">
        <span>Max drawdown</span>
        <strong>8%</strong>
      </div>
      <div className="hwidget__deploy">
        <Icon name="Rocket" size={15} /> Deploy strategy
      </div>
    </div>
  );
}

/* ---- right widget: live performance card ---- */
function PulseWidget() {
  return (
    <div className="hwidget hwidget--right" aria-hidden="true">
      <div className="hwidget__head">
        <div>
          <span className="hwidget__label">Active strategies</span>
          <div className="hwidget__big">6,345</div>
        </div>
        <span className="hwidget__chip">
          <Icon name="TrendingUp" size={13} /> 1.3%
        </span>
      </div>
      <svg className="hwidget__chart" viewBox="0 0 260 110" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E6BFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2E6BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 88 L30 80 L60 84 L90 60 L120 68 L150 44 L180 52 L210 26 L240 34 L260 22 L260 110 L0 110 Z"
          fill="url(#hf)"
        />
        <path
          d="M0 88 L30 80 L60 84 L90 60 L120 68 L150 44 L180 52 L210 26 L240 34 L260 22"
          fill="none"
          stroke="#2E6BFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="hwidget__days">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>
    </div>
  );
}
