import Image from "next/image";

export default function PanelFive({ data }) {
  const { svg, text } = data;

  return (
    <div className="animate-fadeIn grid grid-cols-3 grid-flow-row gap-3 text-xs">
      {data.map((benefit, index) => (
        <div key={index} className="col-span-1 flex items-center gap-2.5">
          <Image src={benefit.svg} alt={benefit.text} width={24} height={24} />
          <p className="font-poppins text-[10px] font-medium leading-[14px] text-left">
            {benefit.text}
          </p>
        </div>
      ))}
    </div>
  );
}
