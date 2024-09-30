import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";

const data = {
  programDetails:
    "Expert doctor: Dr. Fuzun Erdogan – with years of experience since 1997. High-quality services and treatments at Adem Havva Medical Center, with over 16000 plastic surgery interventions.",
  type: "Standard",
};

const ProgramDetails = () => {
  return (
    <div className="py-10 ">
      <ExtraLargePageContainer>
        <div
          className="p-6 rounded-3xl shadow-md border"
          style={{ borderColor: "rgba(217, 217, 217, 0.12)" }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <h1 className="font-semibold text-lg sm:text-2xl">
              Program details
            </h1>

            <div className="flex items-center">
              <Image
                src="/assets/clinic/camera.svg"
                alt="Camera Icon"
                width={24}
                height={24}
                className="mr-2"
              />
              <p className="text-[#52B8AB] font-bold">{data.type}</p>{" "}
            </div>
          </div>

          <div className="py-20">
            <p>{data.programDetails}</p>
          </div>
        </div>
      </ExtraLargePageContainer>
    </div>
  );
};

export default ProgramDetails;
