import React from "react";
import PopularClinicsDesktop from "./desktop";
import PopularClinicsMobile from "./mobile";
import PopularClinicsTablet from "./tablet";

const PopularClinicsComponent = () => {
  return (
    <div>
      {/* Desktop Görünüm */}
      <div className="hidden lg:block">
        <PopularClinicsDesktop />
      </div>

      {/* Tablet Görünüm */}
      <div className="hidden md:block lg:hidden">
        <PopularClinicsTablet />
      </div>

      {/* Mobil Görünüm */}
      <div className="block md:hidden">
        <PopularClinicsMobile />
      </div>
    </div>
  );
};

export default PopularClinicsComponent;
