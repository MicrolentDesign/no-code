import { useState } from "react";
import "./Testimonials.css";
import Icon from "../ui/Icon";
import SectionIntro from "../ui/SectionIntro";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../data/content";

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const items = testimonials.items;
  const count = items.length;
  const go = (d) => setActive((a) => (a + d + count) % count);
  const t = items[active];

  return (
    <section className="tst section">
      <div className="container">
        <SectionIntro
          eyebrow={testimonials.eyebrow}
          title={
            <>
              {testimonials.titleLead} <span className="tmuted">{testimonials.titleAccent}</span>
            </>
          }
        />

        <Reveal className="tst__body">
          <span className="tst__quote" aria-hidden="true">
            <Icon name="Quote" size={54} />
          </span>

          <div className="tst__avatars">
            {items.map((it, i) => (
              <button
                key={it.name}
                className={`tst__av ${i === active ? "is-active" : ""}`}
                style={{ "--i": i - active }}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${it.name}`}
              >
                {initials(it.name)}
              </button>
            ))}
          </div>

          <blockquote className="tst__text" key={active}>
            “{t.quote}”
          </blockquote>

          <div className="tst__foot">
            <div className="tst__author">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
            <div className="tst__stars" aria-label={`${t.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={17}
                  className={i < t.rating ? "on" : "off"}
                />
              ))}
            </div>
          </div>

          <div className="tst__nav">
            <button onClick={() => go(-1)} aria-label="Previous">
              <Icon name="ArrowUp" size={18} />
            </button>
            <button onClick={() => go(1)} aria-label="Next">
              <Icon name="ArrowDown" size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
