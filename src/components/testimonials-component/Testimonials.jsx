import React from "react";
import "./testimonials.css";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// IMAGES ASSETS
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const clients_data = [
  {
    id: 1,
    name: "Inutu Simaata",
    image: AVTR1,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro non vitae dolore blanditiis dolores veritatis facere laboriosa. vitae dolore blanditiis dolores veritatis facere laboriosa.vitae dolore blanditiis dolores veritatis facere laboriosa.",
  },
  {
    id: 1,
    name: "Thompson Manda",
    image: AVTR2,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro non vitae dolore blanditiis vitae dolore blanditiis dolores veritatis facere laboriosa.vitae dolore blanditiis dolores veritatis facere laboriosa.dolores veritatis facere laboriosa.",
  },
  {
    id: 1,
    name: "Kalonde Chanda",
    image: AVTR3,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro non vitae dolore blanditiis dolvitae dolore blanditiis dolores veritatis facere laboriosa.ores veritatis facere laboriosa.",
  },
  {
    id: 4,
    name: "Khadija Gökçe",
    image: AVTR4,
    review:
      "Lorem ipsum, dolor sit ametvitae dolore blanditiis dolores veritatis facere laboriosa. consectetur adipisicing elit. Porro non vitae dolore blanditiis dolores veritatis facere laboriosa.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <Swiper
          className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {clients_data.map(({ id, name, image, review }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt={`Avatar of ${name}`} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
