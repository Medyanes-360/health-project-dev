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
    dots: true, // Ensure dots are enabled
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) =>
      setCurrentSlide((prev) => ({ ...prev, [screenType]: current })),
    arrows: false, // Disable default arrows
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "10px",
          width: "100%",
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
          className="w-fit"
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`cursor-pointer transition-all duration-300  ${
          currentSlide[screenType] / slidesToScroll === i
            ? "bg-[#52B8AB] w-8 h-3"
            : "bg-gray-300 w-3 h-3"
        }`}
        style={{
          borderRadius: "999px",
          display: "inline-block",
          margin:
            currentSlide[screenType] / slidesToScroll === i ? "0" : "0 8px",
          position:
            currentSlide[screenType] / slidesToScroll === i
              ? "relative"
              : "static",
        }}
      ></div>
    ),
  });

  const CardContent = ({ image }) => (
    <div className="p-2">
      <CardComponent className={"!px-5 !py-5 !mt-20 !rounded-2xl"}>
        <div className="w-full relative aspect-[12/9] rounded-2xl">
          <Image
            src={image}
            fill
            className="object-cover object-center rounded-2xl"
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
            <CardContent key={i} {...item} />
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
            <CardContent key={i} {...item} />
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
            <CardContent key={i} {...item} />
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
            onClick={() => sliderSmall.current.slickNext()}
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

export default BeforeAndAfterCard;
