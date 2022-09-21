import React from 'react'
import "./about.css"
import ME from "../../assets/resize1.jpg"
import { FaReact } from "react-icons/fa"
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";


const About = () => {
  return (
    <section id="about">
      <h5 style={{ color: "#0D0D0D" }}>Get To Know</h5>
      <h2 style={{ color: "#8C0303" }}>ABOUT ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaReact className="about__icon" />
              <h5>React</h5>
              <small>Intermediate</small>
            </article>

            <article className="about__card">
              <SiJavascript className="about__icon" />
              <h5>Javascript</h5>
              <small>Basic</small>
            </article>

            <article className="about__card">
              <SiHtml5 className="about__icon" />
              <h5>HTML</h5>
              <small>Intermediate</small>
            </article>
          </div>

          <p style={{ color: "#0D0D0D" }}>
            A highly motivated junior software developer with knowledge of HTML
            & CSS, JavaScript, React, Bootstrap & Material UI, and version
            control system GIT. Also, have knowledge of working in the Agile
            framework. I am enthusiastic about learning new skills and seeking
            to work as a front-end developer for an organization that allows me
            to grow professionally.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About