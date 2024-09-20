import Image from "next/image";

const ClinicalPrice = () => {
  return (
    <div className="py-5 flex justify-center text-white ">
      <div className="relative w-[1200px] h-[331px] rounded-[24px] bg-white shadow-[0px_12px_24px_-4px_#919EAB1F] ">
        <div className="absolute z-10 w-[524px] h-[302px] top-[14px] left-[14px] p-6 border border-white border-opacity-50 bg-[#52B8AB] rounded-[12px] flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <h1 className="font-poppins text-[20px] font-semibold leading-[30px] text-left">
              According to Bookimed website, the prices for veneers in Turkey
              are the following:
            </h1>
          </div>

          <div className="w-[476px] h-[120px] rounded-xl p-4 bg-[#FFFFFF52] border border-white">
            <ul className="list-disc list-inside text-[16px] ">
              <li>An average price — $430</li>
              <li>The minimal price — $250</li>
              <li>The maximum price — $510</li>
              <li>The full set of veneers price — $6,720</li>
            </ul>
          </div>

          <p className="font-poppins text-[12px] font-normal leading-[18px] text-left">
            Submit a request on the Bookimed website to get an individual
            calculation of dental veneers’ installation cost in Turkey. 
          </p>
        </div>
        <Image
          src="/assets/images/ClinicalPrice.png"
          alt="Full Set of Veneers"
          width={732}
          height={331}
          className="absolute right-0 top-0"
        />
      </div>
    </div>
  );
};

export default ClinicalPrice;
