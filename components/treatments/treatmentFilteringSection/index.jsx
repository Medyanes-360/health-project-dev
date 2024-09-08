import FilteredClinicsMainComponent from "./filteredClinicsMainComponent";
import FilterOptionsSidebarComponent from "./filterOptionsSidebarComponent";

export default function TreatmentFilteringSection() {
  return (
    <section className="mt-10 flex">
      <FilterOptionsSidebarComponent />
      <FilteredClinicsMainComponent />
    </section>
  );
}
