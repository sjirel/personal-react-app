import PortfolioItem from "./Portfolioitem";
import scentifyHomeLogo from "./assets/scentify-logo.svg";
import scentifyBusinessLogo from "./assets/scentify-business.svg";
import wearelionLogo from "./assets/wearelion.svg";
import tsmpLogo from "./assets/tsmp-law.svg";
import selectGroupLogo from "./assets/select-group.png";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container-fluid d-flex flex-wrap">
        <PortfolioItem
          portfolioname="Scentify Home"
          img={scentifyHomeLogo}
          details={["Scentify home is an ecommerce store built with ", <strong>Shopify</strong>, " that offers high-quality ambient scents and  diffusers for your home."]}
          link="https://scentifyhome.com/"
        />
        <PortfolioItem
          portfolioname="Scentify Business"
          img={scentifyBusinessLogo}
          details={["Scentify business is an ecommerce store built with ", <strong>Shopify</strong>, " that offers high-quality scenting solution to business and public venues."]}
          link="https://scentifybusiness.com/"
        />
        <PortfolioItem
          portfolioname="We Are Lion"
          img={wearelionLogo}
          details={["Wearelion.nyc is a digital web studio built with ",<strong>Wordpress</strong>,". They specialize in online branding, custom web design and creative design"]}
          link="https://wearelion.nyc/"
        />
        <PortfolioItem
          portfolioname="TSMP Law Corporation"
          img={tsmpLogo}
          details="TSMP is Southeast Asia’s and Singapore’s top corporate boutique firm, specialising in complex litigation and cutting edge transactions."
          link="https://www.tsmplaw.com/"
        />
        <PortfolioItem
          portfolioname="Select Group"
          img={selectGroupLogo}
          details="Select Group is a leading food service provider to people from all walks of life in Singapore for more than 25 years."
          link="https://group.select.com.sg/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
