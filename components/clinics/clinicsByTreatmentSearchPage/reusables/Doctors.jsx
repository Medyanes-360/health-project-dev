import CardComponent from "@/globalElements/Card";
import Image from "next/image";

export default function Doctors({ data }) {
  return (
    <CardComponent>
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className="flex justify-between gap-x-6 p-2 m-2 bg-[#F9F9F9] items-center rounded-[10px]"
          >
            <div className="flex min-w-0 gap-x-4 md:w-[33%] w-[full] ">
              <img
                className="size-12 flex-none rounded-full bg-gray-50"
                src={item.image}
                alt={item.name}
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {item.name} • {item.speciality}
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  {item.location}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
              <div className="flex gap-2">
                <img
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
                <div>
                  <p className="text-sm/6 text-gray-900">{item.score}</p>
                  <p className="mt-1 text-xs/5 text-gray-500 underline">
                    {item.reviews} patient verified reviews
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
