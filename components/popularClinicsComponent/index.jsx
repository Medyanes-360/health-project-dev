import React from "react";
import Image from "next/image";

// Örnek klinik verisi
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
];

const PopularClinicsComponent = () => {
  return (
    <div className="popular-clinics-section px-4 py-8">
      {/* Başlık Bölümü */}
      <div className="text-center mb-6">
        <h2 className="text-[40px] font-poppins font-bold text-[#062126] leading-[60px] text-center">
          Popular Clinics
        </h2>
      </div>

      {/* Klinik Kartları Bölümü */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {clinicsData.map((clinic) => (
          <div
            key={clinic.id}
            className="border-[0.5px] border-[#52B8AB] rounded-lg overflow-hidden shadow-md relative mt-4 mb-4"
          >
            <Image
              src={clinic.image}
              alt={clinic.name}
              width={500}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-poppins font-bold text-[20px] text-[#1E1E1E] leading-[36px]">
                {clinic.name}
              </h3>
              <p className="font-poppins font-light text-[16px] text-[#1E1E1E] leading-[24px]">
                {clinic.location}
              </p>
            </div>
            <div className="absolute bottom-4 right-4">
              {[...Array(clinic.rating)].map((star, i) => (
                <span key={i} className="text-[#FFAA00] text-xl">
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tracker Bölümü */}
      <div className="flex justify-center mt-4">
        <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full mx-1"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
      </div>
    </div>
  );
};

export default PopularClinicsComponent;
