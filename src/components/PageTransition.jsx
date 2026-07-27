import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageTransition.css";

/**
 * Wraps page content with a fade-slide-up transition on route change.
 * On route change: content fades out → scrolls to top → new page fades in.
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState("in"); // "in" | "out"
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      // Trigger exit
      setStage("out");
      prevPath.current = location.pathname;

      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setStage("in");
      }, 280); // matches CSS transition duration

      return () => clearTimeout(timer);
    } else {
      // Hash change or initial — just show
      setDisplayLocation(location);
    }
  }, [location]);

  return (
    <div className={`page-transition page-transition--${stage}`} key={displayLocation.pathname}>
      {children}
    </div>
  );
}
