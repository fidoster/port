import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        style={{ color: "#8C0303", fontSize: "30px" }}
        href="https://www.linkedin.com/in/farhan-ahmed-60a87936/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        style={{ color: "#8C0303", fontSize: "30px" }}
        href="https://github.com/fidoster"
        target="_blank"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default HeaderSocials