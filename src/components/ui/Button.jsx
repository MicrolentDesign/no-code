import "./Button.css";

/**
 * variant: 'brand' | 'dark' | 'light' | 'ghost' | 'white'
 * chip: optional icon node rendered in a colored circle inside the pill
 */
export default function Button({
  children,
  variant = "brand",
  size = "md",
  href,
  chip,
  className = "",
  ...rest
}) {
  const Tag = href ? "a" : "button";
  const cls = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    chip ? "btn--chip" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={cls} href={href} {...rest}>
      {chip && <span className="btn__chip">{chip}</span>}
      <span className="btn__label">{children}</span>
    </Tag>
  );
}
