import Image from "next/image";
import { useRef } from "react";

export default function FeatureCard({ active, ...props }) {
  const data = props.data;
  const textContainerRef = useRef();
  const overflowingElementRef = useRef();

  const startHovering = () => {
    if (textContainerRef.current && overflowingElementRef.current) {
      const translateAmount =
        textContainerRef.current.getBoundingClientRect().width -
        overflowingElementRef.current.scrollWidth;

      overflowingElementRef.current.classList.remove("truncate");
      overflowingElementRef.current.style.transition = `transform ${
        -translateAmount / 100
      }s linear`;

      overflowingElementRef.current.style.transform = `translate(${translateAmount}px,0)`;
    }
  };
  const stopHovering = () => {
    if (textContainerRef.current && overflowingElementRef.current) {
      overflowingElementRef.current.style.transition = "none";
      overflowingElementRef.current.classList.add("truncate");
      overflowingElementRef.current.style.transform = `translate(0,0)`;
    }
  };

  return (
    <div
      onMouseEnter={startHovering}
      onMouseLeave={stopHovering}
      className="group hover:shadow-xl hover:scale-105 lg:hover:bg-inherit hover:bg-primary-light  hover:border-primary transition-all duration-200 cursor-pointer rounded-lg flex justify-start  items-center sm:p-2 p-1  border lg:border-none"
    >
      <div className="bg-primary-light    lg:bg-white w-10 h-10   p-2 sm:w-20 sm:p-4  sm:h-16  rounded-md  group-hover:shadow-none  transition-all duration-200  flex items-center justify-center group-hover:bg-primary ">
        <Image
          className=" filter group-hover:brightness-0 group-hover:invert"
          src={`/assets/icons/doctorsIcon.svg`}
          alt=""
          width={72}
          height={72}
        />
      </div>
      <div
        ref={textContainerRef}
        className="flex text-start  w-full   text-nowrap  overflow-hidden    flex-col   ml-2 "
      >
        <p
          ref={overflowingElementRef}
          className={` truncate sm:text-xl text-base  `}
        >
          {data.categoryname}asflvxclöblölş
        </p>
        <span className="text-primary sm:text-base text-sm  transition-all duration-200">
          Turkey
        </span>
      </div>
    </div>
  );
}
