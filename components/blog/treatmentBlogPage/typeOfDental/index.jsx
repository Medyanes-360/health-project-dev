import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import DataTable from "./DataTable";
import { MotionDiv } from "@/globalElements/motion";

const TypeOfDental = () => {
  const TypeVenceerData = [
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
        <div className="bg-gradient-to-r from-[#FFAA00] to-[#EF1BC0] rounded-xl px-4 py-5">
          <h1 className="font-bold text-xl sm:text-2xl text-white">
            Types of Dental Veneers Available in Mexico
          </h1>
        </div>
        <div className="space-y-14 bg-[#D9D9D921]">
          <div className="space-y-2 p-6">
            <MotionDiv
              initial={{
                y: "30px",
                opacity: 0,
              }}
              whileInView={{
                y: "0",
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
            >
              <h1>
                If you’d like to improve your smile, veneers in Mexico can be an
                innovative and affordable cosmetic dental solution when your
                teeth got:
              </h1>
            </MotionDiv>
            <MotionDiv
              initial={{
                y: "-30px",
                opacity: 0,
              }}
              whileInView={{
                y: "0",
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
            >
              <ul className="space-y-1 list-disc marker:text-[15px] pl-6">
                <li>colored;</li>
                <li>damaged;</li>
                <li>misaligned.</li>
              </ul>
              <p>
                Mexican doctors pay precise attention to minor cosmetic details
                to place custom dental veneers reasonably. Local dentists take
                into account individual patients’ teeth characteristics, such as
                tooth length, proportions, smile line, and natural teeth color,
                to obtain the perfect outcome.
              </p>
              <p>
                Most clinics in Mexico offer 2 main types of veneers, depending
                on patients’ needs, expectations, and budget:{" "}
              </p>{" "}
            </MotionDiv>
          </div>
        </div>

        {/* table */}
        <DataTable data={TypeVenceerData} />
      </ExtraLargePageContainer>
    </div>
  );
};

export default TypeOfDental;
