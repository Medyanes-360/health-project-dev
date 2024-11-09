"use client";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Link from "next/link";
import { useState } from "react";

export default function DirectTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Kaydırma işlevi
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ExtraLargePageContainer className="mt-6 py-3">
      <div className="flex items-center px-6 justify-between bg-[#eef8f7] h-20 rounded-xl">
        <span
          onClick={() => {
            setActiveTabIndex(0);
            scrollToSection("overviewDiv");
          }}
        >
          <Link
            href="#overviewDiv"
            className={`${
              activeTabIndex === 0 && "!border-b-primary !text-[#212B36]"
            } py-3 border-b-2 cursor-pointer border-b-transparent font-semibold text-sm hover:text-[#212B36] transition-all duration-200 text-[#9199A3]`}
          >
            Overview
          </Link>
        </span>
        <span
          onClick={() => {
            setActiveTabIndex(1);
            scrollToSection("DentalTreatmentDropDown");
          }}
        >
          <Link
            href="#DentalTreatmentDropDown"
            className={`${
              activeTabIndex === 1 && "border-b-primary text-[#212B36]"
            } py-3 border-b-2 cursor-pointer border-b-transparent font-semibold text-sm hover:text-[#212B36] transition-all duration-200 text-[#9199A3]`}
          >
            Prices
          </Link>
        </span>
        <span
          onClick={() => {
            setActiveTabIndex(2);
            scrollToSection("beforeAndAfterPhotosDiv");
          }}
        >
          <Link
            href="#beforeAndAfterPhotosDiv"
            className={`${
              activeTabIndex === 2 && "border-b-primary text-[#212B36]"
            } py-3 border-b-2 cursor-pointer border-b-transparent font-semibold text-sm hover:text-[#212B36] transition-all duration-200 text-[#9199A3]`}
          >
            Before & after photos
          </Link>
        </span>
        <span
          onClick={() => {
            setActiveTabIndex(3);
            scrollToSection("locationDiv");
          }}
        >
          <Link
            href="#locationDiv"
            className={`${
              activeTabIndex === 3 && "border-b-primary text-[#212B36]"
            } py-3 border-b-2 cursor-pointer border-b-transparent font-semibold text-sm hover:text-[#212B36] transition-all duration-200 text-[#9199A3]`}
          >
            Location
          </Link>
        </span>
      </div>
    </ExtraLargePageContainer>
  );
}
