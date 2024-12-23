import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { MotionDiv } from "@/globalElements/motion";
import Image from "next/image";

export default function ProcedureOverview() {
  const data = {
    patientsRecommendPercent: "96",
    procedureRating: 4.6,
    clinicRating: 4.6,
  };
  return (
    <ExtraLargePageContainer id="overviewSection" className="mt-6 mb-6">
      <MotionDiv
        initial={{
          scale: "90%",
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
        className="border border-[rgba(217,217,217,0.12)] shadow-md p-6 rounded-3xl"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-col items-start gap-2.5">
            <p className="text-black font-semibold text-lg md:text-base">
              FU hair transplant (4500 Grafts) All Included
            </p>
            <span className="text-sm text-black">
              Adem and Havva Medical Center
            </span>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Image
              src="/assets/icons/locationIcon.svg"
              alt=""
              width={24}
              height={24}
            />
            <span className="ml-0.5 font-semibold text-primary text-sm md:text-base">
              Turkey, Istanbul
            </span>
          </div>
        </div>
        <div className="p-4 md:p-6 bg-[#D9D9D921] mt-6 rounded-3xl">
          <div className="flex items-center ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z"
                fill="#52B8AB"
              />
              <path
                d="M16.58 9.56998C16.39 9.29998 16.07 9.15 15.69 9.15H13.74C13.61 9.15 13.49 9.09998 13.41 8.99998C13.33 8.89998 13.29 8.76998 13.31 8.62998L13.55 7.06998C13.65 6.60998 13.34 6.07997 12.88 5.92997C12.45 5.76997 11.94 5.98995 11.74 6.28995L9.79999 9.16996V8.80997C9.79999 8.10997 9.49998 7.81998 8.75998 7.81998H8.26999C7.52999 7.81998 7.22998 8.10997 7.22998 8.80997V13.59C7.22998 14.29 7.52999 14.58 8.26999 14.58H8.75998C9.45998 14.58 9.75998 14.31 9.78998 13.67L11.26 14.8C11.46 15 11.91 15.11 12.23 15.11H14.08C14.72 15.11 15.36 14.63 15.5 14.04L16.67 10.48C16.8 10.16 16.77 9.82998 16.58 9.56998Z"
                fill="#52B8AB"
              />
            </svg>
            <p className="font-semibold text-black ml-2.5 text-sm md:text-base">
              {data.patientsRecommendPercent}
            </p>
            <p className=" ml-5">% Clients recommended this clinic</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center p-4 md:p-6 bg-[#D9D9D921] mt-6 rounded-3xl">
          <div className="flex items-center">
            <div className="flex bg-white rounded-2xl">
              <Image
                src="/assets/icons/star.svg"
                alt=""
                width={24}
                height={24}
              />
              <p className="font-semibold text-black ml-2.5 text-sm md:text-base">
                {data.procedureRating}
              </p>
            </div>
            <p className="ml-3 md:ml-5 md:mt-0 text-sm md:text-base">
              Excellent score based on 161 patient reviews
            </p>
          </div>

          <span className="font-semibold hover:underline text-primary cursor-pointer text-sm md:text-base  md:mt-0 md:ml-auto">
            Read more
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center p-4 md:p-6 bg-[#D9D9D921] mt-6 rounded-3xl">
          <div className="flex items-center">
            <div className="flex items-center bg-white rounded-2xl">
              <Image
                src="/assets/icons/star.svg"
                alt=""
                width={24}
                height={24}
              />
              <p className="font-semibold text-black ml-2.5 text-sm md:text-base">
                {data.clinicRating}
              </p>{" "}
            </div>
            <p className="ml-3 items-center md:ml-5  md:mt-0 text-sm md:text-base">
              About the clinic
            </p>{" "}
          </div>{" "}
          <span className="font-semibold hover:underline text-primary cursor-pointer text-sm md:text-base   md:ml-auto">
            Read more
          </span>
        </div>{" "}
      </MotionDiv>
    </ExtraLargePageContainer>
  );
}
