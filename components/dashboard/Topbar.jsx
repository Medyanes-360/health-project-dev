import React from "react";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-8 py-10">
      {/* İkonlar ve Profil */}
      <div className="flex items-center space-x-2 sm:space-x-4 ml-auto">
        {/* Yuvarlak İkonlar */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
            <Image
              src="/assets/dashboard/search-normal.svg"
              alt="Search Icon"
              width={20}
              height={20}
              className="sm:w-6 sm:h-6"
            />
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
            <Image
              src="/assets/dashboard/setting-2.svg"
              alt="Settings Icon"
              width={20}
              height={20}
              className="sm:w-6 sm:h-6"
            />
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
            <Image
              src="/assets/dashboard/notification.svg"
              alt="Notifications Icon"
              width={20}
              height={20}
              className="sm:w-6 sm:h-6"
            />
          </div>
        </div>

        {/* Profil Bölümü */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Image
            src="/assets/dashboard/Avatar.png"
            alt="Profile"
            width={28}
            height={28}
            className="rounded-full xs:w-32 xs:h-32"
          />
          <div className="flex flex-col">
            <span className="text-gray-800 font-semibold text-sm sm:text-base">
              dr.reha genç
            </span>
            <span className="text-xs sm:text-sm text-teal-500">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
