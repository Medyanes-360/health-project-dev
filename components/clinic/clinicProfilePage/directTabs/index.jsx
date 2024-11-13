"use client";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function DirectTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabs = [
    { label: "Overview", id: "overviewDiv" },
    { label: "Prices", id: "DentalTreatmentDropDown" },
    { label: "Before & after photos", id: "beforeAndAfterPhotosDiv" },
    { label: "Location", id: "locationDiv" },
  ];

  const headerBarRef = useRef(null);
  const topBarHeight = 520;
  const headerBarHeight = 80;

  useEffect(() => {
    const setHeaderSticky = () => {
      if (window.scrollY > topBarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    setHeaderSticky();

    window.addEventListener("scroll", setHeaderSticky);

    return () => {
      window.removeEventListener("scroll", setHeaderSticky);
    };
  }, [topBarHeight]);

  return (
    <div className="w-full h-full">
      <div
        ref={headerBarRef}
        className={`w-full z-[10000000] ${
          isSticky
            ? "fixed top-0 left-0 shadow-xl bg-white-400 transition-all duration-1000 ease-in-out"
            : "transition-all duration-1000 ease-in-out"
        }`}
        style={{
          height: `${headerBarHeight}px`,
        }}
      >
        <ExtraLargePageContainer
          className=" "
          style={{ height: `${headerBarHeight}px` }}
          ref={headerBarRef}
        >
          <div className="flex items-center px-6 justify-between bg-white h-20 rounded-xl">
            {tabs.map((tab, index) => (
              <span
                key={index}
                onClick={() => {
                  setActiveTabIndex(index);
                  scrollToSection(tab.id);
                }}
              >
                <Link
                  href={`#${tab.id}`}
                  className={`${
                    activeTabIndex === index
                      ? index === 0
                        ? "!border-b-primary !text-[#212B36]"
                        : "border-b-primary text-[#212B36]"
                      : "text-[#9199A3]"
                  } py-3 border-b-2 cursor-pointer border-b-transparent font-semibold text-sm hover:text-[#212B36] transition-all duration-200`}
                >
                  {tab.label}
                </Link>
              </span>
            ))}
          </div>
        </ExtraLargePageContainer>
      </div>
    </div>
  );
}
