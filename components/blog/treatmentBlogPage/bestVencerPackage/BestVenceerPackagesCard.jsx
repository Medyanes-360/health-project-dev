import BeforeAfterPhotoSlider from "@/globalElements/beforeAfterPhotoSlider";
import Image from "next/image";

const BestVenceerPackagesCard = ({ data }) => {
  const { img, clinicName, location, description, rate, price } = data;
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row sm:justify-between gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:flex-1 w-full">
          <div className="aspect-[12/8] rounded-2xl overflow-hidden w-full relative max-w-[400px]">
            <BeforeAfterPhotoSlider
              width={"400px"}
              beforeImageSrc="/assets/images/clinic1.png"
              afterImageSrc="/assets/images/clinic2.png"
            />
          </div>
          <div className="w-full space-y-3 py-3">
            <div className="space-y-1">
              <h1 className="font-bold">{clinicName}</h1>
              <div className="flex items-center gap-1">
                <Image
                  src={"/assets/images/location.png"}
                  alt="img"
                  width={20}
                  height={20}
                />
                <p className="text-primary"> {location}</p>
              </div>
            </div>

            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:w-[40%] w-full  py-3">
          <div className="flex items-center justify-center gap-1">
            <div className="flex items-center ">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-[#FFAA00] text-4xl ">
                  ★
                </span>
              ))}
            </div>

            <p className="text-xl">{rate}</p>
          </div>
          <div className="flex flex-col justify-center gap-1 w-full text-center">
            <p>
              {" "}
              <span className="text-red-500 font-bold text-3xl">${price}</span>
            </p>
            <p>pre package</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestVenceerPackagesCard;
