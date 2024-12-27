import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";
import React from "react";

const LocationMaker = () => {
  const districts = ["Esenyurt", "Avcilar", "Buyukcekmece","Istanbul","Istanbul Province"];

  return (
    <div className=" flex flex-col gap-[1rem] justify-between w-auto bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)] p-[1rem]">
      {" "}
      <span>location marker</span>{" "}
      <Image
        src="/assets/images/locationMaker.png"
        height={300}
        width={300}
        className="w-[100%] h-[70%]"
      />
      <ButtonComponent
        type="submit"
        className="bg-primary !py-2 !px-4 text-white !rounded-lg w-full "
      >
        <p className="text-sm">Reset marker location</p>
      </ButtonComponent>
      <div className="text-[#FF000F]" >
        <h1>Your clinic will appear in searches for:</h1>
        <ul  >
          {districts.map((district, index) => (
            <li key={index}  >{district}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationMaker;
