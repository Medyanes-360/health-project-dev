"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import CardComponent from "@/globalElements/Card";
import Image from "next/image";

const BestClinicCards = ({ data }) => {
  // array of {clinicName, city, img, rate}
  const [currentSlide, setCurrentSlide] = useState({
    big: 0,
    medium: 0,
    small: 0,
  });

  const generateSliderSettings = (type, slidesToShow, slidesToScroll) => ({
    dots: true,
    speed: 400,
    slidesToShow,
    centerMode: false,

    slidesToScroll,

    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) =>
      setCurrentSlide((prev) => ({ ...prev, [type]: current })),
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "2px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`cursor-pointer transition-all duration-300 ${
          currentSlide[type] / slidesToScroll === i
            ? "bg-white w-8 h-3"
            : "bg-gray-300/50 w-3 h-3"
        }`}
        style={{
          borderRadius: "999px",
          display: "inline-block",
          margin: currentSlide[type] / slidesToScroll === i ? "0" : "0 8px",
          position:
            currentSlide[type] / slidesToScroll === i ? "relative" : "static",
        }}
      ></div>
    ),
  });

  return (
    <>
      {/* Big screen slider */}
      <div className="hidden lg:block ">
        <Slider {...generateSliderSettings("big", 4, 3)}>
          {data?.map((item, index) => (
            <div key={index} className="p-2">
              <CardContent data={item} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Medium screen slider */}
      <div className="hidden sm:block lg:hidden">
        <Slider {...generateSliderSettings("medium", 2, 2)}>
          {data?.map((item, index) => (
            <div key={index} className="p-2">
              <CardContent data={item} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Small screen slider */}
      <div className="sm:hidden">
        <Slider {...generateSliderSettings("small", 1, 1)}>
          {data?.map((item, index) => (
            <div key={index} className="p-2">
              <CardContent data={item} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BestClinicCards;

const CardContent = ({ data }) => {
  const { img, clinicName, city, rate } = data;

  return (
    <div className="bg-[#00000091] hover:bg-black/50 transition-all duration-200 cursor-pointer hover:scale-105 rounded-2xl">
      <div
        className={
          "card !p-2 space-y-2 flex flex-col justify-between min-h-[330px]"
        }
      >
        <div className="card-children">
          {" "}
          <div className="relative aspect-[12/9] overflow-hidden w-full flex justify-end">
            <div className="absolute z-10 m-2 bg-[#FFFFFF52] flex items-center gap-2 rounded-3xl py-1 px-3">
              <span className="text-[#FFAA00] text-3xl">★</span>

              <h1 className="text-fourth text-xl">{rate}</h1>
            </div>
            <Image
              src={img}
              alt="img"
              className="object-center object-cover rounded-2xl"
              fill
            />
          </div>
          <div className="space-y-1.5">
            <h1 className="font-medium text-fourth">{city}</h1>
            <p className="font-light text-fourth">{clinicName}</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
