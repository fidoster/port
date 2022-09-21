import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/soccer.jpg"
import IMG2 from "../../assets/port1.JPG";
import IMG3 from "../../assets/port2.JPG";
import IMG4 from "../../assets/cap7.JPG";
import IMG5 from "../../assets/cap3.JPG";
import IMG6 from "../../assets/cap5.JPG";
import IMG7 from "../../assets/cap6.JPG";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 style={{ color: "#0D0D0D" }}>My Recent Work</h5>
      <h2 style={{ color: "#8C0303" }}>PORTFOLIO</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG2} alt="" />
          <h3>IoT consultency practice website</h3>
          <div div className="portfolio__item-cta">
            <a href="https://github.com/fidoster/FarhanIoT" className="btn">
              Github
            </a>
            <a
              href="https://fidoster.github.io/FarhanIoT/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG3} alt="" />
          <h3>Igloo Hotel Website</h3>
          <div div className="portfolio__item-cta">
            <a
              href="https://github.com/fidoster/IglooHotelWebsite"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://fidoster.github.io/IglooHotelWebsite/index.html"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG4} alt="" />
          <h3>MyCoazh Project Component - Team Season Statistics</h3>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG5} alt="" />
          <h3>MyCoazh Project Component - HomePage View</h3>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG6} alt="" />
          <h3>MyCoazh Project Component - Team Players Statistics</h3>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG7} alt="" />
          <h3>MyCoazh Project Component - Individual Players Statistics</h3>
        </article>
      </div>
    </section>
  );
}

export default Portfolio