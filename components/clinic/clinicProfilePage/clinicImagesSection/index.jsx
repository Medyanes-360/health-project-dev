"use client";
import { useGlobalStore } from "@/utils/globalStore";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";
import ButtonComponent from "@/globalElements/Button";
import IconCamera from "@/public/assets/icons/CameraIcon";

export default function ClinicImagesSection({ images }) {
  const openImageModal = useGlobalStore((state) => state.openImageModal);
  const handleOpenImageModal = (imageSrc) => {
    openImageModal({
      imageSources: images,
      imageSrcToShowFirst: imageSrc,
    });
  };
  return (
    <ExtraLargePageContainer>
      <div className="grid grid-cols-3 md:grid-cols-2 h-full w-full justify-center gap-2 md:gap-4">
        <Image
          className="h-full w-full p-0.5 rounded-3xl col-span-2 md:col-span-1"
          src={images[0]}
          alt=""
          width={1000}
          height={1000}
        />
        <div className="grid md:grid-cols-2 h-full w-full items-center gap-2 md:gap-4 relative">
          {images.slice(1).map((src, index) => {
            return (
              <Image
                className={`h-full w-full p-0.5 rounded-2xl md:flex ${
                  // Mobilde son iki resmi gizler
                  index >= 2 ? "hidden" : ""
                } `}
                src={src}
                alt=""
                width={1000}
                height={1000}
              />
            );
          })}
          <ButtonComponent
            onClick={() => {
              handleOpenImageModal(images[0]);
            }}
            className={
              "border bg-third/60 backdrop-blur-md text-bgDarkWhite gap-1 md:gap-2 !text-xs absolute bottom-4 right-4 z-50 !px-2 md:!px-5 !py-1 flex items-center justify-center rounded-xl w-fit"
            }
          >
            <IconCamera className=" text-lg md:text-xl" />
            <p className="flex jus items-center">See all</p>
          </ButtonComponent>
        </div>
      </div>
    </ExtraLargePageContainer>
  );
}
