import CardComponent from "@/globalElements/Card";
import MedicalProcedures from "../medicalProcedures";
import AdditionalInformations from "../additionalInformation";
import Transport from "../transport";
import Duration from "../duration";
import BookimedAssistance from "../bookimedAssistance";
import ButtonComponent from "@/globalElements/Button";
import { MotionDiv } from "@/globalElements/motion";

const ProgramBenefitsCard = ({ medicalProcedures, additionalInfo }) => {
  return (
    <div className="mt-10">
      <CardComponent className={" !shadow"}>
        <MotionDiv
          initial={{
            y: "30px",
            opacity: 0,
          }}
          whileInView={{
            y: "0px",

            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          <h1 className=" text-primary text-xl ">
            Read about the program benefits
          </h1>
        </MotionDiv>

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
            <MotionDiv
              initial={{
                scale: "110%",
                opacity: 0,
              }}
              whileInView={{
                scale: "100%",
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
            >
              <ButtonComponent
                className={
                  "!bg-[#EAEAEA]  !text-primary px-6 py-2 !rounded-sm !text-lg"
                }
                title={"Get Free Personalized Offer"}
              />
            </MotionDiv>
            <MotionDiv
              initial={{
                scale: "110%",
                opacity: 0,
              }}
              whileInView={{
                scale: "100%",
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
            >
              <ButtonComponent
                className={
                  "!text-fourth  !bg-primary px-6 py-2  !rounded-sm !text-lg"
                }
                title={"Get Free Personalized Offer"}
              />
            </MotionDiv>
          </div>
        </div>
      </CardComponent>
    </div>
  );
};

export default ProgramBenefitsCard;
