import PortfolioItem from "./Portfolioitem";
import eberhartLogo from "./assets/eberhart-furniture.svg";
import madebyhandLogo from "./assets/madebyhand.png";
import padellifeLogo from "./assets/padellife.png";
import maximmLogo from "./assets/maximm.svg";
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
          portfolioname="Eberhart Furniture"
          img={eberhartLogo}
          details={["Eberhart Furniture is a Danish design studio crafting timeless, high-quality dining tables, chairs and café pieces — built with ", <strong>Shopify</strong>, "."]}
          link="https://eberhart-furniture.com/"
        />
        <PortfolioItem
          portfolioname="Made by Hand"
          img={madebyhandLogo}
          details={["Made by Hand is a contemporary Danish brand creating handcrafted lighting, furniture and home objects rooted in fine craftsmanship — built with ", <strong>Shopify</strong>, "."]}
          link="https://madebyhand.dk/"
        />
        <PortfolioItem
          portfolioname="Padellife"
          img={padellifeLogo}
          details={["Padellife is Denmark's leading padel sports specialist, offering rackets, footwear, apparel and accessories online and in their Copenhagen store — built with ", <strong>Shopify</strong>, "."]}
          link="https://padellife.dk/"
        />
        <PortfolioItem
          portfolioname="Maximm"
          img={maximmLogo}
          details={["Maximm is a US-based brand specializing in extension cords, networking and audio-visual cables for both retail and bulk wholesale — built with ", <strong>Shopify</strong>, "."]}
          link="https://maximmcable.com/"
        />
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
          details={["Built with ",<strong>Wordpress</strong>," TSMP is Southeast Asia’s and Singapore’s top corporate boutique firm, specialising in complex litigation and cutting edge transactions."]}
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
