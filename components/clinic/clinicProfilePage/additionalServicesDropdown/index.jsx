import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";

export default function AdditionalServicesDropdown() {
  const data = [
    {
      sub_heading_5: "Treatments prices in the clinic",
      text_5:
        "Last price update — 29.04.2024. Prices can be changed depending on the medical case and doctor's recommendations.",
    },
  ];
  return (
    <div>
      <div className="">
        <h2 className="font-medium text-lg sm:text-2xl">
          {data.sub_heading_5}
        </h2>

        <p>{data.text_5}</p>
      </div>
      {/* /* Treatments prices in the clinic dropdown start
       */}
      <ul class="flex flex-col gap-2 w-full  ">
        <li>
          <details class="group " open>
            <summary class="bg-[#eef8f7] flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer border-x border-y rounded-xl h-14">
              <span class="flex gap-2">
                {/* <img
                      class="w-6 h-6 rounded-lg"
                      src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c"
                      alt=""
                    /> */}

                <span className="font-light font-poppins">
                  Additional Services{" "}
                </span>
              </span>

              <Image
                src="/assets/clinic/arrow-circle-down.svg"
                alt="Table Icon"
                width={24}
                height={24}
                className="transition group-open:rotate-180"
              />
              {/* <svg
                    class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg> */}
            </summary>

            <article class="px-4 pb-4 w-full mb-4">
              <div class="bg-[#D9D9D91F] shadow-md rounded-md p-4 mx-auto  mt-8 w-full">
                <div className="flex items-center justify-around bg-[#EFEFEF] h-14 rounded">
                  <h2 class="text-sm font-medium ">Service 1 </h2>
                  <h2 class="text-sm font-medium ">Service 2</h2>
                </div>

                {/* <ul>
                  <li class="flex items-center justify-between py-2 border-gray-300 bg-[#FFFFFF] mb-2.5 mt-2.5 h-14 rounded">
                    <div class="flex items-center w-7/12 justify-center">
                      <span class=" align-center font-light w-fit ">
                        Computer-assisted dental implant
                      </span>
                    </div>
                    <div className="flex items-center w-5/12 w-fit justify-between gap-20">
                      <span class="text-gray-800 font-light ">$470 - $772</span>
                      <Image
                        src={"/assets/clinic/arrow-square-right.svg"}
                        alt="arrow-square-right"
                        width={24}
                        height={24}
                        className="mr-4"
                      />
                    </div>
                  </li>{" "}
                  <li class="flex items-center justify-between py-2 border-gray-300 bg-[#FFFFFF] mb-2.5 mt-2.5 h-14 rounded">
                    <div class="flex items-center w-7/12 justify-center">
                      <span class=" align-center font-light w-fit ">
                        Computer-assisted dental implant
                      </span>
                    </div>
                    <div className="flex items-center w-5/12 w-fit justify-between gap-20">
                      <span class="text-gray-800 font-light">$470 - $772</span>
                      <Image
                        src={"/assets/clinic/arrow-square-right.svg"}
                        alt="arrow-square-right"
                        width={24}
                        height={24}
                        className="mr-4"
                      />
                    </div>
                  </li>{" "}
                  <li class="flex items-center justify-between py-2 border-gray-300 bg-[#FFFFFF] mb-2.5 mt-2.5 h-14 rounded">
                    <div class="flex items-center w-7/12 justify-center">
                      <span class=" align-center font-light w-fit ">
                        Computer-assisted dental implant
                      </span>
                    </div>
                    <div className="flex items-center w-5/12 w-fit justify-between gap-20">
                      <span class="text-gray-800 font-light">$470 - $772</span>
                      <Image
                        src={"/assets/clinic/arrow-square-right.svg"}
                        alt="arrow-square-right"
                        width={24}
                        height={24}
                        className="mr-4"
                      />
                    </div>
                  </li>{" "}
                  <li class="flex items-center justify-between py-2 border-gray-300 bg-[#FFFFFF] mb-2.5 mt-2.5 h-14 rounded">
                    <div class="flex items-center w-7/12 justify-center">
                      <span class=" align-center font-light w-fit ">
                        Computer-assisted dental implant
                      </span>
                    </div>
                    <div className="flex items-center w-5/12 w-fit justify-between gap-20">
                      <span class="text-gray-800 font-light">$470 - $772</span>
                      <Image
                        src={"/assets/clinic/arrow-square-right.svg"}
                        alt="arrow-square-right"
                        width={24}
                        height={24}
                        className="mr-4"
                      />
                    </div>
                  </li>
                  <li class="flex items-center justify-between py-2 border-gray-300 bg-[#FFFFFF] mb-2.5 mt-2.5 h-14 rounded">
                    <div class="flex items-center w-7/12 justify-center">
                      <span class=" align-center font-light w-fit ">
                        Computer-assisted dental implant
                      </span>
                    </div>
                    <div className="flex items-center w-5/12 w-fit justify-between gap-20">
                      <span class="text-gray-800 font-light">$470 - $772</span>
                      <Image
                        src={"/assets/clinic/arrow-square-right.svg"}
                        alt="arrow-square-right"
                        width={24}
                        height={24}
                        className="mr-4"
                      />
                    </div>
                  </li>
                </ul> */}
              </div>
            </article>
          </details>
        </li>
      </ul>
      {/* /* Treatments prices in the clinic dropdown end
       */}
      <hr></hr>
    </div>
  );
}
