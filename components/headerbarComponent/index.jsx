import Image from "next/image";
import Link from "next/link";
import HeaderbarSelectField from "./headerbarSelectField";
import ButtonComponent from "@/globalElements/Button";

const HeaderbarComponent = () => {
  return (
    <div className="">
      {/* component'ın max-widthini xl'a ayarlayan container:  */}
      <div className="  xl:container mx-auto py-2 flex items-center justify-between">
        <div className="flex  ">
          {" "}
          <div className="min-w-max min-h-max flex items-center justify-center">
            <Image
              className="mx-4 "
              alt="company logo"
              width={140}
              height={24}
              src="/assets/images/company_logo.png"
            />
          </div>
          <HeaderbarSelectField />
        </div>
        <div className="flex ">
          <div className="flex items-center ">
            <span className="flex">
              {[...Array(5)].map((e, index) => (
                <Image
                  key={index}
                  src="/assets/icons/orangeStarIcon.svg"
                  alt="star"
                  height={24}
                  width={24}
                />
              ))}
            </span>
            <p className=" my-auto ml-2 text-gray-400 font-bold">5.0 RATING</p>
          </div>
          <Link className="ml-5" href="/become-a-partner">
            <ButtonComponent
              title="Become a Partner"
              className="  text-white bg-primary py-2 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeaderbarComponent;
