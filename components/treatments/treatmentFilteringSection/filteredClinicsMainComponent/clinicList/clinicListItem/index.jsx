"use client";
import ButtonComponent from "@/globalElements/Button";
import { useGlobalStore } from "@/zustand/globalStore";
import Image from "next/image";

const mockImageSources = [
  "/assets/images/clinic1.png",
  "/assets/images/clinic2.png",
  "/assets/images/clinic3.png",
  "/assets/mocks/clinicImage.png",
];
export default function ClinicListItem() {
  const openImageModal = useGlobalStore((state) => state.openImageModal);
  const imageSources = mockImageSources;
  const handleOpenImageModal = (imageSrc) => {
    openImageModal({
      imageSources: imageSources,
      imageSrcToShowFirst: imageSrc,
    });
  };
  // TODO: IMAGE MODAL GLOBAL COMPONENTI OLUŞTURULACAK.
  return (
    <div className="relative grid grid-flow-col-dense mb-3 grid-cols-9 gap-5 h-[386px] items-center border min-w-[900px]  border-[#D9D9D91F] px-7 rounded-3xl shadow-lg">
      <div className="col-span-3 h-full    flex flex-col justify-center items-center">
        <Image
          className="h-48 w-full p-0.5  rounded-3xl cursor-pointer hover:opacity-90"
          src={imageSources[0]}
          onClick={() => {
            handleOpenImageModal(imageSources[0]);
          }}
          alt=""
          width={100}
          height={100}
        />
        <div className="grid grid-cols-3 w-full items-center   ">
          {imageSources.slice(1).map((src, index) => {
            return (
              <Image
                key={index}
                onClick={() => {
                  handleOpenImageModal(src);
                }}
                className="h-20 w-full p-0.5  rounded-2xl cursor-pointer hover:opacity-90 "
                src={src}
                alt=""
                width={100}
                height={100}
              />
            );
          })}
        </div>
      </div>
      <div className="col-span-4 flex flex-col items-start">
        <div className="flex items-center">
          <Image
            className="rounded-full w-[44px] h-[44px]"
            src="/assets/mocks/clinicImage.png"
            alt=""
            width={44}
            height={44}
          />
          <div className="ml-3 ">
            <p className="font-semibold mb-2 text-sm ">
              Adem and Havva Medical Center
            </p>
            <span className="flex items-center">
              <Image
                className="mr-2"
                src="/assets/icons/locationIcon_filled.svg"
                alt=""
                width={20}
                height={20}
              />
              <p className="font-semibold text-primary text-sm">
                Turkey, Istanbul
              </p>
            </span>
          </div>
        </div>
        <div className="flex mt-4 items-center">
          <Image
            className="rounded-full w-[44px] h-[44px]"
            src="/assets/mocks/doctorprofile.png"
            alt=""
            width={44}
            height={44}
          />
          <div className="ml-3 ">
            <p className="font-semibold mb-2 text-sm ">
              Doctor Dr Fuzun Erdogan
            </p>
            <span className="flex items-center">
              <Image
                className="mr-2"
                src="/assets/icons/timerIcon_filled.svg"
                alt=""
                width={20}
                height={20}
              />
              <p className=" font-medium text-black-light text-sm">
                27 years of experience
              </p>
            </span>
          </div>
        </div>
        <div className="">
          <p className="line-clamp-3 text-xs mb-1 text-ellipsis mt-4">
            Technique: FUE hair transplant, 4500 Grafts Dr. Fuzun Erdogan gained
            international recognition for Technique: FUE hair transplant,
            Technique: FUE hair transplant,
          </p>
          <span className="text-xs font-medium hover:underline cursor-pointer">
            Read more {">>"}
          </span>
        </div>
        <div className="mt-4 flex justify-between w-full">
          <ButtonComponent
            className="bg-primary mr-3  text-white font-medium !py-1.5 w-full !text-sm"
            title="Get A Free Quota"
          />
          <ButtonComponent
            className="bg-white-dark text-primary font-medium !py-1.5 w-full !text-sm"
            title="View Deal"
          />
        </div>
      </div>
      <div className="col-span-2 p-2 shadow-[0px_12px_48px_0px_#BCBCBC1F;]">
        <div className="relative overflow-hidden ">
          <Image
            className="h-32 opacity-50 w-full   rounded-2xl "
            src="/assets/mocks/clinicImage.png"
            alt=""
            width={100}
            height={100}
          />
          <span className="absolute top-5 rounded-md p-1 px-1.5 text-xs font-light text-nowrap text-white  right-2 bg-[#00B8D9]">
            Limited-time deal
          </span>
          <span className="absolute  top-14 right-2  rounded-md p-1 px-1.5 text-xs text-nowrap font-light text-white  bg-[#EB122B]">
            -%8 OFF Today
          </span>
        </div>
        <div className="flex justify-around mt-3  items-center">
          <span className="flex items-center">
            {[...Array(5)].map((e, index) => (
              <svg
                key={index}
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0598 21C17.8999 21.0006 17.7421 20.9629 17.5998 20.89L12.4998 18.22L7.39979 20.89C7.06192 21.0676 6.65238 21.0374 6.34422 20.8122C6.03605 20.5869 5.88302 20.2058 5.94979 19.83L6.94979 14.2L2.82979 10.2C2.56784 9.93856 2.47167 9.55387 2.57979 9.19996C2.69803 8.83738 3.01221 8.57363 3.38979 8.51996L9.08979 7.68996L11.5998 2.55996C11.7669 2.21497 12.1165 1.99585 12.4998 1.99585C12.8831 1.99585 13.2327 2.21497 13.3998 2.55996L15.9398 7.67996L21.6398 8.50996C22.0174 8.56363 22.3315 8.82738 22.4498 9.18996C22.5579 9.54387 22.4617 9.92856 22.1998 10.19L18.0798 14.19L19.0798 19.82C19.1527 20.2028 18.9966 20.593 18.6798 20.82C18.4987 20.9469 18.2807 21.0102 18.0598 21Z"
                  fill="#FFAB00"
                />
              </svg>
            ))}
          </span>
          <span className="text-sm">234</span>
        </div>
        <div className="mt-3">
          <p className="line-clamp-2 text-center text-2xs font-semibold ">
            FUE hair transplant (4500 Grafts) All Included
          </p>
        </div>
        <div className="mt-3 flex flex-col items-center text-center">
          <span className="text-[#EB122B] text-[15px] font-semibold">
            $1750
          </span>
          <span className="text-2xs font-semibold">per package</span>
        </div>
      </div>
      <div className="absolute h-[65px] w-[110px] py-1  !top-0 right-5 bg-red-500">
        <p className="text-2xs  line-clamp-3  text-center text-white ">
          Best selling package this month
        </p>
        <span
          class="w-0 h-0   absolute bottom-0
  border-l-[55px] border-l-transparent
  border-b-[10px] border-b-white
  border-r-[55px] border-r-transparent"
        ></span>
      </div>
    </div>
  );
}
