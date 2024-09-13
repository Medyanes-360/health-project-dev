"use client";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import ButtonComponent from "@/globalElements/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function BreadCrumbComponent({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  if (pathNames.length == 0) {
    return null;
  }

  return (
    <ExtraLargePageContainer className=" text-sm  h-16 flex justify-between items-center">
      <ul className="flex items-center ">
        <li className="hover:underline mr-2 ">
          <Link href={"/"}>Home</Link>
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
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href
              ? ` mx-2  text-black-disabled [&_a]:cursor-default `
              : "hover:underline mx-2  ";
          let itemLink = link[0].toUpperCase() + link.slice(1, link.length);

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && (
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
      <ButtonComponent
        className="!text-base py-2 px-6 bg-transparent border-2 border-primary text-primary"
        title="View Doctors"
      />
    </ExtraLargePageContainer>
  );
}
