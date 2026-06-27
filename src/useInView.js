import { useEffect, useState } from "react";

const useInView = (ref, options = {}) => {
  const { delay = 0, threshold = 0.2, rootMargin = "0px" } = options;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          if (delay > 0) {
            setTimeout(() => setInView(true), delay);
          } else {
            setInView(true);
          }
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, delay, threshold, rootMargin]);

  return inView;
};

export default useInView;
