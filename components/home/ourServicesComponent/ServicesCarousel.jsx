"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesCarousel = ({ servicesData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(4);
  const [rowsToShow, setRowsToShow] = useState(2);

  const updateSlidesToShow = () => {
    if (window.innerWidth <= 767) {
      setSlidesToScroll(2);
      setRowsToShow(1);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setSlidesToScroll(2);
      setRowsToShow(2);
    } else {
      setSlidesToScroll(4);
      setRowsToShow(2);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToScroll,
    slidesToScroll: slidesToScroll,
    rows: rowsToShow,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (current) => setCurrentSlide(current),
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        }}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      {servicesData.map((service) => (
        <div key={service.id} className="p-2 sm:p-4 mb-4">
          {" "}
          <div
            className="service-card relative bg-white p-4 sm:p-6 rounded-lg transition-all duration-300 hover:shadow-none hover:scale-105 group"
            style={{
              height: "300px",
              width: "100%",
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:border-teal-500"
              style={{
                borderRight: "5px solid #52B8AB",
                borderBottom: "5px solid #52B8AB",
                borderRadius: "8px",
              }}
            ></div>

            <div className="relative z-10">
              <div className="mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="font-bold text-lg text-[#0B8071] mb-2 text-left">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-left">
                {service.description}
              </p>
              <div className="text-left">
                <a href="#" className="text-[#52B8AB] hover:text-[#0B8071]">
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ServicesCarousel;
