"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileBenefitTextCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const benefitTexts = [
    [
      {
        title: "Modern Clinic",
        text: "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam...",
      },
      {
        title: "Phasellus congue purus",
        text: "Phasellus congue purus a orci pharetra, eget fringilla tortor posuere. Ut facilisis nec justo vel bibendum...",
      },
      {
        title: "Duis dignissim mi",
        text: "Duis dignissim mi a nibh facilisis bibendum. Sed volutpat, orci at elementum imperdiet, sapien libero consequat nisi...",
      },
    ],
    [
      {
        title: "Less Consultation Fees",
        text: "Morbi facilisis velit ac lacus tincidunt, nec ullamcorper dolor commodo. Nullam venenatis orci nec malesuada gravida...",
      },
      {
        title: "Sed fringilla augue",
        text: "Sed fringilla augue ac velit egestas tincidunt. In hac habitasse platea dictumst. Donec tristique est sit amet libero...",
      },
      {
        title: "Proin vehicula eros",
        text: "Proin vehicula eros id odio scelerisque, in varius lorem consectetur. Integer malesuada cursus elit, non posuere arcu...",
      },
    ],
    [
      {
        title: "Professional Treatment",
        text: "Curabitur quis lorem ut libero malesuada aliquet. Etiam sollicitudin consectetur urna at ullamcorper. Aliquam et nisl euismod...",
      },
      {
        title: "Fusce euismod mi",
        text: "Fusce euismod mi in est ultricies, in suscipit sapien tincidunt. Integer congue turpis ut vehicula facilisis...",
      },
      {
        title: "Vivamus interdum elit",
        text: "Vivamus interdum elit id lacus accumsan, ac lacinia nulla congue. Nam et libero vel sapien pellentesque tincidunt...",
      },
    ],
  ];

  return (
    <Slider {...settings}>
      {benefitTexts.map((slide, slideIndex) => (
        <div key={slideIndex} className="p-4">
          {slide.map((benefit, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-[20px] font-semibold text-[#1E1E1E] leading-[28px] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[16px] font-light text-[#1E1E1E] leading-[24px]">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      ))}
    </Slider>
  );
};

export default MobileBenefitTextCarousel;
