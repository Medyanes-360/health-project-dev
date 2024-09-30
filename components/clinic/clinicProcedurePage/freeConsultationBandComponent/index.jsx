import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";
import Link from "next/link";

export default function FreeConsultationBandComponent() {
  const doctorProfileSrc = "/assets/mocks/doctorprofile.png";

  //     bandTestQuestion: {
  //   text: "Take a test to find the best Dental Implant treatment for you",
  //   question: "How many teeth would you like to replace?",
  //   options: ["1", "2", "Multiple", "Full Mouth"],
  // },
  return (
    <ExtraLargePageContainer>
      <section
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage:
            "url(/assets/images/contactUsBandBackgroundImage.jpeg)",
        }}
        className="rounded-2xl mt-5 overflow-hidden "
      >
        <div
          // section backgroundu image'ı tutmak için var. aşağıdaki div'de ise backgroundun üstüne yaptığımız color filterı var.
          style={{
            background:
              "linear-gradient(325.39deg, rgba(82, 184, 171,.85) 6.94%, rgba(82, 184, 171,.85) 94.28%)",
          }}
          className="bg-primary-light h-full flex justify-between"
        >
          <div className="flex justify-between items-center w-full py-[26px] px-[32px]">
            <div className="flex items-center">
              <Image
                src={doctorProfileSrc}
                alt=""
                className="h-full w-auto rounded-full mr-3"
                width={96}
                height={96}
              />
              <div className="flex flex-col items-start">
                {" "}
                <p className="text-white font-semibold text-xl">
                  Get a <span className="text-[#F22F46]">free</span>{" "}
                  consultation just in 5 minutes
                </p>
                <p className="text-2xs mt-1 text-white font-semibold">
                  Individual treatment program and cost estimate
                </p>
              </div>
            </div>
            <Link className=" w-full  md:w-auto mt-3 md:mt-0" href="#">
              <ButtonComponent
                title="Get Free Personalized Ouote"
                className=" w-full truncate !text-base !shadow-[0_12px_48px_0px_#002C6D1A] hover:!shadow-[0_12px_48px_0px_#002C6D1A] hover:!opacity-90 !font-inter !font-[600] !rounded-[3px]  !py-2.5 !px-6     !text-primary  !bg-white "
              />
            </Link>
          </div>
        </div>
      </section>
    </ExtraLargePageContainer>
  );
}
