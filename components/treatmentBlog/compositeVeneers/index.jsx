import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import CardComponent from "@/globalElements/Card";

const CompositeVeneers = () => {
  return (
    <div className="pb-20 ">
      <ExtraLargePageContainer className={"space-y-10"}>
        <CompositeVeneersCard />
        <CompositeVeneersCard />
      </ExtraLargePageContainer>
    </div>
  );
};

export default CompositeVeneers;

const CompositeVeneersCard = () => {
  return (
    <CardComponent className={"!p-6 !bg-[#ECE4FF42]"}>
      <div className="space-y-5">
        <div className="space-y-2">
          <h1 className="text-lg sm:text-xl font-bold">
            Composite Veneers and Their Cost in turkey
          </h1>
          <p className="tracking-wide sm:text-lg">
            Patients who choose composite veneers want to receive a long-lasting
            result without paying a fortune. Mexican doctors use the same
            materials that are used to do professional tooth-colored fillings.
            The most significant advantage of composite veneers is the minimal
            preparation. A doctor will apply a veneer to a patient’s tooth and
            shape it. You can get a boosted smile in a single appointment.
            Composite veneers are the most affordable type, but they are easy to
            stain, break, or chip compared to porcelain veneers. As practice
            shows, the lifespan of such dental veneers is around 5 years.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-lg sm:text-xl font-bold">
            Advantages of composite veneers:
          </h1>

          <ul className="space-y-1 list-disc marker:text-[20px] pl-6">
            <li>
              the process of installing can be accomplished in a single visit;
            </li>
            <li>you can restore a damaged coverage;</li>
            <li>
              a doctor installs a composite unit shell with less enameling of a
              natural tooth;
            </li>
            <li>special preparations are not needed;</li>
            <li>lifespan — 5+ years.</li>
          </ul>
        </div>
      </div>
    </CardComponent>
  );
};
