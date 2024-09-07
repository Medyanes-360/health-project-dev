import React from "react";
import DiscoverMoreCard from "./DiscoverMoreCard";

const data = [
  {
    clinicName: "Adem and Havva Medical Center",
    location: "Turkey, Istanbul",
    description: `Technique: FUE hair transplant, 4500 Grafts Dr. Fuzun Erdogan gained international recognition for... Read more`,

    icons: [
      "/assets/images/image.png",
      "/assets/images/image.png",
      "/assets/images/image.png",
    ],

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

    icons: [
      "/assets/images/image.png",
      "/assets/images/image.png",
      "/assets/images/image.png",
    ],

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

const DiscoverMore = () => {
  return (
    <div className="py-20 xl:container mx-auto space-y-4">
      <h1 className="text-xl font-bold sm:text-2xl text-secondary pb-3">
        Discover More
      </h1>

      <DiscoverMoreCard data={data} />
    </div>
  );
};

export default DiscoverMore;
