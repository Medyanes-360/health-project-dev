import ButtonComponent from "@/globalElements/Button";
import CostsTable from "./costsTable";

export default function TreatmentCosts() {
  return (
    <section className="mt-10 ">
      <div className="flex mb-10 justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            How Much Does Hair Transplant Cost? Find Out Now
          </h2>
          <p>
            The average price of Hair transplant is $2552, the minimum price is
            $1500, and the maximum price is $4793.
          </p>
        </div>
        <div>
          <ButtonComponent
            title="Request The Price"
            className="bg-transparent border-2 border-primary text-primary"
          />
        </div>
      </div>
      <div>
        <CostsTable />
      </div>
    </section>
  );
}
