import Image from "next/image";

export default function TableRow({ score, icon, classname, title, scoreText }) {
  return (
    <div
      className={`${classname}  bg-primary-light flex items-center text-[#031F05] justify-between py-2.5 px-3 cursor-pointer`}
    >
      <div className="flex items-center">
        {/* Star icon */}
        <div>{icon}</div>

        <div className="flex pl-2.5 flex-col">
          <span className="text-sm">{title}</span>
          <span className="text-xs">{scoreText}</span>
        </div>
      </div>
      <div className="flex items-center">
        <Image src="/assets/icons/star.svg" alt="" width={16} height={16} />
        <span>{score}/5</span>
      </div>
    </div>
  );
}
