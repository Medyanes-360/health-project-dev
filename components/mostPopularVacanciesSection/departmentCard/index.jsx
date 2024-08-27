import Link from "next/link";

export default function DepartmentCard(props) {
  const data = props.data;
  return (
    <Link href={data.url}>
      <div className="group border-2 hover:shadow-[0_12px_40px_0px_#71CCB626] hover:border-primary  transition-all duration-200 cursor-pointer rounded-lg flex justify-start  items-center p-2 ">
        <div className="flex   flex-col  ml-2">
          <p className="text-lg group-hover:text-primary group-hover:underline   ">
            {data.title}
          </p>
          <span className="text-gray-500 text-sm  transition-all duration-200">
            {data.quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            Patients searched
          </span>
        </div>
      </div>
    </Link>
  );
}
