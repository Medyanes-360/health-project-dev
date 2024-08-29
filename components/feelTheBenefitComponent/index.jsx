import React from "react";
import DesktopFeelTheBenefit from "./desktop";
import MobileFeelTheBenefit from "./mobile";

const FeelTheBenefitComponent = () => {
  return (
    <div>
      {/* Masaüstü Görünümü */}
      <div className="hidden sm:block">
        <DesktopFeelTheBenefit />
      </div>

      {/* Mobil Görünümü */}
      <div className="block sm:hidden">
        <MobileFeelTheBenefit />
      </div>
    </div>
  );
};

export default FeelTheBenefitComponent;
