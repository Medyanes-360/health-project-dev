"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Component() {
  const items = [
    "Clinics",
    "Doctors",
    "Cheap Places",
    "Porcelain",
    "Composite",
    "Cost Globally",
  ];

  return (
    <div className="py-5 flex justify-center text-white">
      <motion.div
        initial={{
          scale: "110%",
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
        className="relative w-full md:w-[1200px] h-auto md:h-[331px] rounded-[24px] bg-white shadow-[0px_12px_24px_-4px_#919EAB1F] overflow-hidden flex flex-col md:flex-row" // Stack for mobile, row for desktop
      >
        {/* Background Image */}
        <Image
          src="/assets/images/FullSetVeneers1.png"
          alt="Full Set of Veneers"
          width={732}
          height={331}
          className="w-full md:w-auto md:absolute md:right-0 md:top-0" // Full width on mobile
        />

        {/* Card Content */}
        <div className="z-10 w-full md:w-[524px] h-auto md:h-[302px] p-4 md:p-6 border border-white border-opacity-50 bg-[#52B8AB] rounded-[12px] md:rounded-[12px] flex flex-col justify-between md:absolute md:top-[14px] md:left-[14px]  md:mt-0">
          <div className="flex items-center justify-between md:justify-start md:gap-3">
            <p className="text-white text-sm md:text-base">
              See our 615 reviews
            </p>
            <Image
              src="/assets/images/arrow-square-right.png"
              alt="Arrow"
              width={24}
              height={24}
            />
          </div>
          <h1 className="font-poppins font-semibold text-lg md:text-xl mt-4 md:mt-0">
            How Much Is a Full Set of Veneers in Mexico in 2021 [Prices
            Included]?
          </h1>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-[calc(50%-4px)] md:w-[152px] h-[40px] md:h-[53px] rounded-xl border border-white bg-white bg-opacity-[32%] flex items-center justify-center"
              >
                <span className="font-poppins font-semibold text-xs md:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
