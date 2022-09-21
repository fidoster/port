import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5 style={{ color: "#0D0D0D" }}>Get In Touch</h5>
      <h2 style={{ color: "#8C0303" }}>CONTACT ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a
            href="mailto:farhan.midsweden@gmail.com"
            target="_blank"
            className="contact__option"
          >
            <MdOutlineEmail className="contact__option-icon" />
            <h4 style={{ color: "#fff" }}>Email</h4>
            <h5 style={{ color: "#fff" }}>farhan.midsweden@gmail.com</h5>
            <a style={{ color: "#fff" }}>Send a message</a>
          </a>
          <a
            href="https://m.me/farhan.tip"
            target="_blank"
            className="contact__option"
          >
            <RiMessengerLine className="contact__option-icon" />
            <h4 style={{ color: "#fff" }}>Messenger</h4>
            <h5 style={{ color: "#fff" }}>Farhan</h5>
            <a style={{ color: "#fff" }}>Send a message</a>
          </a>
          <a
            href="https://api.WhatsApp.com/send?phone=3584578324077"
            target="_blank"
            className="contact__option"
          >
            <BsWhatsapp className="contact__option-icon" />
            <h4 style={{ color: "#fff" }}>Whatsapp</h4>
            <h5 style={{ color: "#fff" }}>Get in Touch</h5>
            <a style={{ color: "#fff" }}>Send a message</a>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact