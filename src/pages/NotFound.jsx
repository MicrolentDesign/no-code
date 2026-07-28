import { Link } from "react-router-dom";
import SectionIntro from "../components/ui/SectionIntro";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Reveal from "../components/ui/Reveal";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 640 }}>
        <Reveal>
          <SectionIntro
            align="center"
            eyebrow="404 Error"
            title={
              <>
                Page Not <span className="tmuted">Found</span>
              </>
            }
            subtitle="The page you are looking for doesn't exist or has been moved."
          />
          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Button variant="brand" size="lg" href="/" chip={<Icon name="ArrowRight" size={16} />}>
              Back to Home
            </Button>
            <Button variant="light" size="lg" href="/contact">
              Contact Support
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
