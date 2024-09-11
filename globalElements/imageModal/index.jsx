"use client";
import { useGlobalStore } from "@/zustand/globalStore";
import Image from "next/image";
import { useState } from "react";

export default function ImageModal() {
  //       imageModalOptions: {
  //     isOpen: false,
  //     imageSources: [],
  //     imageSrcToShowFirst: "",
  //   },

  const isModalOpen = useGlobalStore((state) => state.isImageModalOpen);
  const closeImageModal = useGlobalStore((state) => state.closeImageModal);
  const imageModalOptions = useGlobalStore((state) => state.imageModalOptions);
  const [imageSrcToShow, setImageSrcToShow] = useState(
    imageModalOptions.imageSources[0]
  );
  if (!isModalOpen) {
    return null;
  }
  const nextImage = () => {
    const currentIndex = imageModalOptions.imageSources.indexOf(imageSrcToShow);
    const nextIndex =
      currentIndex + 1 < imageModalOptions.imageSources.length
        ? currentIndex + 1
        : 0;
    setImageSrcToShow(imageModalOptions.imageSources[nextIndex]);
  };
  const prevImage = () => {
    const currentIndex = imageModalOptions.imageSources.indexOf(imageSrcToShow);
    const prevIndex =
      currentIndex - 1 >= 0
        ? currentIndex - 1
        : imageModalOptions.imageSources.length - 1;
    setImageSrcToShow(imageModalOptions.imageSources[prevIndex]);
  };

  return (
    <div
      onClick={closeImageModal}
      //   doesnt work with tailwind :
      style={{ width: "100vw", height: "100vh" }}
      className="fixed left-0 top-0 p-60  overflow-hidden z-[50000]  bg-black/80   flex items-center justify-center"
    >
      <div
        style={{
          width: "75%",
          height: "75%",
        }}
        onClick={(e) => e.stopPropagation()}
        className="  "
      >
        <div className="flex  relative items-center justify-between   h-full  ">
          <button onClick={prevImage} className="!transform !scale-x-[-1]  ">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#52B8AB"
              />
              <path
                d="M16.03 11.4699L13.03 8.46994C12.74 8.17994 12.26 8.17994 11.97 8.46994C11.68 8.75994 11.68 9.23994 11.97 9.52994L13.69 11.2499H8.5C8.09 11.2499 7.75 11.5899 7.75 11.9999C7.75 12.4099 8.09 12.7499 8.5 12.7499H13.69L11.97 14.4699C11.68 14.7599 11.68 15.2399 11.97 15.5299C12.12 15.6799 12.31 15.7499 12.5 15.7499C12.69 15.7499 12.88 15.6799 13.03 15.5299L16.03 12.5299C16.32 12.2399 16.32 11.7599 16.03 11.4699Z"
                fill="#52B8AB"
              />
            </svg>
          </button>
          {imageModalOptions.imageSources.map((src, i) => {
            return (
              <Image
                key={i}
                className={`${src == imageSrcToShow ? "inline" : "hidden"}`}
                style={{
                  maxHeight: "100%",
                  width: "90%",
                  margin: "auto",
                }}
                width={100}
                height={50}
                src={src}
              />
            );
          })}
          <button onClick={nextImage} style={{}} className="">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#52B8AB"
              />
              <path
                d="M16.03 11.4699L13.03 8.46994C12.74 8.17994 12.26 8.17994 11.97 8.46994C11.68 8.75994 11.68 9.23994 11.97 9.52994L13.69 11.2499H8.5C8.09 11.2499 7.75 11.5899 7.75 11.9999C7.75 12.4099 8.09 12.7499 8.5 12.7499H13.69L11.97 14.4699C11.68 14.7599 11.68 15.2399 11.97 15.5299C12.12 15.6799 12.31 15.7499 12.5 15.7499C12.69 15.7499 12.88 15.6799 13.03 15.5299L16.03 12.5299C16.32 12.2399 16.32 11.7599 16.03 11.4699Z"
                fill="#52B8AB"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
