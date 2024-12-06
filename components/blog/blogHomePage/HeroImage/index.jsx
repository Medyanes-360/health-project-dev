import Image from "next/image";

export default function HeroImage() {
  const items = [
    "Clinics",
    "Doctors",
    "Cheap Places",
    "Porcelain",
    "Composite",
    "Cost Globally",
  ];

  return (
    <>
      <div className="mt-[60px] mb-[32px] md:flex w-full relative hidden">
        {/*Card*/}
        <div className="bg-secondary !w-[524px] h-[302px] absolute top-[14px] left-[14px] rounded-[12px] p-6 flex flex-col gap-[26px] z-50">
          <div className="flex items-center gap-3">
            <p className="text-sm text-white">See our 615 reviews</p>
            <Image src="/assets/blog/icon3.png" alt="" width={24} height={24} />
          </div>
          <h1 className="w-[476px] h-[60px] text-xl text-white font-semibold">
            How Much Is a Full Set of Veneers in Mexico in 2021 [Prices
            Included]?
          </h1>
          {/*grid*/}
          <div className="grid grid-cols-3 gap-3">
            {items.map((item, index) => (
              <div
                className="w-[152px] h-[53px] rounded-xl border border-white flex items-center justify-center text-white bg-[#8acfc6]"
                key={index}
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1"></div>
        <Image
          src="/assets/blog/heroImage.png"
          alt="img"
          width={732}
          height={331}
          className="rounded-[12px]"
          quality="100"
          priority={true}
        />
      </div>

      {/*Mobile*/}
      <div className="mt-[18px] mb-[32px] flex flex-col-reverse lg:flex-row w-full relative md:hidden">
        {/*Card*/}
        <div className="bg-secondary !w-full rounded-b-3xl p-3 flex flex-col gap-2 z-50">
          <div className="flex items-center gap-3">
            <p className="text-xs text-white">See our 615 reviews</p>
            <Image src="/assets/blog/icon3.png" alt="" width={20} height={20} />
          </div>
          <h1 className="w-full text-xs text-white font-semibold">
            How Much Is a Full Set of Veneers in Mexico in 2021 [Prices
            Included]?
          </h1>
          {/*grid*/}
          <div className="grid grid-cols-3 gap-2.5">
            {items.map((item, index) => (
              <div
                className="w-full md:w-[152px] h-[53px] rounded-xl border border-white flex items-center justify-center text-white bg-[#8acfc6]"
                key={index}
              >
                <p className="font-semibold text-[10px]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Image */}
        <Image
          src="/assets/blog/heroImage.png"
          alt="img"
          width={319}
          height={173}
          className="rounded-t-3xl w-full object-cover"
          quality="100"
          priority={true}
        />
      </div>
    </>
  );
}
