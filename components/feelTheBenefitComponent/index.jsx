import React from "react";
import Image from "next/image";

const FeelTheBenefitComponent = () => {
  return (
    <div className="px-0 pb-[120px] pt-[120px] pb-0 flex justify-center items-start">
      {/* Fotoğraf Bölümü */}
      <div className="photo-section relative w-[540px] h-[600px] bg-[#52B8AB] bg-opacity-55 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden mr-8">
        <Image
          src="/assets/images/benefit.png"
          alt="Photo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Metin Bölümü */}
      <div className="text-section w-[571px] h-[619px] rounded-lg p-6 ml-8">
        {/* Başlık */}
        <h2 className="text-[36px] font-poppins font-semibold text-[#1E1E1E] leading-[54px] mb-4">
          Feel the benefit with us
        </h2>

        {/* İlk Alan: Modern Clinic */}
        <div className="mb-4 mt-8">
          <h3 className="text-[20px] font-poppins font-semibold text-[#1E1E1E] leading-[30px]">
            Modern Clinic
          </h3>
          <p className="text-[20px] font-poppins font-light text-[#1E1E1E] leading-[30px]">
            Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis
            aliquam tristique porttitor blandit nibh dui tristique quam......
          </p>
        </div>

        {/* İkinci Alan: Less Consultation Fees */}
        <div className="mb-4">
          <h3 className="text-[20px] font-poppins font-semibold text-[#1E1E1E] leading-[30px]">
            Less Consultation Fees
          </h3>
          <p className="text-[20px] font-poppins font-light text-[#1E1E1E] leading-[30px]">
            Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis
            aliquam tristique porttitor blandit nibh dui tristique quam......
          </p>
        </div>

        {/* Üçüncü Alan: Professional Treatment */}
        <div>
          <h3 className="text-[20px] font-poppins font-semibold text-[#1E1E1E] leading-[30px]">
            Professional Treatment
          </h3>
          <p className="text-[20px] font-poppins font-light text-[#1E1E1E] leading-[30px]">
            Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis
            aliquam tristique porttitor blandit nibh dui tristique quam......
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeelTheBenefitComponent;
