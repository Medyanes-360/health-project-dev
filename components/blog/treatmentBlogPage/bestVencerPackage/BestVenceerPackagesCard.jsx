import BeforeAfterPhotoSlider from "@/globalElements/beforeAfterPhotoSlider";
import Image from "next/image";

const BestVenceerPackagesCard = ({ data }) => {
  const { img, clinicName, location, description, rate, price } = data;
  return (
    <div className="w-full h-full">
      <div className="flex flex-col md:flex-row sm:justify-between gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:flex-1 w-full">
          <div className="rounded-2xl overflow-hidden flex  h-80 md:h-full relative   w-full ">
            <Image
              src={"/assets/images/mock-clinic-image1.png"}
              alt="img"
              fill
              style={{
                objectFit: "cover",
              }}
              className="h-full w-full"
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

        <div className="space-y-4 w-full md:w-[40%] py-3">
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
