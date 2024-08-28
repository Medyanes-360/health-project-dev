"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesCarousel = ({ servicesData }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`cursor-pointer transition-all duration-300 ${
          currentSlide / settings.slidesToScroll === i
            ? "bg-[#52B8AB] w-8 h-3"
            : "bg-gray-300 w-3 h-3"
        }`}
        style={{
          borderRadius: "999px",
          display: "inline-block",
          margin: currentSlide / settings.slidesToScroll === i ? "0" : "0 8px",
          position:
            currentSlide / settings.slidesToScroll === i
              ? "relative"
              : "static",
          left: currentSlide / settings.slidesToScroll === i ? "-8px" : "0",
        }}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      {servicesData.map((service) => (
        <div key={service.id} className="p-4 mb-6">
          <div className="service-card group bg-white p-6 rounded-lg shadow-[5px_0_10px_rgba(0,0,0,0.1)] transition-all transform hover:scale-105 relative z-10 overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                borderRight: "5px solid #52B8AB",
                borderBottom: "5px solid #52B8AB",
              }}
            ></div>
            <div className="relative z-20">
              <div className="mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="font-poppins font-bold text-[16px] leading-[24px] text-[#0B8071] mb-2">
                {service.title}
              </h3>
              <p className="font-poppins font-light text-[16px] leading-[24px] text-[#7D7987] py-4">
                {service.description}
              </p>
              <a href="#" className="text-teal-600 mt-4 block">
                Read more →
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ServicesCarousel;
