import { useEffect } from "react";

const FOLLOW_DELAY_MS = 3200;

const CursorGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let following = false;
    let rafId = 0;

    glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
    glow.style.opacity = "1";

    const onMove = (e) => {
      if (!following) return;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onLeave = () => {
      if (following) glow.style.opacity = "0";
    };

    const onEnter = () => {
      if (following) glow.style.opacity = "1";
    };

    const tick = () => {
      glowX += (mouseX - glowX) * 0.06;
      glowY += (mouseY - glowY) * 0.06;
      glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const enableTimer = setTimeout(() => {
      following = true;
    }, FOLLOW_DELAY_MS);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      clearTimeout(enableTimer);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
      glow.remove();
    };
  }, []);

  return null;
};

export default CursorGlow;
