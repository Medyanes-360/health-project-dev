import Image from "next/image";
import OverviewTabs from "./overviewTabs";

export default function TreatmentOverview() {
  return (
    <section className="grid py-8 mt-6 grid-cols-3 justify-between items-start">
      <div className="col-span-2    ">
        <h2 className="text-[#FE7443] mb-4 font-semibold">
          Hair transplant Overview
        </h2>
        <OverviewTabs />
      </div>
      <div className="col-span-1">
        <div className=" flex    flex-col items-center text-center">
          <Image
            className=" rounded-full"
            src="/assets/mocks/doctorprofile.png"
            alt="img"
            width={98}
            height={98}
          />
          <p className="font-semibold leading-[22px] my-2">
            Content meets the{" "}
            <span className="underline">Bookimed Editorial Policy</span> and is
            medically reviewed by
          </p>
          <p className="text-[#7D7987]">
            <span className="underline">Fahad Mawlood</span>- General
            practitioner. Winner of 4 scientific awards. Served in Western Asia.
            Former Team Leader of a medical team supporting Arabic-speaking
            patients. Now responsible for data processing and medical content
            accurac
          </p>
        </div>
      </div>
    </section>
  );
}
