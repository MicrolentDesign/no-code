import "./SplitSection.css";
import Reveal from "./Reveal";

/**
 * Reusable heading + description + media split layout, alternating sides.
 * imageSide: "left" | "right" (default) — which side the media renders on.
 */
export default function SplitSection({
  eyebrow,
  title,
  desc,
  media,
  imageSide = "right",
  children,
  className = "",
}) {
  return (
    <div className={`split ${imageSide === "left" ? "split--rev" : ""} ${className}`}>
      <Reveal className="split__text">
        {eyebrow && (
          <span className="split__eyebrow">
            <i />
            {eyebrow}
          </span>
        )}
        <h2 className="split__title">{title}</h2>
        {desc && <p className="split__desc">{desc}</p>}
        {children}
      </Reveal>
      <Reveal className="split__media" delay={120}>
        {media}
      </Reveal>
    </div>
  );
}
