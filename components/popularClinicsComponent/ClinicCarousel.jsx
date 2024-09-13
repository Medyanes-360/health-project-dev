"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClinicCarousel = ({ clinicsData }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [slidesToScroll, setSlidesToScroll] = React.useState(4);

  const updateSlidesToScroll = () => {
    if (window.innerWidth <= 767) {
      setSlidesToScroll(1);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setSlidesToScroll(2);
    } else {
      setSlidesToScroll(4);
    }
  };

  React.useEffect(() => {
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
    slidesToShow: slidesToScroll,
    slidesToScroll: slidesToScroll,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      {clinicsData.map((clinic) => (
        <div key={clinic.id} className="p-4">
          <div className="border-[0.5px] border-[#52B8AB] rounded-3xl overflow-hidden shadow-md relative mt-4 mb-4">
            <Image
              src={clinic.image}
              alt={clinic.name}
              width={500}
              height={200}
              className="w-full h-48 object-cover z-10"
            />
            <div className="p-6 bg-white">
              <h3 className="font-poppins font-bold text-[20px] text-[#1E1E1E] leading-[36px]">
                {clinic.name}
              </h3>
              <p className="font-poppins font-light text-[16px] text-[#1E1E1E] leading-[24px] mb-4">
                {clinic.location}
              </p>
            </div>
            <div className="absolute bottom-1 right-4 flex space-x-1 mb-2">
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
