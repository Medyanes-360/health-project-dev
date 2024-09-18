import CardComponent from "@/globalElements/Card";
import MedicalProcedures from "../medicalProcedures";
import AdditionalInformations from "../additionalInformation";
import Transport from "../transport";
import Duration from "../duration";
import BookimedAssistance from "../bookimedAssistance";
import ButtonComponent from "@/globalElements/Button";

const ProgramBenefitsCard = ({ medicalProcedures, additionalInfo }) => {
  return (
    <div>
      <CardComponent className={" !shadow"}>
        <h1 className=" text-primary text-xl ">
          Read about the program benefits
        </h1>
        <MedicalProcedures procedures={medicalProcedures.procedure_list} />
        <AdditionalInformations details={additionalInfo.details} />
        <Transport />
        <Duration />
        <BookimedAssistance />
        <div className="flex flex-row justify-between items-center py-3 px-0">
          <div className="flex ">
            <p className="font-semibold text-xl leading-32">
              Program Price <span className="mr-2"></span> {/* Boşluk ekler */}
              <span className="line-through">$1907</span>{" "}
              <span className=" text-red-500">$1750</span>
            </p>
          </div>
          <div className="flex flex-row gap-3 ">
            <ButtonComponent
              className={
                "!bg-[#EAEAEA]  !text-primary px-6 py-2 !rounded-sm !text-lg"
              }
              title={"Get Free Personalized Offer"}
            />
            <ButtonComponent
              className={
                "!text-fourth  !bg-primary px-6 py-2  !rounded-sm !text-lg"
              }
              title={"Get Free Personalized Offer"}
            />
          </div>
        </div>
      </CardComponent>
    </div>
  );
};

export default ProgramBenefitsCard;
