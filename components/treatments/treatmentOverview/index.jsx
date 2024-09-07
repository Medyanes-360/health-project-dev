import Image from "next/image";
import OverviewTabs from "./overviewTabs";

export default function TreatmentOverview() {
  return (
    <section className="grid grid-cols-3 justify-between items-center">
      <div className="col-span-2    ">
        <h2>Hair transplant Overview</h2>
        <OverviewTabs />
      </div>
      <div className="col-span-1">
        <div className=" flex  flex-col items-center text-center">
          <Image
            className=" rounded-full"
            src="/assets/mocks/doctorprofile.png"
            alt="img"
            width={98}
            height={98}
          />
          <p className="font-semibold">
            Content meets the Bookimed Editorial Policy and is medically
            reviewed by
          </p>
          <p className="text-[#7D7987]">
            Fahad Mawlood - General practitioner. Winner of 4 scientific awards.
            Served in Western Asia. Former Team Leader of a medical team
            supporting Arabic-speaking patients. Now responsible for data
            processing and medical content accurac
          </p>
        </div>
      </div>
    </section>
  );
}
