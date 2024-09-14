"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesCarousel = ({ servicesData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(8);

  const updateSlidesToScroll = () => {
    if (window.innerWidth <= 767) {
      setSlidesToScroll(1);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setSlidesToScroll(6);
    } else {
      setSlidesToScroll(8);
    }
  };

  useEffect(() => {
    updateSlidesToScroll();
    window.addEventListener("resize", updateSlidesToScroll);

    return () => {
      window.removeEventListener("resize", updateSlidesToScroll);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: slidesToScroll,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 6,
          rows: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
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
          Math.floor(currentSlide / slidesToScroll) === i
            ? "bg-[#52B8AB] w-8 h-3"
            : "bg-gray-300 w-3 h-3"
        }`}
        style={{
          borderRadius: "999px",
          display: "inline-block",
          margin:
            Math.floor(currentSlide / slidesToScroll) === i ? "0" : "0 8px",
          position:
            Math.floor(currentSlide / slidesToScroll) === i
              ? "relative"
              : "static",
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
              <h3 className="font-poppins font-bold text-[16px] md:text-[12px] leading-[16px] text-[#0B8071] mb-2">
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
