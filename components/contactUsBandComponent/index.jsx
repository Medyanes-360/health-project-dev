import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";
import Link from "next/link";

const ContactUsBandComponent = () => {
  return (
    <section
      style={{
        backgroundPosition: "center",
        backgroundImage:
          "url(/assets/images/contactUsBandBackgroundImage.jpeg)",
        backgroundBlendMode: "lighten",
      }}
      className=" "
    >
      <div
        // section backgroundu image'ı tutmak için var. aşağıdaki div'de ise backgroundun üstüne yaptığımız color filterı var.
        style={{
          background: "rgba(82, 184, 171,.6)",
        }}
        className="h-full flex justify-center "
      >
        {/* component'ın max-widthini xl'a ayarlayan container:  */}
        <div className="h-full w-full py-10  xl:container mx-auto flex justify-between items-center">
          <div className="flex  ">
            <Image
              src="/assets/icons/stethescope.svg"
              alt="icon"
              width={50}
              height={50}
            />
            <div className=" font-inter flex ml-2 text-lg text-white flex-col">
              {" "}
              <h2 className="font-[600]">
                Looking for professional & trusted medical healthcore?{" "}
              </h2>
              <p className="font-[900]">Don&apos;t hesitate to contact us.</p>
            </div>
          </div>
          <Link href="/become-a-partner">
            <ButtonComponent
              title="Become A Partner"
              className="shadow-[0_12px_48px_0px_#002C6D1A] font-inter font-[600] !rounded-[10px]  py-3 px-16     text-black bg-white "
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ContactUsBandComponent;
