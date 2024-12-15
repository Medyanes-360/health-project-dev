"use client";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import ButtonComponent from "@/globalElements/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function BreadCrumbComponent({ customPaths = [] }) {
  //örnek customPath= {
  //   replace: false,
  //   index: 2,
  //   name: "Hair Transplant",
  //   url: "/clinics/hair-transplant",
  // },

  // replace:true, verilen indexteki değerin yerine bu linki koy demek.
  // replace:false olduğunda ise verilen indexten sonra bunu ekle demek.

  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  if (pathNames.length == 0) {
    return null;
  }

  const breadCrumbData = [];
  // default pathları breadCrumbData'ya ekle
  pathNames.forEach((elem, index) => {
    breadCrumbData.push({
      name: elem,
      url: `/${pathNames.slice(0, index + 1).join("/")}`,
    });
  });
  //customPath verilmişse, verildikleri indexi breadCrumbData'da olanın yerine koy.
  customPaths.forEach((elem) => {
    if (elem.replace) {
      breadCrumbData[elem.index - 1] = {
        name: elem.name,
        url: elem.url,
      };
    } else {
      breadCrumbData.splice(elem.index, 0, {
        name: elem.name,
        url: elem.url,
      });
    }
  });

  return (
    <>
      {" "}
      <ExtraLargePageContainer className=" pb-2   text-sm  flex items-center justify-center  ">
        <div className="flex   w-full justify-between  items-center ">
          <ul className="flex flex-wrap ">
            <li className="hover:underline mr-2 ">
              <Link href={"/"} className="sm:text-[14px] text-[10px]">
                Home
              </Link>
            </li>
            {pathNames.length > 0 && (
              //separator:
              <span className="flex  items-center justify-center">
                {" "}
                <svg
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2" cy="2" r="2" fill="#919EAB" />
                </svg>
              </span>
            )}
            {breadCrumbData.map((elem, index) => {
              let url = elem.url;

              let name =
                elem.name[0].toUpperCase() +
                elem.name.slice(1, elem.name.length);
              let itemClasses =
                paths === url
                  ? ` mx-2 w-min text-black-disabled   truncate  [&_a]:cursor-default `
                  : "hover:underline mx-2 truncate   ";

              return (
                <React.Fragment key={index}>
                  <li className={itemClasses}>
                    <Link
                      className="font-poppins sm:text-[14px] text-[10px] font-normal leading-[22px] text-left decoration-skip-ink-none"
                      href={url}
                    >
                      {name}
                    </Link>
                  </li>
                  {breadCrumbData.length !== index + 1 && (
                    <span className="flex items-center justify-center">
                      {" "}
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2" r="2" fill="#919EAB" />
                      </svg>
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
          <div>
            <ButtonComponent
              className="font-inter  font-semibold leading-[24px] !truncate w-[152px] h-[32px] !sm:text-[1.25rem] !text-[1rem]  !py-2 !px-2  bg-transparent border-2 border-primary text-[#52B8AB]"
              title="View Doctors"
            />
          </div>
        </div>
      </ExtraLargePageContainer>
    </>
  );
}
