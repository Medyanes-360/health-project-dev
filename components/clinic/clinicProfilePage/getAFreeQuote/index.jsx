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
    console.log(cardRef.current);
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
        className="  shadow-md  rounded-2xl   !w-[300px] !h-[250px] p-5 bg-white"
      >
        <div className="flex   flex-col items-center justify-center space-y-3  ">
          <h1 className="text-xl sm:text-2xl text-center">{data.title}</h1>
          <p className="text-center">{data.description}</p>
          <div className="flex items-center justify-center space-x-2 text-center ">
            {data.icons.map((iconData) => (
              <div key={iconData.id}>
                {/* Render the icon directly as a React component */}
                <iconData.Img
                  className="p-1 rounded-md border-[1.36px] text-[#0B8071] bg-[#52B8AB24] flex items-center justify-center"
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        </div>
        <ButtonComponent
          className={
            "!bg-primary !rounded-md !text-fourth !w-full !text-lg underline"
          }
          title={"Get A Free Quote"}
        />
      </div>
    </div>
  );
}
