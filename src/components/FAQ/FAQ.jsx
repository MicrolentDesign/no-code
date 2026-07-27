import { useState } from "react";
import "./FAQ.css";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { faq as defaultFaq } from "../../data/content";

export default function FAQ({ data = defaultFaq }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq section">
      <div className="container faq__grid">
        <Reveal className="faq__left">
          <span className="faq__eyebrow">
            <i />
            {data.eyebrow}
          </span>
          <h2 className="faq__title">
            {data.titleLead} <span className="tmuted">{data.titleAccent}</span>
          </h2>
          <p className="faq__sub">{data.subtitle || "Here's what most new traders want to know before getting started."}</p>
        </Reveal>

        <div className="faq__list">
          {data.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                as="div"
                key={it.q}
                delay={i * 60}
                className={`faq__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{it.q}</span>
                  <span className="faq__toggle">
                    <Icon name={isOpen ? "Minus" : "Plus"} size={18} />
                  </span>
                </button>
                <div className="faq__a" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="faq__a-inner">
                    <p>{it.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

