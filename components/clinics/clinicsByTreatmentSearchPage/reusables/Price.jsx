//import CardComponent from "@/globalElements/Card";
import TreatmentList from "@/globalElements/treatmentList";
const treatmentsData = {
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

export default function Price() {
  return (
    <div className="card rounded-t-none rounded-b-2xl !p-0 !m-0">
      <div className="card-children">
        <TreatmentList treatments={treatmentsData.treatments} className="" />
      </div>
    </div>
  );
}
