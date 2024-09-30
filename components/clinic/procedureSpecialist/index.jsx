import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";

export default function ProcedureSpecialist() {
  return (
    <ExtraLargePageContainer>
      <div className="border shadow-[0px_12px_24px_-4px_#919EAB1F] p-6 rounded-3xl">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-black">Hair Transplant Specialist</p>
          <div className="hover:underline flex items-center cursor:pointer">
            <Image
              src="/assets/icons/healthIcon.svg"
              alt=""
              width={24}
              height={24}
            />
            <span className="ml-0.5 font-semibold text-primary ">
              {" "}
              See More
            </span>
          </div>
        </div>
        <div className=" mt-6 shadow-[0px_12px_24px_-4px_#919EAB1F] overflow-hidden rounded-3xl ">
          {/* Header: */}
          <div className="flex p-3 justify-between items-center bg-[#F9F9F9] ">
            <div className="flex items-center">
              <Image
                className="rounded-full"
                src="/assets/mocks/doctorprofile.png"
                width={64}
                height={64}
                alt=""
              />
              <div className="ml-3 flex flex-col items-start">
                <p>
                  Leyla Arvas<span> • </span>27 years of experience
                </p>
                <p>Turkey, Istanbul</p>
              </div>
            </div>
            <div className="flex items-center flex-col text-sm text-[#212B36]">
              <div className="flex items-center">
                {" "}
                <Image
                  src="/assets/icons/star.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <span className="ml-0.5">Good</span>
              </div>
              <span className="mt-1 cursor-pointer hover:opacity-100 transition-all  duration-200 opacity-70 underline">
                48 patient reviews
              </span>
            </div>
          </div>
          {/* Body: */}
          <div className="p-6 h-max flex gap-2.5">
            <Image
              className="w-[340px] h-[250px]"
              src="/assets/mocks/leyla_arvas.png"
              alt=""
              width={340}
              height={240}
            />
            <div className="flex flex-col justify-between ">
              <div>
                <p className="font-medium text-black text-sm">
                  Dr. Leyla Arvas specializes in Hair Transplant techniques such
                  as FUE, DHI, and robotic surgery.She received microsurgery
                  training internationally, including in Taiwan, Tokyo, and
                  Barcelona.Dr. Arvas is a Certified VASER Trainer skilled in
                  body sculpting and hair restoration.She is an active
                  participant in medical communities and fluent in English and
                  Turkish.
                </p>
                <span className="font-medium text-sm text-primary hover:underline">
                  Read More
                </span>
              </div>
              <div className="flex gap-3 items-center justify-between">
                <ButtonComponent
                  title="Info"
                  className="!bg-[#EAEAEA] !w-full !py-3 !text-xs !font-semibold !text-primary"
                ></ButtonComponent>
                <ButtonComponent
                  title="Enquire"
                  className="!bg-primary !w-full !py-3 !text-xs !font-semibold !text-white underline"
                ></ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExtraLargePageContainer>
  );
}
