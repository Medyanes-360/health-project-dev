import Image from "next/image";

export default function PackageCard() {
  return (
    <div className=" shadow-lg max-w-[400px] self-center  h-full rounded-xl">
      {/* Card Header */}
      <div className="bg-[#F9F9F9] p-3 grid  grid-cols-3   items-center justify-between w-full ">
        <div className="flex flex-col col-span-2   ">
          <p className="text-[#383333]  font-medium">
            MERT SECER AESTHETIC AND PLASTIC SURGEON
          </p>
          <span className="text-xs  mt-3 text-[#7D7987]">
            Standard Hair transplant
          </span>
        </div>

        <div className="flex col-span-1   items-center   ">
          <Image
            src="/assets/icons/locationIcon_filled.svg"
            alt=""
            width={24}
            height={24}
          />
          <span className="text-nowrap truncate text-xs text-[#7D7987]">
            {" "}
            Istanbul, Turkey
          </span>
        </div>
      </div>
      {/*  Card Body */}
      <div className="p-6 flex flex-col mt-2.5 ">
        <Image
          className="w-full max-h-[255px] rounded-3xl "
          src="/assets/mocks/clinicImage.png"
          alt=""
          width={344}
          height={255}
        />
        <div className="flex flex-col gap-3 mt-3 pl-1.5">
          <span className=" gap-3 flex items-center ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5598 21C17.3999 21.0006 17.2421 20.9629 17.0998 20.89L11.9998 18.22L6.89979 20.89C6.56192 21.0676 6.15238 21.0374 5.84422 20.8122C5.53605 20.5869 5.38302 20.2058 5.44979 19.83L6.44979 14.2L2.32979 10.2C2.06784 9.93856 1.97167 9.55387 2.07979 9.19996C2.19803 8.83738 2.51221 8.57363 2.88979 8.51996L8.58979 7.68996L11.0998 2.55996C11.2669 2.21497 11.6165 1.99585 11.9998 1.99585C12.3831 1.99585 12.7327 2.21497 12.8998 2.55996L15.4398 7.67996L21.1398 8.50996C21.5174 8.56363 21.8315 8.82738 21.9498 9.18996C22.0579 9.54387 21.9617 9.92856 21.6998 10.19L17.5798 14.19L18.5798 19.82C18.6527 20.2028 18.4966 20.593 18.1798 20.82C17.9987 20.9469 17.7807 21.0102 17.5598 21Z"
                fill="#FFAB00"
              />
            </svg>
            New Clinic
          </span>
          <span className=" gap-3 flex items-center ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M6.76017 22H17.2402C20.0002 22 21.1002 20.31 21.2302 18.25L21.7502 9.99C21.8902 7.83 20.1702 6 18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.77017 18.25C2.89017 20.31 4.00017 22 6.76017 22Z"
                fill="black"
              />
              <path
                d="M13.5 8.75H10.5C10.09 8.75 9.75 8.41 9.75 8C9.75 7.59 10.09 7.25 10.5 7.25H13.5C13.91 7.25 14.25 7.59 14.25 8C14.25 8.41 13.91 8.75 13.5 8.75Z"
                fill="black"
              />
              <path
                d="M12.0001 18.13C13.8668 18.13 15.3801 16.6167 15.3801 14.75C15.3801 12.8833 13.8668 11.37 12.0001 11.37C10.1334 11.37 8.62012 12.8833 8.62012 14.75C8.62012 16.6167 10.1334 18.13 12.0001 18.13Z"
                fill="black"
              />
            </svg>
            17 • Before & after photos
          </span>
          <span className=" gap-3 flex items-center ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z"
                fill="#292D32"
              />
              <path
                d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z"
                fill="#292D32"
              />
              <path
                d="M12 13.75H8C7.59 13.75 7.25 13.41 7.25 13C7.25 12.59 7.59 12.25 8 12.25H12C12.41 12.25 12.75 12.59 12.75 13C12.75 13.41 12.41 13.75 12 13.75Z"
                fill="#292D32"
              />
              <path
                d="M16 17.75H8C7.59 17.75 7.25 17.41 7.25 17C7.25 16.59 7.59 16.25 8 16.25H16C16.41 16.25 16.75 16.59 16.75 17C16.75 17.41 16.41 17.75 16 17.75Z"
                fill="#292D32"
              />
            </svg>
            All Inclusive Package
          </span>
        </div>
      </div>
    </div>
  );
}
