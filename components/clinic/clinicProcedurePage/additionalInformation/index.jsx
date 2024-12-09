//import CardComponent from "@/globalElements/Card";
import { MotionDiv } from "@/globalElements/motion";
import React from "react";

const AdditionalInformations = ({ details }) => {
  return (
    <div>
      <div className="card">
        <div className="card-children">
          <div className="flex items-center mb-2 gap-2">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="white" />
              <path
                opacity="0.4"
                d="M25.7083 10.4917C26.9916 9.41 29.0633 9.41 30.3099 10.4917L33.2066 12.9667C33.7566 13.425 34.8016 13.81 35.535 13.81H38.6516C40.5949 13.81 42.1899 15.405 42.1899 17.3483V20.465C42.1899 21.1983 42.575 22.225 43.0333 22.775L45.5083 25.6717C46.59 26.955 46.59 29.0267 45.5083 30.2733L43.0333 33.17C42.575 33.72 42.1899 34.7467 42.1899 35.48V38.5967C42.1899 40.54 40.5949 42.135 38.6516 42.135H35.535C34.8016 42.135 33.7749 42.52 33.2249 42.9783L30.3283 45.4533C29.0449 46.535 26.9733 46.535 25.7266 45.4533L22.8299 42.9783C22.2799 42.52 21.2349 42.135 20.5199 42.135H17.3116C15.3683 42.135 13.7733 40.54 13.7733 38.5967V35.4617C13.7733 34.7467 13.4066 33.7017 12.9483 33.17L10.4733 30.255C9.40995 28.99 9.40995 26.9367 10.4733 25.6717L12.9483 22.7567C13.4066 22.2067 13.7733 21.18 13.7733 20.465V17.3667C13.7733 15.4233 15.3683 13.8283 17.3116 13.8283H20.4833C21.2166 13.8283 22.2433 13.4433 22.7933 12.985L25.7083 10.4917Z"
                fill="#52B8AB"
              />
              <path
                d="M27.9998 36.9283C26.9915 36.9283 26.1665 36.1033 26.1665 35.095C26.1665 34.0867 26.9732 33.2617 27.9998 33.2617C29.0082 33.2617 29.8332 34.0867 29.8332 35.095C29.8332 36.1033 29.0265 36.9283 27.9998 36.9283Z"
                fill="#52B8AB"
              />
              <path
                d="M28 31.1533C27.2483 31.1533 26.625 30.53 26.625 29.7783V20.905C26.625 20.1533 27.2483 19.53 28 19.53C28.7517 19.53 29.375 20.1533 29.375 20.905V29.76C29.375 30.53 28.77 31.1533 28 31.1533Z"
                fill="#292D32"
              />
            </svg>
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
            >
              <h2 className="text-2xl font-poppins">Additional Informations</h2>
            </MotionDiv>
          </div>
          <div>
            <ul className=" flex flex-wrap gap-2">
              {details.map((info, index) => (
                <MotionDiv
                  initial={{
                    x: "50px",
                    opacity: 0,
                  }}
                  whileInView={{
                    x: "0",
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 * (index + 1),
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  key={index}
                  className="flex justify-between items-center space-x-1  bg-gray-50 min-h-[60px] w-fit px-5"
                >
                  <span className="text-base sm:text-lg font-poppins mr-2 whitespace-normal sm:whitespace-nowrap">
                    {info.name}:
                  </span>
                  <span className="text-2xl">{info.icon}</span>
                </MotionDiv>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformations;
