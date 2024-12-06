import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";
import Link from "next/link";

export default function FreeConsultationBandComponent() {
  const doctorProfileSrc = "/assets/mocks/doctorprofile.png";

  return (
    <ExtraLargePageContainer>
      <section
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage:
            "url(/assets/images/contactUsBandBackgroundImage.jpeg)",
        }}
        className="rounded-2xl mt-5 overflow-hidden"
      >
        <div
          style={{
            background:
              "linear-gradient(325.39deg, rgba(82, 184, 171,.85) 6.94%, rgba(82, 184, 171,.85) 94.28%)",
          }}
          className="bg-primary-light h-full flex flex-col md:flex-row justify-between"
        >
          <div className="flex flex-col md:flex-row justify-between items-center w-full py-[26px] px-[32px]">
            {/* Doctor Image and Text */}
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <Image
                src={doctorProfileSrc}
                alt="Doctor Profile"
                className="h-24 w-24 md:h-full md:w-auto rounded-full mr-0 md:mr-3 mb-3 md:mb-0"
                width={96}
                height={96}
              />
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <p className="text-white font-semibold text-lg md:text-xl">
                  Get a <span className="text-[#F22F46]">free</span>{" "}
                  consultation just in 5 minutes
                </p>
                <p className="text-xs md:text-2xs mt-1 text-white font-semibold">
                  Individual treatment program and cost estimate
                </p>
              </div>
            </div>

            {/* Button */}
            <Link className="w-full md:w-auto mt-3 md:mt-0" href="#">
              <ButtonComponent
                title="Get Free Personalized Quote"
                className="w-full md:w-auto truncate !text-base !shadow-[0_12px_48px_0px_#002C6D1A] hover:!shadow-[0_12px_48px_0px_#002C6D1A] hover:!opacity-90 !font-inter !font-[600] !rounded-[3px] !py-2.5 !px-6 !text-primary !bg-white"
              />
            </Link>
          </div>
        </div>
      </section>
    </ExtraLargePageContainer>
  );
}
