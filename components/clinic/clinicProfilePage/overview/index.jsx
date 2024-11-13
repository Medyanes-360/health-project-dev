import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { MotionDiv } from "@/globalElements/motion";
import Image from "next/image";

const data = {
  main_heading: "Hungary, Budapest",
  sub_heading_1: "PM dental crown in Implant4Life by Smilefactory",
  sections: [
    {
      heading: "About the clinic",
      text: "Implant4Life by Smilefactory, a private medical center in Budapest, Hungary, specializes in Dental Treatment and Maxillofacial Surgery. The clinic integrates advanced digital technologies and was awarded the All-on-4.",
      linkText: "Read more",
      linkClass: "text-[#52B8AB] font-poppins text-xs font-semibold leading-4", // tailwind class
    },
    {
      heading: "Highlights",
      text: "2015 Year of foundation",
      linkText: "3 doctors",
      linkClass: "font-poppins text-sm font-normal leading-6", // tailwind class
    },
    // ,
    // {
    //   heading: "Accepted payment method",
    //   text: "Cash",
    //   linkText: "3 doctors",
    //   linkClass: "text-black",
    // },
  ],
  sub_text:
    "No payment is needed now. You will be charged directly at the clinic when you arrive.",
  hrefText_1: "View more information",
  sub_heading_4: "Accepted payment method",
  text_3: "Cash",
  text_4: "3 doctors",
};

const Overview = () => {
  return (
    <div className="" id="overviewDiv">
      <div id="overview">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center">
            <Image
              src="/assets/clinic/location.svg"
              alt="Location Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <p className="text-[#52B8AB] font-poppins text-base font-semibold leading-6">
              {data.main_heading}
            </p>
          </div>
        </div>

        <h1 className="font-poppins text-lg font-semibold leading-6 py-4">
          {data.sub_heading_1}
        </h1>

        {data.sections.map((section, index) => (
          <div key={index} className=" flex flex-col gap-2">
            <h2 className="font-poppins text-lg font-semibold leading-6">
              {section.heading}
            </h2>
            <p className="font-poppins text-sm font-normal leading-6">
              {section.text}
            </p>
            <a className={section.linkClass}>{section.linkText}</a>
            {<hr className="my-8" />}
          </div>
        ))}

        <div className=" flex flex-col gap-2">
          <h2 className="font-poppins text-lg font-semibold leading-6">
            {data.sub_heading_4}
          </h2>
          <p className="font-poppins text-sm font-normal leading-6">
            {data.text_3}
          </p>
          <a className="font-poppins text-sm font-normal leading-6">
            {data.text_4}
          </a>

          <div className="py-2 flex justify-center">
            <div className="h-auto bg-[#D9D9D921] p-6 rounded-3xl w-full">
              <div className="py-2 flex items-center gap-3">
                <Image
                  src="/assets/clinic/cards.svg"
                  width={20}
                  height={20}
                  alt="Grammarly Logo"
                  className="self-start"
                />
                <div>
                  <h1 className="font-poppins text-base font-normal leading-6">
                    {data.sub_text}
                  </h1>
                  <p className="font-poppins text-base font-semibold leading-6 underline">
                    {data.hrefText_1}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8" />
      </div>
    </div>
  );
};

export default Overview;
