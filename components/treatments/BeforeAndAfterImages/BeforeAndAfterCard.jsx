"use client";
import CardComponent from "@/globalElements/Card";
import { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BeforeAndAfterCard = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState({
    big: 0,
    medium: 0,
    small: 0,
  });

  // References for sliders to control them manually
  const sliderBig = useRef(null);
  const sliderMedium = useRef(null);
  const sliderSmall = useRef(null);

  const createSliderSettings = (
    slidesToShow,
    slidesToScroll,
    screenType,
    ref
  ) => ({
    infinite: true,
    speed: 400,
    slidesToShow,
    slidesToScroll,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) =>
      setCurrentSlide((prev) => ({ ...prev, [screenType]: current })),
    arrows: false, // Disable default arrows
  });

  const ReviewCard = ({ image }) => (
    <div className="px-4">
      <CardComponent className={"px-3 py-5"}>
        <div className="w-full relative aspect-[12/9] overflow-hidden rounded-2xl">
          <Image
            src={image}
            fill
            className="object-cover object-center"
            alt="image"
          />
        </div>
      </CardComponent>
    </div>
  );

  return (
    <>
      {/* Big Slider */}
      <div className="hidden lg:block">
        <Slider
          {...createSliderSettings(3, 3, "big", sliderBig)}
          ref={sliderBig}
        >
          {data.map((item, i) => (
            <ReviewCard key={i} {...item} />
          ))}
        </Slider>
        {/* Custom forward and back buttons */}
        <div className="flex justify-center mt-4 gap-7">
          <button
            onClick={() => sliderBig.current.slickPrev()}
            className="bg-gray-300 w-8 h-8 rounded-full mr-2 text-fourth"
          >
            &#8592;
          </button>
          <button
            onClick={() => sliderBig.current.slickNext()}
            className="bg-[#52B8AB] w-8 h-8 rounded-full text-fourth"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Medium Slider */}
      <div className="hidden sm:block lg:hidden">
        <Slider
          {...createSliderSettings(2, 2, "medium", sliderMedium)}
          ref={sliderMedium}
        >
          {data.map((item, i) => (
            <ReviewCard key={i} {...item} />
          ))}
        </Slider>
        {/* Custom forward and back buttons */}
        <div className="flex justify-center mt-4 gap-7">
          <button
            onClick={() => sliderMedium.current.slickPrev()}
            className="bg-gray-300 w-8 h-8 rounded-full mr-2"
          >
            &#8592;
          </button>
          <button
            onClick={() => sliderMedium.current.slickNext()}
            className="bg-[#52B8AB] w-8 h-8 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Small Slider */}
      <div className="sm:hidden">
        <Slider
          {...createSliderSettings(1, 1, "small", sliderSmall)}
          ref={sliderSmall}
        >
          {data.map((item, i) => (
            <ReviewCard key={i} {...item} />
          ))}
        </Slider>
        {/* Custom forward and back buttons */}
        <div className="flex justify-center mt-4 gap-7">
          <button
            onClick={() => sliderSmall.current.slickPrev()}
            className="bg-gray-300 w-8 h-8 rounded-full mr-2"
          >
            &#8592;
          </button>
          <button
            onClick={() => sliderSmall.current.slickNext()}
            className="bg-[#52B8AB] w-8 h-8 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
};

export default BeforeAndAfterCard;
