import Image from "next/image";

const FullSetVeneers = () => {
  const items = [
    "Clinics",
    "Doctors",
    "Cheap Places",
    "Porcelain",
    "Composite",
    "Cost Globally",
  ];

  return (
    <div className="py-5 flex justify-center text-white ">
      <div className="relative w-[1200px] h-[331px] rounded-[24px] bg-white shadow-[0px_12px_24px_-4px_#919EAB1F] ">
        <div className="absolute z-10 w-[524px] h-[302px] top-[14px] left-[14px] p-6 border border-white border-opacity-50 bg-[#52B8AB] rounded-[12px] flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <p className="text-white">See our 615 reviews</p>
            <Image
              src="/assets/images/arrow-square-right.png"
              alt="Arrow"
              width={24}
              height={24}
            />
          </div>
          <h1 className="font-poppins font-semibold text-lg">
            How Much Is a Full Set of Veneers in Mexico in 2021 [Prices
            Included]?
          </h1>
          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-[152px] h-[53px] rounded-xl border border-white bg-white bg-opacity-[32%] flex items-center justify-center"
              >
                <span className="font-poppins font-semibold text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/assets/images/FullSetVeneers1.png"
          alt="Full Set of Veneers"
          width={732}
          height={331}
          className="absolute right-0 top-0"
        />
      </div>
    </div>
  );
};

export default FullSetVeneers;
