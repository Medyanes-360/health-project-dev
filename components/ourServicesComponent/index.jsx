import React from "react";

// Hizmet verileri
const servicesData = [
  {
    id: 1,
    title: "Food & Nutrition",
    description: "20+ Doctors are available under this department who serve.",
    icon: "🍲",
  },
  {
    id: 2,
    title: "Food & Nutrition",
    description: "20+ Doctors are available under this department who serve.",
    icon: "🍲",
  },
  {
    id: 3,
    title: "Dental Care",
    description: "20+ Doctors are available under this department who serve.",
    icon: "🦷",
  },
  {
    id: 4,
    title: "Surgery",
    description: "20+ Doctors are available under this department who serve.",
    icon: "💉",
  },
  {
    id: 5,
    title: "Orthopedic",
    description: "20+ Doctors are available under this department who serve.",
    icon: "🦴",
  },
  {
    id: 6,
    title: "Neurology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "🧠",
  },
  {
    id: 7,
    title: "Cardiology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "💓",
  },
  {
    id: 8,
    title: "Medicine & Nephrology",
    description: "20+ Doctors are available under this department who serve.",
    icon: "🩺",
  },
];

const OurServicesComponent = () => {
  return (
    <div className="services-section px-4 py-8">
      {/* Başlık Bölümü */}
      <div className="text-center mb-10">
        <p className="text-teal-600 font-semibold">OUR SERVICES</p>
        <h2 className="text-[36px] font-bold text-gray-900 leading-[44px] mt-2">
          We Serve In Different <span className="font-semibold">Areas For</span>{" "}
          <br />
          <span className="font-semibold">Our Patients</span>
        </h2>
      </div>

      {/* Hizmet Kartları Bölümü */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="service-card bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-teal-700 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>
            <a href="#" className="text-teal-600 mt-4 block">
              Read more →
            </a>
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
