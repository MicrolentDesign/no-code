import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./ContactForm.css";
import Button from "./Button";
import Icon from "./Icon";
import Reveal from "./Reveal";

const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany",
  "France", "India", "Singapore", "Japan", "Brazil", "Other",
];

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan");
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState(planParam ? `Enquiry regarding ${planParam} plan` : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Reveal className="cform__success">
        <span className="cform__success-ic">
          <Icon name="CheckCircle" size={36} />
        </span>
        <h3>Thank you for reaching out</h3>
        <p>We've received your message and will get back to you shortly.</p>
        <div style={{ marginTop: "1.5rem" }}>
          <Button variant="light" size="sm" onClick={() => setSubmitted(false)}>
            Send another message
          </Button>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal as="form" className="cform" onSubmit={handleSubmit}>
      <div className="cform__row">
        <label className="cform__field">
          <span className="cform__label">First Name <span className="cform__req">*</span></span>
          <input type="text" name="firstName" required className="cform__input" placeholder="John" />
        </label>
        <label className="cform__field">
          <span className="cform__label">Last Name <span className="cform__req">*</span></span>
          <input type="text" name="lastName" required className="cform__input" placeholder="Doe" />
        </label>
      </div>

      <div className="cform__row">
        <label className="cform__field">
          <span className="cform__label">Business Email <span className="cform__req">*</span></span>
          <input type="email" name="email" required className="cform__input" placeholder="john@company.com" />
        </label>
        <label className="cform__field">
          <span className="cform__label">Company <span className="cform__opt">(Optional)</span></span>
          <input type="text" name="company" className="cform__input" placeholder="Acme Inc." />
        </label>
      </div>

      <div className="cform__row">
        <label className="cform__field">
          <span className="cform__label">Country <span className="cform__req">*</span></span>
          <select name="country" required className="cform__input cform__select" defaultValue="">
            <option value="" disabled>Select country</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="cform__field">
          <span className="cform__label">Subject <span className="cform__req">*</span></span>
          <input
            type="text"
            name="subject"
            required
            className="cform__input"
            placeholder="Product enquiry"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
      </div>

      <label className="cform__field cform__field--full">
        <span className="cform__label">Message <span className="cform__req">*</span></span>
        <textarea name="message" required className="cform__input cform__textarea" rows={5} placeholder="Tell us about your needs…" />
      </label>

      <label className="cform__consent">
        <input type="checkbox" name="consent" required className="cform__checkbox" />
        <span>I agree to receive communications from Quantly. You can unsubscribe at any time.</span>
      </label>

      <Button type="submit" variant="brand" size="lg" className="cform__submit" chip={<Icon name="Send" size={16} />}>
        Send Message
      </Button>
    </Reveal>
  );
}
