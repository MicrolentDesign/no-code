import "./Logo.css";
import { brand } from "../../data/content";

export default function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? "logo--light" : ""}`} href="#home" aria-label={brand.name}>
      <span className="logo__mark">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="#2E6BFF" />
          <path
            d="M8.5 20.5 12.8 12l2.9 5.4L18.7 11 23.5 20.5"
            fill="none"
            stroke="#fff"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="logo__word">{brand.name}</span>
    </a>
  );
}
