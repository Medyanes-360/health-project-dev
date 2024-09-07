import Footer from "@/components/footer";
import NavigationHeader from "@/components/navigationHeader";

export default function HomeLayout({ children }) {
  return (
    <div>
      <NavigationHeader />

      {children}
      <Footer />
    </div>
  );
}
