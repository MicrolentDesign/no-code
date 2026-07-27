import PlatformHero from "../components/Platform/PlatformHero";
import SectionIntro from "../components/ui/SectionIntro";
import SplitSection from "../components/ui/SplitSection";
import FeatureGrid from "../components/ui/FeatureGrid";
import Timeline from "../components/ui/Timeline";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import "../components/Platform/PlatformHero.css";
import { about } from "../data/content";

/* Abstract product-ecosystem illustrations — inline SVGs per the spec's
   "avoid stock photography" directive */
function MissionIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: "var(--r-lg)" }}>
      <rect width="400" height="300" rx="16" fill="#f0f4ff" />
      {/* Central circle */}
      <circle cx="200" cy="150" r="60" fill="#2e6bff" opacity="0.08" />
      <circle cx="200" cy="150" r="40" fill="#2e6bff" opacity="0.14" />
      <circle cx="200" cy="150" r="20" fill="#2e6bff" opacity="0.25" />
      {/* Orbiting nodes */}
      <circle cx="200" cy="70" r="14" fill="#fff" stroke="#2e6bff" strokeWidth="2" />
      <circle cx="200" cy="70" r="5" fill="#2e6bff" />
      <circle cx="280" cy="120" r="14" fill="#fff" stroke="#1fbd6b" strokeWidth="2" />
      <circle cx="280" cy="120" r="5" fill="#1fbd6b" />
      <circle cx="280" cy="190" r="14" fill="#fff" stroke="#2e6bff" strokeWidth="2" />
      <circle cx="280" cy="190" r="5" fill="#2e6bff" />
      <circle cx="200" cy="230" r="14" fill="#fff" stroke="#f0563a" strokeWidth="2" />
      <circle cx="200" cy="230" r="5" fill="#f0563a" />
      <circle cx="120" cy="190" r="14" fill="#fff" stroke="#2e6bff" strokeWidth="2" />
      <circle cx="120" cy="190" r="5" fill="#2e6bff" />
      <circle cx="120" cy="120" r="14" fill="#fff" stroke="#1fbd6b" strokeWidth="2" />
      <circle cx="120" cy="120" r="5" fill="#1fbd6b" />
      {/* Connection lines */}
      <line x1="200" y1="84" x2="200" y2="130" stroke="#2e6bff" strokeWidth="1.5" opacity="0.25" strokeDasharray="4 3" />
      <line x1="268" y1="126" x2="220" y2="142" stroke="#1fbd6b" strokeWidth="1.5" opacity="0.25" strokeDasharray="4 3" />
      <line x1="268" y1="184" x2="220" y2="160" stroke="#2e6bff" strokeWidth="1.5" opacity="0.25" strokeDasharray="4 3" />
      <line x1="200" y1="216" x2="200" y2="170" stroke="#f0563a" strokeWidth="1.5" opacity="0.25" strokeDasharray="4 3" />
      <line x1="132" y1="184" x2="180" y2="160" stroke="#2e6bff" strokeWidth="1.5" opacity="0.25" strokeDasharray="4 3" />
      <line x1="132" y1="126" x2="180" y2="142" stroke="#1fbd6b" strokeWidth="1.5" opacity="0.25" strokeDasharray="4 3" />
      {/* Label */}
      <rect x="168" y="140" width="64" height="20" rx="10" fill="#2e6bff" />
      <text x="182" y="154" fontSize="9" fill="#fff" fontWeight="600">Quantly</text>
    </svg>
  );
}

function VisionIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: "var(--r-lg)" }}>
      <rect width="400" height="300" rx="16" fill="#f0f4ff" />
      {/* Flow diagram: Create → Test → Execute */}
      <rect x="40" y="115" width="90" height="70" rx="12" fill="#fff" stroke="#2e6bff" strokeWidth="1.5" />
      <rect x="52" y="130" width="66" height="8" rx="3" fill="#2e6bff" opacity="0.2" />
      <rect x="52" y="146" width="50" height="6" rx="3" fill="#dbe5ff" />
      <rect x="52" y="158" width="58" height="6" rx="3" fill="#dbe5ff" />
      <text x="68" y="178" fontSize="8" fill="#2e6bff" fontWeight="600" opacity="0.6">Create</text>

      {/* Arrow 1 */}
      <path d="M135 150 L160 150" stroke="#2e6bff" strokeWidth="1.5" markerEnd="url(#arrowV)" />

      <rect x="160" y="115" width="90" height="70" rx="12" fill="#fff" stroke="#1fbd6b" strokeWidth="1.5" />
      <rect x="172" y="130" width="66" height="8" rx="3" fill="#1fbd6b" opacity="0.2" />
      <rect x="172" y="146" width="50" height="6" rx="3" fill="#e2f7ec" />
      <rect x="172" y="158" width="58" height="6" rx="3" fill="#e2f7ec" />
      <text x="193" y="178" fontSize="8" fill="#1fbd6b" fontWeight="600" opacity="0.6">Test</text>

      {/* Arrow 2 */}
      <path d="M255 150 L280 150" stroke="#1fbd6b" strokeWidth="1.5" markerEnd="url(#arrowG)" />

      <rect x="280" y="115" width="90" height="70" rx="12" fill="#2e6bff" stroke="none" />
      <rect x="292" y="130" width="66" height="8" rx="3" fill="#fff" opacity="0.3" />
      <rect x="292" y="146" width="50" height="6" rx="3" fill="#fff" opacity="0.2" />
      <rect x="292" y="158" width="58" height="6" rx="3" fill="#fff" opacity="0.2" />
      <text x="305" y="178" fontSize="8" fill="#fff" fontWeight="600" opacity="0.8">Execute</text>

      {/* Decorative arcs */}
      <path d="M85 105 Q200 40 325 105" stroke="#2e6bff" strokeWidth="1" opacity="0.15" fill="none" strokeDasharray="4 3" />
      <path d="M85 195 Q200 260 325 195" stroke="#2e6bff" strokeWidth="1" opacity="0.15" fill="none" strokeDasharray="4 3" />

      <defs>
        <marker id="arrowV" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0 0 L8 3 L0 6" fill="#2e6bff" />
        </marker>
        <marker id="arrowG" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0 0 L8 3 L0 6" fill="#1fbd6b" />
        </marker>
      </defs>
    </svg>
  );
}

export default function About() {
  return (
    <>
      <PlatformHero data={about.hero} />

      {/* Mission */}
      <section className="section">
        <div className="container">
          <SplitSection
            eyebrow={about.mission.eyebrow}
            title={<>{about.mission.titleLead} <span className="tmuted">{about.mission.titleMuted}</span></>}
            desc={about.mission.desc}
            media={<MissionIllustration />}
          />
        </div>
      </section>

      {/* Vision */}
      <section className="section" style={{ background: "linear-gradient(180deg, var(--bg) 0%, #eef3ff 55%, var(--bg) 100%)" }}>
        <div className="container">
          <SplitSection
            eyebrow={about.vision.eyebrow}
            title={<>{about.vision.titleLead} <span className="tmuted">{about.vision.titleMuted}</span></>}
            desc={about.vision.desc}
            media={<VisionIllustration />}
            imageSide="left"
          />
        </div>
      </section>

      {/* Core Principles */}
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Core Principles"
            title={<>What Drives <span className="tmuted">Everything We Build</span></>}
            subtitle="The values behind every product decision."
          />
          <div style={{ marginTop: "clamp(2.4rem, 4vw, 3.4rem)" }}>
            <FeatureGrid items={about.principles} />
          </div>
        </div>
      </section>

      {/* Product Timeline */}
      <section className="section" style={{ background: "#eef3fb" }}>
        <div className="container">
          <Timeline
            eyebrow={about.timeline.eyebrow}
            title={about.timeline.title}
            subtitle={about.timeline.subtitle}
            steps={about.timeline.steps}
          />
        </div>
      </section>

      {/* CTA */}
      <FinalCTA data={about.cta} />
    </>
  );
}
