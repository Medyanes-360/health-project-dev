"use client";
import CardComponent from "@/globalElements/Card";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCard = ({ data }) => {
  // { stars, text, img, name, job }

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
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
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`cursor-pointer transition-all duration-300 ${
          currentSlide / settings.slidesToScroll === i
            ? "bg-[#52B8AB] w-8 h-3"
            : "bg-gray-300 w-3 h-3"
        }`}
        style={{
          borderRadius: "999px",
          display: "inline-block",
          margin: currentSlide / settings.slidesToScroll === i ? "0" : "0 8px",
          position:
            currentSlide / settings.slidesToScroll === i
              ? "relative"
              : "static",
        }}
      ></div>
    ),
  };

  // card component
  return (
    <Slider {...settings}>
      {data.map(({ stars, text, img, name, job }, i) => {
        const starsArray = Array.from({ length: stars });

        return (
          <div key={i} className="p-4">
            <CardComponent>
              <div className="flex flex-col gap-5 justify-center ">
                <div className="flex gap-2 flex-wrap items-center">
                  {/* stars */}
                  {starsArray.map((i, index) => (
                    <span key={i} className="text-[#FFAA00] text-xl">
                      ★
                    </span>
                  ))}
                </div>

                <div>
                  <p>{text}</p>
                </div>

                <div className="flex justify-between gap-3 items-center">
                  {/* the image job and the name */}
                  <div className="flex gap-4 items-center">
                    <Image
                      src={img}
                      className="object-cover object-center rounded-full"
                      width={40}
                      height={40}
                      alt="picture"
                    />
                    <div className="space-y-2">
                      <h1 className="font-bold text-lg ">{name}</h1>
                      <p className="font-light">{job}</p>
                    </div>
                  </div>
                  <Image
                    src={"/assets/images/Group.png"}
                    className="object-cover object-center rounded-full"
                    width={30}
                    height={30}
                    alt="que"
                  />
                </div>
              </div>
            </CardComponent>
          </div>
        );
      })}
    </Slider>
  );
};

export default TestimonialCard;
