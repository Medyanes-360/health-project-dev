"use client";
import { useGlobalStore } from "@/utils/globalStore";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";
import ButtonComponent from "@/globalElements/Button";
import IconCamera from "@/public/assets/icons/CameraIcon";

export default function ClinicImages({ images }) {
  const openImageModal = useGlobalStore((state) => state.openImageModal);
  const handleOpenImageModal = (imageSrc) => {
    openImageModal({
      imageSources: images,
      imageSrcToShowFirst: imageSrc,
    });
  };

  return (
    <ExtraLargePageContainer>
      <div className="grid grid-cols-3 md:grid-cols-2 h-full w-full justify-center gap-2 md:gap-4  relative">
        <div className="flex w-full h-full relative col-span-2 md:col-span-1">
          <Image
            className="h-full w-full p-0.5 rounded-xl md:rounded-3xl"
            src={images[0]}
            alt=""
            width={592}
            height={401}
          />

          {/* Mobil görünümdeki modal butonu */}
          <ButtonComponent
            onClick={() => {
              handleOpenImageModal(images[0]);
            }}
            whileHover={{
              scale: [null, 1.1],
              boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
            }}
            transition={{
              duration: 0.3,
            }}
            className={
              "border bg-white/45 backdrop-blur text-white font-light gap-1 md:gap-2 !text-sm md:!text-base absolute bottom-4 md:hidden flex right-4 z-50 !px-2 md:!px-3 !py-1  !rounded-xl min-w-[124px] min-h-[36px] items-center"
            }
          >
            <IconCamera className="text-2xl" />
            <p className="mt-[2px]">Show all</p>
          </ButtonComponent>
        </div>
        <div className="grid md:grid-cols-2 h-full w-full items-center gap-2 md:gap-4">
          {images.slice(1).map((src, index) => {
            return (
              <Image
                key={index}
                className={`h-full w-full p-0.5 rounded-xl md:rounded-3xl md:flex ${
                  // Mobilde son iki resmi gizler
                  index >= 2 ? "hidden" : ""
                } `}
                src={src}
                alt=""
                width={288}
                height={192}
              />
            );
          })}
        </div>

        {/* Desktop görünümdeki modal butonu */}
        <ButtonComponent
          onClick={() => {
            handleOpenImageModal(images[0]);
          }}
          whileHover={{
            scale: [null, 1.1],
            boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
          }}
          transition={{
            duration: 0.3,
          }}
          className={
            "border bg-white/45 backdrop-blur text-white font-light gap-1 md:gap-2 !text-sm md:!text-base absolute bottom-4 hidden md:flex md:right-4 z-50 !px-2 md:!px-3 !py-1  !rounded-xl min-w-[124px] min-h-[36px] items-center"
          }
        >
          <IconCamera className="text-2xl" />
          <p className="mt-[2px]">Show all</p>
        </ButtonComponent>
      </div>
    </ExtraLargePageContainer>
  );
}
