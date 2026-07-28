import { useEffect, useRef, useState } from "react";
import "./ContentSlider.css";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { slider } from "../../data/content";

const DURATION = 6000;
const EXIT_MS = 280;

export default function ContentSlider() {
  // `active` drives the rendered slide content; `focus` drives which tab
  // is highlighted / filling. They're decoupled so a click moves the tab
  // indicator immediately while the content crossfades smoothly after it.
  const [active, setActive] = useState(0);
  const [focus, setFocus] = useState(0);
  const [paused, setPaused] = useState(false);
  const exitTimer = useRef(null);
  const autoTimer = useRef(null);
  const count = slider.slides.length;

  const goTo = (i) => {
    if (i === focus) return;
    setFocus(i);
    clearTimeout(exitTimer.current);
    exitTimer.current = setTimeout(() => setActive(i), EXIT_MS);
  };

  useEffect(() => {
    if (paused) return;
    autoTimer.current = setTimeout(() => goTo((focus + 1) % count), DURATION);
    return () => clearTimeout(autoTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus, paused, count]);

  useEffect(() => () => clearTimeout(exitTimer.current), []);

  const s = slider.slides[active];
  const isOut = focus !== active;

  return (
    <section
      className={`cslider section ${paused ? "is-paused" : ""}`}
      style={{ "--dur": `${DURATION}ms` }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <Reveal className="cslider__head">
          <h2 className="cslider__title">
            {slider.titleLead} <span className="tmuted">{slider.titleMuted}</span>
          </h2>
        </Reveal>

        <div className="cslider__tabs">
          {slider.slides.map((sl, i) => (
            <button
              key={sl.title}
              className={`cslider__tab ${i === focus ? "is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={sl.title}
            >
              <span className="cslider__tab-fill" />
            </button>
          ))}
        </div>

        <Reveal className="cslider__card">
          <div className="cslider__visual">
            <PriceMock />
          </div>
          <div className={`cslider__text ${isOut ? "is-out" : ""}`}>
            <span className="cslider__ic">
              <Icon name={s.icon} size={24} />
            </span>
            <h3 className="cslider__stitle">{s.title}</h3>
            <p className="cslider__sdesc">{s.desc}</p>
            <Button variant="brand" href="/pricing" chip={<Icon name="ArrowRight" size={16} />}>
              {s.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PriceMock() {
  return (
    <div className="pmock">
      <div className="pmock__head">
        <span className="pmock__tab is-on">Price</span>
        <span className="pmock__tab">Chart</span>
        <span className="pmock__tf">1H</span>
      </div>
      <svg className="pmock__chart" viewBox="0 0 420 200" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pmf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E6BFF" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#2E6BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 150 L30 140 L60 152 L90 120 L120 132 L150 96 L180 108 L210 70 L240 88 L270 60 L300 78 L330 44 L360 62 L390 38 L420 50 L420 200 L0 200 Z"
          fill="url(#pmf)"
        />
        <path
          d="M0 150 L30 140 L60 152 L90 120 L120 132 L150 96 L180 108 L210 70 L240 88 L270 60 L300 78 L330 44 L360 62 L390 38 L420 50"
          fill="none"
          stroke="#2E6BFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="pmock__pill pmock__pill--btc">
        <span className="pmock__coin">B</span>
        <div>
          <span className="pmock__sym">BTC</span>
          <strong>$170,892.90</strong>
        </div>
        <span className="pmock__chg up">+6.5%</span>
      </div>
      <div className="pmock__pill pmock__pill--eth">
        <span className="pmock__coin eth">E</span>
        <div>
          <span className="pmock__sym">ETH</span>
          <strong>$139,043.21</strong>
        </div>
        <span className="pmock__chg up">+2.5%</span>
      </div>
    </div>
  );
}
