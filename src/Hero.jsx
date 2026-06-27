import React from "react";
import BackgroundSVG from "./BackgroundSVG";
import PortraitSVG from "./PortraitSVG";
// import StaggerText from "./StaggerText"; // text animations disabled

const CAREER_START_YEAR = 2009;

const Hero = () => {
  const yearsInIndustry = new Date().getFullYear() - CAREER_START_YEAR;

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
            I'm a <strong>Front-End developer</strong> with a specialization in{" "}
            <strong>Shopify</strong> and <strong>Wordpress</strong>. I have been
            developing online presences for agencies and clients{" "}
            <strong>around the world</strong> since <strong>{CAREER_START_YEAR}</strong>. Over
            the <strong>{yearsInIndustry} years</strong> in this industry, I have been crafting
            visually appealing websites turning digital <strong>visions</strong>{" "}
            into seamless online <strong>realities</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
