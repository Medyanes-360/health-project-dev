"use client";
import ButtonComponent from "@/globalElements/Button";
import CardComponent from "@/globalElements/Card";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MedicalAssessmentCard = ({ data }) => {
  // array of { docName ,location, reviews, image, description }
  const [currentSlide, setCurrentSlide] = useState({
    big: 0,
    small: 0,
  });

  const sliderBig = useRef(null);
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
      {/* Big screen */}
      <div className="hidden md:block">
        <Slider
          {...createSliderSettings(2, 2, "big", sliderBig)}
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
      {/* small screen */}
      <div className="md:hidden">
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
            className="bg-gray-300 w-8 h-8 rounded-full mr-2 text-fourth"
          >
            &#8592;
          </button>
          <button
            onClick={() => sliderSmall.current.slickNext()}
            className="bg-[#52B8AB] w-8 h-8 rounded-full text-fourth"
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
};

export default MedicalAssessmentCard;

const CardContent = ({ data }) => {
  const { docName, location, reviews, image, description, icon } = data;

  return (
    <div className="px-4">
      <CardComponent className={"p-0 space-y-7"}>
        <div className="flex flex-col justify-between min-h-[840px]">
          <div className="space-y-5 px-5 py-4">
            <div className="flex justify-between gap-1 items-center bg-white-dark ">
              <div>
                <Image
                  src={icon}
                  alt="image"
                  width={50}
                  height={50}
                  className="object-center object-cover rounded-full"
                />
              </div>

              <div className="space-y-2">
                <h1>{docName} • Hair transplant</h1>
                <p>{location}</p>
              </div>

              <div className="space-y-2">
                <h1 className>
                  <span className="text-[#FFAA00] text-3xl">★</span>
                  Good
                </h1>

                <p>{reviews} Patient verified reviews</p>
              </div>
            </div>
            <div className="w-full aspect-[12/8] relative overflow-hidden">
              <Image
                src={image}
                alt="alt"
                fill
                className="object-center object-cover rounded-2xl"
              />
            </div>
            <p className="font-medium">{description}</p>
          </div>
          <div className="px-10 py-4 space-y-5">
            <div className="flex justify-between gap-2">
              <ButtonComponent
                className={"text-primary rounded-md bg-third/50 w-full"}
                title={"Info"}
              />
              <ButtonComponent
                className={"text-fourth rounded-md bg-primary w-full"}
                title={"Enquire"}
              />
            </div>
            <p className="text-center text-primary">More details</p>
          </div>
        </div>
      </CardComponent>
    </div>
  );
};
