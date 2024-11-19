import Image from "next/image";

const TreatmentList = ({ treatments }) => {
  return (
    <article className="px-0 sm:px-4 pb-4 w-full mb-4">
      <div className="bg-[#D9D9D91F] shadow-md rounded-md p-2 mx-auto mt-8 w-full">
        <div className="flex items-center justify-around bg-[#EFEFEF] h-14 rounded">
          <h2 className="font-poppins text-xs font-semibold leading-6 w-[100%] text-end sm:text-center p-[1rem] sm:p-[0rem]">
            Treatment
          </h2>
          <h2 className="font-poppins text-xs font-semibold leading-6 w-1/2 text-center hidden sm:block">
            Price
          </h2>
        </div>

        <ul>
          {treatments.map((treatment, index) => (
            <li
              key={index}
              className="flex items-center justify-around border-gray-300 bg-[#FFFFFF] mt-2.5 h-[54px] rounded"
            >
              <div className="flex items-center w-6/12 justify-center">
                <span className="align-center text-[#212B36] w-fit font-poppins text-sm font-normal leading-[22px] truncate sm:w-full">
                  {treatment.name}
                </span>
              </div>
              <div className="flex items-center w-6/12 w-fit justify-between gap-20">
                <span className="font-poppins text-sm font-normal leading-[22px] text-[#637381]">
                  {treatment.priceRange}
                </span>
              </div>
              <Image
                src={"/assets/clinic/arrow-square-right.svg"}
                alt="arrow-square-right"
                width={24}
                height={24}
                className=""
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default TreatmentList;
