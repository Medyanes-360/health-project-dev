import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import BeforeAndAfterCard from "./BeforeAfter";
import Image from "next/image";

const data = [
  {
    image: "/assets/images/beforeAfter.png",
  },
  {
    image: "/assets/images/beforeAfter.png",
  },
  {
    image: "/assets/images/beforeAfter.png",
  },
  {
    image: "/assets/images/beforeAfter.png",
  },
  {
    image: "/assets/images/beforeAfter.png",
  },
];

const BeforeAndAfter = () => {
  const dynamicNumber = 34;
  return (
    <div className="py-10 ">
      <ExtraLargePageContainer id="beforeAndAfterPhotosSection">
        <div
          className="p-6 rounded-3xl shadow-md border"
          style={{ borderColor: "rgba(217, 217, 217, 0.12)" }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <h1 className="font-semibold text-lg sm:text-2xl ">
              Before and After Pictures
            </h1>

            <div className="flex items-center">
              <Image
                src="/assets/clinic/camera.svg"
                alt="Camera Icon"
                width={24}
                height={24}
                className="mr-2"
              />
              <p className="text-[#52B8AB] font-bold">{dynamicNumber}</p>
            </div>
          </div>

          <div>
            <BeforeAndAfterCard data={data} />
          </div>
        </div>
      </ExtraLargePageContainer>
    </div>
  );
};

export default BeforeAndAfter;
