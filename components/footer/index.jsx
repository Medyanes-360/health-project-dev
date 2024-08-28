import Image from "next/image";
import FooterData from "./FooterData";

const Footer = () => {
  return (
    <div>
      <div className="relative w-full min-h-[100vh]">
        {/* the footer background image */}
        <Image
          src={"/assets/images/contactUsBandBackgroundImage.jpeg"}
          fill
          alt="footer"
          className="object-cover brightness-[0.4]"
        />
        {/* the background color */}
        <div  className="absolute z-10 w-full h-full bg-primary/40 "/>

        {/* the content */}
        <div className="absolute z-20 w-full h-full px-4 py-20" >
            {/* footers data */}
            <FooterData/>

        </div>
      </div>
    </div>
  );
};

export default Footer;
