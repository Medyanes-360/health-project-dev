import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";
import Link from "next/link";

const ContactUsBandComponent = () => {
  return (
    <section
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage:
          "url(/assets/images/contactUsBandBackgroundImage.jpeg)",
      }}
      className=" "
    >
      <div
        // section backgroundu image'ı tutmak için var. aşağıdaki div'de ise backgroundun üstüne yaptığımız color filterı var.
        style={{
          background:
            "linear-gradient(325.39deg, rgba(82, 184, 171,.85) 6.94%, rgba(82, 184, 171,.85) 94.28%)",
        }}
        className="bg-primary-light h-full flex justify-center"
      >
        {/* component'ın max-widthini xl'a ayarlayan container:  */}
        <div className="h-full w-full sm:py-10 xs:py-3 px-4 xl:container mx-auto flex xs:flex-col  sm:flex-row  justify-between items-center">
          <div className="flex items-center   ">
            <Image
              className=""
              src="/assets/icons/stethescope.svg"
              alt="icon"
              width={54}
              height={54}
            />
            <div className="tracking-wide xs:text-xs xs:leading-[21px] font-inter flex ml-6 sm:text-lg text-white flex-col">
              {" "}
              <h2 className="font-[600]">
                Looking for professional & trusted medical healthcore?{" "}
              </h2>
              <p className="font-[900]">Don&apos;t hesitate to contact us.</p>
            </div>
          </div>
          <Link
            className="xs:w-full sm:w-auto xs:mt-3 sm:mt-0"
            href="/become-a-partner"
          >
            <ButtonComponent
              title="Become A Partner"
              className="xs:w-full xs:py-2.5 xs:text-base shadow-[0_12px_48px_0px_#002C6D1A] font-inter font-[600] !rounded-[10px]  py-3 px-16     text-black bg-white "
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ContactUsBandComponent;
