import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import BeforeAndAfterCard from "./BeforeAndAfterCard";

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
  const dynamicNumber = 473;
  return (
    <div className="py-20">
      <ExtraLargePageContainer>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <h1 className="font-bold text-xl sm:text-2xl text-secondary">
            {dynamicNumber} Before & After Photos
          </h1>

          <p >
            Browse Hair transplant before & after photos shared by doctors from
            different clinics.
          </p>
        </div>

        <div>
          <BeforeAndAfterCard data={data} />
        </div>
      </ExtraLargePageContainer>
    </div>
  );
};

export default BeforeAndAfter;
