"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderbarSelectField from "./headerbarSelectField";
import ButtonComponent from "@/globalElements/Button";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { useEffect, useRef } from "react";

const HeaderbarComponent = ({ navbarData }) => {
  const headerBarRef = useRef(null);
  const topBarHeight = navbarData.topBarHeight;
  const headerBarHeight = 80;

  useEffect(() => {
    const setHeaderSticky = () => {
      if (
        window.scrollY >= topBarHeight &&
        headerBarRef.current &&
        window != undefined
      ) {
        headerBarRef.current.classList.add("fixed");
        headerBarRef.current.classList.add("shadow-md");
      } else if (
        window.scrollY < topBarHeight &&
        headerBarRef.current &&
        window != undefined
      ) {
        headerBarRef.current.classList.remove("fixed");
        headerBarRef.current.classList.remove("shadow-md");
      }
    };
    if (headerBarRef.current != null && window != undefined) {
      // sayfa ilk yüklendiğinde:
      setHeaderSticky();
      //scrollandığında:
      window.addEventListener("scroll", setHeaderSticky);
    }

    return () => {
      window.removeEventListener("scroll", setHeaderSticky);
    };
  }, [headerBarRef, topBarHeight]);

  return (
    <div className={`w-full bg-white h-[${headerBarHeight}px]`}>
      <div ref={headerBarRef} className="top-0 w-full  bg-white z-[100000]">
        {/* component'ın max-widthini xl'a ayarlayan container:  */}
        <ExtraLargePageContainer
          className={`py-5  h-[${headerBarHeight}px] flex items-center justify-between`}
        >
          <div className="flex  ">
            {" "}
            <Link className=" flex items-center justify-center" href="/">
              <Image
                className="mr-4 "
                alt="company logo"
                width={143}
                height={24}
                src="/assets/images/company_logo.png"
              />
            </Link>
            <HeaderbarSelectField placeholder="Enter the treatment, clinic or doctor" />
          </div>
          <div className="flex ">
            <div className="hidden mr-5 min-[1135px]:flex items-center ">
              <span className="flex">
                {[...Array(5)].map((e, index) => (
                  <Image
                    key={index}
                    src="/assets/icons/orangeStarIcon.svg"
                    alt="star"
                    height={24}
                    width={24}
                  />
                ))}
                <span className=" my-auto ml-2 text-[#868686] font-bold text-nowrap">
                  5.0 Rating
                </span>
              </span>
            </div>
            <Link className="hidden min-[900px]:block" href="/test">
              <ButtonComponent
                title="Get a Free Quote"
                className="font-inter text-nowrap font-[600] !text-base !rounded-[3px] text-white bg-primary  py-3 px-6 "
              />
            </Link>
          </div>
        </ExtraLargePageContainer>
      </div>
    </div>
  );
};
export default HeaderbarComponent;
