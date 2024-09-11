import Footer from "@/components/footer";
import NavigationHeader from "@/components/navigationHeader";
import ImageModal from "@/globalElements/imageModal";

export default function HomeLayout({ children }) {
  return (
    <div>
      <NavigationHeader />

      {children}
      <ImageModal />
      <Footer />
    </div>
  );
}
