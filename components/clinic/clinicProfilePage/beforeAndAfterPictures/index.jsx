"use client";
import { useState } from "react";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";

export default function BeforeAndAfterPictures() {
  const data = {
    slides: [
      {
        url: "https://media.istockphoto.com/id/1522411950/tr/foto%C4%9Fraf/%D0%BDoung-smiling-woman-before-and-after-veneers-installation-%D1%81orrection-of-uneven-teeth-with.jpg?s=612x612&w=0&k=20&c=jOKIQ8eJUmIiXYpZxRPjjtV2Vfx8PVsvwKZwzqJKgWc=",
      },
      {
        url: "https://media.istockphoto.com/id/2065536057/tr/foto%C4%9Fraf/young-womans-smile-before-and-after-teeth-straightening.jpg?s=612x612&w=0&k=20&c=KD83yzRNf-Fyh1dXZJLw2EdkzzXCCGwQHZMjxfboD5o=",
      },
      {
        url: "https://media.istockphoto.com/id/1271669391/tr/foto%C4%9Fraf/di%C5%9F-beyazlatma-i%C5%9Flemi-%C3%B6ncesi-ve-sonras%C4%B1-g%C3%BCl%C3%BCmseyen-kad%C4%B1n.jpg?s=612x612&w=0&k=20&c=ObNC7_W9irCb3vDiCpuF2i025t-TE2turhcXBiFIsTo=",
      },
      {
        url: "https://media.istockphoto.com/id/1522411950/tr/foto%C4%9Fraf/%D0%BDoung-smiling-woman-before-and-after-veneers-installation-%D1%81orrection-of-uneven-teeth-with.jpg?s=612x612&w=0&k=20&c=jOKIQ8eJUmIiXYpZxRPjjtV2Vfx8PVsvwKZwzqJKgWc=",
      },
      {
        url: "https://media.istockphoto.com/id/1507241172/tr/foto%C4%9Fraf/a-womans-smile-in-close-up-before-and-after-the-bleaching-procedure-at-the-dentist.jpg?s=612x612&w=0&k=20&c=-wl708YIdOSO6KhxltvZg-GlgXluh7J6G3qObz73s-s=",
      },
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
      <div className="flex items-center justify-center h-[600px]">
        <div className="cursor-pointer mr-4" onClick={prevSlide}>
          <Image
            src="/assets/clinic/arrow-square-left.svg"
            alt="Previous Slide"
            width={30}
            height={30}
          />
        </div>

        <div className="max-w-[800px] h-[600px] w-full m-auto px-4 relative ">
          <div
            style={{ backgroundImage: `url(${data.slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-500 ease-in-out"
          ></div>
        </div>

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
