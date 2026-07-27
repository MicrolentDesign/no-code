import PlatformHero from "../components/Platform/PlatformHero";
import SectionIntro from "../components/ui/SectionIntro";
import SplitSection from "../components/ui/SplitSection";
import FeatureGrid from "../components/ui/FeatureGrid";
import IconList from "../components/ui/IconList";
import WorkflowMini from "../components/WorkflowMini/WorkflowMini";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import "../components/Platform/PlatformHero.css";
import { solutions } from "../data/content";

/* Inline SVG dashboard mockup — abstract, avoids stock photography */
function DashboardMockup() {
  return (
    <svg viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
      <rect width="420" height="300" rx="16" fill="#f0f4ff" />
      {/* Top bar */}
      <rect x="16" y="16" width="388" height="36" rx="8" fill="#fff" stroke="#e0e6f0" strokeWidth="1" />
      <circle cx="36" cy="34" r="6" fill="#2e6bff" />
      <rect x="52" y="28" width="60" height="12" rx="4" fill="#dbe5ff" />
      <rect x="122" y="28" width="50" height="12" rx="4" fill="#eef3ff" />
      <rect x="182" y="28" width="50" height="12" rx="4" fill="#eef3ff" />
      {/* Sidebar */}
      <rect x="16" y="64" width="100" height="220" rx="8" fill="#fff" stroke="#e0e6f0" strokeWidth="1" />
      <rect x="28" y="80" width="76" height="10" rx="3" fill="#2e6bff" opacity="0.2" />
      <rect x="28" y="100" width="60" height="8" rx="3" fill="#dbe5ff" />
      <rect x="28" y="118" width="68" height="8" rx="3" fill="#dbe5ff" />
      <rect x="28" y="136" width="52" height="8" rx="3" fill="#dbe5ff" />
      <rect x="28" y="154" width="64" height="8" rx="3" fill="#dbe5ff" />
      {/* Strategy Card */}
      <rect x="128" y="64" width="132" height="105" rx="10" fill="#fff" stroke="#e0e6f0" strokeWidth="1" />
      <rect x="140" y="78" width="80" height="10" rx="3" fill="#0b1230" opacity="0.12" />
      <rect x="140" y="96" width="108" height="8" rx="3" fill="#dbe5ff" />
      <rect x="140" y="112" width="90" height="8" rx="3" fill="#dbe5ff" />
      <rect x="140" y="138" width="70" height="22" rx="11" fill="#2e6bff" />
      {/* Analytics Card */}
      <rect x="272" y="64" width="132" height="105" rx="10" fill="#fff" stroke="#e0e6f0" strokeWidth="1" />
      <rect x="284" y="78" width="60" height="10" rx="3" fill="#0b1230" opacity="0.12" />
      <polyline points="284,150 300,135 316,140 332,120 348,128 364,110 380,115" stroke="#2e6bff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M284 150 L300 135 L316 140 L332 120 L348 128 L364 110 L380 115 L380 150 L284 150Z" fill="#2e6bff" opacity="0.08" />
      {/* Paper Trading Card */}
      <rect x="128" y="181" width="132" height="103" rx="10" fill="#fff" stroke="#e0e6f0" strokeWidth="1" />
      <rect x="140" y="195" width="70" height="10" rx="3" fill="#0b1230" opacity="0.12" />
      <circle cx="160" cy="245" r="22" stroke="#1fbd6b" strokeWidth="3" fill="none" />
      <text x="152" y="250" fontSize="11" fill="#1fbd6b" fontWeight="600">72%</text>
      {/* Reports Card */}
      <rect x="272" y="181" width="132" height="103" rx="10" fill="#fff" stroke="#e0e6f0" strokeWidth="1" />
      <rect x="284" y="195" width="50" height="10" rx="3" fill="#0b1230" opacity="0.12" />
      <rect x="284" y="220" width="16" height="45" rx="4" fill="#2e6bff" opacity="0.2" />
      <rect x="308" y="235" width="16" height="30" rx="4" fill="#2e6bff" opacity="0.35" />
      <rect x="332" y="225" width="16" height="40" rx="4" fill="#2e6bff" opacity="0.5" />
      <rect x="356" y="215" width="16" height="50" rx="4" fill="#2e6bff" />
    </svg>
  );
}

export default function Solutions() {
  return (
    <>
      <PlatformHero data={solutions.hero} />

      {/* Who Is It For */}
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Who Is It For"
            title={<>Built for Every <span className="tmuted">Type of Trader</span></>}
            subtitle="Whether you trade solo or manage a team, the platform is designed around your workflow."
          />
          <div style={{ marginTop: "clamp(2.4rem, 4vw, 3.4rem)" }}>
            <FeatureGrid items={solutions.audiences} />
          </div>
        </div>
      </section>

      {/* Why Teams Choose the Platform */}
      <section className="section" style={{ background: "linear-gradient(180deg, var(--bg) 0%, #eef3ff 55%, var(--bg) 100%)" }}>
        <div className="container">
          <SplitSection
            eyebrow={solutions.whyTeams.eyebrow}
            title={<>{solutions.whyTeams.titleLead} <span className="tmuted">{solutions.whyTeams.titleMuted}</span></>}
            desc={solutions.whyTeams.desc}
            media={<DashboardMockup />}
          >
            <IconList items={solutions.whyTeams.highlights} />
          </SplitSection>
        </div>
      </section>

      {/* Workflow */}
      <section className="section">
        <div className="container">
          <WorkflowMini title={solutions.workflow.title} steps={solutions.workflow.steps} />
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Benefits"
            title={<>Everything You Need <span className="tmuted">in One Platform</span></>}
            subtitle="The tools that make trading smarter, safer, and fully automated."
          />
          <div style={{ marginTop: "clamp(2.4rem, 4vw, 3.4rem)" }}>
            <FeatureGrid items={solutions.benefits} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCTA data={solutions.cta} />
    </>
  );
}
