import React from "react";
import TabletClinicCarousel from "./TabletClinicCarousel";

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

const PopularClinicsTablet = () => {
  return (
    <section style={{ backgroundColor: "rgba(175, 255, 245, 0.31)" }}>
      <div className="relative mx-4 py-10">
        {" "}
        <div className="popular-clinics-section w-full container py-8 relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-[32px] font-poppins font-medium text-[#062126] leading-[48px] text-center">
              Popular Clinics
            </h2>
          </div>
          <TabletClinicCarousel clinicsData={clinicsData} />
        </div>
      </div>
    </section>
  );
};

export default PopularClinicsTablet;
