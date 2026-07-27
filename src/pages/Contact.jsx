import PlatformHero from "../components/Platform/PlatformHero";
import SectionIntro from "../components/ui/SectionIntro";
import FeatureGrid from "../components/ui/FeatureGrid";
import ContactForm from "../components/ui/ContactForm";
import FAQ from "../components/FAQ/FAQ";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import "../components/Platform/PlatformHero.css";
import "./Contact.css";
import { contact } from "../data/content";

export default function Contact() {
  return (
    <>
      <PlatformHero data={contact.hero} />

      {/* Contact Options */}
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Get in Touch"
            title={<>How Can We <span className="tmuted">Help You?</span></>}
            subtitle="Choose the option that best fits your needs."
          />
          <div style={{ marginTop: "clamp(2.4rem, 4vw, 3.4rem)" }}>
            <FeatureGrid items={contact.options} />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section contact-form-section">
        <div className="container">
          <SectionIntro
            eyebrow="Send a Message"
            title={<>We'd Love to <span className="tmuted">Hear from You</span></>}
            subtitle="Fill out the form below and we'll get back to you within one business day."
          />
          <div style={{ marginTop: "clamp(2.4rem, 4vw, 3.4rem)" }}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ data={contact.faq} />

      {/* CTA */}
      <FinalCTA data={contact.cta} />
    </>
  );
}
