import CardComponent from "@/globalElements/Card";
import Image from "next/image";

export default function Reviews({ data }) {
  return (
    <CardComponent className="rounded-t-none rounded-b-2xl !p-0 !m-0">
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className="flex justify-between gap-x-6 p-2 m-2 bg-[#F9F9F9] items-center rounded-[10px]"
          >
            <div className="flex min-w-0 gap-x-4 md:w-[33%] w-[full] ">
              <div className="min-w-0 flex-auto">
                <p class="font-poppins text-[16px] font-medium leading-[32px] text-left text-[#383333] ">
                  {item.speciality}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start  md:w-[33%] w-[full]">
              <div className="flex gap-2">
                <img
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
                <div>
                  <p className="font-public-sans text-[14px] font-normal leading-[22px] text-left text-[#212B36]">
                    {item.score}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/assets/clinic/arrow-square-right.svg"
                alt="arrow-square-right"
                width={24}
                height={24}
                className=""
              />
            </div>
          </li>
        ))}
      </ul>
    </CardComponent>
  );
}
