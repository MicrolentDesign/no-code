import Button from "../ui/Button";
import Icon from "../ui/Icon";

/**
 * Compact, left-aligned page-banner hero for interior pages (Platform, and
 * future pages) — deliberately distinct from the homepage's big centered
 * marketing hero with floating widgets, while keeping the same brand
 * language (eyebrow pill, two-tone heading, button styles).
 */
export default function PlatformHero({ data }) {
  return (
    <section className="phero">
      <div className="phero__bg" aria-hidden="true">
        <div className="phero__waves">
          <span className="phero__wave" style={{ width: 920, height: 920 }} />
          <span className="phero__wave" style={{ width: 700, height: 700 }} />
          <span className="phero__wave" style={{ width: 500, height: 500 }} />
          <span className="phero__wave" style={{ width: 320, height: 320 }} />
        </div>
      </div>

      <div className="container phero__inner">
        <span className="phero__eyebrow">
          <span className="phero__eyebrow-ic">
            <Icon name="Rocket" size={13} />
          </span>
          {data.eyebrow}
        </span>

        <h1 className="phero__title">
          {data.titleLead} <span className="tmuted">{data.titleMuted}</span>
        </h1>

        <p className="phero__sub">{data.subtitle}</p>

        <div className="phero__cta">
          <Button variant="brand" size="lg" href="/pricing" chip={<Icon name="ArrowRight" size={16} />}>
            {data.cta}
          </Button>
          <Button variant="light" size="lg" href="/contact" chip={<Icon name="Play" size={14} />}>
            {data.demo}
          </Button>
        </div>
      </div>
    </section>
  );
}
