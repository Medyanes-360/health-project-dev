"use client";
import ButtonComponent from "@/globalElements/Button";
import { MotionDiv } from "@/globalElements/motion";
import { useGlobalStore } from "@/utils/globalStore";
import { Country, State } from "country-state-city";
import Image from "next/image";
import Link from "next/link";

const procedureData = {
  id: 0,
  treatment: {
    // bu procedure hangi treatment'a ait? !! burada sadece treatment için bu sayfada ihtiyaç duyduğumuz bilgiler yeterli. asıl treatment datası /clinics/[treatmentUrl] dizininde.
    id: 4,
    title: "Hair Transplant",
    fullTitle: "Fue Hair Transplant ",
    url: "hair-transplant",
  },
  reviewsCount: 234,
  clinic: {
    id: 0,
    name: "Adem and Havva Medical Center",
    url: "adem-and-havva-medical-center",
    location: {
      City: "Şişli", // ilçe
      stateIsoCode: "34", // şehir
      countryIsoCode: "TR", // ülke
      fullAddress:
        "Cumhuriyet, Cumhuriyet Mahallesi, İncirli Dede Caddesi, No:6/2 Anthill Towers, 34381 Şişli/İstanbul",
    },
    images: [
      "/assets/images/clinic1.png",
      "/assets/images/clinic2.png",
      "/assets/images/clinic3.png",
      "/assets/mocks/clinicImage.png",
    ],
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  doctor: {
    id: 0,
    name: "Dr. Füzun Erdoğan",
    startingServiceYear: 1999,
  },
  packageDetails: {
    packageName: "FUE hair transplant (4500 Grafts) All Included",
    packagePrice: 1750,
    limitDate: "1709758800000",
    offPercent: 8,
  },
  price: 1750,
};

export default function ClinicListItem({ index, fetchClinics, lastItem }) {
  const openImageModal = useGlobalStore((state) => state.openImageModal);

  const handleOpenImageModal = (imageSrc) => {
    openImageModal({
      imageSources: procedure.clinic.images,
      imageSrcToShowFirst: imageSrc,
    });
  };
  const procedure = procedureData;

  return (
    <MotionDiv
      key={index}
      initial={{ x: "-50px", opacity: 0 }}
      whileInView={{
        x: "0px",
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      viewport={{
        once: true,
        amount: 0.5,
        fallback: false,
      }}
      onViewportEnter={lastItem && fetchClinics}
      className="relative grid grid-flow-col-dense mx-2  mb-3 grid-cols-9 gap-5 h-[386px] items-center border min-w-[900px]   border-[#D9D9D91F] px-7 py-14 rounded-3xl shadow-lg"
    >
      <div className="col-span-3 h-full w-full  max-w-[280px]    flex flex-col justify-center items-center">
        <Image
          className="h-48 w-full p-0.5  rounded-3xl cursor-pointer hover:opacity-90"
          src={procedure.clinic.images[0]}
          onClick={() => {
            handleOpenImageModal(procedure.clinic.images[0]);
          }}
          alt=""
          width={100}
          height={100}
        />
        <div className="grid grid-cols-3 w-full max-w-[280px] items-center   ">
          {procedure.clinic.images.slice(1).map((src, index) => {
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
      <div className="col-span-4 flex flex-col items-start h-full py-1 justify-between">
        <div className="flex items-center ">
          <Image
            className="rounded-full w-[44px] h-[44px]"
            src="/assets/mocks/clinicImage.png"
            alt=""
            width={44}
            height={44}
          />
          <div className="ml-3 ">
            <p className="font-semibold mb-2 text-sm ">
              {procedure.clinic.name}
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
                {Country.getCountryByCode(
                  procedure.clinic.location.countryIsoCode
                ).name +
                  ", " +
                  State.getStateByCodeAndCountry(
                    procedure.clinic.location.stateIsoCode,
                    procedure.clinic.location.countryIsoCode
                  ).name}
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
              Doctor {procedure.doctor.name}
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
                {new Date().getFullYear() -
                  procedure.doctor.startingServiceYear}{" "}
                years of experience
              </p>
            </span>
          </div>
        </div>
        <div className="">
          <p className="line-clamp-3 text-xs mb-1 text-ellipsis mt-4">
            {procedure.description}
          </p>
          <Link
            href={`/clinic/${procedure.clinic.url}/${procedure.treatment.url}#programDetailsSection`}
            className="text-xs font-medium hover:underline cursor-pointer"
          >
            Read more {">>"}
          </Link>
        </div>
        <div className="mt-4   flex justify-between w-full">
          <Link className="w-full" href="/test">
            <ButtonComponent
              className="bg-primary mr-3   text-white font-medium !py-1.5 w-full !text-sm"
              title="Get A Free Quota"
            />
          </Link>
          <Link
            className="w-full"
            href={`/clinic/${procedure.clinic.url}/${procedure.treatment.url}`}
          >
            <ButtonComponent
              className="bg-white-dark text-primary font-medium !py-1.5 w-full !text-sm"
              title="View Deal"
            />
          </Link>
        </div>
      </div>
      <div className="col-span-2  rounded-3xl p-2 shadow-[0px_12px_48px_0px_#BCBCBC1F;]">
        <div className="relative overflow-hidden ">
          <Image
            className="h-32 opacity-50 w-full   rounded-2xl "
            src="/assets/mocks/clinicImage.png"
            alt=""
            width={100}
            height={100}
          />
          {procedure.packageDetails.limitDate && (
            <span className="absolute top-5 rounded-md p-1 px-1.5 text-xs font-light text-nowrap text-white  right-2 bg-[#00B8D9]">
              Limited-time deal
            </span>
          )}
          <span className="absolute  top-14 right-2  rounded-md p-1 px-1.5 text-xs text-nowrap font-light text-white  bg-[#EB122B]">
            -{procedure.packageDetails.offPercent}% OFF Today
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
          <span className="text-sm">{procedure.reviewsCount}</span>
        </div>
        <div className="mt-3">
          <p className="line-clamp-2 text-center text-2xs font-semibold ">
            {procedure.packageDetails.packageName}
          </p>
        </div>
        <div className="mt-3 flex flex-col items-center text-center">
          <span className="text-[#EB122B] text-[15px] font-semibold">
            ${procedure.packageDetails.packagePrice}
          </span>
          <span className="text-2xs font-semibold">per package</span>
        </div>
      </div>
    </MotionDiv>
  );
}
