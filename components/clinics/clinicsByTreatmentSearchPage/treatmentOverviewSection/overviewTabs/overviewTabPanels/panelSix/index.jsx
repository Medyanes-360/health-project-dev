import Image from "next/image";
import React from "react";

export default function PanelSix({ data }) {
  const { text, titleTop, titleBottom, svgs, listItems, nestedListItems } =
    data;

  return (
    <div className="flex flex-col gap-8 p-4">
      <p className="font-poppins text-[10px] font-medium leading-[14px] text-left">
        {text}
      </p>

      <h3 className="font-poppins text-[12px] font-bold leading-[14px] text-left">
        {titleTop}
      </h3>

      <div className="flex gap-2">
        {svgs.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Payment method ${index + 1}`}
            width={40}
            height={40}
          />
        ))}
      </div>

      <h3 className="font-poppins text-[12px] font-bold leading-[14px] text-left">
        {titleBottom}
      </h3>

      <ul className="list-decimal pl-4">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="font-poppins text-[10px] font-medium leading-[14px]"
          >
            {item}
            {index === 2 && (
              <ul className="list-disc pl-4">
                {nestedListItems[0].subItems.map((subItem, subIndex) => (
                  <li
                    className="font-poppins text-[10px] font-normal leading-[14px]"
                    key={subIndex}
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <span className="font-poppins text-[10px] font-normal leading-[14px] ml-[7px] mt-[-30px] ">
        For more information, see our{" "}
        <span className="underline">Payment Policy</span>
      </span>
    </div>
  );
}
