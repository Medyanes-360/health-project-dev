import Footer from "@/components/layout/footer";
import NavigationHeader from "@/components/layout/navigationHeader";

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
