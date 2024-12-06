import ButtonComponent from "@/globalElements/Button";
import CostsTable from "./costsTable";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

export default function TreatmentCostsSection({ data }) {
  const { costsOverview, title } = data;
  const { minimum, maximum } = costsOverview;
  return (
    <ExtraLargePageContainer className="mt-10 flex md:block md:flex-row flex-col md:gap-0  gap-12">
      <div className="flex md:flex-row gap-8 flex-col  sm:gap-0 h-32 mb-6 items-end md:items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold bg-header-gradient bg-clip-text text-fill-transparent text-primary">
            How Much Does {title} Cost? Find Out Now
          </h2>
          <p className="text-sm">
            The average price of {title} is ${(maximum - minimum) / 2}, the
            minimum price is ${minimum}, and the maximum price is ${maximum}.
          </p>
        </div>
        <div>
          <ButtonComponent
            title="Request The Price"
            className="bg-transparent border-2 !text-base border-primary text-primary"
          />
        </div>
      </div>
      <div>
        <CostsTable data={costsOverview.treatmentTypesAndCosts} />
      </div>
    </ExtraLargePageContainer>
  );
}
