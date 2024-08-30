import React from "react";
import MobileClinicCarousel from "./MobileClinicCarousel";

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
];

const PopularClinicsMobile = () => {
  return (
    <section style={{ backgroundColor: 'rgba(175, 255, 245, 0.31)' }}>
      <div className="relative mx-2 py-8">
        <div className="popular-clinics-section w-full container py-6 relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-[30px] font-poppins font-medium text-[#062126] leading-[45px] text-left">
              Popular Clinics
            </h2>
          </div>
          <MobileClinicCarousel clinicsData={clinicsData} />
        </div>
      </div>
    </section>
  );
};

export default PopularClinicsMobile;
