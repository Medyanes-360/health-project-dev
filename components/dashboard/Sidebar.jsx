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
    <div className="h-screen p-2 bg-gray-100">
      <div
        className="bg-white shadow-md px-4 py-3 rounded-lg
                   w-1/2 sm:w-1/2 md:w-60 lg:w-72 xl:w-80
                   h-full flex flex-col gap-2"
      >
        {/* Başlık */}
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-xl font-bold text-gray-800">
            Medyanes<span className="text-teal-500">360</span>
          </h1>
        </div>

        {/* Acil Yardım */}
        <div className="mb-4 px-4 py-2 bg-red-100 text-red-600 rounded-md text-center">
          🚨 Emergency help
        </div>

        {/* Menü öğeleri */}
        <ul className="flex-1 space-y-2">
          {menuData.map((menuItem, index) => (
            <li key={index} className="flex flex-col">
              <button
                onClick={() => handleMenuClick(index)}
                className={`w-full h-12 rounded-lg px-3 py-2 flex items-center justify-between text-gray-700 hover:text-teal-600 focus:outline-none ${
                  activeIndex === index ? "bg-[#52B8AB8F] text-white" : ""
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Image
                    src={menuItem.icon}
                    alt={`${menuItem.title} icon`}
                    width={24}
                    height={24}
                    className={`${activeIndex === index ? "text-white" : ""}`}
                  />
                  <span>{menuItem.title}</span>
                </div>
                <span className="flex items-center">
                  {openMenus[index] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                    </svg>
                  )}
                </span>
              </button>
              {openMenus[index] && (
                <ul className="pl-8 mt-2 space-y-2">
                  {menuItem.items.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`flex items-center cursor-pointer ${
                        activeSubItem.menuIndex === index &&
                        activeSubItem.subIndex === subIndex
                          ? "text-teal-500 font-bold"
                          : "text-gray-700"
                      }`}
                      onClick={() => handleSubMenuClick(index, subIndex)}
                    >
                      <span className="text-teal-500 mr-2">•</span>
                      <span>{subItem.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
