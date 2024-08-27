"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelectDropdown from "./languageSelectDropdown";

const NavbarComponent = (props) => {
  const navbarData = props.navbarData;
  const pathname = usePathname();

  return (
    <div className="bg-bgDarkWhite text-sm  py-2   ">
      {/* component'ın max-widthini xl'a ayarlayan container:  */}
      <div className="  xl:container mx-auto flex items-center justify-between">
        <div className="">
          {navbarData.routes.map((route) => {
            return (
              <Link
                className={`mx-2 text-black border-b-current   ${
                  pathname == route.url && "border-b-2 text-primary "
                }`}
                f
                href={route.url}
                key={route.id}
              >
                {route.title}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center">
          <span className="flex items-center">
            <Image
              src="/assets/icons/phoneIcon.svg"
              alt=""
              width={24}
              height={24}
            />{" "}
            {navbarData.info.phone}
          </span>
          <div className="ml-2">
            <LanguageSelectDropdown toRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarComponent;
