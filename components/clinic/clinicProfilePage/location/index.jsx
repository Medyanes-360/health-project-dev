import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { MotionDiv } from "@/globalElements/motion";
import Image from "next/image";

export default function Location({ address }) {
  const data = {
    icon: "/assets/clinic/icon.svg",
    text: "Information provided by Pinter Gabor Clinic’s representative",
    date: "updated 9/25/2024",
  };
  return (
    <div id="locationDiv">
      <div className="  mt-10 p-5">
        {/* <p className="text-2xl font-medium bg-header-gradient bg-clip-text text-fill-transparent text-primary">
          Location
        </p> */}
        {/* <p>{address}</p> */}
        <div className="flex  items-center">
          <span className="">
            {/* <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" rx="22" fill="white" />
              <rect
                x="0.5"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                stroke="black"
                stroke-opacity="0.12"
              />
              <path
                d="M30 22.2V23.9C30 27.05 28.2 28.4 25.5 28.4H16.5C13.8 28.4 12 27.05 12 23.9V18.5C12 15.35 13.8 14 16.5 14H19.2C19.07 14.38 19 14.8 19 15.25V19.15C19 20.12 19.32 20.94 19.89 21.51C20.46 22.08 21.28 22.4 22.25 22.4V23.79C22.25 24.3 22.83 24.61 23.26 24.33L26.15 22.4H28.75C29.2 22.4 29.62 22.33 30 22.2Z"
                fill="#52B8AB"
              />
              <path
                opacity="0.4"
                d="M32 15.25V19.15C32 20.64 31.24 21.76 30 22.2C29.62 22.33 29.2 22.4 28.75 22.4H26.15L23.26 24.33C22.83 24.61 22.25 24.3 22.25 23.79V22.4C21.28 22.4 20.46 22.08 19.89 21.51C19.32 20.94 19 20.12 19 19.15V15.25C19 14.8 19.07 14.38 19.2 14C19.64 12.76 20.76 12 22.25 12H28.75C30.7 12 32 13.3 32 15.25Z"
                fill="#52B8AB"
              />
              <path
                opacity="0.4"
                d="M24.5999 31.25H21.7499V28.4C21.7499 27.99 21.4099 27.65 20.9999 27.65C20.5899 27.65 20.2499 27.99 20.2499 28.4V31.25H17.3999C16.9899 31.25 16.6499 31.59 16.6499 32C16.6499 32.41 16.9899 32.75 17.3999 32.75H24.5999C25.0099 32.75 25.3499 32.41 25.3499 32C25.3499 31.59 25.0099 31.25 24.5999 31.25Z"
                fill="#52B8AB"
              />
              <path
                d="M25.4399 18C25.0199 18 24.6899 17.66 24.6899 17.25C24.6899 16.84 25.0299 16.5 25.4399 16.5C25.8499 16.5 26.1899 16.84 26.1899 17.25C26.1899 17.66 25.8499 18 25.4399 18Z"
                fill="#52B8AB"
              />
              <path
                d="M28.25 18C27.83 18 27.5 17.66 27.5 17.25C27.5 16.84 27.84 16.5 28.25 16.5C28.66 16.5 29 16.84 29 17.25C29 17.66 28.66 18 28.25 18Z"
                fill="#52B8AB"
              />
              <path
                d="M22.6201 18C22.2001 18 21.8701 17.66 21.8701 17.25C21.8701 16.84 22.2101 16.5 22.6201 16.5C23.0301 16.5 23.3701 16.84 23.3701 17.25C23.3701 17.66 23.0401 18 22.6201 18Z"
                fill="#52B8AB"
              />
            </svg> */}
          </span>
          <MotionDiv
            initial={{
              scale: "80%",
              opacity: 0,
            }}
            whileInView={{
              scale: "100%",
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
            className="  w-full select-none rounded-3xl  overflow-hidden h-[450px]  "
          >
            <iframe
              style={{
                // border görünmesin diye width ve height yükseltip margini -2 (border kalınlığı) yapıyoruz
                width: "100.5%",
                height: "100.5%",
                margin: "-2px",
              }}
              className="   select-none   h-full   w-full  "
              src={`https://maps.google.com/maps?width=520&height=400&hl=en&q=${encodeURIComponent(
                address
              )}&t=&z=15&ie=UTF8&iwloc=B&output=embed`}
              width="800"
              height="450"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </MotionDiv>
        </div>
      </div>
      <div className="flex items-center justify-between text-[#04285C] mb-8">
        <div className="flex gap-4 items-center ">
          <Image src={data.icon} width={40} height={40} />
          <span className="w-[150px]">{data.text}</span>
        </div>
        <div>
          <span>{data.date}</span>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
