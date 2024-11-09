import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { MotionDiv } from "@/globalElements/motion";
import Image from "next/image";

const data = {
  main_heading: "Hungary, Budapest",
  sub_heading_1: "PM dental crown in Implant4Life by Smilefactory",
  sub_heading_2: "About the clinic",
  text: "Implant4Life by Smilefactory, a private medical center in Budapest, Hungary, specializes in Dental Treatment and Maxillofacial Surgery. The clinic integrates advanced digital technologies and was awarded the All-on-4.",
  hrefText: "Read more",
  sub_heading_3: "Highlights",
  text_1: "2015 Year of foundation",
  text_2: "3 doctors",
  sub_heading_4: "Accepted payment method",
  text_3: "Cash",
  text_4: "3 doctors",
  sub_text:
    "No payment is needed now. You will be charged directly at the clinic when you arrive.",
  hrefText_1: "View more information",
};

const Overview = () => {
  return (
    <div className="py-10 " id="overviewDiv">
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
            <p className="text-[#52B8AB] font-bold">{data.main_heading}</p>{" "}
          </div>
        </div>
        <h1 className="font-medium text-lg sm:text-2xl py-4">
          {" "}
          {data.sub_heading_1}{" "}
        </h1>
        <div className="py-8 flex flex-col gap-2">
          <h2 className="font-medium text-lg sm:text-2xl">
            {data.sub_heading_2}
          </h2>

          <p>{data.text}</p>
          <a className="text-[#52B8AB]"> {data.hrefText} </a>
        </div>
        <hr></hr>
        <div className="py-8 flex flex-col gap-2">
          <h2 className="font-medium text-lg sm:text-2xl">
            {data.sub_heading_3}
          </h2>

          <p>{data.text_1}</p>
          <a className=""> {data.text_2} </a>
        </div>
        <hr></hr>
        <div className="py-8 flex flex-col gap-2">
          <h2 className="font-medium text-lg sm:text-2xl">
            {data.sub_heading_4}
          </h2>

          <p>{data.text_3}</p>
          <a className=""> {data.text_4} </a>

          <div className="py-2 flex justify-center">
            <div className=" h-auto bg-[#D9D9D921] p-6 rounded-3xl w-full">
              <div className="py-2 flex items-center gap-3 ">
                <Image
                  src="/assets/clinic/cards.svg"
                  width={20}
                  height={20}
                  alt="Grammarly Logo"
                  className="self-start"
                />
                <div className="">
                  <h1 className=" text-[20px] font-light">{data.sub_text} </h1>
                  <p className="font-poppins text-base font-medium underline leading-6 text-left">
                    {data.hrefText_1}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Overview;
