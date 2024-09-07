import FilteredClinicsMainComponent from "./filteredClinicsMainComponent";
import FilterOptionsSidebarComponent from "./filterOptionsSidebarComponent";

export default function TreatmentFilteringComponent() {
  return (
    <section className="mt-10 flex">
      <FilterOptionsSidebarComponent />
      <FilteredClinicsMainComponent />
    </section>
  );
}
