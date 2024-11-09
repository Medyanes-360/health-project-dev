import IconFacebook from "@/public/assets/icons/FaceBook";
import IconInstagram from "@/public/assets/icons/Instagram";
import IconLinkedin from "@/public/assets/icons/LinkedIn";
import WhatsappIcon from "@/public/assets/icons/Whatsapp";
import { MotionDiv } from "@/globalElements/motion";
import Image from "next/image";
import GetAFreeConsultationForm from "../getAFreeConsultationFrom";

export default function GetAFreeConsultation() {
  const items = [
    {
      Img: "/assets/clinic/sms.svg",
      text: "info@golio.com",
      iconText: "EMAIL US",
      id: 1,
    },
    {
      Img: "/assets/clinic/call-received.svg",
      text: "+1-202-555-0138",
      iconText: "PHONE NUMBER",
      id: 2,
    },
    {
      Img: "/assets/clinic/map.svg",
      text: "",
      iconText: "location",
      id: 3,
    },
  ];

  const socialMedia = [
    { Img: IconInstagram, id: 1 },
    { Img: IconFacebook, id: 2 },
    { Img: IconLinkedin, id: 3 },
    { Img: WhatsappIcon, id: 4 },
  ];

  const texts = {
    textTop: "Get a free consultation",
    textBottom: "Bizimle iletişime geçin:",
  };

  return (
    <MotionDiv
      initial={{
        x: "-50px",
        opacity: 0,
      }}
      whileInView={{
        x: "0",
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className="flex text-fourth justify-center  flex items-center py-5 sm:py-0 relative  h-[644px] "
    >
      <div className="flex flex-col items-start justify-center gap-20 w-6/12 bg-primary h-full w-full pl-8  rounded-l-2xl">
        <h1 className="text-sm ">{texts.textTop}</h1>

        <div className="w-full space-y-3">
          {items.map(({ Img, text, iconText, id }) => (
            <div key={id} className="flex items-center gap-8">
              <div className="w-12 h-12 bg-[#FFFFFF14] flex items-center justify-center rounded-full ">
                <Image
                  className=""
                  src={Img}
                  alt={text}
                  width={24}
                  height={24}
                />
              </div>

              <div className="flex flex-col ">
                <span className="text-xl opacity-15">{iconText}</span>
                <span className="text-xl leading-7 font-['Lexend'] ">
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex gap-4 items-center justify-center ">
            <hr className="border-[2px] w-14 rounded  border-white  "></hr>
            <p>{texts.textBottom}</p>
          </div>

          <div className="flex gap-1">
            {socialMedia.map(({ Img, id }) => (
              <div
                key={id}
                className="w-10 h-10 rounded-md grid place-content-center p-2 bg-[#FFFFFF14] cursor-pointer"
              >
                <Img className="w-6 h-6 " />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-6/12 text-red text-center h-full rounded-r-2xl">
        <GetAFreeConsultationForm />
      </div>
    </MotionDiv>
  );
}
