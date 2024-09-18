import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import DataTable from "./DataTable";

const TypeOfDental = () => {
  const VenceerData = [
    {
      veneerType: "Mexico",
      compositeVeneers: "290",
      porcelainVeneers: "290",
      Lumineers: "290",
      fullSetOf16veneers: "290",
    },
    {
      veneerType: "USA",
      compositeVeneers: "290",
      porcelainVeneers: "290",
      Lumineers: "290",
      fullSetOf16veneers: "290",
    },
    {
      veneerType: "UK",
      compositeVeneers: "290",
      porcelainVeneers: "290",
      Lumineers: "290",
      fullSetOf16veneers: "290",
    },
    {
      veneerType: "Saving",
      compositeVeneers: "70-80%",
      porcelainVeneers: "70-80%",
      Lumineers: "70-80%",
      fullSetOf16veneers: "70-80%",
    },
  ];
  return (
    <div className="pb-20">
      <ExtraLargePageContainer className={"space-y-14"}>
        <div class="bg-gradient-to-r from-[#FFAA00] to-[#EF1BC0] rounded-xl px-4 py-5">
          <h1 className="font-bold text-xl sm:text-2xl text-white">
            Types of Dental Veneers Available in Mexico
          </h1>
        </div>

        <div className="space-y-2">
          <h1>
            If you’d like to improve your smile, veneers in Mexico can be an
            innovative and affordable cosmetic dental solution when your teeth
            got:
          </h1>

          <ul className="space-y-1 list-disc marker:text-[20px] pl-6">
            <li>colored;</li>
            <li>damaged;</li>
            <li>misaligned.</li>
          </ul>
          <p>
            Mexican doctors pay precise attention to minor cosmetic details to
            place custom dental veneers reasonably. Local dentists take into
            account individual patients’ teeth characteristics, such as tooth
            length, proportions, smile line, and natural teeth color, to obtain
            the perfect outcome.
          </p>
          <p>
            Most clinics in Mexico offer 2 main types of veneers, depending on
            patients’ needs, expectations, and budget:{" "}
          </p>
        </div>

        {/* table */}
        <DataTable data={VenceerData} />
      </ExtraLargePageContainer>
    </div>
  );
};

export default TypeOfDental;
