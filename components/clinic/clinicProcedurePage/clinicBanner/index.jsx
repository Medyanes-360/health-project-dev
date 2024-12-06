"use client";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { MotionDiv } from "@/globalElements/motion";
import { useGlobalStore } from "@/utils/globalStore";
import Image from "next/image";

export default function ClinicBanner() {
  const data = {
    clinicBannerImage:
      "/assets/images/private-clinic-design-build-aspect-ratio.jpg",
    clinicImages: [
      "/assets/images/private-clinic-design-build-aspect-ratio.jpg",
      "/assets/images/private-clinic-design-build-aspect-ratio.jpg",
      "/assets/images/private-clinic-design-build-aspect-ratio.jpg",
      "/assets/images/private-clinic-design-build-aspect-ratio.jpg",
      "/assets/images/private-clinic-design-build-aspect-ratio.jpg",
      "/assets/images/private-clinic-design-build-aspect-ratio.jpg",
      "/assets/images/private-clinic-design-build-aspect-ratio.jpg",
      "/assets/images/private-clinic-design-build-aspect-ratio.jpg",
      "/assets/images/private-clinic-design-build-aspect-ratio.jpg",
      "/assets/images/private-clinic-design-build-aspect-ratio.jpg",
    ],
  };
  const openImageModal = useGlobalStore((state) => state.openImageModal);

  // sample | ImageModal triggering
  const handleOpenImageModal = (imageSrc) => {
    openImageModal({
      imageSrcToShowFirst: imageSrc,
      imageSources: data.clinicImages,
    });
  };

  return (
    <ExtraLargePageContainer className="mt-12">
      <MotionDiv
        initial={{
          scale: "110%",
          opacity: 0,
        }}
        whileInView={{
          scale: "100%",
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className=" max-h-[440px] rounded-3xl relative w-full overflow-hidden"
      >
        <Image
          className=" w-full h-full"
          src={data.clinicBannerImage}
          alt=""
          width={1200}
          height={440}
        />
        <div className="absolute   flex gap-3 bottom-[19px] right-1">
          {data.clinicImages.slice(0, 4).map((imageSrc, index) => {
            return (
              <MotionDiv
                key={index}
                initial={{
                  x: "-30px",
                  opacity: 0,
                }}
                whileInView={{
                  x: "0",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 * (index + 1),
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                onClick={() => handleOpenImageModal(imageSrc)}
              >
                <Image
                  className=" w-[80px] opacity-60 scale-90 hover:scale-100 border border-transparent hover:opacity-100 cursor-pointer transition-all duration-200 hover:border-primary h-[80px] rounded-xl"
                  src={imageSrc}
                  alt=""
                  width={1200}
                  height={440}
                />
              </MotionDiv>
            );
          })}
          <span className="bg-black/70   border border-transparent scale-90 hover:scale-100 hover:opacity-100 cursor-pointer transition-all duration-200 hover:border-primary  text-white w-[80px] h-[80px] rounded-xl flex items-center justify-center">
            +{data.clinicImages.length - 4}
          </span>
        </div>
      </MotionDiv>
    </ExtraLargePageContainer>
  );
}
