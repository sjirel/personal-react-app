import React from "react";
import BackgroundSVG from "./BackgroundSVG";
import PortraitSVG from "./PortraitSVG";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="bg-animate">{/* <BackgroundSVG /> */}</div>
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
            I'm a <strong>Front-End developer</strong> with a specialization in <strong>Shopify</strong> and <strong>Wordpress</strong>. I have been developing online presences for agencies and clients <strong>around the world</strong> since <strong>2009</strong>. With over <strong>14 years</strong> of experience in this industry I have been crafting visually appealing websites turning digital visions into seamless online realities. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
