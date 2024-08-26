import HeaderbarComponent from "@/component/headerbarComponent";
import NavbarComponent from "@/component/navbarComponent";

export default function HomeLayout({ children }) {
  return (
    <>
      <NavbarComponent />
      <HeaderbarComponent />
      {children}

      <p>Footer Component here</p>
    </>
  );
}
