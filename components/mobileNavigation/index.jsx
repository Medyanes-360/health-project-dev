"use client";
import Image from "next/image";
import MobileNavigationSidebar from "./mobileNavigationSidebar";
import Link from "next/link";
import { useState } from "react";

export default function MobileNavigation(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="  h-full  mb-14 bg-white w-full">
        {/* h-14: 56px navbar height, container'ındaki mb-14le eşleşmeli */}
        <div className=" z-[50000] w-full  fixed top-0 h-14  bg-white flex px-4 py-2.5 justify-between items-center">
          <Image
            className="cursor-pointer"
            src="/assets/icons/hamburgerMenuIcon.svg"
            width={36}
            onClick={toggleSidebar}
            height={36}
            alt="menu"
          />
          <Image
            src="/assets/images/company_logo.png"
            width={143}
            height={24}
            alt="menu"
          />
          <Link href="tel:905556354422">
            <Image
              className="cursor-pointer"
              src="/assets/icons/phoneCallIcon.svg"
              width={36}
              height={36}
              alt=""
            />
          </Link>
        </div>
      </div>
      <MobileNavigationSidebar
        sidebarData={props.sidebarData}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
}
