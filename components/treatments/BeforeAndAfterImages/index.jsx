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
      <div className="xl:container mx-auto px-4 space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-around sm:items-center">
          <h1 className="font-bold text-xl sm:text-2xl text-secondary">
            {dynamicNumber} Before & After Photos
          </h1>

          <p className="text-sm">
            Browse Hair transplant before & after photos shared by doctors from
            different clinics.
          </p>
        </div>

        <div>
          <BeforeAndAfterCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default BeforeAndAfter;
