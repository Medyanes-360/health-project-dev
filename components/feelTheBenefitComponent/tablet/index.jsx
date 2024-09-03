import React from "react";
import TabletBenefitCarousel from "./TabletFeelTheBenefit";
import TabletBenefitTextCarousel from "./TabletBenefitTextCarousel";

const TabletFeelTheBenefit = () => {
  return (
    <div className="flex flex-col items-center mt-16 mx-8 mb-8">
      {" "}
      {/* Fotoğraf Bölümü */}
      <div className="photo-section relative w-full h-[600px] bg-[#52B8AB] bg-opacity-55 rounded-tr-[60px] rounded-bl-[60px] overflow-hidden mb-8">
        <TabletBenefitCarousel />
      </div>
      {/* Metin Bölümü */}
      <div className="text-section w-full rounded-lg p-8 bg-white shadow-md">
        {" "}
        {/* Başlık */}
        <h2 className="text-[28px] font-poppins font-semibold text-[#1E1E1E] leading-[40px] mb-4 text-left">
          Feel the benefit with us
        </h2>
        <TabletBenefitTextCarousel />
      </div>
    </div>
  );
};

export default TabletFeelTheBenefit;
