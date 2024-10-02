import ClinicListItem from "@/components/clinics/clinicsByTreatmentSearchPage/treatmentFilteringSection/filteredClinicsMainComponent/clinicList/clinicListItem";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

export default function YouMightAlsoLikeSection() {
  return (
    <ExtraLargePageContainer>
      <div className=" shadow-lg rounded-2xl mt-10 mb-10 p-5">
        <p className="text-2xl p-2 font-medium bg-header-gradient bg-clip-text text-fill-transparent text-primary">
          You might also like
        </p>

        <ClinicListItem />
      </div>
    </ExtraLargePageContainer>
  );
}
