import Image from "next/image";
import OverviewTabs from "./overviewTabs";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

const reviewers = [
  {
    id: 3949919,
    name: "Fahad Mawlood",
    about:
      "General practitioner. Winner of 4 scientific awards. Served in Western Asia. Former Team Leader of a medical team supporting Arabic-speaking patients. Now responsible for data processing and medical content accuracy",
    imgSrc: "/assets/mocks/doctorprofile.png",
  },
  {
    id: 4012345,
    name: "Fuzun Akdoğan",
    about:
      "General practitioner. Winner of 4 scientific awards. Served in Western Asia. Former Team Leader of a medical team supporting Arabic-speaking patients. Now responsible for data processing and medical content accuracy",
    imgSrc: "/assets/mocks/doctorprofile.png",
  },
  {
    id: 3949921,
    name: "Some Person",
    about:
      "General practitioner. Winner of 4 scientific awards. Served in Western Asia. Former Team Leader of a medical team supporting Arabic-speaking patients. Now responsible for data processing and medical content accuracy",
    imgSrc: "/assets/mocks/doctorprofile.png",
  },
  {
    id: 3949933,
    name: "Marsh Mallow",
    about:
      "General practitioner. Winner of 4 scientific awards. Served in Western Asia. Former Team Leader of a medical team supporting Arabic-speaking patients. Now responsible for data processing and medical content accuracy",
    imgSrc: "/assets/mocks/doctorprofile.png",
  },
];

export default function TreatmentOverviewSection({ data }) {
  const { overview, title } = data;

  // const reviewer = fetch reviewer
  const reviewer = reviewers.find(
    (reviewer) => reviewer.id == overview.reviewerId
  );

  return (
    <ExtraLargePageContainer className="grid py-8 mt-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between items-start gap-[1rem]  " >
      <div className="col-span-2 shadow-[0px_12px_24px_0px] shadow-[#C7C7C714] border border-[1px] border-[#0000001F] rounded-[32px] h-full p-[1rem]  ">
        <h2 className="text-[#FE7443] mb-4 font-semibold">{title} Overview</h2>
        <OverviewTabs data={overview} />
      </div>
      <div className="col-span-2 md:col-span-1   shadow-[0px_12px_24px_0px] shadow-[#C7C7C714] border border-[1px] border-[#0000001F]  rounded-[32px] h-full p-[2rem] flex items-center">
        <div className=" flex    flex-col items-center text-center ">
          <Image
            className=" rounded-full"
            src={reviewer.imgSrc}
            alt="img"
            width={98}
            height={98}
          />
          <p className="font-semibold text-sm leading-[22px] my-2">
            Content meets the{" "}
            <span className="underline">Bookimed Editorial Policy</span> and is
            medically reviewed by
          </p>
          <p className="text-[#7D7987] text-xs ">
            <span className="underline">{reviewer.name}</span> -{" "}
            {reviewer.about}
          </p>
        </div>
      </div>
    </ExtraLargePageContainer>
  );
}
