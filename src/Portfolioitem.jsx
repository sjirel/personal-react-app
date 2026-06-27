const PortfolioItem = (props) => {
  return (
    <div className="portfolio--item">
      <figure className="portfolio--thumb">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.img} alt={`${props.portfolioname} logo`} loading="lazy" decoding="async" />
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
