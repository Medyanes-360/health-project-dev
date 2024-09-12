"use client";
import CardComponent from "@/globalElements/Card";
import { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecentHairTransplantReviewCard = ({ data }) => {
  // array of {icon, rate, name, operation, county, date, image, title, description, hospitalName}

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

  return (
    <>
      {/* Big Slider */}
      <div className="hidden lg:block">
        <Slider
          {...createSliderSettings(3, 3, "big", sliderBig)}
          ref={sliderBig}
        >
          {data.map((item, i) => (
            <CardContent key={i} data={item} />
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
            <CardContent key={i} data={item} />
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
            <CardContent key={i} data={item} />
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

export default RecentHairTransplantReviewCard;

const CardContent = ({ data }) => {
  const {
    icon,
    name,
    operation,
    county,
    date,
    image,
    title,
    description,
    hospitalName,
    rate,
  } = data;

  return (
    <div className="px-4">
      <CardComponent className={"!px-0 !py-5"}>
        <div className=" sm:min-h-[750px]">
          <div className="bg-white-dark flex gap-2 items-center px-3 py-5 justify-between sm:min-h-[150px]">
            {/* image */}
            <div className="h-16 w-16 rounded-full grid place-content-center bg-primary/30">
              <div className="w-10 aspect-[12/12] relative overflow-hidden ">
                <Image
                  src={icon}
                  alt="icon"
                  fill
                  className="object-center object-cover rounded-md"
                />
              </div>
            </div>
            {/* doc data */}
            <div className="space-y-2">
              <h1>
                {name} / {operation}
              </h1>
              <p className="text-sm">
                {county} {date}
              </p>
            </div>

            {/* star */}
            <div>
              <h1 className="flex items-center gap-1">
                <span className="text-[#FFAA00] text-3xl">★</span>
                {rate}
              </h1>
            </div>
          </div>

          <div className="px-6 py-5 space-y-3">
            <div className="w-full aspect-[12/8] relative overflow-hidden">
              <Image
                src={image}
                alt="icon"
                fill
                className="object-center object-cover rounded-md"
              />
            </div>

            <h1 className="font-medium">{title}</h1>
            <p className="font-light">{description}</p>

            <div className="flex gap-1">
              {/* location icon */}
              <p className="text-primary">{hospitalName}</p>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
};
