import Image from "next/image";

export default function FeatureCard(props) {
  const data = props.data;
  return (
    <div className="group hover:shadow-xl transition-all duration-200 cursor-pointer rounded-lg flex justify-start  items-center p-2 ">
      <div className="w-20   h-20 rounded-md  group-hover:shadow-none  transition-all duration-200 shadow-xl flex items-center justify-center group-hover:bg-primary ">
        <Image
          className="group-hover:bg-red-500  "
          style={{
            filter:
              " invert(100%) sepia(0%) saturate(7473%) hue-rotate(110deg) brightness(105%) contrast(109%)",
          }}
          src={`/assets/icons/${data.img}`}
          alt=""
          width={72}
          height={72}
        />
      </div>
      <div className="flex   flex-col  ml-2">
        <p className="text-2xl ">
          {data.quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <span className="text-primary  transition-all duration-200">
          {data.title}
        </span>
      </div>
    </div>
  );
}
