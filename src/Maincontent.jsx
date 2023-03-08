import BackgroundSVG from "./BackgroundSVG";
import PortraitSVG from "./PortraitSVG";

function Maincontent() {
  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="bg-animate">
          <BackgroundSVG />
        </div>
        <div className="banner-layer-1 anime-elem1">
          <PortraitSVG />
        </div>

        <div className="banner-layer-3 anime-elem4">
          <ul className="services">
            <li>Front-end development</li>
            <li>Wordpress</li>
            <li>Shopify</li>
          </ul>
          <h1>
            Surendra <span>Budhathoki</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Maincontent;
