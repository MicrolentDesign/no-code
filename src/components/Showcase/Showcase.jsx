import "./Showcase.css";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { showcase } from "../../data/content";
import { DashboardMock, AllocationMock, BacktestMock } from "./mockups";

const MOCKS = {
  dashboard: DashboardMock,
  allocation: AllocationMock,
  backtest: BacktestMock,
};

export default function Showcase() {
  return (
    <section className="section showcase">
      <div className="container">
        <Reveal className="showcase__head">
          <h2 className="showcase__title">
            {showcase.titleLead} <span className="tmuted">{showcase.titleMuted}</span>
          </h2>
          <Button variant="brand" href="#" chip={<Icon name="ArrowRight" size={16} />}>
            {showcase.cta}
          </Button>
        </Reveal>

        {/* sticky "component stack": each card pins and the next piles on top */}
        <div className="showcase__stack">
          {showcase.items.map((it, i) => {
            const Mock = MOCKS[it.mockup];
            return (
              <article
                className={`srow ${i % 2 ? "srow--rev" : ""}`}
                key={it.title}
                style={{ "--i": i, zIndex: i + 1 }}
              >
                <div className="srow__text">
                  <span className="srow__ic">
                    <Icon name={it.icon} size={22} />
                  </span>
                  <h3 className="srow__title">{it.title}</h3>
                  <p className="srow__desc">{it.desc}</p>
                  <div className="srow__tags">
                    {it.tags.map((t) => (
                      <span key={t} className="srow__tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="srow__mock">
                  <Mock />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
