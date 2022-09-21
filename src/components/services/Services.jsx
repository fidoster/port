import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5 style={{ color: "#0D0D0D" }}>What I have been doing</h5>
      <h2 style={{ color: "#8C0303" }}>PAST, PRESENT & FUTURE</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>PAST</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <a
                href="https://certificates.mooc.fi/validate/k5pqfbfjc9h"
                target="_blank"
                style={{ color: "#fff" }}
              >
                Introduction to Python Programming - University of Helsinki
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a
                href="https://www.udemy.com/certificate/UC-c2d95171-4003-4c54-883b-bb64b35e382a/"
                target="_blank"
                style={{ color: "#fff" }}
              >
                The Modern React Bootcamp - Udemy
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a
                href="https://www.udemy.com/certificate/UC-8dcec5a2-4cb8-4c94-9179-ed76d8739853/"
                target="_blank"
                style={{ color: "#fff" }}
              >
                Modern HTML & CSS - Udemy
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a
                href="https://www.udemy.com/certificate/UC-6cdc738c-9aa7-498e-b418-703012a640bb/"
                target="_blank"
                style={{ color: "#fff" }}
              >
                The Git & Github Bootcamp - Udemy
              </a>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>PRESENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <a style={{ color: "#fff" }}>
                Part of training program "Coding and Finnish language"
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a style={{ color: "#fff" }}>
                Training is organized by TE-toimisto and BearIT
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a style={{ color: "#fff" }}>
                Developing an app to assist football coaches
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a style={{ color: "#fff" }}>
                Building homepage view, player statistics, team season
                statistics
              </a>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>FUTURE</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <a style={{ color: "#fff" }}>
                Looking for internship opportunities
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a style={{ color: "#fff" }}>
                As Front end developer
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a style={{ color: "#fff" }}>
                Organization that gives opportuniy to learn professionally
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a style={{ color: "#fff" }}>
                Helpful and friendly enviornment
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services