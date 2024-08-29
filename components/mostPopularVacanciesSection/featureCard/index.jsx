import Image from "next/image";

export default function FeatureCard(props) {
  const data = props.data;
  return (
    <div className="group hover:shadow-xl sm:hover:bg-inherit xs:hover:bg-primary-light  hover:xs:border-primary transition-all duration-200 cursor-pointer rounded-lg flex justify-start  items-center sm:p-2 xs:p-1 xs:border sm:border-none">
      <div className="xs:bg-primary-light sm:bg-white xs:w-10 xs:h-10  xs:p-2 sm:w-20 sm:p-4  sm:h-20 rounded-md  group-hover:shadow-none  transition-all duration-200 shadow-xl flex items-center justify-center group-hover:bg-primary ">
        <Image
          className=" filter group-hover:brightness-0 group-hover:invert"
          src={`/assets/icons/${data.img}`}
          alt=""
          width={72}
          height={72}
        />
      </div>
      <div className="flex text-start    flex-col   ml-2 ">
        <p className="sm:text-2xl xs:text-sm ">
          {data.quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <span className="text-primary sm:text-base xs:text-xs transition-all duration-200">
          {data.title}
        </span>
      </div>
    </div>
  );
}
