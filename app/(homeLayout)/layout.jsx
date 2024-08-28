import Footer from "@/components/footer";
import HeaderbarComponent from "@/components/headerbarComponent";
import NavbarComponent from "@/components/navbarComponent";

const navbarData = {
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
export default function HomeLayout({ children }) {
  return (
    <div className=" ">
      <NavbarComponent navbarData={navbarData} />
      <HeaderbarComponent />
      {children}
      <Footer/>
    </div>
  );
}
