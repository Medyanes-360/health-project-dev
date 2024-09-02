"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TabletServicesCarousel = ({ servicesData }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "2px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "2px",
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
            ? "bg-[#52B8AB] w-6 h-3"
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
        }}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      {servicesData.map((service) => (
        <div key={service.id} className="p-2">
          {" "}
          <div className="rounded-[16.92px] overflow-hidden w-[220px] h-[260px] mx-auto bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.1)] p-4 flex flex-col justify-between">
            <div>
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
                className="w-[60px] h-[60px] mb-2" 
              />
              <h3 className="font-poppins font-bold text-[16px] leading-[24px] text-[#0B8071] mb-2">
                {service.title}
              </h3>
              <p className="font-poppins font-light text-[13px] leading-[20px] text-[#7D7987] mb-2">
                {service.description}
              </p>
            </div>
            <a
              href="#"
              className="text-[#7D7987] text-[13px] font-semibold flex items-center"
            >
              Read more
              <span className="ml-1" style={{ color: "#000000" }}>
                →
              </span>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TabletServicesCarousel;
