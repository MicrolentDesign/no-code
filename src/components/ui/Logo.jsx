import { Link } from "react-router-dom";
import "./Logo.css";
import { brand } from "../../data/content";

export default function Logo({ light = false }) {
  return (
    <Link className={`logo ${light ? "logo--light" : ""}`} to="/" aria-label={brand.name}>
      <span className="logo__mark">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#2E6BFF" />
          <g fill="none" stroke="#fff" strokeWidth="2.9">
            <circle cx="19.5" cy="12.5" r="5" />
            <circle cx="12.5" cy="12.5" r="5" />
            <circle cx="12.5" cy="19.5" r="5" />
            <circle cx="19.5" cy="19.5" r="5" />
          </g>
        </svg>
      </span>
      <span className="logo__word">{brand.name}</span>
    </Link>
  );
}

