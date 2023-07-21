import React from "react";
import BackgroundSVG from "./BackgroundSVG";
import PortraitSVG from "./PortraitSVG";

const Hero = () => {
  let portraitPaths = document.querySelectorAll(".svg-animate .st0");
  const PortraitDraw = () => {
    portraitPaths.forEach((path) => {
      console.log("test");
      let pathlength = path.getTotalLength();
      path.style.strokeDasharray = pathlength;
      path.style.strokeDashoffset = pathlength;
      path.style.display = "block";
    });
  };

  React.useEffect(
    function () {
      PortraitDraw();
    },
    [0]
  );
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
          <h1 className="full--name">
            surendra
            <span>budhathoki</span>
          </h1>
          <p className="intro">
            I'm a frontend developer working for digital agencies around the
            world. I've been developing online presences since 2009.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
