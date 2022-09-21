import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo" style={{fontSize: 17, fontWeight:'bold', textShadow: "2px"}}>
        FARHAN - Personal Portfolio Website
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/farhan.tip/"
          style={{ color: "#8C0303" }}
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/f.turku/"
          style={{ color: "#8C0303" }}
        >
          <FiInstagram />
        </a>
        <a href="https://twitter.com" style={{ color: "#8C0303" }}>
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Farhan 2022 Website. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer