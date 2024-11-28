"use client";
import CardComponent from "@/globalElements/Card";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from "@/public/assets/icons/StarIcon";

const TestimonialCard = ({ data }) => {
  const [currentBigSlide, setCurrentBigSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [showMoreStates, setShowMoreStates] = useState(
    Array(data.length).fill(false)
  );

  // Show More handler
  const toggleShowMore = (index) => {
    const updatedStates = [...showMoreStates];
    updatedStates[index] = !updatedStates[index];
    setShowMoreStates(updatedStates);
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 682,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          display: "flex",
          justifyContent: "center", // Center dots horizontally
          flexWrap: "wrap", // Ensure dots don't stack
          gap: "8px", // Ensure equal spacing between dots
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
    customPaging: (i) => {
      
      return (
        <div
          className={`cursor-pointer transition-all duration-300 ${
            currentSlide / settings.slidesToScroll === i
              ? "bg-[#52B8AB] w-8 h-3" // Aktif nokta (yeşil)
              : "bg-gray-300 w-3 h-3" // İnaktif nokta (gri)
          }`}
          style={{
            borderRadius: "999px",
            display: "inline-block",
            margin: currentSlide === i ? "0" : "0 8px", // Aktif nokta için ekstra boşluk yok
            position: currentSlide === i ? "relative" : "static", // Aktif nokta için pozisyonu değiştir
          }}
        ></div>
      );
    },
    afterChange: (index) => setCurrentSlide(index), // Update currentSlide on slide change
  };

  return (
    <>
      {/* Big screen settings */}
      <div className="">
        <Slider {...settings}>
          {data.map(({ stars, text, img, name, job }, i) => {
            const starsArray = Array.from({ length: stars });

            return (
              <div key={i} className="p-4">
                <CardComponent>
                  <div className="flex flex-col gap-4 justify-center min-h-[300px]">
                    <div className="flex gap-[2px] items-center">
                      {/* stars */}
                      {starsArray.map((_, index) => (
                        <span key={index} className="text-[#FFAA00] text-xl">
                          <StarIcon />
                        </span>
                      ))}
                    </div>

                    <div>
                      <div
                        className={`transition-all duration-300 ${
                          showMoreStates[i]
                            ? "max-h-[150px] overflow-y-scroll" // Scroll only when Show More is clicked
                            : "max-h-[150px] overflow-hidden" // Hidden scroll initially
                        }`}
                        style={{ wordBreak: "break-word" }}
                      >
                        &quot;{text}&quot;
                      </div>
                      {text.length > 50 && (
                        <button
                          onClick={() => toggleShowMore(i)}
                          className="text-primary mt-2"
                        >
                          {showMoreStates[i] ? "Show Less" : "Show More"}
                        </button>
                      )}
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
                          <h1 className="font-bold text-sm">{name}</h1>
                          <p className="font-light text-sm">{job}</p>
                        </div>
                      </div>
                      <Image
                        src={"/assets/images/Group.png"}
                        className="object-cover object-center"
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
    </>
  );
};

export default TestimonialCard;
