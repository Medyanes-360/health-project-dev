"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TabletBenefitCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    "/assets/images/benefit.png",
    "/assets/images/benefit.png",
    "/assets/images/benefit.png",
  ];

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-[600px]">
          {" "}
          <Image
            src={src}
            alt={`Benefit Image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </Slider>
  );
};

export default TabletBenefitCarousel;
