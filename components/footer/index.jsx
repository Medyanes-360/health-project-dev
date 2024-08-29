import Image from "next/image";
import FooterData from "./FooterData";
import TrustedClients from "./TrustedClients";
import SocialMedia from "./SocialMedia";
import DescriptionSection from "./DescriptionSection";

const Footer = () => {
  return (
    <div>
      <div className="relative w-full min-h-[80vh] ">
        {/* the footer background image */}
        <Image
          src={"/assets/images/contactUsBandBackgroundImage.jpeg"}
          fill
          alt="footer"
          className="object-cover brightness-[0.4] w-full h-full absolute z-10"
        />
        {/* the background color */}
        <div className="absolute z-30 w-full h-full bg-black/50 " />
        {/* the content */}
        <div className="relative z-40 w-full h-full space-y-4 ">
          <div className="absolute -z-10 w-full h-full bg-primary/40 " />
          <div className="py-20">
          {/* footers data */}
          <FooterData />
          {/* clients */}
          <TrustedClients />
          {/* icons */}
          <SocialMedia />
          </div>
        </div>

        <div className="relative z-40 w-full h-full py-20">
          {/* description */}
          <DescriptionSection />
        </div>
      </div>
    </div>
  );
};

export default Footer;
