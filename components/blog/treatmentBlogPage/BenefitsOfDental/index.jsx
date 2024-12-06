import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import DataTable from "./DataTable";
import { MotionDiv } from "@/globalElements/motion";

const BenefitsOfDental = () => {
  const BenefitsVenceerData = [
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
        <div class="bg-gradient-to-r from-[#52B8AB] to-[#EF1BC0] rounded-xl px-4 py-5">
          <h1 className="font-bold text-xl sm:text-2xl text-white">
            Types of Dental Veneers Available in Mexico
          </h1>
        </div>

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
            delay: 0.1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="space-y-2"
        >
          <h1>
            {" "}
            The final price for a full set of veneers in Mexican clinics will
            depend on the clinic you choose via Bookimed, the online platform
            for booking the most compatible clinics all around the world. The
            average price per tooth starts at $290, while in the USA, it costs
            $950. So you can save about 70% of your money, preferring dental
            veneers in Mexico. Prices in Mexico are cheaper compared to the USA
            or the United Kingdom due to much lower costs of living and labor.
            Besides, the prices for accommodation and food are much lower
            compared to the USA or Europe.{" "}
          </h1>
        </MotionDiv>

        {/* table */}
        <DataTable data={BenefitsVenceerData} />
      </ExtraLargePageContainer>
    </div>
  );
};

export default BenefitsOfDental;
