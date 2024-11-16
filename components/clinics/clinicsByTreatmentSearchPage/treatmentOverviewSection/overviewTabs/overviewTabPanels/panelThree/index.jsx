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
      <div className="flex items-start gap-1 p-4 ">
        {colors.map((color, index) => (
          <div
            key={index}
            className="flex items-start justify-center gap-8 flex-col "
          >
            <div className="flex items-center gap-1">
              <div
                className="w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: color }}
              ></div>

              {index < colors.length && (
                <div className=" border border-solid border-[#D9D9D9] w-[131.6px] border-t-[1.5px] border-r-0 border-b-0 border-l-0"></div>
              )}
            </div>
            <span className="font-poppins text-[10px] font-medium leading-[14px] text-left">
              {texts[index]?.text}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
