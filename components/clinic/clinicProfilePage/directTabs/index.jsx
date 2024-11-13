"use client";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function DirectTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

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
  let headerBarHeight = 80;

  useEffect(() => {
    const setHeaderSticky = () => {
      if (
        window.scrollY > topBarHeight + headerBarHeight &&
        headerBarRef.current
      ) {
        headerBarRef.current.classList.add("fixed");
      } else if (
        window.scrollY <= topBarHeight + headerBarHeight &&
        headerBarRef.current
      ) {
        headerBarRef.current.classList.remove("fixed");
      }
    };

    setHeaderSticky();

    window.addEventListener("scroll", setHeaderSticky);

    return () => {
      window.removeEventListener("scroll", setHeaderSticky);
    };
  }, [topBarHeight]);

  return (
    <div className="w-full  h-full" style={{ height: `${headerBarHeight}px` }}>
      <div ref={headerBarRef} className="top-0 w-full  z-[5000000000000] ">
        <ExtraLargePageContainer
          className=" "
          style={{ height: `${headerBarHeight}px` }}
        >
          <div className="flex items-center px-6 justify-between bg-white border-b h-20 rounded-xl">
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
