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
    dots: false,
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
  });

  const CardContent = ({ image }) => (
    <div className="p-2">
      <CardComponent className={"!px-5 !py-5 !mt-5 !rounded-2xl"}>
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
          <button onClick={() => sliderBig.current.slickPrev()}>
            <Image
              src={"/assets/images/arrow-left.png"}
              alt=""
              width={30}
              height={30}
            />
          </button>
          <button onClick={() => sliderBig.current.slickNext()}>
            <Image
              src={"/assets/images/arrow-right.png"}
              alt=""
              width={30}
              height={30}
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
          <button onClick={() => sliderMedium.current.slickPrev()}>
            <Image
              src={"/assets/images/arrow-left.png"}
              alt=""
              width={30}
              height={30}
            />
          </button>
          <button onClick={() => sliderMedium.current.slickNext()}>
            <Image
              src={"/assets/images/arrow-right.png"}
              alt=""
              width={30}
              height={30}
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
          <button onClick={() => sliderSmall.current.slickPrev()}>
            <Image
              src={"/assets/images/arrow-left.png"}
              alt=""
              width={30}
              height={30}
            />
          </button>
          <button onClick={() => sliderSmall.current.slickNext()}>
            <Image
              src={"/assets/images/arrow-right.png"}
              alt=""
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default BeforeAndAfterCard;