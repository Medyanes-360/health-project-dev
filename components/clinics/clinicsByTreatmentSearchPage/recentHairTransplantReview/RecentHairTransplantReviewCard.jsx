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
            className="p-2 rounded-full bg-[#9199A3]/40"
            onClick={() => sliderBig.current.slickPrev()}
          >
            <Image
              src={"/assets/icons/left.png"}
              alt=""
              width={15}
              height={15}
            />
          </button>
          <button
            className="p-2 rounded-full bg-[#52B8AB]/40"
            onClick={() => sliderBig.current.slickNext()}
          >
            <Image
              src={"/assets/icons/right.png"}
              alt=""
              width={15}
              height={15}
            />
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
            className="p-2 rounded-full bg-[#9199A3]/40"
            onClick={() => sliderMedium.current.slickPrev()}
          >
            <Image
              src={"/assets/icons/left.png"}
              alt=""
              width={15}
              height={15}
            />
          </button>
          <button
            className="p-2 rounded-full bg-[#52B8AB]/40"
            onClick={() => sliderMedium.current.slickNext()}
          >
            <Image
              src={"/assets/icons/right.png"}
              alt=""
              width={15}
              height={15}
            />
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
            className="p-2 rounded-full bg-[#9199A3]/40"
            onClick={() => sliderSmall.current.slickPrev()}
          >
            <Image
              src={"/assets/icons/left.png"}
              alt=""
              width={15}
              height={15}
            />
          </button>
          <button
            className="p-2 rounded-full bg-[#52B8AB]/40"
            onClick={() => sliderBig.current.slickNext()}
          >
            <Image
              src={"/assets/icons/right.png"}
              alt=""
              width={15}
              height={15}
            />
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

  const [expanded, setExpanded] = useState(false); // Expanded state for description

  const toggleExpanded = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  return (
    <div className="p-4">
      <CardComponent className={"!p-0 "}>
        <div className="sm:min-h-[600px]">
          <div className="bg-white-dark flex gap-2 items-center px-3 py-5 justify-between sm:min-h-[150px] rounded-t-2xl">
            {/* Image */}
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

            {/* Doctor Data */}
            <div className="space-y-2 text-sm">
              <h1>
                {name} / {operation}
              </h1>
              <p className="text-xs">
                {county} {date}
              </p>
            </div>

            {/* Rating */}
            <div>
              <h1 className="flex items-center gap-1">
                <span className="text-[#FFAA00] text-2xl">★</span>
                {rate}
              </h1>
            </div>
          </div>

          <div className="px-6 py-5 space-y-3">
            <div className="w-[90%] mx-auto aspect-[12/8] relative overflow-hidden">
              <Image
                src={image}
                alt="img"
                fill
                className="object-center object-cover rounded-md"
              />
            </div>

            <h1 className="text-sm">{title}</h1>

            {/* Description with toggle */}
            <p
              className={`text-sm font-light transition-all duration-300 ${
                expanded ? "line-clamp-4" : "line-clamp-2"
              }`}
            >
              {description}
            </p>
            <button
              onClick={toggleExpanded}
              className="text-primary mt-2 underline"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>

            <div className="flex gap-1">
              {/* Location icon */}
              <div className="flex gap-2 items-center">
                <Image
                  width={25}
                  height={25}
                  alt="img"
                  src={"/assets/images/health.png"}
                />
                <p className="text-primary text-sm">{hospitalName}</p>
              </div>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
};
