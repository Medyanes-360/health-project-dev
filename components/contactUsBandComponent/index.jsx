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
        <div className="h-full w-full    py-10  xl:container mx-auto flex justify-between items-center">
          <div className="flex  ">
            <Image
              src="/assets/icons/stethescope.svg"
              alt="icon"
              width={50}
              height={50}
            />
            <div className="flex ml-2 text-lg text-white flex-col">
              {" "}
              <h2>Looking for professional & trusted medical healthcore? </h2>
              <strong>Don&apos;t hesitate to contact us.</strong>
            </div>
          </div>
          <Link href="/become-a-partner">
            <ButtonComponent
              title="Become a Partner"
              className=" py-3 px-5  text-black bg-white "
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ContactUsBandComponent;
