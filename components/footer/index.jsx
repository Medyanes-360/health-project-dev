import Image from "next/image";
import FooterData from "./FooterData";
import TrustedClients from "./TrustedClients";
import SocialMedia from "./SocialMedia";
import DescriptionSection from "./DescriptionSection";

const Footer = () => {
  return (
    <div>
      <div className="relative w-full min-h-[100vh] 3xl:min-h-[75vh] overflow-hidden">
        {/* the footer background image */}
        <Image
          src={"/assets/images/contactUsBandBackgroundImage.jpeg"}
          fill
          alt="footer"
          className="object-cover brightness-[0.4]"
        />
        {/* the background color */}
        <div className="absolute z-10 w-full h-full bg-primary/40 " />

        {/* the content */}
        <div className="absolute z-20 w-full h-full pt-20 space-y-4 xl:container">
          {/* footers data */}
          <FooterData />
          {/* clients */}
          <TrustedClients />
          {/* icons */}
            <SocialMedia />
            {/* description */}
            <DescriptionSection/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
