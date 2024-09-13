"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BenefitTextCarousel = () => {
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
        title: "Less Consultation Fees",
        text: "Morbi facilisis velit ac lacus tincidunt, nec ullamcorper dolor commodo. Nullam venenatis orci nec malesuada gravida...",
      },
      {
        title: "Professional Treatment",
        text: "Curabitur quis lorem ut libero malesuada aliquet. Etiam sollicitudin consectetur urna at ullamcorper. Aliquam et nisl euismod...",
      },
    ],
    [
      {
        title: "Advanced Technology",
        text: "Phasellus congue purus a orci pharetra, eget fringilla tortor posuere. Ut facilisis nec justo vel bibendum...",
      },
      {
        title: "Experienced Doctors",
        text: "Duis dignissim mi a nibh facilisis bibendum. Sed volutpat, orci at elementum imperdiet, sapien libero consequat nisi...",
      },
      {
        title: "Comprehensive Care",
        text: "Sed fringilla augue ac velit egestas tincidunt. In hac habitasse platea dictumst. Donec tristique est sit amet libero...",
      },
    ],
    [
      {
        title: "Personalized Treatment",
        text: "Fusce euismod mi in est ultricies, in suscipit sapien tincidunt. Integer congue turpis ut vehicula facilisis...",
      },
      {
        title: "Patient-Centered Care",
        text: "Vivamus interdum elit id lacus accumsan, ac lacinia nulla congue. Nam et libero vel sapien pellentesque tincidunt...",
      },
      {
        title: "Innovative Approaches",
        text: "Proin vehicula eros id odio scelerisque, in varius lorem consectetur. Integer malesuada cursus elit, non posuere arcu...",
      },
    ],
  ];

  return (
    <Slider {...settings}>
      {benefitTexts.map((slide, slideIndex) => (
        <div key={slideIndex} className="p-4">
          {slide.map((benefit, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-base text-gray-600">{benefit.text}</p>
            </div>
          ))}
        </div>
      ))}
    </Slider>
  );
};

export default BenefitTextCarousel;
