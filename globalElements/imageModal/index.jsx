"use client";
import { useGlobalStore } from "@/utils/globalStore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageModal() {
  // Modal tetikleme:
  // const handleOpenImageModal = (imageSrc) => {
  //   openImageModal({
  //     imageSources: imageSources, // image'ların src propları. imagetoShowfirst'ü de içermelidir.
  // eğer tek img gönderilecekse imageSources length'i 1 olmalı.
  //     imageSrcToShowFirst: imageSrc, // tıklandığında ilk gösterilecek img'ın src propu
  //   });
  // };

  const isModalOpen = useGlobalStore((state) => state.isImageModalOpen);
  const closeImageModal = useGlobalStore((state) => state.closeImageModal);
  const imageModalOptions = useGlobalStore((state) => state.imageModalOptions);
  const [imageSrcToShow, setImageSrcToShow] = useState(
    imageModalOptions.imageSrcToShowFirst
  );
  useEffect(() => {
    setImageSrcToShow(imageModalOptions.imageSrcToShowFirst);
  }, [imageModalOptions]);
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
      className="fixed left-0 w-full h-[100vh] top-0  z-[5000000]  bg-black/80   flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[95%] h-[95%]  md:w-[75%] md:h-[75%] flex items-center justify-center "
      >
        <div className="flex items-center justify-between  gap-1  w-full h-full">
          {imageModalOptions.imageSources && (
            <button
              onClick={prevImage}
              className="rotate-180 hover:scale-110 transition-all duration-200 scale-40"
            >
              <svg
                className="w-9 md:w-14 h-9 md:h-14"
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
          )}
          <div className="flex items-center justify-between  w-full h-full">
            <Image
              className=""
              width={1280}
              height={720}
              alt=""
              src={imageSrcToShow}
            />
          </div>
          {imageModalOptions.imageSources && (
            <button
              onClick={nextImage}
              className=" hover:scale-110 transition-all duration-200"
            >
              <svg
                className="w-9 md:w-14 h-9 md:h-14"
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
          )}
        </div>
      </div>
    </div>
  );
}
