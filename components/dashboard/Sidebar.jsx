"use client";

import React, { useState } from "react";
import Link from "next/link";
import menuData from "./menuData.json";

const Sidebar = () => {
  // Tüm menü öğelerinin açık/kapalı durumunu izlemek için bir durum
  const [openMenus, setOpenMenus] = useState({});

  // Belirli bir menü öğesinin açık/kapalı durumunu değiştiren fonksiyon
  const toggleMenu = (index) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="w-64 h-screen bg-white shadow-md px-4 py-8">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Medyanes<span className="text-teal-500">360</span>
        </h1>
      </div>
      <div className="mb-4 px-4 py-2 bg-red-100 text-red-600 rounded-md text-center">
        🚨 Emergency help
      </div>
      <ul className="space-y-2">
        {menuData.map((menuItem, index) => (
          <li key={index}>
            <button
              onClick={() => toggleMenu(index)}
              className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <span className="material-icons">{menuItem.icon}</span>
                <span>{menuItem.title}</span>
              </div>
              <span className="material-icons">
                {openMenus[index] ? "expand_less" : "expand_more"}
              </span>
            </button>
            {openMenus[index] && (
              <ul className="pl-8 mt-2 space-y-2">
                {menuItem.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={subItem.link}
                      className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                    >
                      <span className="material-icons">chevron_right</span>
                      <span>{subItem.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
