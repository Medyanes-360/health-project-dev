import React from "react";
import PopularClinicsDesktop from "./desktop";
import PopularClinicsMobile from "./mobile";

const PopularClinicsComponent = () => {
  return (
    <div>
      {/* Desktop Görünüm */}
      <div className="hidden sm:block">
        <PopularClinicsDesktop />
      </div>

      {/* Mobil Görünüm */}
      <div className="block sm:hidden">
        <PopularClinicsMobile />
      </div>
    </div>
  );
};

export default PopularClinicsComponent;
