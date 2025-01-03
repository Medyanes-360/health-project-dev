"use client";
//import CardComponent from "@/globalElements/Card";
import { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HairTransplantReviewsCard = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState({
    big: 0,
    small: 0,
  });

  // References for sliders
  const sliderBig = useRef(null);
  const sliderSmall = useRef(null);

  // Slider settings
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
    appendDots: (dots) => (
      <div style={{ borderRadius: "10px", padding: "10px" }}>
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
          currentSlide[screenType] / slidesToScroll === i
            ? "bg-[#52B8AB] w-8 h-3"
            : "bg-gray-300 w-3 h-3"
        }`}
        style={{
          borderRadius: "999px",
          display: "inline-block",
          margin:
            currentSlide[screenType] / slidesToScroll === i ? "0" : "0 8px",
        }}
      ></div>
    ),
  });

  return (
    <>
      {/* Big Screen Slider */}
      <div className="hidden lg:block">
        <Slider
          {...createSliderSettings(4, 4, "big", sliderBig)}
          ref={sliderBig}
        >
          {data?.map((item, i) => (
            <CardContent key={i} data={item} />
          ))}
        </Slider>
        {/* Custom forward and back buttons */}
        <div className="flex justify-center mt-4 gap-7 text-white">
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

      {/* Small Screen Slider */}
      <div className="lg:hidden">
        <Slider
          {...createSliderSettings(1, 1, "small", sliderSmall)}
          ref={sliderSmall}
        >
          {data?.map((item, i) => (
            <SmallCardContent key={i} data={item} />
          ))}
        </Slider>
        {/* Custom forward and back buttons */}
        <div className="text-white flex justify-center mt-4 gap-7">
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

export default HairTransplantReviewsCard;

const CardContent = ({ data }) => {
  const { stars, text, img, name, job } = data;
  const starsArray = Array.from({ length: stars });
  const [showMore, setShowMore] = useState(false); // Show more state

  const toggleShowMore = () => {
    setShowMore(!showMore); // Toggle the expanded state
  };

  return (
    <div className="p-4">
      <div className="card">
        <div className="card-children">
          <div className="flex flex-col justify-between gap-5 min-h-[300px]">
            <div>
              <div className="flex gap-2 items-center">
                {/* stars */}
                {starsArray.map((_, i) => (
                  <span key={i} className="text-[#FFAA00] text-xl">
                    ★
                  </span>
                ))}
              </div>

              <div>
                {/* Scrollable text based on the "show more" state */}
                <div
                  className={`transition-all duration-300 ${
                    showMore
                      ? "max-h-[150px] overflow-y-scroll" // Show more scrollable area
                      : "max-h-[150px] overflow-hidden" // Limited height when collapsed
                  }`}
                >
                  {text}
                </div>
                {text.length > 50 && (
                  <button
                    onClick={toggleShowMore}
                    className="text-primary mt-2 underline"
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-between gap-3 items-center">
              {/* the image, job, and name */}
              <div className="flex gap-4 items-center">
                <Image
                  src={img}
                  className="object-cover object-center rounded-full"
                  width={40}
                  height={40}
                  alt="picture"
                />
                <div className="space-y-2">
                  <h1 className="font-bold text-sm">{name}</h1>
                  <p className="font-light text-sm">{job}</p>
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
        </div>
      </div>
    </div>
  );
};

const SmallCardContent = ({ data }) => {
  const { stars, text, img, name, job } = data;
  const starsArray = Array.from({ length: stars });
  const [showMore, setShowMore] = useState(false); // Show more state

  const toggleShowMore = () => {
    setShowMore(!showMore); // Toggle the expanded state
  };

  return (
    <div className="p-1">
      <div className="card">
        <div className="card-children">
          <div className="flex flex-col gap-2  min-h-[294px]">
            <div>
              <div className="flex gap-2 items-center">
                {/* stars */}
                {starsArray?.map((_, index) => (
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

              <div className="text-[16px] ">
                {/* Scrollable text based on the "show more" state */}
                <div
                  className={`transition-all duration-300   ${
                    showMore
                      ? "max-h-[100px] overflow-y-scroll" // Show more scrollable area
                      : "max-h-[50px] overflow-hidden" // Limited height when collapsed
                  }`}
                >
                  {text}
                </div>
                {text.length > 100 && (
                  <button
                    onClick={toggleShowMore}
                    className="text-primary mt-2 underline"
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>
            </div>

            <div className="flex justify-between gap-3 items-center">
              {/* the image, job, and name */}
              <div className="flex gap-4 items-center">
                <Image
                  src={img}
                  className="object-cover object-center rounded-full"
                  width={40}
                  height={40}
                  alt="picture"
                />
                <div className="space-y-2">
                  <h1 className="font-normal text-sm">{name}</h1>
                  <p className="font-extralight text-sm">{job}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
