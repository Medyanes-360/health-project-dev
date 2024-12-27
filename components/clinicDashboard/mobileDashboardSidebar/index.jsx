"use client";

import React, { useState } from "react";
import Image from "next/image";
import clinicSidebarData from "@/components/clinicDashboard/clinicSidebar/clinicSidebarData.json";
import Dropdown from "@/components/clinicDashboard/clinicSidebar/Dropdown";

export default function MobileDashboardSidebar({
  setPreference,
  activePreference,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const handleMenuClick = (index, itemPreference) => {
    toggleMenu(index);
    if (itemPreference) {
      setPreference(itemPreference);
    }
    if (index !== 0) {
      toggleSidebar();
    }
  };

  const toggleMenu = (index) => {
    setOpenMenus((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = false;
      });
      return {
        ...newState,
        [index]: !prevState[index],
      };
    });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <div className="z-[50000] w-full fixed bottom-0 h-14 px-4 py-2.5">
        <Image
          src="/assets/icons/hamburgerMenuIcon.svg"
          className="cursor-pointer ml-auto"
          onClick={toggleSidebar}
          width={36}
          height={36}
          alt="menu"
        />
      </div>

      <div
        onClick={toggleSidebar}
        style={{
          borderTopRightRadius: isOpen ? "0px" : "100%",
          borderBottomRightRadius: isOpen ? "0px" : "100%",
          transition: "all .25s ease-out",
          transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
          width: "100vw",
          height: "100dvh",

          position: "fixed",
        }}
        className={`fixed top-0 z-[20000] bg-black/80 w-full h-full`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            transition: "transform .5s ease-out",
            transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
            minWidth: "310px",
            width: "max-content",
            maxWidth: "80vw",
            height: "100%",
          }}
          className="fixed bg-white flex flex-col justiy-between py-7 px-3 left-0 rounded-e-xl"
        >
          <div
            className={`bg-white shadow-md px-2 sm:px-4 py-3 rounded-3xl flex flex-col gap-2 h-full`}
          >
            {/* Header */}
            <div className="flex items-center justify-center relative mt-4 mb-2 sm:mt-8">
              <h1 className="pt-2 text-lg sm:text-xl font-bold text-gray-800">
                Medyanes<span className="text-teal-500">360</span>
              </h1>
            </div>

            {/* Menu items - Scrollable area */}
            <ul className="flex-1 space-y-1 sm:space-y-2 overflow-y-auto max-h-full no-scrollbar">
              {/* Profile preferences button */}
              <li className="flex flex-col animate-fadeIn">
                <button
                  onClick={() => setPreference("clinic-information")}
                  className="w-full h-10 sm:h-12 rounded-lg px-2 py-1 sm:px-3 sm:py-2 flex items-center space-x-2 text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none"
                >
                  <span className="font-inter text-[16px] font-semibold leading-[22px] text-left decoration-skip-ink-0">
                    Profile preferences
                  </span>
                </button>
              </li>

              {/* Menu items */}
              {clinicSidebarData.map((menuItem, index) => (
                <li key={index} className="flex flex-col animate-fadeIn">
                  <button
                    onClick={() => handleMenuClick(index, menuItem.preference)}
                    className={`w-full h-10 sm:h-12 rounded-lg px-2 py-1 sm:px-3 sm:py-2 flex items-center justify-between focus:outline-none ${
                      activePreference === menuItem.preference
                        ? "bg-[#52B8AB] bg-opacity-10 text-[#52B8AB]"
                        : "text-gray-700"
                    } hover:bg-[#52B8AB] hover:bg-opacity-10 hover:text-[#52B8AB]`}
                  >
                    <div className="flex items-center space-x-2">
                      <Image
                        src={menuItem.icon}
                        alt={`${menuItem.title} icon`}
                        width={20}
                        height={20}
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "contain",
                        }}
                        className={`${
                          activePreference === menuItem.preference
                            ? "brightness-250"
                            : "grayscale"
                        }`}
                      />
                      <span className="text-[0.550rem] sm:text-base text-left pl-1">
                        {menuItem.title}
                      </span>
                    </div>
                    {menuItem.children && menuItem.children.length > 0 && (
                      <div className="flex items-center">
                        <Image
                          src={
                            openMenus[index]
                              ? "/assets/dashboard/arrow-down.svg"
                              : "/assets/dashboard/arrow-right.svg"
                          }
                          alt="Toggle Icon"
                          width={20}
                          height={20}
                          style={{
                            width: "20px",
                            height: "20px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    )}
                  </button>
                  {menuItem.children && menuItem.children.length > 0 && (
                    <Dropdown
                      item={menuItem}
                      index={index}
                      activeSubItem={openMenus}
                      handleSubMenuClick={toggleMenu}
                      setPreference={setPreference}
                      activePreference={activePreference}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
