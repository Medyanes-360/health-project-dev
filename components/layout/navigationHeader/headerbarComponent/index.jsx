import Image from "next/image";
import Link from "next/link";
import HeaderbarSelectField from "./headerbarSelectField";
import ButtonComponent from "@/globalElements/Button";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

const HeaderbarComponent = () => {
  return (
    <div className="">
      {/* component'ın max-widthini xl'a ayarlayan container:  */}
      <ExtraLargePageContainer className="   py-5 h-20 flex items-center justify-between">
        <div className="flex  ">
          {" "}
          <div className=" flex items-center justify-center">
            <Image
              className="mr-4 "
              alt="company logo"
              width={143}
              height={24}
              src="/assets/images/company_logo.png"
            />
          </div>
          <HeaderbarSelectField placeholder="Enter the disease, hospital or doctor" />
        </div>
        <div className="flex ">
          <div className="hidden mr-5 min-[1135px]:flex items-center ">
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
              <span className=" my-auto ml-2 text-[#868686] font-bold text-nowrap">
                5.0 Rating
              </span>
            </span>
          </div>
          <Link className="hidden min-[900px]:block" href="/become-a-partner">
            <ButtonComponent
              title="Become A Partner"
              className="font-inter text-nowrap font-[600] !text-base !rounded-[3px] text-white bg-primary  py-3 px-6 "
            />
          </Link>
        </div>
      </ExtraLargePageContainer>
    </div>
  );
};
export default HeaderbarComponent;
