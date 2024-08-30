"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileServicesCarousel = ({ servicesData }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
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
        <div key={service.id} className="p-1">
          <div className="rounded-[16.92px] overflow-hidden w-[166px] h-[245px] mx-auto bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.1)] p-4 flex flex-col justify-between">
            <div>
              <Image
                src={service.icon}
                alt={service.title}
                width={50}
                height={50}
                className="w-[50px] h-[50px] mb-2"
              />
              <h3 className="font-poppins font-bold text-[14px] leading-[21px] text-[#0B8071] mb-2">
                {service.title}
              </h3>
              <p className="font-poppins font-light text-[12px] leading-[18px] text-[#7D7987] mb-2">
                {service.description}
              </p>
            </div>
            <a
              href="#"
              className="text-[#7D7987] text-[12px] font-semibold flex items-center"
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

export default MobileServicesCarousel;
