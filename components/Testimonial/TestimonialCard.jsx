"use client";
import CardComponent from "@/globalElements/Card";
import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCard = ({ data }) => {
  // { stars, text, img, name, job }

  const [currentBigSlide, setCurrentBigSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // desktop
  const BigScreenSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentBigSlide(current),
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
          currentBigSlide / BigScreenSettings.slidesToScroll === i
            ? "bg-[#52B8AB] w-8 h-3"
            : "bg-gray-300 w-3 h-3"
        }`}
        style={{
          borderRadius: "999px",
          display: "inline-block",
          margin:
            currentBigSlide / BigScreenSettings.slidesToScroll === i
              ? "0"
              : "0 8px",
          position:
            currentBigSlide / BigScreenSettings.slidesToScroll === i
              ? "relative"
              : "static",
        }}
      ></div>
    ),
  };
  // mobile
  const SmallScreenSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "0px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "start",
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
          currentSlide / SmallScreenSettings.slidesToScroll === i
            ? "bg-[#52B8AB] w-8 h-3"
            : "bg-gray-300 w-3 h-3"
        }`}
        style={{
          borderRadius: "999px",
          display: "inline-block",
          margin:
            currentSlide / SmallScreenSettings.slidesToScroll === i
              ? "0"
              : "0 8px",
          position:
            currentSlide / SmallScreenSettings.slidesToScroll === i
              ? "relative"
              : "static",
        }}
      ></div>
    ),
  };

  // card component
  return (
    <>
      {/* Big screen settings */}

      <div className="hidden lg:block">
        <Slider {...BigScreenSettings}>
          {data.map(({ stars, text, img, name, job }, i) => {
            const starsArray = Array.from({ length: stars });

            return (
              <div key={i} className="p-4">
                <CardComponent>
                  <div className="flex flex-col gap-5 justify-center min-h-[300px]">
                    <div className="flex gap-2 items-center">
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
                          <h1 className="font-bold text-lg whitespace-nowrap">
                            {name}
                          </h1>
                          <p className="font-light whitespace-nowrap">{job}</p>
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
      </div>

      {/* small screen settings */}
      <div className="lg:hidden">
        <Slider {...SmallScreenSettings}>
          {data.map(({ stars, text, img, name, job }, i) => {
            const starsArray = Array.from({ length: stars });

            return (
              <div key={i} className="p-2">
                <div className="flex flex-col gap-5 justify-center min-h-[330px]">
                  <div className="flex gap-2 flex-wrap items-center">
                    {/* stars */}
                    {starsArray.map((data, index) => (
                      <span key={index} className="text-[#FFAA00] text-xl">
                        ★
                      </span>
                    ))}
                    <Image
                      src={"/assets/images/Group.png"}
                      className="object-cover object-center rounded-full ml-auto pr-3"
                      width={30}
                      height={30}
                      alt="que"
                    />
                  </div>

                  <div>
                    <p className="font-light">{text}</p>
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
                        <h1 className="text-nowrap font-normal">{name}</h1>
                        <p className=" text-nowrap font-extralight">{job}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default TestimonialCard;
