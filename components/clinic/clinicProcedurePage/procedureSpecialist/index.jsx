import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";

export default function ProcedureSpecialist() {
  return (
    <ExtraLargePageContainer className="mt-6 px-4">
      <div className="border border-[rgba(217,217,217,0.12)] shadow-md p-6 rounded-3xl">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-black">Hair Transplant Specialist</p>
          <div className="hover:underline flex items-center cursor-pointer">
            <Image
              src="/assets/icons/healthIcon.svg"
              alt="health icon"
              width={24}
              height={24}
            />
            <span className="ml-1 font-semibold text-primary">See More</span>
          </div>
        </div>

        <div className="shadow-[0px_12px_24px_-4px_#919EAB1F] overflow-hidden rounded-3xl">
          {/* Header */}
          <div className="flex p-3 justify-between items-center bg-[#F9F9F9]">
            <div className="flex items-center">
              <Image
                className="rounded-full"
                src="/assets/mocks/doctorprofile.png"
                width={64}
                height={64}
                alt="Doctor profile"
              />
              <div className="ml-3">
                <p className="font-semibold">
                  Leyla Arvas<span> • </span>27 years of experience
                </p>
                <p>Turkey, Istanbul</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 flex flex-col items-start sm:items-center text-sm text-[#212B36]">
              <div className="flex items-center">
                <Image
                  src="/assets/icons/star.svg"
                  alt="star rating"
                  width={24}
                  height={24}
                />
                <span className="ml-1">Good</span>
              </div>
              <span className="mt-1 cursor-pointer hover:opacity-100 transition-opacity opacity-70 underline">
                48 patient reviews
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col sm:flex-col md:flex-row gap-4">
            {/* For Mobile: Image is above text */}
            <Image
              className="w-full h-auto md:w-[340px] md:h-[250px] rounded-lg object-cover"
              src="/assets/mocks/leyla_arvas.png"
              alt="Dr. Leyla Arvas"
              width={340}
              height={240}
            />
            <div className="flex flex-col justify-between mt-4 md:mt-0 w-full">
              <div>
                <p className="font-medium text-black text-sm md:text-md">
                  Dr. Leyla Arvas specializes in Hair Transplant techniques such
                  as FUE, DHI, and robotic surgery. She received microsurgery
                  training internationally, including in Taiwan, Tokyo, and
                  Barcelona. Dr. Arvas is a Certified VASER Trainer skilled in
                  body sculpting and hair restoration. She is an active
                  participant in medical communities and fluent in English and
                  Turkish.
                </p>
                <span className="font-medium text-sm text-primary hover:underline cursor-pointer">
                  Read More
                </span>
              </div>

              {/* Buttons */}
              <div className="flex flex-row lg:flex   gap-3 mt-6">
                <ButtonComponent
                  title="Info"
                  className="!bg-[#EAEAEA] !w-full sm:!w-[48%] !py-3 !text-xs !font-semibold !text-primary rounded-md"
                />
                <ButtonComponent
                  title="Enquire"
                  className="!bg-primary !w-full sm:!w-[48%] !py-3 !text-xs !font-semibold !text-white rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExtraLargePageContainer>
  );
}
