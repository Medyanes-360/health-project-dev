import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import FilteredClinicsMainComponent from "./filteredClinicsMainComponent";
import FilterOptionsSidebarComponent from "./filterOptionsSidebarComponent";

export default function ClinicSearchSection() {
  return (
    <ExtraLargePageContainer className="mt-10  !relative overflow-hidden   flex ">
      <FilterOptionsSidebarComponent />

      <FilteredClinicsMainComponent />
    </ExtraLargePageContainer>
  );
}
