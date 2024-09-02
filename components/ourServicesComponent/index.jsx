import React from "react";
import OurServicesDesktop from "./desktop";
import OurServicesMobile from "./mobile";
import OurServicesTablet from "./tablet"; // Tablet bileşenini ekliyoruz

const OurServicesComponent = () => {
    return (
        <div>
            {/* Desktop Görünüm */}
            <div className="hidden lg:block">
                <OurServicesDesktop />
            </div>

            {/* Tablet Görünüm */}
            <div className="hidden md:block lg:hidden">
                <OurServicesTablet />
            </div>

            {/* Mobil Görünüm */}
            <div className="block md:hidden">
                <OurServicesMobile />
            </div>
        </div>
    );
};

export default OurServicesComponent;
