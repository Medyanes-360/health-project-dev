"use client";
import ButtonComponent from "@/globalElements/Button";
import IconFacebook from "@/public/assets/icons/FaceBook";
import IconInstagram from "@/public/assets/icons/Instagram";
import IconLinkedin from "@/public/assets/icons/LinkedIn";
import WhatsappIcon from "@/public/assets/icons/Whatsapp";
import { useEffect, useRef } from "react";

const freeQuoteData = {
  title: "Get a free consultation",
  description: "Implant4Life by Smilefactory",
  icons: [
    {
      Img: IconInstagram,
      id: 1,
    },
    {
      Img: IconFacebook,
      id: 2,
    },
    {
      Img: IconLinkedin,
      id: 3,
    },
    {
      Img: WhatsappIcon,
      id: 4,
    },
  ],
};

export default function GetAFreeQuote() {
  const data = freeQuoteData;
  const cardRef = useRef(null);
  const parentRef = useRef(null);

  // sticky :

  useEffect(() => {
    const setCardSticky = () => {
      const parentTop = parentRef.current.getBoundingClientRect().top;
      const parentBottom = parentRef.current.getBoundingClientRect().bottom;
      const cardHeight = cardRef.current.getBoundingClientRect().height;
      const headerBarHeight = 80; // headerBar  Kadar Height vermek zorundayız! -çünkü headerBar'ımız fixed

      if (parentTop <= headerBarHeight) {
        if (parentBottom < headerBarHeight + cardHeight) {
          cardRef.current.classList.remove("!fixed");
          cardRef.current.classList.remove(`!top-[80px]]`);
          parentRef.current.classList.add("items-end");
        } else {
          cardRef.current.classList.add("!fixed");
          cardRef.current.classList.add(`!top-[80px]`);
          parentRef.current.classList.remove("items-end");
        }
      } else {
        cardRef.current.classList.remove("!fixed");
        cardRef.current.classList.remove(`!top-[${headerBarHeight}px]`);
      }
    };

    if (parentRef.current && cardRef.current && window != undefined) {
      // sayfa ilk yüklendiğinde:
      setCardSticky();

      //scrollandığında:
      window.addEventListener("scroll", setCardSticky);
    }
  });

  return (
    <div
      ref={parentRef}
      className="   min-h-full    flex  max-w-[300px] min-w-[300px] "
    >
      <div
        ref={cardRef}
        className="  shadow-md  rounded-2xl   !w-[300px] !h-[300px] p-5 bg-white flex flex-col items-center gap-8 justify-center"
      >
        <div className="flex   flex-col items-center justify-center space-y-3  ">
          <h1 className="ont-poppins text-sm font-medium leading-5 text-center">
            {data.title}
          </h1>
          <p className="text-center font-poppins text-xs font-medium leading-5 text-[#0B8071]  ">
            {data.description}
          </p>
          <div className="flex items-center justify-center space-x-2 text-center ">
            {data.icons.map((iconData) => (
              <div
                key={iconData.id}
                className="w-[28.16px] h-[29.86px] p-[8.14px] pt-2.5 gap-[6.79px] rounded-tl-[3.39px] rounded-br-[0px] rounded-bl-[0px] rounded-tr-[0px]  bg-[#52B8AB24]"
              >
                {/* Render the icon directly as a React component */}
                <iconData.Img
                  className=" text-[#0B8071]  flex items-center justify-center"
                  width={11.88}
                  height={13.57}
                />
              </div>
            ))}
          </div>
        </div>
        <ButtonComponent
          className={
            "!bg-primary !rounded-md font-inter !text-base text-white font-semibold leading-6  underline w-[181px] h-[50px] font-inter text-base font-semibold leading-[24px] !p-4 "
          }
          title={"Get A Free Quote"}
        />
      </div>
    </div>
  );
}
