"use client";
import { useState } from "react";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";
import BeforeAfterPhotoSlider from "@/globalElements/beforeAfterPhotoSlider";

export default function BeforeAndAfterPictures() {
  const data = {
    slides: [
      ["/assets/images/beforeAfter.png", "/assets/images/clinic1.png"],
      ["/assets/images/clinic1.png", "/assets/images/beforeAfter.png"],
      ["/assets/images/beforeAfter.png", "/assets/images/clinic1.png"],
      ["/assets/images/clinic1.png", "/assets/images/beforeAfter.png"],
      ["/assets/images/beforeAfter.png", "/assets/images/clinic1.png"],
    ],
    texts: {
      title: "Before and After Pictures (8)",
      text: "Last price update — 29.04.2024. Prices can be changed depending on the medical case and doctor's recommendations.",
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  console.log("Rendering slide with index:", currentIndex);

  return (
    <div id="beforeAndAfterPhotosDiv">
      <div className="py-8 flex flex-col gap-2">
        <h2 className="font-poppins text-lg font-semibold leading-6">
          {data.texts.title}
        </h2>

        <p>{data.text_1}</p>
        <a className="font-poppins text-sm text-[0.86rem] leading-6">
          {" "}
          {data.texts.text}{" "}
        </a>
      </div>

      <div className="flex items-center justify-center h-[400px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div className="cursor-pointer mr-4" onClick={prevSlide}>
          <Image
            src="/assets/clinic/arrow-square-left.svg"
            alt="Previous Slide"
            width={30}
            height={30}
          />
        </div>

        <BeforeAfterPhotoSlider
          width="832px"
          beforeImageSrc={data.slides[currentIndex][0]}
          afterImageSrc={data.slides[currentIndex][1]}
          containerclassname="!w-full !h-full"
        />

        <div className="cursor-pointer ml-4" onClick={nextSlide}>
          <Image
            src="/assets/clinic/arrow-square-right.svg"
            alt="Next Slide"
            width={30}
            height={30}
          />
        </div>
      </div>

      <div className="flex justify-center gap-2 items-center mt-4 mb-4 cursor-pointer">
        {data.slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`rounded-full h-2 transition-all duration-300 ease-in-out ${
              currentIndex === slideIndex
                ? "w-12 bg-[#52B8AB]" // Aktif olan için genişlik 48px ve renk #52B8AB
                : "w-2 bg-transparent border-2 border-[#52B8AB]" // Diğerleri için varsayılan stil
            }`}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
}
