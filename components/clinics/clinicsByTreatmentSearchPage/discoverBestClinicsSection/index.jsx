"use client";
import Link from "next/link";
import DiscoverMoreCardContent from "../reusables/DiscoverMoreCard";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { useState } from "react";
import Price from "../reusables/Price";
import Doctors from "../reusables/Doctors";
import Reviews from "../reusables/Reviews";
import Clinic from "../reusables/Clinic";

const data = [
  {
    clinicName: "Adem and Havva Medical Center",
    location: "Turkey, Istanbul",
    description: `Technique: FUE hair transplant, 4500 Grafts Dr. Fuzun Erdogan gained international recognition for... Read more`,

    centerIcon: "/assets/images/clinic.png",
    docIcon: "/assets/images/doctor.png",
    docName: "Doctor Dr Fuzun Erdogan",
    docExperience: 27,

    centerImage: "/assets/images/center.png",

    clinicImages: [
      "/assets/images/clinic-image.png",
      "/assets/images/clinic-image-1.png",
    ],

    stars: 32,

    serviceName: "FUE hair transplant (4500 Grafts) All Included",

    price: "1750",
    accreditations: [
      "/assets/icons/iso.svg",
      "/assets/images/tcsb.png",
      "/assets/images/choice.png",
    ],
  },
  // {
  //   clinicName: "Adem and Havva Medical Center",
  //   location: "Turkey, Istanbul",
  //   description: `Technique: FUE hair transplant, 4500 Grafts Dr. Fuzun Erdogan gained international recognition for... Read more`,

  //   clinicIcon: "/assets/images/image.png",

  //   docIcon: "/assets/images/doctor.png",
  //   docName: "Doctor Dr Fuzun Erdogan",
  //   docExperience: 27,

  //   clinicImages: [
  //     "/assets/images/656062cbcb546_b1.png",
  //     "/assets/images/656062cbcb546_b1.png",
  //     "/assets/images/656062cbcb546_b1.png",
  //   ],

  //   stars: 32,

  //   serviceName: "FUE hair transplant (4500 Grafts) All Included",

  //   price: "1750",
  // },
  // {
  //   clinicName: "Adem and Havva Medical Center",
  //   location: "Turkey, Istanbul",
  //   description: `Technique: FUE hair transplant, 4500 Grafts Dr. Fuzun Erdogan gained international recognition for... Read more`,

  //   docIcon: "/assets/images/image.png",
  //   docName: "Doctor Dr Fuzun Erdogan",
  //   docExperience: 27,

  //   clinicImages: [
  //     "/assets/images/656062cbcb546_b1.png",
  //     "/assets/images/656062cbcb546_b1.png",
  //     "/assets/images/656062cbcb546_b1.png",
  //   ],

  //   stars: 32,

  //   serviceName: "FUE hair transplant (4500 Grafts) All Included",

  //   price: "1750",
  // },
];
const tabLabels = ["Clinic", "Price", "Doctors", "Reviews"];
const doctorsData = [
  {
    name: "Leyla Arvas",
    speciality: "Hair transplant",
    location: "🇺🇦 Turkey, Istanbul",
    image:
      "/assets/images/docwoman.png",
    score: "Excellent score",
    reviews: "137",
  },
  {
    name: "John Doe",
    speciality: "Plastic Surgery",
    location: "🇺🇸 USA, New York",
    image:
      "/assets/images/docwoman.jpeg",
    score: "Very Good",
    reviews: "200",
  },
];
const reviewsData = [
  {
    speciality: "Hair transplant Name",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    score: "Excellent score",
    reviews: "137",
  },
  {
    speciality: "Hair transplant Name",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    score: "Excellent score",
    reviews: "137",
  },
  {
    speciality: "Hair transplant Name",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    score: "Excellent score",
    reviews: "137",
  },
];
export default function DiscoverBestClinicsSection() {
  const [openPanel, setOpenPanel] = useState(0);

  const clickHandler = (e) => {
    setOpenPanel(parseInt(e.target.dataset.overviewtabid));
  };

  // const renderPanelContent = () => {
  //   switch (openPanel) {
  //     case 0:
  //       return <DiscoverMoreCardContent data={data[0]} />;
  //     case 1:
  //       return <Price />;
  //     case 2:
  //       return <Doctors />;
  //     case 3:
  //       return <Reviews />;
  //     default:
  //       return null;
  //   }
  // };
  return (
    <ExtraLargePageContainer>
      {/* Heading: */}
      <div className="hidden md:flex mt-16 mb-9 justify-between items-center  ">
        <div>
          <h1 className="text-xl font-bold">
            Discover the Best Hair transplant Clinics
          </h1>
          <p className="mt-2.5 text-primary font-bold text-sm">
            Check the hospital ranking based on requests and 471 reviews to pick
            the right Hair transplant clinic for you.
          </p>
        </div>
        <span className="text-sm">227 Verified Options and Prices</span>
      </div>
      <div className="flex flex-col ">
        <div className="bg-white-dark p-5 flex justify-between items-center gap-3 rounded-t-2xl ">
          {tabLabels.map((label, index) => (
            <button
              key={index}
              onClick={clickHandler}
              data-overviewtabid={index}
              className={`${
                openPanel === index ? "!bg-[#52B8AB] !text-white" : ""
              } bg-white w-full py-1 text-center rounded-[33px] font-public-sans text-[14px] font-normal leading-[22px]"
 `}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
        {/* Clinic cards */}
        {/* <div
          className={`${openPanel == 0 ? "block" : "hidden"} animate-fadeIn`}
        >
          <DiscoverMoreCardContent data={data[0]} />
        </div>
        <div
          className={`${openPanel == 1 ? "block" : "hidden"} animate-fadeIn`}
        >
          <Price />
        </div> */}
        {/* <DiscoverMoreCardContent data={data[0]} />
        <DiscoverMoreCardContent data={data[0]} /> */}
        {tabLabels.map((_, index) => (
          <div
            key={index}
            className={`${
              openPanel === index ? "block" : "hidden"
            } animate-fadeIn`}
          >
            {openPanel === 0 && <Clinic data={data[0]} />}
            {openPanel === 1 && <Price />}
            {openPanel === 2 && <Doctors data={doctorsData} />}{" "}
            {openPanel === 3 && <Reviews data={reviewsData} />}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-6 text-primary font-semibold hover:underline">
        <Link href="/">See more deals</Link>
      </div>
    </ExtraLargePageContainer>
  )
}
