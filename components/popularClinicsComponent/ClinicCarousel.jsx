"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClinicCarousel = ({ clinicsData }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        }}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      {clinicsData.map((clinic) => (
        <div key={clinic.id} className="p-4">
          <div className="border-[0.5px] border-[#52B8AB] rounded-3xl overflow-hidden shadow-md relative mt-4 mb-4">
            <Image
              src={clinic.image}
              alt={clinic.name}
              width={500}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-poppins font-bold text-[20px] text-[#1E1E1E] leading-[36px]">
                {clinic.name}
              </h3>
              <p className="font-poppins font-light text-[16px] text-[#1E1E1E] leading-[24px]">
                {clinic.location}
              </p>
            </div>
            <div className="absolute bottom-4 right-4">
              {[...Array(clinic.rating)].map((star, i) => (
                <span key={i} className="text-[#FFAA00] text-xl">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ClinicCarousel;
