import Image from "next/image";

export default function TrustPilotInfo() {
  return (
    <div className="flex my-4 w-full border-primary-dark  border rounded-3xl px-8 py-7 bg-primary-light items-center justify-between">
      <div className="flex items-center max-w-[80%] ">
        <svg
          width="48"
          height="48"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M18.8301 5.67L7.09009 17.41C6.65009 17.85 5.91008 17.79 5.55008 17.27C4.31008 15.46 3.58008 13.32 3.58008 11.12V6.73C3.58008 5.91 4.20008 4.98 4.96008 4.67L10.5301 2.39C11.7901 1.87 13.1901 1.87 14.4501 2.39L18.4901 4.03999C19.1601 4.30999 19.3301 5.17 18.8301 5.67Z"
            fill="#0B8071"
          />
          <path
            d="M19.77 7.04C20.42 6.49 21.41 6.95999 21.41 7.80999V11.12C21.41 16.01 17.86 20.59 13.01 21.93C12.68 22.02 12.32 22.02 11.98 21.93C10.56 21.53 9.24 20.86 8.11 19.98C7.63 19.61 7.58001 18.91 8.00001 18.48C10.18 16.25 16.56 9.75 19.77 7.04Z"
            fill="#0B8071"
          />
        </svg>
        <div className="flex flex-col ml-5">
          <p className="text-primary-dark font-medium text-xl mb-2">
            We're rated “Excellent” on TrustPilot
          </p>
          <p className="text-sm">
            We're rated “Excellent” on TrustPilot <br />
            At Bookimed, we put your health first with safe and easy solutions.
            Our quality care is proven by excellent reviews from patients.
          </p>
        </div>
      </div>
      <div className="flex flex-col ">
        <span className="flex items-center mb-5">
          {[...Array(5)].map((e, index) => (
            <Image
              key={index}
              src="/assets/icons/orangeStarIcon.svg"
              alt="star"
              height={24}
              width={24}
            />
          ))}
        </span>
        <span className="font-bold text-[#868686]">5.0 Rating</span>
      </div>
    </div>
  );
}
