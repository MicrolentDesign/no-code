import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../ui/Logo";
import Icon from "../ui/Icon";
import { footer, brand } from "../../data/content";

const SOCIAL_ICON = {
  X: "Twitter",
  Instagram: "Instagram",
  Telegram: "Send",
  LinkedIn: "Linkedin",
};

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__glow" aria-hidden="true" />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p className="footer__blurb">{footer.blurb}</p>
            <div className="footer__socials">
              {footer.socials.map((s) => (
                <a key={s} href="#" aria-label={s} className="footer__social">
                  <Icon name={SOCIAL_ICON[s] || "Globe"} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__cols">
            {footer.columns.map((c) => (
              <div className="footer__col" key={c.title}>
                <h4>{c.title}</h4>
                <ul>
                  {c.links.map((l) => {
                    const isHash = typeof l.href === "string" && l.href.includes("#");
                    return (
                      <li key={l.label}>
                        {isHash ? (
                          <a href={l.href}>{l.label}</a>
                        ) : (
                          <Link to={l.href}>{l.label}</Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__mark" aria-hidden="true">
          {brand.name}
        </div>

        <div className="footer__bottom">
          <span>{footer.copyright}</span>
          <span className="footer__made">Built with care · light theme</span>
        </div>
      </div>
    </footer>
  );
}

