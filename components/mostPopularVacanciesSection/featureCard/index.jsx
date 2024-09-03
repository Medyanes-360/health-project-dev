import Image from "next/image";

export default function FeatureCard({ active, ...props }) {
  const data = props.data;
  return (
    <div className="group hover:shadow-xl hover:scale-105 lg:hover:bg-inherit hover:bg-primary-light  hover:border-primary transition-all duration-200 cursor-pointer rounded-lg flex justify-start  items-center lg:p-2 p-1 border lg:border-none">
      <div className="bg-primary-light   lg:bg-white w-10 h-10  p-2 sm:w-20 sm:p-4  sm:h-20 rounded-md  group-hover:shadow-none  transition-all duration-200  flex items-center justify-center group-hover:bg-primary ">
        <Image
          className="min-w-fit  filter group-hover:brightness-0 group-hover:invert"
          src={`/assets/icons/doctorsIcon.svg`}
          alt=""
          width={72}
          height={72}
        />
      </div>
      <div className="flex text-start     flex-col   ml-2 ">
        <p className="line-clamp-2  sm:text-xl text-base  ">
          {data.categoryname}
        </p>
        <span className="text-primary sm:text-base text-sm  transition-all duration-200">
          Turkey
        </span>
      </div>
    </div>
  );
}
