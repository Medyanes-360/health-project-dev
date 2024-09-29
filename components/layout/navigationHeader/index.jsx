import { navbarData } from "@/data/componentData/navbar";
import HeaderbarComponent from "./headerbarComponent";
import MobileNavigation from "./mobileNavigation";
import NavbarComponent from "./navbarComponent";

export default function NavigationHeader() {
  const data = navbarData;
  return (
    <nav>
      <div className="hidden  md:block">
        <NavbarComponent navbarData={data} />
        <HeaderbarComponent />
      </div>
      <div className="block md:hidden">
        <MobileNavigation sidebarData={data} />
      </div>
    </nav>
  );
}
