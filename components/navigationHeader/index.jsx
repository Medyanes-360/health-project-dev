import HeaderbarComponent from "../headerbarComponent";
import MobileNavigation from "../mobileNavigation";
import NavbarComponent from "../navbarComponent";

const data = {
  routes: [
    { id: 0, title: "Home", url: "/" },
    { id: 1, title: "About", url: "/about" },
    { id: 2, title: "Legal Documents", url: "/legal-documents" },
    { id: 3, title: "Customer Supports", url: "/customer-supports" },
    { id: 4, title: "Login For Clinic", url: "/login/clinic" },
  ],
  info: {
    phone: "+90-555-635-44-22",
  },
};
export default function NavigationHeader() {
  return (
    <nav>
      <div className="xs:hidden  sm:block">
        <NavbarComponent navbarData={data} />
        <HeaderbarComponent />
      </div>
      <div className="xs:block sm:hidden">
        <MobileNavigation sidebarData={data} />
      </div>
    </nav>
  );
}
