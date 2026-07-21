import "./LogoMarquee.css";
import { logos } from "../../data/content";

export default function LogoMarquee() {
  const row = [...logos.items, ...logos.items];
  return (
    <section className="marquee-sec">
      <div className="container">
        <p className="marquee-title">
          {logos.title} <span className="accent">{logos.highlight}</span>{" "}
          {logos.titleAfter}
        </p>
      </div>
      <div className="marquee" role="presentation">
        <div className="marquee__track">
          {row.map((name, i) => (
            <span className="marquee__item" key={i}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
