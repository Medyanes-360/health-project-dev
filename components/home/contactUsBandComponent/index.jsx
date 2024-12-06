import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
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
      {" "}
      <div
        // section backgroundu image'ı tutmak için var. aşağıdaki div'de ise backgroundun üstüne yaptığımız color filterı var.
        style={{
          background:
            "linear-gradient(325.39deg, rgba(82, 184, 171,.85) 6.94%, rgba(82, 184, 171,.85) 94.28%)",
        }}
        className="bg-primary-light h-full flex justify-center"
      >
        {/* component'ın max-widthini xl'a ayarlayan container:  */}
        <ExtraLargePageContainer className="   md:justify-between  flex flex-col md:flex-row  items-start  md:items-center  py-3 h-full w-full md:py-10  ">
          <div className="flex  items-center   ">
            <Image
              className=""
              src="/assets/icons/stethescope.svg"
              alt="icon"
              width={54}
              height={54}
            />
            <div className="tracking-wide  text-sm leading-[21px] font-inter flex ml-6 sm:text-lg text-white flex-col">
              {" "}
              <h2 className="font-[600]">
                Looking for professional & trusted medical healthcore?{" "}
              </h2>
              <p className="font-[900]">Don&apos;t hesitate to contact us.</p>
            </div>
          </div>
          <Link className=" w-full  md:w-auto mt-3 md:mt-0" href="/test">
            <ButtonComponent
              title="Get a Free Quote"
              className=" !w-full truncate  !text-base !font-inter !font-[600] !rounded-[10px]  !py-3 !px-16     !text-black-light !bg-white "
            />
          </Link>
        </ExtraLargePageContainer>
      </div>
    </section>
  );
};
export default ContactUsBandComponent;
