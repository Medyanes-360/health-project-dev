import Image from "next/image";
import React from "react";

const AveragePrice = () => {
  return (
    <div className="py-5 flex justify-center">
      <div className="w-[1200px] h-[240px] p-6 bg-white border border-[#D9D9D91F] shadow-[0px_12px_24px_-4px_#919EAB1F] rounded-[24px]">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/images/grammerly.png"
            width={20}
            height={20}
            alt="Grammarly Logo"
          />
          <h1 className="text-[#52B8AB] text-[15px] font-medium">
            What Is the Average Price for Veneers in Mexican Clinics?
          </h1>
        </div>
        <div className="mt-4 h-[144px] bg-[#D9D9D921] p-6 rounded-3xl">
          <p className="font-poppins text-base font-normal leading-6 text-left">
            According to the data of dental Bookimed partner clinics located in
            Mexico, the average cost of veneers is $250 per veneer. Depending on
            the clinic, veneer type, and the doctor’s qualifications, the price
            may vary. Note that the average cost for a veneer in the USA is
            about $950 per tooth. So, even with travel expenses, it is more
            profitable to visit Mexico for veneer installation instead of doing
            the same procedure in the USA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AveragePrice;
