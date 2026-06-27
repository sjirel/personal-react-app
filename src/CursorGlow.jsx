import { useEffect } from "react";

const CursorGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let visible = false;
    let rafId = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        glowX = mouseX;
        glowY = mouseY;
        visible = true;
        glow.style.opacity = "1";
      }
    };

    const onLeave = () => {
      glow.style.opacity = "0";
      visible = false;
    };

    const tick = () => {
      glowX += (mouseX - glowX) * 0.06;
      glowY += (mouseY - glowY) * 0.06;
      glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
      glow.remove();
    };
  }, []);

  return null;
};

export default CursorGlow;
