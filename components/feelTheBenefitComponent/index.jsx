import React from "react";
import dynamic from "next/dynamic";

const BenefitCarousel = dynamic(() => import("./BenefitCarousel"));
const BenefitTextCarousel = dynamic(() => import("./BenefitTextCarousel"));

const FeelTheBenefit = () => {
  return (
    <div className="container mx-auto pb-[120px] pt-[120px] flex flex-col md:flex-row justify-center items-center xl:items-start px-4 lg:px-8">
      {/* Fotoğraf Bölümü */}
      <div className="photo-section relative w-full h-[300px] md:w-[500px] md:h-[500px] sm:w-[540px] sm:h-[600px] lg:w-[540px] lg:h-[600px] xl:w-[540px] xl:h-[600px] bg-[#52B8AB] bg-opacity-55 rounded-tr-[50px] md:rounded-tr-[75px] xl:rounded-tr-[100px] rounded-bl-[50px] md:rounded-bl-[75px] xl:rounded-bl-[100px] overflow-hidden mb-8 xl:mr-8">
        <BenefitCarousel />
      </div>

      {/* Metin Bölümü */}
      <div className="text-section w-full md:w-[400px] sm:w-[571px] lg:w-[571px] xl:w-[571px] lg:h-[600px] xl:h-[600px] rounded-lg p-6">
        {/* Başlık */}
        <h2 className="text-[24px] md:text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[48px] font-poppins font-semibold text-[#1E1E1E] leading-[32px] md:leading-[40px] sm:leading-[54px] lg:leading-[60px] xl:leading-[64px] mb-4 text-center md:text-left">
          Feel the benefit with us
        </h2>

        {/* BenefitTextCarousel Bileşeni */}
        <BenefitTextCarousel />
      </div>
    </div>
  );
};

export default FeelTheBenefit;
