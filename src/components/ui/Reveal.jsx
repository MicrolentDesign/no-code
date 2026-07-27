import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import "./Reveal.css";

/**
 * Fade-in + rise-on-scroll wrapper (mirrors Ternic's Webflow IX2 reveals),
 * built on IntersectionObserver — no animation library needed.
 */
const Reveal = forwardRef(function Reveal(
  { children, as: Tag = "div", delay = 0, y = 22, className = "", ...rest },
  outerRef
) {
  const innerRef = useRef(null);
  useImperativeHandle(outerRef, () => innerRef.current);

  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = innerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={innerRef}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
        "--reveal-y": `${y}px`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Reveal;

