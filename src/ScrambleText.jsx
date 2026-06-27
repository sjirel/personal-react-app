import { useEffect, useRef, useState } from "react";
import useInView from "./useInView";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_/[]{}=+*^?#";

const scrambleOnce = (text) =>
  text
    .split("")
    .map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
    .join("");

const ScrambleText = ({ children, duration = 900, charStagger = 35, delay = 0 }) => {
  const text = String(children);
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.4, delay });
  const [display, setDisplay] = useState(() => scrambleOnce(text));

  useEffect(() => {
    if (!inView) return;
    let rafId = 0;
    let lastUpdate = 0;
    const start = performance.now();
    const totalDuration = (text.length - 1) * charStagger + duration;

    const tick = (now) => {
      const elapsed = now - start;
      if (now - lastUpdate >= 45) {
        lastUpdate = now;
        const out = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            const settleAt = i * charStagger + duration / 2;
            if (elapsed >= settleAt) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        setDisplay(out);
      }
      if (elapsed < totalDuration) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, text, duration, charStagger]);

  return (
    <span ref={ref} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
};

export default ScrambleText;
