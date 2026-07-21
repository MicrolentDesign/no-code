import "./SectionIntro.css";

export default function SectionIntro({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  return (
    <div
      className={`sintro sintro--${align} ${light ? "sintro--light" : ""}`}
    >
      {eyebrow && (
        <span className="sintro__eyebrow">
          <i className="sintro__dot" />
          {eyebrow}
        </span>
      )}
      <h2 className="sintro__title">{title}</h2>
      {subtitle && <p className="sintro__sub">{subtitle}</p>}
    </div>
  );
}
