import DesktopFeelTheBenefit from "./desktop";
import MobileFeelTheBenefit from "./mobile";
import TabletFeelTheBenefit from "./tablet"; // Yeni eklenen tablet bileşeni

const FeelTheBenefitComponent = () => {
  return (
    <div>
      {/* Masaüstü Görünümü */}
      <div className="hidden lg:block">
        <DesktopFeelTheBenefit />
      </div>

      {/* Tablet Görünümü */}
      <div className="hidden md:block lg:hidden">
        <TabletFeelTheBenefit />
      </div>

      {/* Mobil Görünümü */}
      <div className="block md:hidden">
        <MobileFeelTheBenefit />
      </div>
    </div>
  );
};

export default FeelTheBenefitComponent;
