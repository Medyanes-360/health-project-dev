import React from 'react';
import MobileBenefitCarousel from './MobileBenefitCarousel';
import MobileBenefitTextCarousel from './MobileBenefitTextCarousel';

const MobileFeelTheBenefit = () => {
  return (
    <div className="flex flex-col items-center mt-16 mx-4">
      {/* Fotoğraf Bölümü - Mobil */}
      <div className="photo-section relative w-full h-[300px] bg-[#52B8AB] bg-opacity-55 rounded-tr-[50px] rounded-bl-[50px] overflow-hidden mb-4 ">
        <MobileBenefitCarousel />
      </div>

      {/* Metin Bölümü - Mobil */}
      <div className="text-section w-full rounded-lg p-4">
        {/* Başlık */}
        <h2 className="text-[24px] font-poppins font-semibold text-[#1E1E1E] leading-[36px] mb-2 text-left">
          Feel the benefit with us
        </h2>
        <MobileBenefitTextCarousel />
      </div>
    </div>
  );
};

export default MobileFeelTheBenefit;
