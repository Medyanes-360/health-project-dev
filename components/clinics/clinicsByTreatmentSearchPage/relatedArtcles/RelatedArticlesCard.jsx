"use client";
//import CardComponent from "@/globalElements/Card";
import { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedArticlesCard = ({ data }) => {
  // array of {image, description, icon, name,  CreatedAt, seen }

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

export default RelatedArticlesCard;

const CardContent = ({ data }) => {
  const { image, description, icon, name, createdAt, seen } = data;
  return (
    <div className="p-4">
      <div className={"card !px-3 !py-5 "}>
        <div className="card-children">
          <div className="space-y-4 min-h-[450px] sm:min-h-[500px] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-full relative aspect-[12/8] overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  fill
                  className="object-cover object-center"
                  alt="image"
                />
              </div>
              <p>{description}</p>
            </div>

            <div className="flex justify-between gap-1 items-center">
              <div className="flex gap-4 items-center ">
                <Image
                  src={icon}
                  width={40}
                  height={40}
                  className="object-center object-cover rounded-full "
                  alt="icon"
                />

                <div className="space-y-2">
                  <h1 className="font-medium">{name}</h1>
                  <p className="font-light">{createdAt}</p>
                </div>
              </div>

              <div className="px-3 py-1 text-fourth rounded-full bg-primary flex items-center gap-1">
                <Image
                  src={"/assets/images/eye-visibility.png"}
                  alt=""
                  width={25}
                  height={25}
                />
                <p>{seen}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
