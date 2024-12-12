import Image from "next/image";

export default function Index({ item }) {
  return (
    <div className="flex flex-col gap-3 md:gap-1 rounded-xl w-fit border p-2 md:p-1">
      <Image
        src={item.imageSrc}
        alt="doctor"
        width={250}
        height={300}
        className="object-cover object-center rounded-lg w-full max-h-[280px] md:max-h-[285px]"
        sizes="(max-width: 768px) 100vw, 200px"
      />
      <div
        className={`py-[4px] px-3 w-fit rounded-[29px] text-white text-[10px] font-medium font-poppins hidden md:block ${
          item.tag === "dental"
            ? "bg-gradient-to-l from-[#FFAA00] to-[#FFC74D]"
            : "bg-gradient-to-l from-[#F22F46] to-[#FF4DCA]"
        }`}
      >
        {item.tag}
      </div>
      <div className="flex items-center gap-3 w-full">
        <div className="flex items-center whitespace-nowrap">
          <Image
            src="/assets/blogs/icons/1.png"
            alt="m"
            width={24}
            height={24}
            className="object-cover object-center"
          />
          <p className="text-xs font-poppins">{item.date}</p>
        </div>
        <div className="flex items-center whitespace-nowrap">
          <Image
            src="/assets/blogs/icons/2.png"
            alt="m"
            width={24}
            height={24}
            className="object-cover object-center"
          />
          <p className="text-xs font-poppins">{item.comment}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 font-poppins">
        <div className="text-lg font-semibold md:font-normal md:text-sm">
          {item.title}
        </div>
        <p className="md:hidden text-sm text-[#6C757D]">{item.description}</p>
        <div className="text-[10px] font-medium py-[2px] px-2 md:hidden">
          {item.tag}
        </div>
        <div className="font-semibold text-base font-inter w-fit md:w-full md:font-medium md:text-[10px] py-1 px-6 bg-[#52B8AB] text-white rounded text-center">
          Read More
        </div>
      </div>
    </div>
  );
}
