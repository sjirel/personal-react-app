import PortfolioItem from "./Portfolioitem";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container-fluid d-flex flex-wrap">
        <PortfolioItem
          portfolioname="Scentify Home"
          img="./src/assets/scentify-logo.svg"
          details="Scentify home is an ecommerce store built with Shopify that offers high-quality ambient scents and  diffusers for your home."
          link="https://scentifyhome.com/"
        />
        <PortfolioItem
          portfolioname="Scentify Business"
          img="./src/assets/scentify-business.svg"
          details="Scentify business is an ecommerce store built with Shopify that offers high-quality scenting solution to business and public venues."
          link="https://scentifybusiness.com/"
        />
        <PortfolioItem
          portfolioname="We Are Lion"
          img="/src/assets/wearelion.svg"
          details="Wearelion.nyc is a digital web studio built with Wordpress. They specialize in online branding, custom web design and creative design"
          link="https://wearelion.nyc/"
        />
        <PortfolioItem
          portfolioname="TSMP Law Corporatiom"
          img="/src/assets/tsmp-law.svg"
          details="TSMP is Southeast Asia’s and Singapore’s top corporate boutique firm, specialising in complex litigation and cutting edge transactions."
          link="https://wearelion.nyc/"
        />
        <PortfolioItem
          portfolioname="Select Group"
          img="/src/assets/select-group.png"
          details="Select Group is a leading food service provider to people from all walks of life in Singapore for more than 25 years."
          link="https://wearelion.nyc/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
