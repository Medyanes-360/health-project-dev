"use client";

import React, { useState } from "react";
import Image from "next/image";
import menuData from "./menuData.json";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState({
    menuIndex: null,
    subIndex: null,
  });

  const toggleMenu = (index) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleMenuClick = (index) => {
    setActiveIndex(index);
    toggleMenu(index);
  };

  const handleSubMenuClick = (menuIndex, subIndex) => {
    setActiveSubItem({ menuIndex, subIndex });
  };

  return (
    <div className="h-screen p-4 ">
      <div
        className="bg-white shadow-md px-2 py-2 sm:px-4 sm:py-3 rounded-3xl
                   xs:w-3/4 sm:w-3/4 md:w-60 lg:w-72 xl:w-80
                   h-full flex flex-col gap-2"
      >
        {/* Başlık */}
        <div className="flex items-center justify-center relative mt-4 mb-2 sm:mt-8">
          <h1 className="pt-2 text-lg sm:text-xl font-bold text-gray-800">
            Medyanes<span className="text-teal-500">360</span>
          </h1>
          <div className="hidden md:flex absolute -right-3 top-0 transform translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md items-center justify-center">
            <Image
              src="/assets/dashboard/arrow-circle-left.svg"
              alt="Left Arrow Icon"
              width={32}
              height={32}
            />
          </div>
        </div>

        {/* Menü öğeleri */}
        <ul className="flex-1 space-y-1 sm:space-y-2">
          {/* Acil Yardım Butonu */}
          <li className="flex flex-col">
            <button className="w-full h-10 sm:h-12 rounded-lg px-2 py-1 sm:px-3 sm:py-2 flex items-center space-x-2 text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none">
              <Image
                src="/assets/dashboard/emergency.svg"
                alt="Emergency Icon"
                width={24}
                height={24}
              />
              <span className="text-[0.550rem] sm:text-base">
                Emergency help
              </span>
            </button>
          </li>

          {/* Menü öğeleri */}
          {menuData.map((menuItem, index) => (
            <li key={index} className="flex flex-col">
              <button
                onClick={() => handleMenuClick(index)}
                className={`w-full h-10 sm:h-12 rounded-lg px-2 py-1 sm:px-3 sm:py-2 flex items-center justify-between focus:outline-none ${
                  activeIndex === index
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
                    className={`${
                      activeIndex === index ? "text-[#52B8AB]" : ""
                    }`}
                  />
                  <span className="text-[0.550rem] sm:text-base text-left pl-1">
                    {menuItem.title}
                  </span>
                </div>
                <div className="flex items-center">
                  <Image
                    src={
                      openMenus[index]
                        ? "/assets/dashboard/arrow-down.svg"
                        : "/assets/dashboard/arrow-right.svg"
                    }
                    alt="Toggle Icon"
                    width={14}
                    height={14}
                  />
                </div>
              </button>
              {openMenus[index] && (
                <ul className="pl-6 mt-1 space-y-1 sm:pl-8 sm:mt-2 sm:space-y-2">
                  {menuItem.items.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`flex items-center cursor-pointer pt-1 ${
                        activeSubItem.menuIndex === index &&
                        activeSubItem.subIndex === subIndex
                          ? "text-gray-700 font-bold"
                          : "text-gray-700"
                      }`}
                      onClick={() => handleSubMenuClick(index, subIndex)}
                    >
                      <span className="text-[#52B8AB] mr-1 sm:mr-2">•</span>
                      <span className="text-[0.550rem] sm:text-base">
                        {subItem.title}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Alttaki Resim */}
        <div className="flex justify-center items-center mt-auto mb-4">
          <Image
            src="/assets/dashboard/sidebar-image.png"
            alt="Sidebar Image"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
