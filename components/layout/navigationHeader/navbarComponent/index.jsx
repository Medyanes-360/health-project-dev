"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelectDropdown from "./languageSelectDropdown";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

const NavbarComponent = (props) => {
  const navbarData = props.navbarData;
  const pathname = usePathname();

  return (
    <div className="bg-white-dark  text-sm  py-2   ">
      {/* component'ın max-widthini xl'a ayarlayan container:  */}
      <ExtraLargePageContainer className="  flex items-center justify-between">
        <div className="">
          {navbarData.routes.map((route) => {
            return (
              <Link
                className={`mx-2 first:ml-0 text-black border-b-current  hover:border-b-2 hover:text-primary   ${
                  pathname == route.url &&
                  "border-b-2 text-primary cursor-default"
                }`}
                href={route.url}
                key={route.id}
              >
                {route.title}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center">
          <span className=" mr-2 hidden min-[900px]:flex items-center">
            <Image
              src="/assets/icons/phoneIcon.svg"
              alt=""
              width={24}
              height={24}
            />{" "}
            {navbarData.info.phone}
          </span>
          <div className="">
            <LanguageSelectDropdown languages={navbarData.languages} toRight />
          </div>
        </div>
      </ExtraLargePageContainer>
    </div>
  );
};
export default NavbarComponent;
