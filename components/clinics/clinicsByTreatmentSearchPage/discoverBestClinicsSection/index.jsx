"use client";
import Link from "next/link";
import DiscoverMoreCardContent from "../reusables/DiscoverMoreCard";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

const data = [
  {
    clinicName: "Adem and Havva Medical Center",
    location: "Turkey, Istanbul",
    description: `Technique: FUE hair transplant, 4500 Grafts Dr. Fuzun Erdogan gained international recognition for... Read more`,

    docIcon: "/assets/images/image.png",
    docName: "Doctor Dr Fuzun Erdogan",
    docExperience: 27,

    clinicImages: [
      "/assets/images/656062cbcb546_b1.png",
      "/assets/images/656062cbcb54_b1.png",
      "/assets/images/656062cbcb546_b1.png",
    ],

    stars: 32,

    serviceName: "FUE hair transplant (4500 Grafts) All Included",

    price: "1750",
  },
  {
    clinicName: "Adem and Havva Medical Center",
    location: "Turkey, Istanbul",
    description: `Technique: FUE hair transplant, 4500 Grafts Dr. Fuzun Erdogan gained international recognition for... Read more`,

    clinicIcon: "/assets/images/image.png",

    docIcon: "/assets/images/image.png",
    docName: "Doctor Dr Fuzun Erdogan",
    docExperience: 27,

    clinicImages: [
      "/assets/images/656062cbcb546_b1.png",
      "/assets/images/656062cbcb546_b1.png",
      "/assets/images/656062cbcb546_b1.png",
    ],

    stars: 32,

    serviceName: "FUE hair transplant (4500 Grafts) All Included",

    price: "1750",
  },
  {
    clinicName: "Adem and Havva Medical Center",
    location: "Turkey, Istanbul",
    description: `Technique: FUE hair transplant, 4500 Grafts Dr. Fuzun Erdogan gained international recognition for... Read more`,

    docIcon: "/assets/images/image.png",
    docName: "Doctor Dr Fuzun Erdogan",
    docExperience: 27,

    clinicImages: [
      "/assets/images/656062cbcb546_b1.png",
      "/assets/images/656062cbcb546_b1.png",
      "/assets/images/656062cbcb546_b1.png",
    ],

    stars: 32,

    serviceName: "FUE hair transplant (4500 Grafts) All Included",

    price: "1750",
  },
];
export default function DiscoverBestClinicsSection() {
  return (
    <ExtraLargePageContainer>
      {/* Heading: */}
      <div className="flex mt-16 mb-9 justify-between   items-center">
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
      <div className="flex flex-col gap-6">
        {/* Clinic cards */}
        <DiscoverMoreCardContent data={data[0]} />
        <DiscoverMoreCardContent data={data[0]} />
        <DiscoverMoreCardContent data={data[0]} />
      </div>
      <div className="flex items-center justify-center mt-6 text-primary font-semibold hover:underline">
        <Link href="/">See more deals</Link>
      </div>
    </ExtraLargePageContainer>
  );
}
