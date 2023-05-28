const PortfolioItem = (props) => {
  return (
    <div className="portfolio--item">
      <figure className="portfolio--thumb">
        <a href={props.link} target="blank">
          <img src={props.img} />
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
