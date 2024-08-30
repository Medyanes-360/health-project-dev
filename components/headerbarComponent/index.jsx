import Image from "next/image";
import Link from "next/link";
import HeaderbarSelectField from "./headerbarSelectField";
import ButtonComponent from "@/globalElements/Button";

const HeaderbarComponent = () => {
  return (
    <div className="">
      {/* component'ın max-widthini xl'a ayarlayan container:  */}
      <div className="  xl:container px-4 mx-auto py-5 h-20 flex items-center justify-between">
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
          <HeaderbarSelectField placeholder="Enter the disease, hospital or doctor" />
        </div>
        <div className="flex ">
          <div className="hidden mr-5 min-[1120px]:flex items-center ">
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
              <span className=" my-auto ml-2 text-gray-400 font-bold">
                5.0 RATING
              </span>
            </span>
          </div>
          <Link className="hidden min-[900px]:block" href="/become-a-partner">
            <ButtonComponent
              title="Become A Partner"
              className="font-inter font-[600] text-base !rounded-[3px] text-white bg-primary  py-3 px-6 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeaderbarComponent;
