import React from "react";
import OurServicesDesktop from "./desktop";
import OurServicesMobile from "./mobile";

const OurServicesComponent = () => {
    return (
      <div>
        {/* Desktop Görünüm */}
        <div className="hidden sm:block">
          <OurServicesDesktop />
        </div>
  
        {/* Mobil Görünüm */}
        <div className="block sm:hidden">
          <OurServicesMobile />
        </div>
      </div>
    );
  };

export default OurServicesComponent;
