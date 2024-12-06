import Image from "next/image";

export default function AveragePrice() {
  return (
    <div className="w-full p-6 border bg-white border-fifth rounded-3xl shadow-custom1 flex flex-col gap-4 md:gap-6 h-full">
      {/*keep*/}
      <div className="flex items-center gap-3 text-secondary">
        <Image src="/assets/blog/icon4.png" alt="" width={24} height={24} />
        <p className="text-sm md:text-base text-center md:text-start">
          What Is the Average Price for Veneers in Mexican Clinics?
        </p>
      </div>
      <div className="p-2 text-xs md:text-base md:p-6 bg-fifth rounded-3xl text-center md:text-start">
        According to the data of dental Bookimed partner clinics located in
        Mexico, the average cost of veneers is $250 per 1 veneer. Depending on a
        clinic, veneer type, and the doctor’s qualification, the price may
        reduce or increase. Note that the average cost for a veneer in the USA
        is about $950 per tooth. So, even with travel expenses, it is more
        profitable to visit Mexico to install veneers instead of doing the same
        procedure in the USA.
      </div>
    </div>
  );
}
