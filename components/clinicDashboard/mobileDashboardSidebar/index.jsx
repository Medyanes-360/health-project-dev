"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNavigationSidebar from "@/components/layout/navigationHeader/mobileNavigation/mobileNavigationSidebar";

export default function MobileDashboardSidebar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <div className="h-full mb-14 bg-white w-full">
        <div className="z-[50000] w-full fixed bottom-0 h-14 bg-white flex px-4 py-2.5 justify-between items-center">
          <Link href="tel:905556354422">
            <Image
              src="/assets/icons/phoneCallIcon.svg"
              className="cursor-pointer"
              width={36}
              height={36}
              alt="phoneCall"
            />
          </Link>
          <Image
            src="/assets/images/company_logo.png"
            width={143}
            height={24}
            alt="menu"
          />

          <Image
            src="/assets/icons/hamburgerMenuIcon.svg"
            className="cursor-pointer"
            onClick={toggleSidebar}
            width={36}
            height={36}
            alt="menu"
          />
        </div>
      </div>
      <MobileNavigationSidebar
        sidebarData={props.navbarData}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
}
