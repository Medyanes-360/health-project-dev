import Image from "next/image";

export default function PanelTwo({ data }) {
  const { title, text } = data;
  return (
    <div className="flex items-center gap-4">
      <div>
        {" "}
        <Image src="/assets/icons/like.svg" alt="" width={40} height={40} />
      </div>
      <div>
        <span className="font-poppins text-[12px] font-bold leading-[32px] text-left decoration-none decoration-skip-[ink]">
          {" "}
          {title}{" "}
        </span>
        <p className="font-poppins text-[12px]  leading-[32px] text-left decoration-none decoration-skip-[ink]">
          {" "}
          {text}{" "}
        </p>
      </div>
    </div>
  );
}
