import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import ProgramBenefitsCard from "./programBenefitsCard";

const ProgramBenefits = ({ data }) => {
  const { medical_procedures, additional_information } = data.clinic;
  return (
    <ExtraLargePageContainer>
      <div>
        <ProgramBenefitsCard
          medicalProcedures={medical_procedures}
          additionalInfo={additional_information}
        />
      </div>
    </ExtraLargePageContainer>
  );
};

export default ProgramBenefits;
