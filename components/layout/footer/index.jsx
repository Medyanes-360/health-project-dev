import Image from "next/image";
import FooterData from "./FooterData";
import TrustedClients from "./TrustedClients";
import SocialMedia from "./SocialMedia";
import DescriptionSection from "./DescriptionSection";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

const Footer = () => {
  return (
    <div>
      <div className="relative w-full min-h-[80vh] py-32 ">
        <Image
          src={"/assets/images/contactUsBandBackgroundImage.jpeg"}
          fill
          alt="footer"
          className="object-cover w-full h-full absolute z-10 object-center "
        />

        <div
          className={
            "!w-full !h-full !absolute  !z-40 bg-[#00000052] !inset-0 "
          }
        />
        <ExtraLargePageContainer
          className={
            "!w-full !h-full !absolute !z-30 !blur-md !inset-0 !p-0 !mx-auto"
          }
        >
          <Image
            src={"/assets/images/contactUsBandBackgroundImage.jpeg"}
            fill
            alt="footer"
            className="object-cover object-center py-32 rounded-2xl mx-auto"
          />
        </ExtraLargePageContainer>

        <div className="relative z-50 w-full h-full ">
          <ExtraLargePageContainer className={"!p-0 lg:p-0 "}>
            <div className="space-y-10 lg:space-y-5 p-4 border border-black rounded-2xl mx-auto ">
              <FooterData />
              <div className="m-3 bg-third w-full h-[1px] mx-auto" />
              <TrustedClients />
              <div className="m-3 bg-third w-full h-[1px] mx-auto" />

              <SocialMedia />
              <DescriptionSection />
            
            </div>
          </ExtraLargePageContainer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
