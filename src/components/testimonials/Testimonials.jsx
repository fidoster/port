import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/images.jpg";
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5 style={{ color: "#0D0D0D" }}>Review from clients</h5>
      <h2 style={{ color: "#8C0303" }}>TESTIMONIALS</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Damian Krakowski</h5>
          <small className="client__review">
            Very good communication. A pleasure doing business with.
            Highly recommended! Thank you - Flippa
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Anthony West</h5>
          <small className="client__review">
            Excellent communicating and extremely very helpful.
            Guided all the way through and helped me in setting it up.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Lori Bolene </h5>
          <small className="client__review">
            Excellent seller! Went above and beyond to help me get set up.
            Highly recommended! - Flippa
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials