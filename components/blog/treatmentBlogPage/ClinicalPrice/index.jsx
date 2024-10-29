"use client";
import { MotionDiv } from "@/globalElements/motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const ClinicalPrice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // İlk yüklemede kontrol et
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-5 flex justify-center text-white ">
      <MotionDiv
        initial={{
          scale: "90%",
          opacity: 0,
        }}
        whileInView={{
          scale: "100%",
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="relative w-[343px] h-[571px] lg:w-[1200px] lg:h-[331px]  rounded-[24px] bg-white shadow-[0px_12px_24px_-4px_#919EAB1F] "
      >
        <div className="absolute z-10 space-y-3 w-[313px] h-[302px] lg:w-[524px] lg:h-[302px] top-[245px] lg:top-[14px] left-[14px] p-2 lg:p-6 border border-white border-opacity-50 bg-[#52B8AB] rounded-[12px] flex flex-col justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="font-poppins text-[14px] lg:text-[20px] font-semibold lg:leading-[30px] text-left">
              According to Bookimed website, the prices for veneers in Turkey
              are the following:
            </h1>
          </div>

          <div className="w-[289px] h-[144px] lg:w-[476px] lg:h-[120px] rounded-xl p-2 lg:p-4 bg-[#FFFFFF52] border border-white ">
            <ul className="list-disc list-inside text-[16px] ">
              <li>An average price — $430</li>
              <li>The minimal price — $250</li>
              <li>The maximum price — $510</li>
              <li>The full set of veneers price — $6,720</li>
            </ul>
          </div>

          <p className="font-poppins text-[12px] font-normal leading-[18px] text-left">
            Submit a request on the Bookimed website to get an individual
            calculation of dental veneers’ installation cost in Turkey. 
          </p>
        </div>
        {isMobile ? (
          <Image
            src="/assets/images/image2.png"
            alt="Full Set of Veneers - Mobile"
            width={732}
            height={571}
            className="w-full h-auto rounded-xl"
          />
        ) : (
          <Image
            src="/assets/images/ClinicalPrice.png"
            alt="Full Set of Veneers"
            width={732}
            height={331}
            className="lg:absolute lg:right-0 lg:top-0"
          />
        )}
      </MotionDiv>
    </div>
  );
};

export default ClinicalPrice;
