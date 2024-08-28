import React from "react";
import dynamic from "next/dynamic";

const BenefitCarousel = dynamic(() => import("./BenefitCarousel"));
const BenefitTextCarousel = dynamic(() => import("./BenefitTextCarousel")); 

const FeelTheBenefitComponent = () => {
  return (
    <div className="xl:container mx-auto pb-[120px] pt-[120px] pb-0 flex justify-center items-start">
      {/* Fotoğraf Bölümü */}
      <div className="photo-section relative w-[540px] h-[600px] bg-[#52B8AB] bg-opacity-55 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden mr-8">
        <BenefitCarousel />
      </div>

      {/* Metin Bölümü */}
      <div className="text-section w-[571px] h-[619px] rounded-lg p-6 ml-8">
        {/* Başlık */}
        <h2 className="text-[36px] font-poppins font-semibold text-[#1E1E1E] leading-[54px] mb-4">
          Feel the benefit with us
        </h2>

        {/* BenefitTextCarousel Bileşeni */}
        <BenefitTextCarousel />
      </div>
    </div>
  );
};

export default FeelTheBenefitComponent;
