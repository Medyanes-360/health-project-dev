import Link from "next/link";

export default function DepartmentCard({ data, className }) {
  return (
    <Link className={`${className} `} href={"/"}>
      <div className="group border-2 hover:shadow-[0_12px_40px_0px_#71CCB626] hover:border-primary hover:border-opacity-50  transition-all duration-200 cursor-pointer rounded-lg flex justify-start  items-center p-3">
        <div className="flex overflow-hidden w-full  flex-col  ml-2">
          <p
            title={data}
            className={`text-lg  truncate  mb-1   group-hover:transition-transform group-hover:duration-[5000ms]   group-hover:text-primary group-hover:underline `}
          >
            {data}
          </p>
          <span className="text-gray-400 text-sm">
            See popular clinics {">>"}
          </span>
        </div>
      </div>
    </Link>
  );
}
