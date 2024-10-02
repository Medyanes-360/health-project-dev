import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import React from "react";
import BestVenceerPackagesCard from "./BestVenceerPackagesCard";
import CardComponent from "@/globalElements/Card";

const data = [
  {
    img: "/assets/images/beforeAfter.png", // Replace with your image path
    clinicName: "HealthCare Clinic",
    location: "USA",
    description:
      "Offering a wide range of medical services including general checkups, specialized consultations, and emergency care.",
    rate: 4.5,
    price: "300",
  },
  {
    img: "/assets/images/beforeAfter.png", // Replace with your image path
    clinicName: "Wellness Center",
    location: "UK",
    description:
      "A holistic approach to health with services including acupuncture, massage therapy, and nutritional counseling.",
    rate: 4.7,
    price: "250",
  },
  {
    img: "/assets/images/beforeAfter.png", // Replace with your image path
    clinicName: "Family Health Clinic",
    location: "Canada",
    description:
      "Comprehensive family health services including pediatric care, adult medicine, and preventive health screenings.",
    rate: 4.2,
    price: "270",
  },
  {
    img: "/assets/images/beforeAfter.png", // Replace with your image path
    clinicName: "Advanced Medical Group",
    location: "Australia",
    description:
      "Specialized in advanced diagnostics and treatments for chronic and complex health conditions.",
    rate: 4.8,
    price: "350",
  },
  {
    img: "/assets/images/beforeAfter.png", // Replace with your image path
    clinicName: "Prime Care Clinic",
    location: "Germany",
    description:
      "High-quality care with a focus on personalized treatment plans and patient education.",
    rate: 4.6,
    price: "260",
  },
];

const BestVenceerPackages = () => {
  return (
    <div className="py-20 ">
      <ExtraLargePageContainer className={"!space-y-5 !bg-[#FFFFFF]"}>
        <h1 className="sm:text-2xl text-primary text-center text-xl">
          BestVenceerPackages Venceer Package
        </h1>

        <CardComponent className="!gird grid-cols-1 !gap-4">
          {data?.map((item, i) => (
            <BestVenceerPackagesCard key={i} data={item} />
          ))}
        </CardComponent>
      </ExtraLargePageContainer>
    </div>
  );
};

export default BestVenceerPackages;
