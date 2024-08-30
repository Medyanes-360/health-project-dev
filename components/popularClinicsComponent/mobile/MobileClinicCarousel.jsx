"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileClinicCarousel = ({ clinicsData }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    arrows: false,
    centerMode: false,
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
      {clinicsData.map((clinic, index) => (
        <div key={clinic.id} className="p-1">
          <div className="border-[1px] border-[#1CB5BD] rounded-[16.92px] overflow-hidden w-[165px] h-[225px] mx-auto">
            <Image
              src={clinic.image}
              alt={clinic.name}
              width={500}
              height={500}
              className="w-[165px] h-[157.37px] object-cover"
            />
            <div className="p-2" style={{ backgroundColor: "white" }}>
              <h3 className="font-poppins font-semibold text-[14px] leading-[21px] text-[#1E1E1E]">
                {clinic.name}
              </h3>
              <p className="font-poppins font-light text-[12px] leading-[18px] text-[#1E1E1E] mb-1">
                {clinic.location}
              </p>
              <div className="flex justify-start">
                {[...Array(clinic.rating)].map((_, i) => (
                  <Image
                    key={i}
                    src="/assets/icons/star.svg"
                    alt="Star Icon"
                    width={12}
                    height={12}
                    className="text-[#FFAA00]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MobileClinicCarousel;
