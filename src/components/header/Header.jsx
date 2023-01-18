import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/Ph.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3 style={{ color: "#0D0D0D" }}>Hello I'm</h3>
        <h1
          style={{ color: "#8C0303", fontWeight: "bolder", letterSpacing: 20 }}
        >
          FARHAN AHMED
        </h1>
        <h5
          className="text-light"
          style={{ color: "#0D0D0D", letterSpacing: 8 }}
        >
          Front-end Developer
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a
          href="#contact"
          className="scroll__down"
          style={{ color: "#8C0303", fontSize: "15px", fontWeight: "bold", letterSpacing: 10 }}
        >
          Scroll
        </a>
      </div>
    </header>
  );
}

export default Header