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
  {
    id: 11,
    title: "Surgery",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Surgery.svg",
  },
  {
    id: 12,
    title: "Orthopedic",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Orthopedic.svg",
  },
  {
    id: 13,
    title: "Neurology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Neurology.svg",
  },
  {
    id: 14,
    title: "Cardiology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Cardiology.svg",
  },
  {
    id: 15,
    title: "Medicine & Nephrology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Medicine.svg",
  },
  {
    id: 16,
    title: "Medicine & Nephrology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Medicine.svg",
  },
  {
    id: 17,
    title: "Food & Nutrition",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Food.svg",
  },
  {
    id: 18,
    title: "Dental Care",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Dental.svg",
  },
  {
    id: 19,
    title: "Surgery",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Surgery.svg",
  },
  {
    id: 20,
    title: "Orthopedic",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Orthopedic.svg",
  },
  {
    id: 21,
    title: "Neurology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Neurology.svg",
  },
  {
    id: 22,
    title: "Cardiology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Cardiology.svg",
  },
  {
    id: 23,
    title: "Medicine & Nephrology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Medicine.svg",
  },
  {
    id: 24,
    title: "Medicine & Nephrology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Medicine.svg",
  },
  {
    id: 25,
    title: "Food & Nutrition",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Food.svg",
  },
  {
    id: 26,
    title: "Dental Care",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Dental.svg",
  },
  {
    id: 27,
    title: "Surgery",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Surgery.svg",
  },
  {
    id: 28,
    title: "Orthopedic",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Orthopedic.svg",
  },
  {
    id: 29,
    title: "Neurology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Neurology.svg",
  },
  {
    id: 30,
    title: "Cardiology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Cardiology.svg",
  },
  {
    id: 31,
    title: "Medicine & Nephrology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Medicine.svg",
  },
  {
    id: 32,
    title: "Medicine & Nephrology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Medicine.svg",
  },
  {
    id: 33,
    title: "Food & Nutrition",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Food.svg",
  },
  {
    id: 34,
    title: "Dental Care",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Dental.svg",
  },
  {
    id: 35,
    title: "Surgery",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Surgery.svg",
  },
  {
    id: 36,
    title: "Orthopedic",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Orthopedic.svg",
  },
  {
    id: 37,
    title: "Neurology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Neurology.svg",
  },
  {
    id: 38,
    title: "Cardiology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Cardiology.svg",
  },
  {
    id: 39,
    title: "Medicine & Nephrology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Medicine.svg",
  },
  {
    id: 40,
    title: "Medicine & Nephrology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "/assets/icons/Medicine.svg",
  },
];

const ServicesCarousel = dynamic(() => import("./ServicesCarousel"));

const OurServicesComponent = () => {
  return (
    <div className="xl:container mx-auto services-section px-4 py-8 mb-10 mt-8">
      {/* Başlık Bölümü */}
      <div className="text-center mb-10">
        <p className="text-[#52B8AB] font-poppins font-medium text-[14px] leading-[21px]">
          OUR SERVICES
        </p>
        <h2 className="text-[#062126] font-poppins font-medium text-[40px] leading-[60px] mt-2">
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

export default OurServicesComponent;
