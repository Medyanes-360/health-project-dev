import ButtonComponent from "@/globalElements/Button";
import CardComponent from "@/globalElements/Card";
import IconFacebook from "@/public/assets/icons/FaceBook";
import IconInstagram from "@/public/assets/icons/Instagram";
import IconLinkedin from "@/public/assets/icons/LinkedIn";
import WhatsappIcon from "@/public/assets/icons/Whatsapp";
import React from "react";

export default function GetAFreeQuote() {
  const data = [
    {
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
    },
  ];

  const ContentCard = ({ title, description, icons }) => {
    return (
      <CardComponent className="">
        <div className="flex flex-col items-center justify-center space-y-3 w-[300px] h-[250px] ">
          <h1 className="text-xl sm:text-2xl text-center">{title}</h1>
          <p className="text-center">{description}</p>
          <div className="flex items-center justify-center space-x-2 text-center ">
            {icons.map((iconData) => (
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
      </CardComponent>
    );
  };

  return (
    <>
      {data.map((item, index) => (
        <ContentCard
          key={index}
          title={item.title}
          description={item.description}
          icons={item.icons}
        />
      ))}
    </>
  );
}
