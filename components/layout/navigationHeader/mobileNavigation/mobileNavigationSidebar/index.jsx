import HeaderbarSelectField from "../../headerbarComponent/headerbarSelectField";
import LanguageSelectDropdown from "../../navbarComponent/languageSelectDropdown";
import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";
import Link from "next/link";

const MobileNavigationSidebar = (props) => {
  const sidebarData = props.sidebarData;
  console.log(props);

  return (
    <div
      onClick={props.toggleSidebar}
      style={{
        borderTopRightRadius: props.isOpen ? "0px" : "100%",
        borderBottomRightRadius: props.isOpen ? "0px" : "100%",
        transition: "all .25s ease-out",
        transform: props.isOpen ? "translateX(0%)" : "translateX(-100%)",
        width: "100vw",
        height: "100dvh",

        position: "fixed",
      }}
      className={`fixed top-0 z-[50000]  bg-black/80 w-full h-full `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          transition: "transform .5s ease-out",
          transform: props.isOpen ? "translateX(0%)" : "translateX(-100%)",
          minWidth: "310px",
          width: "max-content",
          maxWidth: "80vw",
          height: "100%",
        }}
        className="fixed   bg-white flex flex-col justiy-between   py-7 px-3  left-0 rounded-e-xl"
      >
        <div className="flex-1 ">
          <div className="flex border-b border-dashed  mb-4 pb-4  justify-between items-center  ">
            <Image
              src="/assets/images/company_logo.png"
              alt=""
              width={143}
              height={24}
            />
            <LanguageSelectDropdown languages={sidebarData.languages} />
          </div>
          <HeaderbarSelectField
            flags
            countryNames={false}
            toggleSidebar={props.toggleSidebar}
            // placeholder length'ini istediğimiz length'e getirmek için space bırakıyoruz.
            placeholder="Search..             "
          />

          <div className=" my-4 flex flex-col">
            {sidebarData.routes.map((route, index) => {
              return (
                <Link
                  className="  hover:bg-gray-100  !py-3.5 "
                  key={index}
                  href={route.url}
                >
                  {route.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col border-t border-dashed pt-4 ">
          <div className="flex items-center mx-auto mb-3 ">
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
          <Link className="" href="/test">
            <ButtonComponent
              title="Get a Free Quote"
              className="text-nowrap !w-full font-inter font-[600] !text-base !rounded-[3px] text-white bg-primary  py-3 px-6 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationSidebar;
