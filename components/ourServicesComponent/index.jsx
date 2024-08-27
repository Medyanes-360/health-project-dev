import React from "react";
import Image from "next/image";

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
];

const OurServicesComponent = () => {
  return (
    <div className="services-section px-4 py-8">
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

      {/* Hizmet Kartları Bölümü */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="service-card group bg-white p-6 rounded-lg shadow-[5px_0_10px_rgba(0,0,0,0.1)] transition-all transform hover:scale-105 relative z-10 overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                borderRight: "5px solid #52B8AB",
                borderBottom: "5px solid #52B8AB",
              }}
            ></div>

            <div className="relative z-20">
              <div className="mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="font-poppins font-bold text-[16px] leading-[24px] text-[#0B8071] mb-2">
                {service.title}
              </h3>
              <p className="font-poppins font-light text-[16px] leading-[24px] text-[#7D7987] py-4">
                {service.description}
              </p>
              <a href="#" className="text-teal-600 mt-4 block">
                Read more →
              </a>
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

export default OurServicesComponent;
