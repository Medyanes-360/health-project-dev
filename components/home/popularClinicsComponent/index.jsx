import React from "react";
import Image from "next/image";
import ClinicCarousel from "./ClinicCarousel";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { MotionDiv } from "@/globalElements/motion";

// Klinik verisi
const clinicsData = [
  {
    id: 1,
    name: "Clinic 1",
    location: "Sancaktepe/Istanbul",
    image: "/assets/images/clinic1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Clinic 1",
    location: "Sancaktepe/Istanbul",
    image: "/assets/images/clinic2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Clinic 1",
    location: "Sancaktepe/Istanbul",
    image: "/assets/images/clinic3.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Clinic 1",
    location: "Sancaktepe/Istanbul",
    image: "/assets/images/clinic2.png",
    rating: 5,
  },
  {
    id: 5,
    name: "Clinic XYZ",
    location: "Kadikoy/Istanbul",
    image: "/assets/images/clinic1.png",
    rating: 4,
  },
  {
    id: 6,
    name: "Clinic XYZ",
    location: "Kadikoy/Istanbul",
    image: "/assets/images/clinic2.png",
    rating: 4,
  },
  {
    id: 7,
    name: "Clinic XYZ",
    location: "Kadikoy/Istanbul",
    image: "/assets/images/clinic3.png",
    rating: 4,
  },
  {
    id: 8,
    name: "Clinic XYZ",
    location: "Kadikoy/Istanbul",
    image: "/assets/images/clinic1.png",
    rating: 4,
  },
  {
    id: 9,
    name: "Clinic DEF",
    location: "Besiktas/Istanbul",
    image: "/assets/images/clinic2.png",
    rating: 5,
  },
  {
    id: 10,
    name: "Clinic DEF",
    location: "Besiktas/Istanbul",
    image: "/assets/images/clinic3.png",
    rating: 5,
  },
  {
    id: 11,
    name: "Clinic DEF",
    location: "Besiktas/Istanbul",
    image: "/assets/images/clinic1.png",
    rating: 5,
  },
  {
    id: 12,
    name: "Clinic DEF",
    location: "Besiktas/Istanbul",
    image: "/assets/images/clinic2.png",
    rating: 5,
  },
  {
    id: 13,
    name: "Clinic MNO",
    location: "Sisli/Istanbul",
    image: "/assets/images/clinic3.png",
    rating: 4,
  },
  {
    id: 14,
    name: "Clinic MNO",
    location: "Sisli/Istanbul",
    image: "/assets/images/clinic1.png",
    rating: 4,
  },
  {
    id: 15,
    name: "Clinic MNO",
    location: "Sisli/Istanbul",
    image: "/assets/images/clinic2.png",
    rating: 4,
  },
  {
    id: 16,
    name: "Clinic MNO",
    location: "Sisli/Istanbul",
    image: "/assets/images/clinic3.png",
    rating: 4,
  },
  {
    id: 17,
    name: "Clinic PQR",
    location: "Beyoglu/Istanbul",
    image: "/assets/images/clinic1.png",
    rating: 3,
  },
  {
    id: 18,
    name: "Clinic PQR",
    location: "Beyoglu/Istanbul",
    image: "/assets/images/clinic2.png",
    rating: 3,
  },
  {
    id: 19,
    name: "Clinic PQR",
    location: "Beyoglu/Istanbul",
    image: "/assets/images/clinic3.png",
    rating: 3,
  },
  {
    id: 20,
    name: "Clinic PQR",
    location: "Beyoglu/Istanbul",
    image: "/assets/images/clinic1.png",
    rating: 3,
  },
];

const PopularClinicsComponent = () => {
  return (
    <section className=" mb-20 relative bg-[#AFFFF54F] md:bg-transparent">
      {/* SVG */}
      <div className="absolute inset-0 items-center justify-end top-[-480px] z-[-1] md:flex hidden">
        <Image
          src="/assets/Ellipse108.svg"
          alt="Orta SVG"
          width={450}
          height={450}
          priority
        />
      </div>
      <ExtraLargePageContainer className="popular-clinics-section w-full py-8 relative z-10">
        {/* Başlık Bölümü */}
        <MotionDiv
          initial={{
            y: "30px",
            opacity: 0,
          }}
          whileInView={{
            y: "0",
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="text-center mb-6"
        >
          <h2 className="text-[40px] font-poppins  text-[#062126] leading-[60px] text-center">
            Popular Clinics
          </h2>
        </MotionDiv>
        {/* Klinik Kartları Bölümü */}
        <ClinicCarousel clinicsData={clinicsData} />
      </ExtraLargePageContainer>
    </section>
  );
};

export default PopularClinicsComponent;
