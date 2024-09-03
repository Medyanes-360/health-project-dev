// Topbar.jsx
import React from "react";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-white shadow-md">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <span className="material-icons text-gray-600 cursor-pointer">
          search
        </span>
        <span className="material-icons text-gray-600 cursor-pointer">
          settings
        </span>
        <span className="material-icons text-gray-600 cursor-pointer">
          notifications
        </span>
        <div className="flex items-center space-x-2">
          <img
            src="/profile-pic.jpg" 
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-800">dr.reha genç</span>
          <span className="text-sm text-gray-500">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
