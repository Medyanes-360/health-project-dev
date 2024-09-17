import ClinicListItem from "@/components/globalClinicsPage/treatmentFilteringSection/filteredClinicsMainComponent/clinicList/clinicListItem";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

export default function YouMightAlsoLikeSection() {
  return (
    <ExtraLargePageContainer className="shadow-[0px_12px_48px_0px_#BCBCBC1F;] rounded-xl p-8 mb-[98px] mt-3">
      <p className="text-2xl font-medium bg-header-gradient bg-clip-text text-fill-transparent text-primary">
        You might also like
      </p>

      <ClinicListItem />
    </ExtraLargePageContainer>
  );
}
