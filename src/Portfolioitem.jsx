import { useRef } from "react";

const PARALLAX_STRENGTH = 55;
const HOVER_SCALE = 1.03;

const PortfolioItem = (props) => {
  const imgRef = useRef(null);

  const handleEnter = (e) => {
    e.currentTarget.style.transform = `scale(${HOVER_SCALE})`;
    e.currentTarget.style.boxShadow = "0 22px 48px rgba(0,0,0,.18)";
  };

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    if (imgRef.current) {
      imgRef.current.style.transform = `translate(${(x * PARALLAX_STRENGTH).toFixed(1)}px, ${(y * PARALLAX_STRENGTH * 0.72).toFixed(1)}px)`;
    }
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = "";
    e.currentTarget.style.boxShadow = "";
    if (imgRef.current) {
      imgRef.current.style.transform = "translate(0,0)";
    }
  };

  return (
    <div className="portfolio--item">
      <figure className="portfolio--thumb">
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleEnter}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <img
            ref={imgRef}
            src={props.img}
            alt={`${props.portfolioname} logo`}
            loading="lazy"
            decoding="async"
          />
        </a>
        <div className="portfolio--details">
          <h2 className="portfolio--title">{props.portfolioname}</h2>
          <p className="portfolio--details_text">{props.details}</p>
        </div>
      </figure>
    </div>
  );
};

export default PortfolioItem;
