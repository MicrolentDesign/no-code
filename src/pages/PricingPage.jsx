import PlatformHero from "../components/Platform/PlatformHero";
import Pricing from "../components/Pricing/Pricing";
import SectionIntro from "../components/ui/SectionIntro";
import ComparisonTable from "../components/ui/ComparisonTable";
import FAQ from "../components/FAQ/FAQ";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import "../components/Platform/PlatformHero.css";
import "./PricingPage.css";
import { pricingPage } from "../data/content";

export default function PricingPage() {
  return (
    <>
      <PlatformHero data={pricingPage.hero} />

      {/* Pricing Cards (reuse homepage component) */}
      <Pricing />

      {/* Feature Comparison */}
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Compare Plans"
            title={<>Feature <span className="tmuted">Comparison</span></>}
            subtitle="See exactly what's included in each plan."
          />
          <div className="pricing-page__table" style={{ "--cols": pricingPage.comparison.plans.length }}>
            <ComparisonTable
              plans={pricingPage.comparison.plans}
              rows={pricingPage.comparison.rows}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ data={pricingPage.faq} />

      {/* CTA */}
      <FinalCTA data={pricingPage.cta} />
    </>
  );
}
