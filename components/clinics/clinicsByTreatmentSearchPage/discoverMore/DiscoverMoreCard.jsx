"use client";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DiscoverMoreCardContent from "../reusables/DiscoverMoreCard";
import Image from "next/image";

const DiscoverMoreCard = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const ScreenSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    arrows: false,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <Slider {...ScreenSettings} ref={sliderRef}>
        {data.map((object, i) => (
          <DiscoverMoreCardContent key={i} data={object} />
        ))}
      </Slider>
      <div className="flex justify-center mt-4 gap-7">
        <button
          className="p-2 rounded-full bg-[#9199A3]/40"
          onClick={handlePrev}
        >
          <Image src={"/assets/icons/left.png"} alt="" width={15} height={15} />
        </button>
        <button
          className="p-2 rounded-full bg-[#52B8AB]/40"
          onClick={handleNext}
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
  );
};

export default DiscoverMoreCard;
