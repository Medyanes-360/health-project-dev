import React from "react";
import dynamic from "next/dynamic";

// Hizmet verileri
const servicesData = [
  {
    id: 1,
    title: "Food & Nutrition",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Food.svg",
  },
  {
    id: 2,
    title: "Food & Nutrition",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Food.svg",
  },
  {
    id: 3,
    title: "Dental Care",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Dental.svg",
  },
  {
    id: 4,
    title: "Surgery",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Surgery.svg",
  },
  {
    id: 5,
    title: "Orthopedic",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Orthopedic.svg",
  },
  {
    id: 6,
    title: "Neurology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Neurology.svg",
  },
  {
    id: 7,
    title: "Cardiology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Cardiology.svg",
  },
  {
    id: 8,
    title: "Medicine & Nephrology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Medicine.svg",
  },
  {
    id: 9,
    title: "Food & Nutrition",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Food.svg",
  },
  {
    id: 10,
    title: "Dental Care",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Dental.svg",
  },
];

const ServicesCarousel = dynamic(() => import("./MobileServicesCarousel"));

const OurServicesMobile = () => {
  return (
    <div className="xl:container mx-auto services-section px-4 py-8 mb-10 mt-8">
      {/* Başlık Bölümü */}
      <div className="mb-4">
        <p className="text-[#52B8AB] font-poppins font-medium text-[14px] leading-[21px] text-left">
          OUR SERVICES
        </p>
        <h2 className="text-[#062126] font-poppins font-medium text-[18px] leading-[27px] mt-2 text-left">
          We Serve In Different <span className="font-bold">Areas For</span>
          <br />
          <span className="font-bold">Our Patients</span>
        </h2>
      </div>

      {/* Hizmet Kartları Carousel Bölümü */}
      <ServicesCarousel servicesData={servicesData} />
    </div>
  );
};

export default OurServicesMobile;
