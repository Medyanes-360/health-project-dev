"use client";
import Image from "next/image";
import React, { useState } from "react";
import clinicSidebarData from "./clinicSidebarData.json";
import { AnimatePresence, motion } from "framer-motion";
import Dropdown from "./Dropdown";

const ClinicSidebar = ({ setPreference, activePreference }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [openMenus, setOpenMenus] = useState({});

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (index, itemPreference) => {
    setActiveIndex(index);
    toggleMenu(index);
    if (itemPreference) {
      setPreference(itemPreference);
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

  return (
    <div
      className={`transition-all duration-300 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-[-80%] w-0"
      } relative hidden md:flex`}
    >
      <div
        className={`bg-white shadow-md px-2 py-2 sm:px-4 sm:py-3 rounded-3xl flex flex-col gap-2 h-full
        ${isSidebarOpen ? "opacity-100" : "opacity-0 w-0 pointer-events-none"}`}
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

      {/* Arrow Icon */}
      <div
        onClick={toggleSidebar}
        className={`cursor-pointer flex absolute -right-3 top-4 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md items-center justify-center ${
          isSidebarOpen ? "" : "rotate-180 -right-12"
        }`}
      >
        <Image
          src={
            isSidebarOpen
              ? "/assets/dashboard/left.svg"
              : "/assets/dashboard/right.svg"
          }
          alt="Toggle Sidebar Icon"
          width={20}
          height={20}
          style={{
            width: "20px",
            height: "20px",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default ClinicSidebar;
