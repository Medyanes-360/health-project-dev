import FilteredClinicsMainComponent from "./filteredClinicsMainComponent";
import FilterOptionsSidebarComponent from "./filterOptionsSidebarComponent";

export default function TreatmentFilteringSection() {
  return (
    <section className="mt-10  !relative overflow-hidden   flex ">
      <FilterOptionsSidebarComponent />

      <FilteredClinicsMainComponent />
    </section>
  );
}
