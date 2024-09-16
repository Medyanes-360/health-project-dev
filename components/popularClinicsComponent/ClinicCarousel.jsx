"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClinicCarousel = ({ clinicsData }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [slidesToShow, setSlidesToShow] = React.useState(4);

  const updateSlidesToShow = () => {
    if (window.innerWidth <= 767) {
      setSlidesToShow(2); 
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setSlidesToShow(2); 
    } else {
      setSlidesToShow(4); 
    }
  };

  React.useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    arrows: false,
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
          Math.floor(currentSlide / slidesToShow) === i
            ? "bg-[#52B8AB] w-8 h-3"
            : "bg-gray-300 w-3 h-3"
        }`}
        style={{
          borderRadius: "999px",
          display: "inline-block",
          margin: Math.floor(currentSlide / slidesToShow) === i ? "0" : "0 8px",
        }}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      {clinicsData.map((clinic) => (
        <div key={clinic.id} className="px-2 py-2">
          <div className="border-[0.5px] border-[#52B8AB] rounded-2xl overflow-hidden shadow-md relative mt-2 mb-2">
            <Image
              src={clinic.image}
              alt={clinic.name}
              width={500}
              height={200}
              className="w-full h-40 object-cover z-10 sm:h-48 lg:h-56"
            />
            <div className="p-3 sm:p-4 lg:p-6 bg-white">
              <h3 className="font-poppins font-bold text-[16px] sm:text-[18px] lg:text-[20px] text-[#1E1E1E] leading-[22px] sm:leading-[28px] lg:leading-[36px]">
                {clinic.name}
              </h3>
              <p className="font-poppins font-light text-[14px] sm:text-[16px] lg:text-[18px] text-[#1E1E1E] leading-[20px] sm:leading-[24px] lg:leading-[28px] mb-2 sm:mb-4">
                {clinic.location}
              </p>
            </div>
            <div className="absolute bottom-1 right-4 flex space-x-1 mb-0 sm:mb-2 sm:justify-end justify-start">
              {" "}
              {[...Array(clinic.rating)].map((_, i) => (
                <Image
                  key={i}
                  src="/assets/icons/star.svg"
                  alt="Star Icon"
                  width={16}
                  height={16}
                  className="text-[#FFAA00]"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ClinicCarousel;
