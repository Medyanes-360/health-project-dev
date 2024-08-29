import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Klinik verisi
const clinicsData = [
  {
    id: 1,
    name: "Clinic ABC",
    location: "Sancaktepe/Istanbul",
    image: "/assets/images/clinic1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Clinic ABC",
    location: "Sancaktepe/Istanbul",
    image: "/assets/images/clinic2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Clinic ABC",
    location: "Sancaktepe/Istanbul",
    image: "/assets/images/clinic3.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Clinic ABC",
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

// Dinamik olarak yüklenen carousel bileşeni
const ClinicCarousel = dynamic(() => import("./ClinicCarousel"), {});

const PopularClinicsComponent = () => {
  return (
    <section className="relative">
      {/* SVG */}
      <div className="absolute inset-0 flex items-center justify-end top-[-480px] z-[-1]">
        <Image
          src="/assets/Ellipse108.svg"
          alt="Orta SVG"
          width={450}
          height={450}
          priority
        />
      </div>
      <div className="popular-clinics-section w-full xl:container mx-auto py-8 relative z-10">
        {/* Başlık Bölümü */}
        <div className="text-center mb-6">
          <h2 className="text-[40px] font-poppins font-bold text-[#062126] leading-[60px] text-center">
            Popular Clinics
          </h2>
        </div>
        {/* Klinik Kartları Bölümü */}
        <ClinicCarousel clinicsData={clinicsData} />
      </div>
    </section>
  );
};

export default PopularClinicsComponent;
