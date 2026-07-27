import PlatformHero from "../components/Platform/PlatformHero";
import LogoMarquee from "../components/LogoMarquee/LogoMarquee";
import SectionIntro from "../components/ui/SectionIntro";
import SplitSection from "../components/ui/SplitSection";
import FeatureGrid from "../components/ui/FeatureGrid";
import IconList from "../components/ui/IconList";
import MetricChips from "../components/ui/MetricChips";
import StatRow from "../components/ui/StatRow";
import StickyFeatureNav from "../components/StickyFeatureNav/StickyFeatureNav";
import WorkflowMini from "../components/WorkflowMini/WorkflowMini";
import {
  OverviewDiagram,
  StrategyFlowDiagram,
  BacktestDashboard,
  PaperTradingDashboard,
  LiveTradingDashboard,
  BrokerDiagram,
  ScannerPreview,
  AnalyticsDashboard,
} from "../components/Platform/mockups";
import "../components/Platform/mockups.css";
import "../components/Platform/PlatformHero.css";
import "./Platform.css";
import { platform } from "../data/content";

export default function Platform() {
  const { hero, overview, stickyNav, strategyBuilder, backtesting, paperTrading, liveTrading, broker, scanner, reports } =
    platform;

  return (
    <>
      <PlatformHero data={hero} />

      <LogoMarquee />

      {/* Platform Overview */}
      <section className="section">
        <div className="container">
          <SplitSection
            eyebrow={overview.eyebrow}
            title={
              <>
                {overview.titleLead} <span className="tmuted">{overview.titleMuted}</span>
              </>
            }
            desc={overview.desc}
            media={<OverviewDiagram />}
          />
          <div style={{ marginTop: "clamp(2.4rem, 4vw, 3.4rem)" }}>
            <FeatureGrid items={overview.cards} />
          </div>
        </div>
      </section>

      <div className="container">
        <StickyFeatureNav items={stickyNav} />
      </div>

      {/* Strategy Builder */}
      <section id="strategy-builder" className="section">
        <div className="container">
          <SplitSection
            eyebrow={strategyBuilder.eyebrow}
            title={
              <>
                {strategyBuilder.titleLead} <span className="tmuted">{strategyBuilder.titleMuted}</span>
              </>
            }
            desc={strategyBuilder.desc}
            media={<StrategyFlowDiagram />}
          >
            <IconList items={strategyBuilder.features} />
          </SplitSection>

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <SectionIntro align="center" title={strategyBuilder.gridTitle} />
            <div style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }}>
              <FeatureGrid items={strategyBuilder.grid} />
            </div>
          </div>

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <WorkflowMini title={strategyBuilder.workflow.title} steps={strategyBuilder.workflow.steps} />
          </div>
        </div>
      </section>

      {/* Backtesting */}
      <section id="backtesting" className="section">
        <div className="container">
          <SplitSection
            eyebrow={backtesting.eyebrow}
            title={
              <>
                {backtesting.titleLead} <span className="tmuted">{backtesting.titleMuted}</span>
              </>
            }
            desc={backtesting.desc}
            media={<BacktestDashboard />}
            imageSide="left"
          >
            <MetricChips items={backtesting.metrics} />
          </SplitSection>

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <FeatureGrid items={backtesting.grid} />
          </div>

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <WorkflowMini title={backtesting.workflow.title} steps={backtesting.workflow.steps} />
          </div>
        </div>
      </section>

      {/* Paper Trading */}
      <section id="paper-trading" className="section ptf-tint">
        <div className="container">
          <SplitSection
            eyebrow={paperTrading.eyebrow}
            title={
              <>
                {paperTrading.titleLead} <span className="tmuted">{paperTrading.titleMuted}</span>
              </>
            }
            desc={paperTrading.desc}
            media={<PaperTradingDashboard />}
            imageSide="left"
          />

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <FeatureGrid items={paperTrading.grid} />
          </div>

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <WorkflowMini title={paperTrading.workflow.title} steps={paperTrading.workflow.steps} />
          </div>
        </div>
      </section>

      {/* Live Trading */}
      <section id="live-trading" className="section">
        <div className="container">
          <SplitSection
            eyebrow={liveTrading.eyebrow}
            title={
              <>
                {liveTrading.titleLead} <span className="tmuted">{liveTrading.titleMuted}</span>
              </>
            }
            desc={liveTrading.desc}
            media={<LiveTradingDashboard />}
          />

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <FeatureGrid items={liveTrading.grid} />
          </div>

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <StatRow items={liveTrading.stats} />
          </div>
        </div>
      </section>

      {/* Broker Integrations — centered layout, distinct from the split rhythm above */}
      <section id="broker" className="section">
        <div className="container">
          <SectionIntro
            align="center"
            eyebrow={broker.eyebrow}
            title={
              <>
                {broker.titleLead} <span className="tmuted">{broker.titleMuted}</span>
              </>
            }
            subtitle={broker.desc}
          />

          <div
            style={{
              marginTop: "clamp(2.4rem, 4vw, 3.4rem)",
              maxWidth: 720,
              marginInline: "auto",
            }}
          >
            <BrokerDiagram />
          </div>

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <FeatureGrid items={broker.grid} />
          </div>
        </div>
      </section>

      {/* Market Scanner */}
      <section id="scanner" className="section">
        <div className="container">
          <SplitSection
            eyebrow={scanner.eyebrow}
            title={
              <>
                {scanner.titleLead} <span className="tmuted">{scanner.titleMuted}</span>
              </>
            }
            desc={scanner.desc}
            media={<ScannerPreview />}
          />

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <FeatureGrid items={scanner.grid} />
          </div>

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <WorkflowMini title={scanner.workflow.title} steps={scanner.workflow.steps} />
          </div>
        </div>
      </section>

      {/* Analytics & Reports */}
      <section id="reports" className="section ptf-tint--light-blue">
        <div className="container">
          <SplitSection
            eyebrow={reports.eyebrow}
            title={
              <>
                {reports.titleLead} <span className="tmuted">{reports.titleMuted}</span>
              </>
            }
            desc={reports.desc}
            media={<AnalyticsDashboard />}
            imageSide="left"
          />

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <FeatureGrid items={reports.grid} />
          </div>

          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <StatRow items={reports.stats} />
          </div>
        </div>
      </section>
    </>
  );
}
