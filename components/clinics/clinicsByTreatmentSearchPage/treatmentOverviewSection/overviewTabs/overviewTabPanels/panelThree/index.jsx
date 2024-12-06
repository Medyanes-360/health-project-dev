import Image from "next/image";

export default function PanelThree({ data }) {
  const { title, texts } = data;
  const colors = ["#F22F46", "#52B8AB", "#FFAA00", "#1038FA", "#FF4DCA"];

  return (
    <>
      <div className="p-4">
        <span className="font-poppins text-[12px] font-bold leading-[32px] text-left ">
          {title}
        </span>
      </div>
      <div className="flex xl:flex-row flex-col items-start md:gap-1 gap-[0.5rem] p-4 ">
        {colors.map((color, index) => (
          <div
            key={index}
            className="flex items-start justify-center xl:gap-8 gap-4 xl:flex-col flex-row "
          >
            <div className="flex flex-col xl:flex-row items-center gap-1">
              <div
                className="w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: color }}
              ></div>

              {index < colors.length && (
                <div className=" border border-solid border-[#D9D9D9] xl:w-[131.6px] xl:h-[0px] h-[50px]  xl:border-t-[1.5px] xl:border-r-0 xl:border-b-0 border-l-0 border-l-[0.5px]"></div>
              )}
            </div>
            <span className="font-poppins text-[10px] font-medium leading-[14px] text-left">
              {texts[index]?.text}
            </span>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col items-start gap-[0.5rem] p-4 sm:p-6">
          {colors.map((color, index) => (
            <div key={index} className="flex items-start gap-4 w-full">
              <div className="flex flex-col items-center gap-[0.5rem] ">
                <div
                  className="w-[10px] h-[10px] rounded-full"
                  style={{ backgroundColor: color }}
                ></div>

                {index < colors.length && (
                  <div className="border border-solid border-[#D9D9D9] h-[30px] sm:h-[50px] border-l-[0.5px]"></div>
                )}
              </div>

              <span className="font-poppins text-[10px] sm:text-[12px] font-medium leading-[14px] sm:leading-[16px] text-left">
                {texts[index]?.text}
              </span>
            </div>
          ))}
        </div> */}
    </>
  );
}
