import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import TreatmentList from "@/globalElements/treatmentList";
import Image from "next/image";

export default function DentalTreatmentDropDown() {
  const data = {
    sub_heading_5: "Treatments prices in the clinic",
    text_5:
      "Last price update — 29.04.2024. Prices can be changed depending on the medical case and doctor's recommendations.",
    treatments: [
      {
        name: "Computer-assisted dental implant",
        priceRange: "$470 - $772",
      },
      {
        name: "Computer-assisted dental implant",
        priceRange: "$200 - $350",
      },
      {
        name: "Computer-assisted dental implant",
        priceRange: "$150 - $250",
      },
      {
        name: "Computer-assisted dental implant",
        priceRange: "$500 - $900",
      },
      {
        name: "Computer-assisted dental implant",
        priceRange: "$100 - $200",
      },
    ],
  };

  return (
    <div id="DentalTreatmentDropDown">
      <div className="flex flex-col gap-8">
        <h2 className="font-poppins text-lg font-semibold leading-6">
          {data.sub_heading_5}
        </h2>
        <p className="font-poppins text-sm font-normal text-[0.85rem] leading-6 ">
          {data.text_5}
        </p>
      </div>

      {/* Treatments prices in the clinic dropdown start */}
      <ul className="flex flex-col gap-2 w-full mx-auto mt-8">
        <li>
          <details className="group" open>
            <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer border-x border-y rounded-xl h-[54px] ">
              <span className="flex gap-2">
                <span className="font-poppins text-sm font-normal leading-[22px] text-[#637381]">
                  Dental Treatment
                </span>
              </span>

              <Image
                src="/assets/clinic/table.svg"
                alt="Table Icon"
                width={24}
                height={24}
                className="transition group-open:rotate-180"
              />
            </summary>

            <TreatmentList treatments={data.treatments} />
          </details>
        </li>
      </ul>
      {/* Treatments prices in the clinic dropdown end */}
      <hr />
    </div>
  );
}
