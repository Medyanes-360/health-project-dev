"use client";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DiscoverMoreCardContent from "../reusable/DiscoverMoreCard";

const DiscoverMoreCard = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const ScreenSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    arrows: false,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <Slider {...ScreenSettings} ref={sliderRef}>
        {data.map((object, i) => (
          <DiscoverMoreCardContent key={i} data={object} />
        ))}
      </Slider>
      <div className="flex justify-center mt-4 gap-7">
        <button
          onClick={handlePrev}
          className={`cursor-pointer h-8 w-8 rounded-full text-white ${
            currentSlide === 0 ? "bg-gray-300" : "bg-primary"
          }`}
          disabled={currentSlide === 0}
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className={`cursor-pointer h-8 w-8 rounded-full  text-white ${
            currentSlide === data.length - 1 ? "bg-gray-300" : "bg-primary"
          }`}
          disabled={currentSlide === data.length - 1}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default DiscoverMoreCard;

